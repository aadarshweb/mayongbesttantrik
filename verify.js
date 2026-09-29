const fs = require('fs');
const path = require('path');

let fail = 0;
const bad = (m) => { console.log('  FAIL: ' + m); fail++; };

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
for (const f of ['robots.txt', 'sitemap.xml', 'manifest.json', 'favicon.ico', 'favicon-48.png', 'favicon-192.png', 'css/style.css', 'js/script.js']) {
  if (!fs.existsSync(path.join(__dirname, f))) bad('missing ' + f);
}
try { JSON.parse(fs.readFileSync('manifest.json', 'utf8')); } catch (e) { bad('manifest.json: ' + e.message); }
const sm = fs.readFileSync('sitemap.xml', 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('   sitemap: ' + locs.length + ' urls, ' + (sm.match(/<xhtml:link/g) || []).length + ' hreflang alternates');
if (locs.length !== pages.length - 1) bad('sitemap has ' + locs.length + ' urls but there are ' + (pages.length - 1) + ' indexable pages');
if (sm.includes('404')) bad('404 in sitemap');
for (const l of locs) {
  const rel = l.replace('https://mayongbesttantrik.com', '').replace(/^\//, '') || 'index.html';
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
  const toRel = (url) => {
    const r = url.replace('https://mayongbesttantrik.com', '').replace(/^\//, '');
    return r === '' ? 'index.html' : r;
  };
  let n = 0;
  for (const f of pages) {
    for (const m of fs.readFileSync(path.join(__dirname, f), 'utf8')
      .matchAll(/<link rel="alternate" hreflang="[\w-]+" href="([^"]+)"/g)) {
      n++;
      const rel = toRel(m[1]);
      if (!onDisk.has(rel)) bad('dangling hreflang in ' + f + ' -> ' + m[1]);
    }
  }
  for (const m of sm.matchAll(/xhtml:link rel="alternate" hreflang="[\w-]+" href="([^"]+)"/g)) {
    n++;
    const rel = toRel(m[1]);
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

// 6. encoding integrity
console.log('6. encoding');
for (const f of pages.concat(['robots.txt', 'sitemap.xml', 'manifest.json', 'js/script.js', 'css/style.css'])) {
  const buf = fs.readFileSync(path.join(__dirname, f));
  const txt = buf.toString('utf8');
  if (txt.includes('\uFFFD')) bad(f + ' contains replacement characters');
  if (/â€|Ã©|Ã¼|Â/.test(txt)) bad(f + ' contains mojibake');
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) bad(f + ' has a UTF-8 BOM');
}
console.log('   clean, no BOM, no mojibake');

console.log('\n' + (fail ? fail + ' FAILURES' : 'ALL CHECKS PASSED'));
process.exit(fail ? 1 : 0);
