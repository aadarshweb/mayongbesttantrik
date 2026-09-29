/* ==========================================================================
   content/ui.js - shared page components and site-wide content constants
   Required by both build.js and the page content files.
   ========================================================================== */

const PHONE = '+91 9365474087';
const TEL = '+919365474087';
const WA = '919365474087';
const Y = 2026;

const ICON = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>'
};

const BUSINESS_DESC = 'Atul Nath is an Aghori tantrik and Vedic astrologer with seventeen years of practice in Mayong, Morigaon, Assam and nine years of sadhana at Kamakhya Temple, Guwahati. He is known as the best tantrik in Kamakhya Temple and in Mayong for black magic removal, vashikaran, love problem solutions, husband wife dispute work, and honest Vedic astrology consultations. Call +91 9365474087 for a free confidential consultation.';

const PERSON_DESC = 'Atul Nath is an Aghori tantrik baba and Vedic astrologer born and raised in Mayong, Assam, the traditional centre of tantra in the region. He has practised continuously in Mayong for seventeen years and has spent nine years in sadhana at Kamakhya Temple in Guwahati, one of the fifty-one Shakti Peethas. His work covers black magic removal, vashikaran, love and marriage problems, and Vedic astrological advice.';

/* ---------------------------------------------------------------- blocks */

function topbar(c) {
  return `<div class="topbar">
  <div class="topbar__inner">
    <div class="topbar__meta">
      <span>${ICON.pin}${c.topLoc}</span>
      <span>${ICON.clock}${c.topHours}</span>
    </div>
    <div class="topbar__meta">
      <a class="topbar__tel" href="tel:${TEL}">${ICON.phone}${PHONE}</a>
      <a href="https://wa.me/${WA}" rel="noopener">WhatsApp</a>
    </div>
  </div>
</div>`;
}

function header(c) {
  return `<header class="site-header" id="site-header">
  <div class="header__inner">
    <a class="brand" href="${c.prefix}index.html">
      <img src="${c.prefix}images/logo.png" width="320" height="320" alt="Atul Nath Aghori Tantrik logo, Sri Yantra and Trishul emblem">
      <span class="brand__text">
        <span class="brand__name">${c.brandName}</span>
        <span class="brand__tag">${c.brandTag}</span>
      </span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu" data-nav-toggle>${ICON.menu}</button>
    <nav class="nav" id="primary-nav" aria-label="Primary">
      <div class="nav__links">
        ${c.nav.map(n => `<a href="${n.href}"${n.current ? ' aria-current="page"' : ''}>${n.label}</a>`).join('\n        ')}
      </div>
      <div class="nav__tools">
        <a class="lang-link" href="${c.langHref}" hreflang="${c.lang === 'hi' ? 'en' : 'hi'}" lang="${c.lang === 'hi' ? 'en' : 'hi'}">${c.lang === 'hi' ? 'English' : 'हिन्दी'}</a>
        <a class="btn btn--primary btn--sm" href="tel:${TEL}">${c.callNow}</a>
      </div>
    </nav>
  </div>
</header>`;
}

function crumbs(trail) {
  if (!trail || trail.length < 2) return '';
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>
  ${trail.map((t, i) => (i === trail.length - 1
    ? `<li><span aria-current="page">${t.name}</span></li>`
    : `<li><a href="${t.href}">${t.name}</a></li>`)).join('\n  ')}
</ol></nav>`;
}

function hero(c) {
  return `<section class="hero">
  <div class="hero__media">
    <img src="${c.prefix}images/hero_bg.jpg" width="1920" height="1080" alt="Misty ancient stone ruins and temple spires lit by floating will-o-the-wisps, evoking Kamakhya Temple and the tantric traditions of Mayong in Assam" fetchpriority="high">
  </div>
  <div class="hero__inner">
    <div class="hero__copy">
      <span class="eyebrow">${c.heroEyebrow}</span>
      <h1>${c.heroH1}</h1>
      <p class="hero__sub">${c.heroSub}</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="tel:${TEL}">${c.callNow} ${PHONE}</a>
        <a class="btn btn--ghost" href="https://wa.me/${WA}" rel="noopener">${c.waNow}</a>
      </div>
      <p class="hero__note">
        <span>${ICON.check}${c.note1}</span>
        <span>${ICON.check}${c.note2}</span>
        <span>${ICON.check}${c.note3}</span>
      </p>
    </div>
  </div>
</section>`;
}

function pagehead(c) {
  return `<section class="pagehead">
  <div class="pagehead__media"><img src="${c.prefix}images/hero_bg.jpg" width="1920" height="1080" alt="" aria-hidden="true"></div>
  <div class="pagehead__inner">
    <span class="eyebrow">${c.eyebrow}</span>
    <h1>${c.h1}</h1>
    <p class="pagehead__sub">${c.sub}</p>
    <div class="pagehead__cta btn-row">
      <a class="btn btn--primary" href="tel:${TEL}">${c.callNow} ${PHONE}</a>
      <a class="btn btn--ghost" href="${c.prefix}contact.html">${c.contactCta}</a>
    </div>
  </div>
</section>`;
}

function stats(items) {
  return `<section class="stats"><div class="wrap stats__grid">
  ${items.map(i => `<div class="stats__item"><div class="stats__num">${i.num}</div><div class="stats__label">${i.label}</div></div>`).join('\n  ')}
</div></section>`;
}

function serviceRows(rows) {
  return `<div class="rows">
  ${rows.map((r, i) => `<article class="row">
    <div class="row__num">${String(i + 1).padStart(2, '0')}</div>
    <div class="row__body">
      <h3>${r.title}</h3>
      <p>${r.body}</p>
      <a class="link-more" href="${r.url}">${r.cta}</a>
    </div>
    <div class="row__aside">${(r.tags || []).map(t => `<span class="row__tag">${t}</span>`).join('')}</div>
  </article>`).join('\n  ')}
</div>`;
}

function faqBlock(faqs, title, eyebrow) {
  if (!faqs || !faqs.length) return '';
  return `<section class="section section--raised" id="faq">
  <div class="wrap">
    <div class="section-head section-head--center">
      <span class="eyebrow">${eyebrow || 'FAQ'}</span>
      <h2>${title}</h2>
    </div>
    <div class="faq">
      ${faqs.map(f => `<details class="faq__item">
        <summary class="faq__q">${f.q}</summary>
        <div class="faq__a"><p>${f.a}</p></div>
      </details>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function ctaBand(c, title, body) {
  return `<section class="cta-band">
  <div class="cta-band__inner">
    <div>
      <h2>${title}</h2>
      <p>${body}</p>
    </div>
    <div class="btn-row">
      <a class="btn btn--primary" href="tel:${TEL}">${c.callNow} ${PHONE}</a>
      <a class="btn btn--ghost" href="https://wa.me/${WA}" rel="noopener">${c.waNow}</a>
    </div>
  </div>
</section>`;
}

function linkIndex(c) {
  return `<section class="section section--sunk seo-links" id="services">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${c.indexEyebrow}</span>
      <h2>${c.indexTitle}</h2>
      <p>${c.indexIntro}</p>
    </div>
    <div class="linkindex">
      ${c.indexGroups.map(g => `<div class="linkindex__row">
        <div class="linkindex__cat">${g.cat}</div>
        <ul>${g.links.map(l => `<li><a href="${l.url}">${l.label}</a></li>`).join('')}</ul>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

const MAP_SRC = 'https://www.google.com/maps?q=Kamakhya+Temple,+Malakhuwa,+Guwahati,+Assam+781010&output=embed';
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Kamakhya+Temple+Malakhuwa+Guwahati+Assam+781010';

function footer(c) {
  return `<section class="section section--tight" style="padding-bottom:0">
  <div class="wrap">
    <figure class="map-figure">
      <div class="map-frame">
        <a class="map-fallback" href="${MAP_LINK}" rel="noopener" target="_blank">
          <span class="map-fallback__pin" aria-hidden="true"></span>
          <strong>Kamakhya Temple, Guwahati</strong>
          <span>Malakhuwa, Guwahati, Assam 781010 &middot; open in Google Maps</span>
        </a>
        <iframe src="${MAP_SRC}" title="Map showing Kamakhya Temple, Guwahati, Assam, near the tantrik practice of Atul Nath Aghori Tantrik" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <figcaption>${c.mapCaption}</figcaption>
    </figure>
  </div>
</section>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer__grid">
      <div>
        <h4>${c.footerAbout}</h4>
        <p>${c.footerAboutBody}</p>
        <div class="taglist">
          <a href="${c.prefix}best-tantrik-mayong.html">${c.tag1}</a>
          <a href="${c.prefix}black-magic-removal-kamakhya.html">${c.tag2}</a>
          <a href="${c.prefix}vashikaran-specialist-mayong.html">${c.tag3}</a>
        </div>
      </div>
      <div>
        <h4>${c.footerPages}</h4>
        <ul>
          ${c.footerPagesList.map(l => `<li><a href="${l.url}">${l.label}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>${c.footerGuides}</h4>
        <ul>
          ${c.footerGuidesList.map(l => `<li><a href="${l.url}">${l.label}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>${c.footerContact}</h4>
        <ul class="footer__contact">
          <li>${ICON.phone}<a href="tel:${TEL}">${PHONE}</a></li>
          <li>${ICON.wa}<a href="https://wa.me/${WA}" rel="noopener">WhatsApp ${PHONE}</a></li>
          <li>${ICON.mail}<a href="mailto:atulnath@mayongbesttantrik.com">atulnath@mayongbesttantrik.com</a></li>
          <li>${ICON.pin}<span>${c.footAddr}</span></li>
          <li>${ICON.clock}<span>${c.footHours}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; ${Y} ${c.rightsName}. ${c.rights}</p>
      <p><a href="${c.prefix}contact.html">${c.footerContact}</a> &middot; <a href="/sitemap.xml">Sitemap</a></p>
    </div>
  </div>
</footer>

<div class="floaters">
  <a class="floater floater--wa" href="https://wa.me/${WA}" rel="noopener" aria-label="WhatsApp Atul Nath on ${PHONE}" title="WhatsApp">${ICON.wa}</a>
  <a class="floater floater--call" href="tel:${TEL}" aria-label="Call Atul Nath on ${PHONE}" title="Call now">${ICON.phone}</a>
</div>

<script src="${c.prefix}js/script.js" defer></script>`;
}

/* --------------------------------------------------- long-form repeats */
function processBlock(c) {
  return `<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${c.processEyebrow}</span>
      <h2>${c.processTitle}</h2>
      <p>${c.processIntro}</p>
    </div>
    <div class="timeline">
      ${c.process.map((s, i) => `<div class="timeline__step">
        <span class="timeline__n">${c.stepWord} ${String(i + 1).padStart(2, '0')}</span>
        <h3>${s.title}</h3><p>${s.body}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function testimonialBlock(c) {
  return `<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">${c.testiEyebrow}</span>
      <h2>${c.testiTitle}</h2>
      <p>${c.testiIntro}</p>
    </div>
    <div class="cols-3">
      ${c.testimonials.map(t => `<blockquote class="quote">
        <div class="quote__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="quote__text">${t.text}</p>
        <footer class="quote__by">${t.by}</footer>
      </blockquote>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

module.exports = {
  PHONE, TEL, WA, Y, ICON, BUSINESS_DESC, PERSON_DESC,
  topbar, header, crumbs, hero, pagehead, stats, serviceRows, faqBlock,
  ctaBand, linkIndex, footer, processBlock, testimonialBlock
};
