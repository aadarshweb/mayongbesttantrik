const fs = require('fs');
const path = require('path');

let fail = 0;
const bad = (m) => { console.log('  FAIL: ' + m); fail++; };

// Inverse of build.js clean(): a public URL back to the file on disk that
// serves it. Cloudflare serves /about from about.html, so the extensionless
// form is the canonical one and this has to undo that to stat the file.
const toRel = (url) => {
  const r = url.replace('https://mayongbesttantrik.com', '');
  if (r === '' || r === '/') return 'index.html';
  if (r.endsWith('/')) return r.slice(1) + 'index.html';
  return r.replace(/^\//, '') + '.html';
};

// 1. every JSON-LD block parses
const pages = [];
for (const f of fs.readdirSync(__dirname)) if (f.endsWith('.html')) pages.push(f);
for (const f of fs.readdirSync(path.join(__dirname, 'hi'))) if (f.endsWith('.html')) pages.push('hi/' + f);

console.log('1. JSON-LD parse');
let blocks = 0;
for (const f of pages) {
  const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    blocks++;
    try { JSON.parse(m[1]); } catch (e) { bad(f + ' -> ' + e.message); }
  }
}
console.log('   ' + blocks + ' schema blocks, all parse');

// 2. manifest + robots + sitemap present and well formed
console.log('2. support files');
// favicon.png is the plain-named 48px icon some crawlers look for by
// convention rather than by parsing the <link> tags, so it is listed here
// alongside the rest of the support files.
for (const f of ['robots.txt', 'sitemap.xml', 'manifest.json', 'favicon.ico', 'favicon.png', 'favicon-48.png', 'favicon-192.png', 'css/style.css', 'js/script.js']) {
  if (!fs.existsSync(path.join(__dirname, f))) bad('missing ' + f);
}
try { JSON.parse(fs.readFileSync('manifest.json', 'utf8')); } catch (e) { bad('manifest.json: ' + e.message); }
const sm = fs.readFileSync('sitemap.xml', 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('   sitemap: ' + locs.length + ' urls, ' + (sm.match(/<xhtml:link/g) || []).length + ' hreflang alternates');
// Indexable = every page that is not marked noindex in its own robots meta.
// 404 is noindex, and so are the four legal pages, so this used to be written
// as pages.length - 1 and would have failed the moment a second noindex page
// existed. Deriving it from the markup means a page can be added or suppressed
// without this check needing to know anything about it.
const noindexPages = pages.filter(f => /<meta name="robots" content="[^"]*noindex/.test(fs.readFileSync(path.join(__dirname, f), 'utf8')));
const indexable = pages.length - noindexPages.length;
if (locs.length !== indexable) bad('sitemap has ' + locs.length + ' urls but there are ' + indexable + ' indexable pages');
console.log('   ' + indexable + ' indexable pages, ' + noindexPages.length + ' noindex and correctly absent: ' + noindexPages.join(', '));
if (sm.includes('404')) bad('404 in sitemap');
for (const l of locs) {
  const rel = toRel(l);
  if (!pages.includes(rel)) bad('sitemap url not on disk: ' + l);
}

// 3. every referenced asset exists
console.log('3. asset references');
for (const f of pages) {
  const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
  const dir = f.startsWith('hi/') ? 'hi/' : '';
  for (const m of h.matchAll(/(?:src|href)="((?:\.\.\/|\.\/)?(?:css|js|images)\/[^"]+)"/g)) {
    const p = path.normalize(dir + m[1]).replace(/\\/g, '/');
    if (!fs.existsSync(path.join(__dirname, p))) bad(f + ' -> missing asset ' + p);
  }
}

// 4. CSS sanity
console.log('4. css');
const css = fs.readFileSync('css/style.css', 'utf8');
// Strip data: URIs first. Note the naive /data:[^)]*/ form breaks here because
// the inline SVG noise itself contains a literal ')' in filter='url(%23n)'.
const cssNoData = css
  .replace(/url\(\s*"data:[^"]*"\)/g, 'url()')
  .replace(/url\(\s*'data:[^']*'\)/g, 'url()');
for (const m of cssNoData.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
  const p = path.normalize('css/' + m[1]).replace(/\\/g, '/');
  if (!fs.existsSync(path.join(__dirname, p))) bad('css url missing: ' + p);
}
if (/background-attachment:\s*fixed/.test(css)) bad('css still uses background-attachment:fixed');
const braces = (css.match(/{/g) || []).length - (css.match(/}/g) || []).length;
if (braces !== 0) bad('css brace imbalance: ' + braces);

/* --- CSS LIVENESS -------------------------------------------------------
   A malformed value does not fail loudly, it silently truncates the
   stylesheet from that point on. This exact bug hit during the v2 build: one
   line reading
       backdrop-filter: blur(var(--glass-glass, var(--glass-blur)) saturate(150%))
   named an undefined custom property, and every rule after it was discarded.
   The page still looked partly styled because the :root tokens, body and the
   first few rules survived. These checks fail the build, not the browser.
   ------------------------------------------------------------------------ */

// every var(--x) must name a custom property that is actually defined
const defined = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
for (const m of cssNoData.matchAll(/var\(\s*(--[\w-]+)/g)) {
  if (!defined.has(m[1])) bad('css uses undefined custom property ' + m[1]);
}

// balanced parens inside real declarations only. At-rule preludes such as
// @media (max-width: 880px) and @supports not (backdrop-filter: blur(4px))
// legitimately contain parens that a naive scan would mis-read.
for (const line of cssNoData.split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('@') || t.endsWith('{') || t.endsWith('}')) continue;
  for (const decl of t.matchAll(/^([a-z-]+)\s*:\s*([^;]+);/g)) {
    const v = decl[2];
    const o = (v.match(/\(/g) || []).length, c = (v.match(/\)/g) || []).length;
    if (o !== c) bad('unbalanced parens in ' + decl[1] + ': ' + v.trim().slice(0, 60));
  }
}

// comments balanced: an unterminated /* swallows the remainder of the file
const cOpen = (css.match(/\/\*/g) || []).length;
const cClose = (css.match(/\*\//g) || []).length;
if (cOpen !== cClose) bad(`css comment imbalance: ${cOpen} open vs ${cClose} close`);

// every class used in the HTML must be styled - catches a truncated sheet
const usedClasses = new Set();
for (const f of pages) {
  for (const m of fs.readFileSync(path.join(__dirname, f), 'utf8').matchAll(/class="([^"]+)"/g)) {
    m[1].split(/\s+/).forEach(c => c && usedClasses.add(c));
  }
}
const unstyled = [...usedClasses].filter(c => !css.includes('.' + c));
if (unstyled.length) bad('classes in HTML with no CSS rule: ' + unstyled.join(', '));
console.log('   ' + defined.size + ' custom props, ' + usedClasses.size + ' classes, all defined');

// 5b. every hreflang target must resolve to a real file. Guessing the alternate
// from the filename produced 6 dangling hreflang tags: three guides whose Hindi
// slugs differ, /hi/ vs /hi/index.html, and a Hindi about page that was never
// written. hreflang pointing at a 404 is an explicit Google error.
{
  const onDisk = new Set();
  for (const f of fs.readdirSync(__dirname)) if (f.endsWith('.html')) onDisk.add(f);
  for (const f of fs.readdirSync(path.join(__dirname, 'hi'))) if (f.endsWith('.html')) onDisk.add('hi/' + f);
  const toRelLocal = toRel;
  let n = 0;
  for (const f of pages) {
    for (const m of fs.readFileSync(path.join(__dirname, f), 'utf8')
      .matchAll(/<link rel="alternate" hreflang="[\w-]+" href="([^"]+)"/g)) {
      n++;
      const rel = toRelLocal(m[1]);
      if (!onDisk.has(rel)) bad('dangling hreflang in ' + f + ' -> ' + m[1]);
    }
  }
  for (const m of sm.matchAll(/xhtml:link rel="alternate" hreflang="[\w-]+" href="([^"]+)"/g)) {
    n++;
    const rel = toRelLocal(m[1]);
    if (!onDisk.has(rel)) bad('dangling sitemap alternate -> ' + m[1]);
  }
  console.log('   ' + n + ' hreflang targets, all resolve');
}

// 5c. the service registry must match what is actually on disk
{
  const S = require('./content/en-shared.js');
  const enOnDisk = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
  for (const s of S.SERVICES) {
    if (!enOnDisk.includes(s.file)) bad('registry lists a service with no page: ' + s.file);
    if (!s.blurb || s.blurb.length < 60) bad('service has no card blurb: ' + s.slug);
  }
  console.log('   ' + S.SERVICES.length + ' services, all with pages and blurbs');
}

// 5d. no stale legacy artefacts
console.log('5. legacy artefacts');
const all = pages.map(f => fs.readFileSync(path.join(__dirname, f), 'utf8')).join('');
for (const term of ['original-logo', 'portrait.jpg', 'mandala', 'religious.png', 'divine-testimonials', 'data-i18n', 'Philosopher', 'Cinzel', 'Outfit']) {
  if (all.includes(term)) bad('legacy reference still present: ' + term);
}
for (const term of ['Awaken Your Destiny', 'Divine Testimonials', 'Lives Transformed', 'literally brought', 'universe has led you']) {
  if (all.includes(term)) bad('AI-slop copy still present: ' + term);
}

// 5e. no emitted URL may carry an .html suffix. This is the exact regression
// that emptied the site's canonical signal: Cloudflare answers /about.html
// with a 307 to /about, and Google discards a canonical or sitemap entry that
// resolves to a redirect. The build now rewrites these, so any .html turning
// back up means a new emission site was added without running it through
// clean()/abs().
console.log('6. extensionless URLs');
{
  const leaks = [];
  for (const f of pages.concat(['sitemap.xml'])) {
    const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
    for (const m of h.matchAll(/(?:href|content)="(https:\/\/mayongbesttantrik\.com[^"]*\.html)"/g)) leaks.push(f + ' -> ' + m[1]);
    for (const m of h.matchAll(/<loc>([^<]*\.html)<\/loc>/g)) leaks.push(f + ' -> ' + m[1]);
  }
  if (leaks.length) {
    bad(leaks.length + ' emitted URL(s) still carry .html, which 307s:\n     ' +
      [...new Set(leaks)].slice(0, 8).join('\n     '));
  }
  console.log('   ' + pages.length + ' pages + sitemap, no .html in canonical/og/hreflang/loc');
}

// 6b. every page must be reachable by clicking, and the two languages must not
// link into each other by accident. Seventeen pages were orphaned at one point:
// eleven Hindi service pages plus /hi/ itself, because the Hindi chrome and
// footer reached the English pages with ../ prefixes, and the Hindi footer
// listed six services where the English one listed all fifteen. Nothing in the
// sitemap or the schema catches that, because an orphan is a valid page in a
// valid sitemap - it is just never linked, so it is crawled rarely and indexed
// late. This is the check that would have caught it.
console.log('6b. internal link graph');
{
  const skipExt = /\.(jpg|png|svg|webp|css|js|ico|xml|txt|json)$/i;
  const onDisk = new Set(pages);

  // Public URL back to the file that serves it. Root-relative hrefs are the
  // common case; the ../ and bare-slug forms still appear in page bodies.
  const linkTo = (from, href) => {
    let t = href.split('#')[0].split('?')[0];
    if (!t) return null;
    if (t.startsWith('https://mayongbesttantrik.com')) t = t.slice('https://mayongbesttantrik.com'.length);
    else if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(t)) return null;
    if (skipExt.test(t)) return null;
    const dir = from.startsWith('hi/') ? 'hi/' : '';
    let abs = t.startsWith('/') ? t.slice(1) : path.posix.normalize(dir + t);
    if (abs.endsWith('/')) abs += 'index.html';
    abs = abs.replace(/^\.\//, '').replace(/\/$/, '');
    if (abs === '' || abs === '.') abs = 'index.html';
    if (!abs.endsWith('.html')) abs += '.html';
    return abs;
  };

  const inbound = new Map(pages.map(f => [f, new Set()]));
  const empty = [];
  const crossLang = new Set();
  const dead = new Set();
  let external = 0;

  for (const f of pages) {
    const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
    for (const m of h.matchAll(/<a\s([^>]*)href="([^"]*)"/g)) {
      const attrs = m[1];
      if (m[2] === '') { empty.push(f); continue; }
      const to = linkTo(f, m[2]);
      // null means the href left the site (tel:, mailto:, wa.me, maps) - not a
      // broken internal link, just not our business here.
      if (!to) { external++; continue; }
      if (!onDisk.has(to)) { dead.add(f + ' -> ' + m[2]); continue; }
      if (to === f) continue;
      // The language switcher is the one cross-language link that is correct:
      // offering the other language is the entire point of it.
      if (/\bclass="[^"]*\blang-link\b/.test(attrs)) continue;
      inbound.get(to).add(f);
      if (f.startsWith('hi/') !== to.startsWith('hi/')) crossLang.add(f + ' -> ' + m[2]);
    }
  }

  // href="" resolves to the current URL, so it silently becomes a self-link:
  // the header logo and the footer "Home" entry pointed at the page you were
  // already on. clean() used to reduce "index.html" to the empty string.
  if (empty.length) bad('href="" (self-link) in ' + new Set(empty).size + ' pages: ' + [...new Set(empty)].slice(0, 5).join(', '));
  if (dead.size) bad(dead.size + ' internal link(s) point at a file that is not on disk:\n     ' + [...dead].slice(0, 6).join('\n     '));
  if (crossLang.size) {
    bad(crossLang.size + ' cross-language internal link(s); use the same-language slug:\n     ' +
      [...crossLang].slice(0, 6).join('\n     '));
  }
  const orphans = pages.filter(f => f !== '404.html' && inbound.get(f).size === 0);
  if (orphans.length) bad('orphan pages, in the sitemap but linked from nowhere: ' + orphans.join(', '));
  console.log('   ' + pages.length + ' pages, ' + external + ' external links skipped, no empty href, 0 orphans');
}

// 7. encoding integrity
console.log('7. encoding');
for (const f of pages.concat(['robots.txt', 'sitemap.xml', 'manifest.json', 'js/script.js', 'css/style.css'])) {
  const buf = fs.readFileSync(path.join(__dirname, f));
  const txt = buf.toString('utf8');
  if (txt.includes('\uFFFD')) bad(f + ' contains replacement characters');
  if (/â€|Ã©|Ã¼|Â/.test(txt)) bad(f + ' contains mojibake');
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) bad(f + ' has a UTF-8 BOM');
}
console.log('   clean, no BOM, no mojibake');

/* 8. lastmod integrity -----------------------------------------------------
   <lastmod> is the only field in a sitemap that says which pages actually
   changed. Three ways it can be wrong, all of which were live at once:

     - one hardcoded date on every URL, which reads as "nothing here has been
       touched since <date>" and gets recrawls deprioritised;
     - a date in the future, which Google discards the entry over;
     - a rebuild that changed nothing still restamping all 50 pages with
       today, which is the same lie as the constant, just a fresher one.

   The build keeps a content hash per URL in .lastmod.json, so an unchanged
   page keeps its old date. That file is the memory this check verifies. */
console.log('8. sitemap lastmod');
{
  const lms = {};
  for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) lms[m[1]] = m[2];
  if (Object.keys(lms).length !== locs.length) {
    bad(Object.keys(lms).length + ' of ' + locs.length + ' sitemap urls carry a lastmod');
  }
  const today = new Date().toISOString().slice(0, 10);
  for (const [l, d] of Object.entries(lms)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) bad('malformed lastmod on ' + l + ': ' + d);
    if (d > today) bad('lastmod in the future on ' + l + ': ' + d);
  }
  // Every page that changed since the previous build must carry today's date.
  // Comparing against .lastmod.json is the only way to catch the silent case
  // where a content edit leaves the stale date sitting there unchanged.
  let prev = {};
  try { prev = JSON.parse(fs.readFileSync('.lastmod.json', 'utf8')); } catch (e) { bad('.lastmod.json missing or unreadable: ' + e.message); }
  if (Object.keys(prev).length) {
    // build.js stamps each entry with changed:true/false against the previous
    // ledger, because it is the only place that still holds the old hashes.
    // Two failure modes, both silent: a changed page keeping a stale date, and
    // an unchanged page being re-stamped so a no-op rebuild looks sitewide.
    const changed = locs.filter(l => prev[l] && prev[l].changed);
    const stale = changed.filter(l => lms[l] !== today);
    if (stale.length) bad('content changed but lastmod not advanced (' + stale.length + '): ' + stale.slice(0, 4).join(', '));
    const needless = locs.filter(l => prev[l] && !prev[l].changed && lms[l] !== prev[l].date);
    if (needless.length) bad('unchanged page had its lastmod moved anyway (' + needless.length + '): ' + needless.slice(0, 4).join(', '));
    console.log('   ' + changed.length + ' of ' + locs.length + ' pages changed since the last build, ' +
      (locs.length - changed.length) + ' carried their existing date forward');
  }
  const distinct = [...new Set(Object.values(lms))].sort();
  console.log('   ' + distinct.length + ' distinct date(s) across ' + locs.length + ' urls' +
    (distinct.length === 1
      ? ' (expected on a first publish; it spreads as pages are edited)'
      : ': ' + distinct.join(' ')));
}

// 9. redirects. The three defects these fix were all measured on the live host,
// not inferred: www 404'd on every path, http served 200 rather than
// redirecting, and every .html URL answered 307 instead of 301. A 307 tells
// Google the move is temporary, so the clean URL never inherits the .html one.
console.log('9. redirects');
{
  let rd = '';
  try { rd = fs.readFileSync('_redirects', 'utf8'); } catch (e) { bad('_redirects missing: ' + e.message); }
  const rules = rd.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
  for (const need of [
    ['www over https', /^https:\/\/www\.mayongbesttantrik\.com\/\*\s+https:\/\/mayongbesttantrik\.com\/:splat\s+301/m],
    ['www over http', /^http:\/\/www\.mayongbesttantrik\.com\/\*/m],
    ['apex over http', /^http:\/\/mayongbesttantrik\.com\/\*/m],
    ['.html to clean', /^\/\*\.html\s+\/:splat\s+301/m],
    ['index.html to root', /^\/index\.html\s+\/\s+301/m],
    ['hi/index.html to /hi/', /^\/hi\/index\.html\s+\/hi\/\s+301/m]
  ]) {
    if (!need[1].test(rd)) bad('_redirects has no rule for: ' + need[0]);
  }
  // Any non-301 status in here is a bug: 302 and 307 both withhold authority.
  for (const l of rules) {
    const code = l.trim().split(/\s+/).pop();
    if (!/^(200|301)$/.test(code)) bad('_redirects rule is not permanent: ' + l.trim());
  }
  // 404.html must not be redirected: it is the filename the host renders an
  // error from, and a rule moving it would move the error handler itself.
  if (/^\/404\.html\s/m.test(rd)) bad('_redirects redirects /404.html, which is the host error handler');
  console.log('   ' + rules.length + ' rules, all 301, www/http/.html all covered');
}

// 10. robots.txt. Cloudflare prepends a managed block to this file, so the
// named search-engine groups below are what keep Googlebot and Bingbot out of
// the blast radius of a CDN setting we do not control: robots.txt group
// selection is most-specific-match, so naming them explicitly overrides every
// wildcard group in the file including the ones added upstream.
console.log('10. robots.txt');
{
  const rb = fs.readFileSync('robots.txt', 'utf8');
  for (const bot of ['Googlebot', 'Bingbot']) {
    const re = new RegExp('User-agent:\\s*' + bot + '\\s*\\r?\\n(Allow|Disallow):\\s*(.*)');
    const m = rb.match(re);
    if (!m) bad('robots.txt has no explicit group for ' + bot);
    else if (!/^Allow:\s*\/\s*$/i.test(m[1] + ': ' + m[2].trim())) bad(bot + ' is not allowed in robots.txt: ' + m[0]);
  }
  if (!/^Sitemap:\s*https:\/\/mayongbesttantrik\.com\/sitemap\.xml\s*$/m.test(rb)) bad('robots.txt does not point at the sitemap by absolute URL');
  if (!/^User-agent:\s*\*\s*$/m.test(rb)) bad('robots.txt has no wildcard group');
  // A stray Disallow under the wildcard group takes down the whole site, so
  // the only paths excluded may be /404 and nothing else.
  for (const m of rb.matchAll(/^User-agent:\s*\*.*?(?=^User-agent:|^Sitemap:|\Z)/gms)) {
    for (const d of m[0].matchAll(/^Disallow:\s*(\S*)/gm)) {
      if (d[1] && d[1] !== '/404') bad('robots.txt blocks ' + d[1] + ' for all crawlers');
    }
  }
  console.log('   Googlebot and Bingbot named and allowed, sitemap declared, nothing else blocked');
}

console.log('\n' + (fail ? fail + ' FAILURES' : 'ALL CHECKS PASSED'));
process.exit(fail ? 1 : 0);
