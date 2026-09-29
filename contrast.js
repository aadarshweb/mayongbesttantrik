/* contrast.js - WCAG contrast audit against the real CSS custom properties.
   Run: node contrast.js */
const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const vars = {};
for (const m of css.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g)) vars[m[1]] = m[2];

const hex = (h) => {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
};
const lum = (rgb) => {
  const c = rgb.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const l1 = lum(hex(a)), l2 = lum(hex(b));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
const grade = (r) => r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA-large-only' : 'FAIL';

const surfaces = {
  'bg-000': vars['--bg-000'], 'bg-100': vars['--bg-100'],
  'bg-200': vars['--bg-200'], 'bg-300': vars['--bg-300'], 'bg-400': vars['--bg-400']
};
const texts = {
  'paper (headings)': vars['--paper'],
  'paper-2 (body)': vars['--paper-2'],
  'muted (meta)': vars['--muted'],
  'brass-300 (eyebrow)': vars['--brass-300'],
  'brass-400 (link)': vars['--brass-400'],
  'brass-500 (label)': vars['--brass-500'],
  'verdigris (tag)': vars['--verdigris']
};

const w = (s, n) => String(s).padEnd(n);
console.log('WCAG 2.x contrast\n  AA normal >= 4.5   AA large >= 3.0   AAA normal >= 7.0\n');
console.log(w('TEXT', 22) + Object.keys(surfaces).map(s => w(s, 9)).join(''));

let fails = 0, warn = 0;
for (const [tn, tc] of Object.entries(texts)) {
  let row = w(tn, 22);
  for (const sc of Object.values(surfaces)) {
    const r = ratio(tc, sc);
    if (r < 4.5) fails++;
    if (r < 7 && r >= 4.5) warn++;
    row += w(r.toFixed(2) + ' ' + grade(r).slice(0, 5), 9);
  }
  console.log(row);
}

console.log('\ncomponent pairs');
const pairs = [
  ['primary button text on brass-500', vars['--ink-900'] || '#100a02', vars['--brass-500']],
  ['ghost button text on glass over bg-800', vars['--brass-300'], vars['--bg-300']],
  ['faq "+" icon on its chip', vars['--brass-300'], vars['--bg-300']],
  ['row__num brass on its 12% chip', vars['--brass-300'], vars['--bg-300']],
  ['verdigris tag on glass card', vars['--verdigris'], vars['--bg-300']],
  ['quote byline on glass card', vars['--muted'], vars['--bg-300']],
  ['footer address on bg-000', vars['--muted'], vars['--bg-000']]
];
for (const [label, fg, bg] of pairs) {
  if (!fg || !bg) continue;
  const r = ratio(fg, bg);
  if (r < 4.5) fails++;
  console.log('  ' + w(label, 38) + r.toFixed(2).padStart(6) + '  ' + grade(r));
}

console.log('\n' + (fails ? fails + ' PAIR(S) BELOW AA 4.5:1 — must be fixed' : 'ALL TEXT PAIRS PASS AA') +
            '  (' + warn + ' sit between AA and AAA)');
process.exit(fails ? 1 : 0);
