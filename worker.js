/**
 * mayongbesttantrik.com - request normalisation.
 *
 * Two jobs, both of which `_redirects` cannot do because Workers supports only
 * relative-URL redirects there and rejects an absolute source outright:
 *
 *   1. www.mayongbesttantrik.com and http:// must 301 to the apex over https.
 *      Before this existed, www returned 404 on every path including the
 *      homepage - a Cloudflare preview deployment holding the name - while
 *      http:// served 200. Search Console had indexed the 404 www homepage,
 *      which is the URL in its "Indexed, though blocked by robots.txt" report,
 *      even though every canonical tag on the site points at the apex.
 *
 *   2. Nothing outside the published site is reachable. The asset directory is
 *      the repository root, so /.assetsignore is what keeps /.git/config and
 *      /build.js off the internet; this is the second lock on the same door,
 *      for anything that gets uploaded by accident or by a future deploy
 *      without the ignore file.
 *
 * Worker invocations are billable, so run_worker_first is deliberately NOT
 * enabled: with assets served first this script does not run on a page view.
 *
 * Worth being precise about when it does run, because it decides whether the
 * blocked-path list is the first line of defence or the only one. With a
 * compatibility date past 2025-04-01 and not_found_handling set, Workers
 * applies assets_navigation_prefers_asset_serving: a browser navigation that
 * matched no asset is answered from 404.html without invoking this script.
 * So a visitor typing /.git/config gets the branded 404 page, and this list is
 * what catches the non-navigation requests - crawlers, curl, anything not
 * sending Sec-Fetch-Mode: navigate. That is sufficient either way, because
 * .assetsignore is what stops the file being uploaded in the first place; this
 * is the second lock, not the first.
 */

const CANONICAL_HOST = 'mayongbesttantrik.com';

/* Path prefixes that must never be served, whatever the asset manifest says.
   Leading dot covers .git, .well-known and every other dotfile; the rest are
   the build inputs that sit in the repository root. */
const BLOCKED = [
  '/.git',
  '/.well-known',
  '/.assetsignore',
  '/.lastmod.json',
  '/.gitignore',
  '/.wrangler',
  '/wrangler.jsonc',
  '/build.js',
  '/verify.js',
  '/audit.js',
  '/contrast.js',
  '/content',
  '/kilo',
  '/issues',
  '/node_modules'
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // --- 1. host and scheme -------------------------------------------------
    // Built from the parsed URL rather than a template string so the path,
    // query and fragment survive the hop. A 302 or a drop of the query string
    // here would lose more than it fixes.
    if (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:') {
      const target = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`);
      return Response.redirect(target.toString(), 301);
    }

    // --- 2. nothing but the published site ----------------------------------
    // Checked as whole path segments, so /content and /content/ are both
    // refused and /contents is not caught by accident. Without this the
    // .assetsignore file is the only thing standing between the repository and
    // the public internet.
    const segments = url.pathname.toLowerCase().split('/').filter(Boolean);
    for (const prefix of BLOCKED) {
      const blocked = prefix.split('/').filter(Boolean);
      const hit = blocked.every((seg, i) => segments[i] === seg);
      if (hit) {
        return new Response('Not found', {
          status: 404,
          headers: { 'content-type': 'text/plain; charset=utf-8' }
        });
      }
    }

    // Everything else: hand back to static asset serving.
    return env.ASSETS.fetch(request);
  }
};
