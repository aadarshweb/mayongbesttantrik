/* audit.js - technical SEO + content audit. Run: node audit.js */
const fs = require('fs');
const path = require('path');

const files = [];
for (const f of fs.readdirSync(__dirname)) if (f.endsWith('.html')) files.push(f);
for (const f of fs.readdirSync(path.join(__dirname, 'hi'))) if (f.endsWith('.html')) files.push('hi/' + f);
files.sort();

const onDisk = new Set();
for (const f of fs.readdirSync(__dirname)) if (f.endsWith('.html')) onDisk.add(f);
for (const f of fs.readdirSync(path.join(__dirname, 'hi'))) if (f.endsWith('.html')) onDisk.add('hi/' + f);

let problems = 0;
const rows = [];

for (const f of files) {
  const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
  const hi = f.startsWith('hi/');
  const dir = path.dirname(f) === '.' ? '' : path.dirname(f) + '/';
  const p = [];
  const add = (m) => { p.push(m); problems++; };

  const title = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const desc = (h.match(/<meta name="description" content="([\s\S]*?)"/) || [])[1] || '';
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  const kw = (h.match(/<meta name="keywords" content="([\s\S]*?)"/) || [])[1] || '';
  const robots = (h.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '';
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...h.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const types = [...h.matchAll(/"@type":\s*"(\w+)"/g)].map(m => m[1]);
  const imgs = [...h.matchAll(/<img[^>]*>/g)].map(m => m[0]);
  const noAlt = imgs.filter(t => !/alt="/.test(t)).length;
  // an empty alt is correct on purely decorative images, and they must say so
  const badAlt = imgs.filter(t => /alt="\s*"/.test(t) && !/aria-hidden="true"/.test(t)).length;
  const weakAlt = [...h.matchAll(/<img[^>]*alt="([^"]*)"[^>]*>/g)]
    .filter(m => m[1].trim() && m[1].trim().length < 12 && !/aria-hidden/.test(m[0])).length;
  const links = [...h.matchAll(/<a href="([^"]+)"/g)].map(m => m[1]);
  const internal = links.filter(l => /\.html($|#)/.test(l));
  const broken = [...new Set(internal)].filter(l => {
    const clean = l.split('#')[0];
    if (!clean) return false;
    return !onDisk.has(path.normalize(dir + clean).replace(/\\/g, '/'));
  });

  const body = (h.split('<body>')[1] || '')
    .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
  const words = body.split(' ').length;

  const is404 = f === '404.html';

  if (!is404 && title.length < 46) add('title too short');
  if (!is404 && title.length > 62) add(`title ${title.length}ch (over 62)`);
  if (!is404 && desc.length < 120) add(`desc ${desc.length}ch (under 120)`);
  if (!is404 && desc.length > 158) add(`desc ${desc.length}ch (over 158)`);
  if (!hi && desc && /[^\x00-\x7F]/.test(desc)) add('EN desc has non-ASCII');
  if (h1s.length !== 1) add(`${h1s.length} H1 tags`);
  if (noAlt) add(`${noAlt} img without alt`);
  if (badAlt) add(`${badAlt} decorative img missing aria-hidden`);
  if (weakAlt) add(`${weakAlt} img with alt under 12ch`);
  if (broken.length) add('BROKEN: ' + broken.join(' '));
  if (types.filter(t => t === 'LocalBusiness').length !== 1) add('LocalBusiness count != 1');
  if (types.filter(t => t === 'AggregateRating').length > 1) add('multiple AggregateRating');
  if (is404 && robots.indexOf('noindex') === -1) add('404 not noindex');
  if (!is404 && robots.indexOf('index') === -1) add('no index directive');
  if (new Set(internal).size < 8) add('only ' + new Set(internal).size + ' internal page links');
  if (!is404 && new Set(kw.split(',').map(s => s.trim())).size < 6) add('fewer than 6 keywords');
  // hreflang must be reciprocal. Skipped on noindex pages, and deliberately so:
  // build.js emits no hreflang when p.noindex is set, because a language
  // alternate for a page that asks not to be indexed is a contradiction. The
  // four legal pages are English-only for exactly this reason - see
  // content/en-legal.js.
  const noindex = robots.indexOf('noindex') !== -1;
  const hl = [...h.matchAll(/<link rel="alternate" hreflang="([\w-]+)"/g)].map(m => m[1]);
  if (!is404 && !noindex && !hl.includes('en')) add('no hreflang en');
  if (!is404 && !noindex && !hl.includes('hi')) add('no hreflang hi');
  if (!is404 && !noindex && !hl.includes('x-default')) add('no hreflang x-default');

  // mojibake / encoding corruption check
  const bad = h.match(/[\u00C2-\u00E0][\u0080-\u00BF]|â€|Ã[\u0080-\u00BF]/g);
  if (bad) add('possible encoding corruption: ' + [...new Set(bad)].join(' '));

  rows.push({
    f, words, title: title.length, desc: desc.length,
    h1: h1s.length, h2: h2s.length, kw: kw.split(',').length,
    il: new Set(internal).size, schema: types.length, issues: p
  });
}

const w = (s, n) => String(s).padEnd(n);
console.log(w('FILE', 40) + w('WORDS', 7) + w('TTL', 5) + w('DSC', 5) + w('H1', 3) + w('H2', 4) + w('KW', 4) + w('IL', 4) + 'ISSUES');
console.log('-'.repeat(120));
for (const r of rows) {
  console.log(w(r.f, 40) + w(r.words, 7) + w(r.title, 5) + w(r.desc, 5) + w(r.h1, 3) + w(r.h2, 4) + w(r.kw, 4) + w(r.il, 4) + (r.issues.length ? r.issues.join('; ') : 'ok'));
}
console.log('-'.repeat(120));
console.log(files.length + ' pages audited, ' + problems + ' issues');
