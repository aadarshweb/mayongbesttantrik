/* ==========================================================================
   build.js - single source of truth for mayongbesttantrik.com
   Regenerates every English page, every Hindi page, 404, sitemap, robots,
   manifest. Run:  node build.js
   ========================================================================== */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const UI = require('./content/ui.js');
const EN = [].concat(
  require('./content/en.js'),
  require('./content/en-deep.js'),
  require('./content/en-services-a.js'),
  require('./content/en-services-b.js'),
  require('./content/en-guides.js')
);
const HI = [].concat(
  require('./content/hi.js').filter(p => p && p.out),
  require('./content/hi-2.js'),
  require('./content/hi-3.js'),
  require('./content/hi-services.js'),
  require('./content/hi-services-2.js'),
  require('./content/hi-services-3.js'),
  require('./content/hi-4.js')
);

const DOMAIN = 'https://mayongbesttantrik.com';
const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Instrument+Sans:wght@400;500;600;700&display=swap';
const PIN1 = '782411';
const PIN2 = '781010';
const YEAR = 2026;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLd = (o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`;

/* ------------------------------------------------------------------ head */
function head(p) {
  const url = p.canonical === '/' ? `${DOMAIN}/` : `${DOMAIN}${p.canonical}`;
  const hi = p.lang === 'hi';
  const enUrl = hi
    ? (p.pair === '/hi/index.html' ? `${DOMAIN}/` : `${DOMAIN}${p.pair}`)
    : url;
  const hiUrl = hi ? url : (p.pair ? `${DOMAIN}${p.pair}` : '');

  const hreflang = [
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    hiUrl ? `<link rel="alternate" hreflang="hi" href="${hiUrl}" />` : '',
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`
  ].filter(Boolean).join('\n  ');

  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.desc)}">
  <meta name="keywords" content="${esc(p.keywords)}">
  <meta name="author" content="Atul Nath Aghori Tantrik">
  <meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
  <meta name="geo.region" content="IN-AS">
  <meta name="geo.placename" content="Mayong, Morigaon, Assam">
  <meta name="geo.placename" content="Kamakhya Temple, Guwahati, Assam">
  ${p.lang === 'hi' ? '<meta name="google" content="notranslate">' : ''}
  <link rel="canonical" href="${url}" />
  ${p.noindex ? '' : hreflang}

  <meta property="og:type" content="${p.type === 'article' ? 'article' : 'website'}">
  <meta property="og:site_name" content="Atul Nath Aghori Tantrik">
  <meta property="og:locale" content="${hi ? 'hi_IN' : 'en_IN'}">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${DOMAIN}/images/${p.ogImage || 'hero_bg.jpg'}">
  <meta property="og:image:width" content="${p.ogImageW || 1200}">
  <meta property="og:image:height" content="${p.ogImageH || 630}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.desc)}">
  <meta name="twitter:image" content="${DOMAIN}/images/${p.ogImage || 'hero_bg.jpg'}">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="/favicon-192.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#08191d">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="${FONTS}" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="${FONTS}"></noscript>
  <link rel="preload" as="image" href="${p.prefix}images/logo.png">
  ${p.preloadHero ? `<link rel="preload" as="image" href="${p.prefix}images/hero_bg.jpg" fetchpriority="high">` : ''}
  <link rel="stylesheet" href="${p.prefix}css/style.css">
  <script>document.documentElement.className += ' js';</script>`;
}

/* ---------------------------------------------------------------- schemas */
function schemas(p) {
  let out = '';

  out += jsonLd({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${DOMAIN}/#business`,
    name: 'Atul Nath Aghori Tantrik',
    alternateName: ['Best Tantrik in Kamakhya Temple', 'Best Tantrik in Mayong', 'Aghori Tantrik Baba in Assam'],
    description: p.businessDesc,
    telephone: UI.PHONE,
    email: 'atulnath@mayongbesttantrik.com',
    url: p.lang === 'hi' && p.canonical !== '/' ? `${DOMAIN}${p.canonical}` : `${DOMAIN}/`,
    priceRange: 'Rs-Rs',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00', closes: '22:00'
    }],
    foundingDate: '2009',
    image: `${DOMAIN}/images/logo.png`,
    logo: `${DOMAIN}/images/logo.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '387',
      bestRating: '5',
      worstRating: '1'
    },
    address: [
      { '@type': 'PostalAddress', streetAddress: 'Mayong, Morigaon', addressLocality: 'Mayong', addressRegion: 'Assam', postalCode: PIN1, addressCountry: 'IN' },
      { '@type': 'PostalAddress', streetAddress: 'Kamakhya Temple Road, Malakhuwa', addressLocality: 'Guwahati', addressRegion: 'Assam', postalCode: PIN2, addressCountry: 'IN' }
    ],
    areaServed: [
      { '@type': 'City', name: 'Guwahati' },
      { '@type': 'City', name: 'Mayong' },
      { '@type': 'City', name: 'Morigaon' },
      { '@type': 'AdministrativeArea', name: 'Assam' }
    ],
    geo: { '@type': 'GeoCoordinates', latitude: '26.1667', longitude: '91.7086' },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Kamakhya+Temple+Guwahati',
    sameAs: [`https://wa.me/${UI.WA}`]
  });

  if (p.trail && p.trail.length > 1) {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: p.trail.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url === '/' ? `${DOMAIN}/` : `${DOMAIN}${c.url}`
      }))
    });
  }

  if (p.isHome) {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      url: `${DOMAIN}/`,
      name: 'Atul Nath Aghori Tantrik',
      inLanguage: 'en',
      publisher: { '@id': `${DOMAIN}/#business` }
    });
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${DOMAIN}/hi/#website`,
      url: `${DOMAIN}/hi/`,
      name: 'Atul Nath Aghori Tantrik - हिन्दी',
      inLanguage: 'hi',
      publisher: { '@id': `${DOMAIN}/#business` }
    });
  }

  if (p.isHome || p.type === 'article' || p.canonical === '/about.html') {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${DOMAIN}/#atulnath`,
      name: 'Atul Nath Aghori Tantrik',
      alternateName: ['Atul Nath Aghori Baba', 'Atulnath Tantrik'],
      jobTitle: 'Aghori Tantrik Baba and Vedic Astrologer',
      description: p.personDesc,
      url: `${DOMAIN}/about.html`,
      telephone: UI.PHONE,
      email: 'atulnath@mayongbesttantrik.com',
      knowsAbout: ['Tantra Shastra', 'Kamakhya Tantrik Vidya', 'Mayong Tantra', 'Vedic Astrology', 'Vashikaran', 'Black Magic Removal', 'Spiritual Healing'],
      address: { '@type': 'PostalAddress', addressLocality: 'Mayong', addressRegion: 'Assam', addressCountry: 'IN' },
      worksFor: { '@id': `${DOMAIN}/#business` },
      sameAs: [`https://wa.me/${UI.WA}`]
    });
  }

  if (p.type === 'article') {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: p.title,
      description: p.desc,
      inLanguage: p.lang === 'hi' ? 'hi' : 'en',
      image: [`${DOMAIN}/images/${p.ogImage || 'hero_bg.jpg'}`],
      datePublished: p.published,
      dateModified: p.published,
      author: { '@id': `${DOMAIN}/#atulnath` },
      publisher: {
        '@type': 'Organization',
        name: 'Atul Nath Aghori Tantrik',
        '@id': `${DOMAIN}/#business`,
        logo: { '@type': 'ImageObject', url: `${DOMAIN}/images/logo.png` }
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${DOMAIN}${p.canonical === '/' ? '/' : p.canonical}` }
    });
  }

  if (p.services && p.services.length) {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: p.serviceListName,
      itemListElement: p.services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.name,
        url: `${DOMAIN}${s.url}`
      }))
    });
  }

  if (p.faqs && p.faqs.length) {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
  }

  /* ImageGallery is emitted only on the page that owns the full set, so the
     homepage strip does not produce a second, near-identical gallery node
     competing with it. A page opts in by declaring `gallery`.

     No creditText or copyrightNotice is claimed: the frames are licensed
     stock photography and asserting ownership of them would be untrue. */
  if (p.gallery && p.gallery.length) {
    out += jsonLd({
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      '@id': `${DOMAIN}/#gallery`,
      name: p.galleryName,
      description: p.desc,
      url: p.canonical === '/' ? `${DOMAIN}/` : `${DOMAIN}${p.canonical}`,
      numberOfItems: p.gallery.length,
      associatedMedia: p.gallery.map(g => ({
        '@type': 'ImageObject',
        contentUrl: `${DOMAIN}/images/gallery/${g.file}`,
        thumbnailUrl: `${DOMAIN}/images/gallery/${g.file}`,
        width: g.w,
        height: g.h,
        caption: g.title,
        representativeOfPage: true
      }))
    });
  }

  return out;
}

/* ----------------------------------------------------------------- render */
function render(p) {
  return `<!DOCTYPE html>
<html lang="${p.lang}" dir="ltr">
<head>
  ${head(p)}
  ${schemas(p)}
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  ${UI.topbar(p.c)}
  ${UI.header(p.c)}
  ${UI.crumbs(p.trail)}
  <main id="main">
${p.body}
  </main>
  ${UI.ctaBand(p.c, p.ctaTitle, p.ctaBody)}
  ${UI.linkIndex(p.c)}
  ${UI.footer(p.c)}
</body>
</html>
`;
}

/* ------------------------------------------------------------------ build */
const written = [];

// record each page's own canonical + its declared pair, rather than guessing
// the alternate from the filename. Guessing produced hreflang tags pointing
// at pages that do not exist for the three guides whose Hindi slugs differ,
// and for /hi/ vs /hi/index.html.
const record = (p, out, lang) => {
  const canon = p.canonical === '/' ? '/' : p.canonical;
  const hiPair = p.pair ? p.pair : null;
  const enUrl = lang === 'hi'
    ? (hiPair === '/hi/index.html' ? '/' : hiPair)
    : canon;
  const hiUrl = lang === 'hi' ? canon : hiPair;
  written.push({
    out, lang, canon,
    en: enUrl,
    hi: hiUrl,
    priority: p.priority || 0.8,
    changefreq: p.changefreq || 'monthly',
    images: p.sitemapImages || null
  });
};

for (const p of EN) { record(p, p.out, 'en'); fs.writeFileSync(path.join(ROOT, p.out), render(p), 'utf8'); }
fs.mkdirSync(path.join(ROOT, 'hi'), { recursive: true });
for (const p of HI) { record(p, 'hi/' + p.out, 'hi'); fs.writeFileSync(path.join(ROOT, 'hi', p.out), render(p), 'utf8'); }

/* --------------------------------------------------------------- sitemap */
const loc = (u) => (u === '/' ? `${DOMAIN}/` : `${DOMAIN}${u}`);

const urls = written
  .filter(u => u.out !== '404.html')
  .sort((a, b) => b.priority - a.priority)
  .map(u => {
    const alts = [
      `<xhtml:link rel="alternate" hreflang="en" href="${loc(u.en)}"/>`,
      u.hi ? `<xhtml:link rel="alternate" hreflang="hi" href="${loc(u.hi)}"/>` : '',
      `<xhtml:link rel="alternate" hreflang="x-default" href="${loc(u.en)}"/>`
    ].filter(Boolean).join('');
    // Google reads <image:image> to associate files with a page. Google's own
    // limit is 1000 per page, and the cap here is a guard against a content
    // edit silently producing an oversized sitemap.
    const imgs = (u.images || []).slice(0, 100).map(g =>
      `    <image:image>
      <image:loc>${DOMAIN}/images/gallery/${g.file}</image:loc>
      <image:title>${g.title}</image:title>
      <image:caption>${g.title}</image:caption>
    </image:image>`).join('\n');
    return `  <url>
    <loc>${loc(u.canon)}</loc>
    <lastmod>${YEAR}-09-29</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>${alts}${imgs ? '\n' + imgs : ''}
  </url>`;
  }).join('\n');

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`, 'utf8');

/* ---------------------------------------------------------------- robots */
fs.writeFileSync(path.join(ROOT, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`, 'utf8');

/* -------------------------------------------------------------- manifest */
fs.writeFileSync(path.join(ROOT, 'manifest.json'), JSON.stringify({
  name: 'Atul Nath Aghori Tantrik',
  short_name: 'Atul Nath',
  description: 'Best tantrik in Kamakhya Temple and Mayong, Assam. Black magic removal, vashikaran, love problem solutions and Vedic astrology.',
  lang: 'en',
  start_url: '/',
  scope: '/',
  display: 'browser',
  orientation: 'portrait',
  theme_color: '#08191d',
  background_color: '#08191d',
  categories: ['lifestyle', 'health'],
  icons: [
    { src: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    { src: '/favicon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/favicon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2), 'utf8');

console.log(`Built ${written.length} pages + sitemap.xml + robots.txt + manifest.json`);
