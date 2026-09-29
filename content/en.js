/* ==========================================================================
   content/en.js - home, about, services, contact
   Each page owns its own keyword cluster and its own unique body copy.
   ========================================================================== */
const U = require('./ui.js');
const { PHONE, TEL, WA } = U;

const S = require('./en-shared.js');
const { NAV, SERVICES, PROCESS, TESTIMONIALS, chrome } = S;
const HEAD_FAQ = [
  { q: 'Who is the best tantrik in Kamakhya Temple?', a: 'There is no official ranking, and anyone who claims one is selling you something. What can be checked is years of practice, whether the person will explain the diagnosis before taking money, and whether there is a fixed address you can visit. Atul Nath has practised in Mayong for seventeen years and has spent nine years in sadhana at Kamakhya Temple, and sees clients at both. Call +91 9365474087 to speak to him directly.' },
  { q: 'What is the difference between Mayong and Kamakhya tantra?', a: 'They are related but not the same. Mayong is a small place in Morigaon district that has been the regional centre of tantra for centuries, and the practice there is centred on scriptural method, mantra and discipline. Kamakhya Temple in Guwahati is a Shakti Peetha, and the practice there is centred on the goddess, on puja, and on the offering itself. Atul Nath works from both and uses whichever suits the problem in front of him.' },
  { q: 'Can black magic really be removed?', a: 'In many cases yes, and often faster than people expect. But it depends entirely on what the work actually is. A jadu tona done by somebody else, a bhoota, a plain nazar, and a genuinely cursed situation each need a different approach. The diagnosis has to come first. Anyone who quotes a fixed price and a fixed result over the phone without asking questions is guessing.' },
  { q: 'How much does a tantrik consultation cost in Assam?', a: 'The first phone consultation is free. A full horoscope reading is separate, modest in amount, and quoted before it begins. Ritual work is priced according to what the ritual actually requires, and the price is agreed in writing before any date is fixed. There should never be a demand for advance payment simply to book a conversation.' },
  { q: 'Do I have to come to Mayong or Kamakhya in person?', a: 'For the first conversation, no. Most people call from Guwahati, from other states, and from outside India. A visit is needed for the puja itself, and for that Kamakhya Temple in Guwahati is the more accessible of the two for anybody travelling from outside Assam.' },
  { q: 'Is it safe to tell you about my problem?', a: 'The work depends on you being honest, including about things you would not want to tell your family. Nothing you say is repeated to anybody and no case details are used publicly. If the problem needs a doctor, a lawyer or a police report, you will be told that first.' }
];

const pages = [];

/* --------------------------------------------------------------- 1. HOME */
pages.push({
  out: 'index.html',
  canonical: '/',
  isHome: true,
  pair: '/hi/index.html',
  prefix: '',
  lang: 'en',
  priority: 1.0, changefreq: 'weekly',
  preloadHero: true,
  title: 'Best Tantrik in Kamakhya Temple & Mayong | 9365474087',
  desc: 'Best tantrik in Kamakhya Temple and Mayong, Assam. Atul Nath, 17 years in Mayong, 9 at Kamakhya. Call +91 9365474087 for a free consult.',
  keywords: 'best tantrik in kamakhya temple, best tantrik in mayong, tantrik in kamakhya temple, kamakhya mandir tantrik, best tantrik in guwahati, mayong best tantrik, best mayong tantrik, aghori tantrik in guwahati, tantrik in guwahati, kamakhya temple black magic, best tantrik in assam, tantrik in assam',
  ogImage: 'hero_bg.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: null,
  c: chrome(),
  ctaTitle: 'Speak to Atul Nath before you decide anything',
  ctaBody: 'A short phone call is usually enough to know whether your problem is something that can be helped, and what it will take. There is no charge for the first conversation.',
  services: SERVICES.map(x => ({ name: x.title, url: '/' + x.file })),
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: HEAD_FAQ,
  body: `${U.hero(chrome())}

${U.stats([
  { num: '17', label: 'Years in Mayong' },
  { num: '9', label: 'Years at Kamakhya' },
  { num: '10,000+', label: 'Consultations given' },
  { num: '2', label: 'Locations in Assam' }
])}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Why this page exists</span>
        <h2>Searching for the best tantrik in Kamakhya Temple, or in Mayong?</h2>
        <p>If you have reached this page you are probably looking for a phone number rather than a lecture. Here it is: <strong>${PHONE}</strong>, answered from six in the morning until ten at night, seven days a week.</p>
        <p>You are probably also trying to work out whether the person on the other end of the number is genuine. That is a fair question, and this page is written to help you judge it rather than to convince you of anything.</p>
        <p>Atul Nath is an Aghori tantrik and Vedic astrologer working out of two places: Mayong in Morigaon district, where he has practised for seventeen years, and Kamakhya Temple in Guwahati, where he has spent nine years in sadhana. Those are the only two places he works from, and you are welcome to visit either one.</p>
        <p>In practice that means there is somebody who can read your kundali properly, sit with you while you explain what is happening, and tell you whether the cause is planetary, tantric, or neither. A fair share of the people who call turn out to need a doctor, a lawyer or an honest conversation with their spouse, and they are told that instead of being sold a puja.</p>
        <p>What he does not do is promise results. Anyone who guarantees a black magic removal in three days over the phone, knowing nothing about you, is not reading anything at all.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">The two locations</span>
        <h3>Mayong, Morigaon, Assam 782411</h3>
        <p>Mayong has been the centre of tantra in this part of Assam for a very long time, and the practice there is rooted in method, mantra and discipline rather than in spectacle. Seventeen years of living and working in that place is why the work done from there is steady. From Guwahati, Mayong is about 40 kilometres and roughly an hour and a half by road.</p>
        <h3 style="margin-top:26px">Kamakhya Temple, Guwahati, Assam 781010</h3>
        <p>Kamakhya is one of the fifty-one Shakti Peethas, and the puja there is centred on the goddess herself. Nine years of regular sadhana at the temple gave this practice a root in offering and discipline rather than in commercial ritual. It is also the more accessible location for anyone travelling from outside Assam, being on the Malakhuwa temple road in Guwahati.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Not sure which to ask about?</strong> Just call. Both numbers reach the same person, and the first conversation costs nothing.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised" id="services">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">What is done here</span>
      <h2>Six of the sixteen areas of work</h2>
      <p>There are sixteen areas of work in total, each with its own page, its own keyword cluster, and an honest account of what is and is not realistic. These six are the ones most people arrive looking for. <a href="services.html">See all sixteen services</a>.</p>
    </div>
    ${U.serviceRows(S.rows(s => ['black-magic-removal-kamakhya','love-problem-solution-kamakhya','lost-love-recovery-kamakhya','husband-wife-dispute-mayong','vashikaran-specialist-mayong','business-problem-solution-mayong'].includes(s.slug)))}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="feature">
      <div class="feature__media">
        <figure>
          <img src="images/ritual.jpg" width="1400" height="934" alt="Assamese palm-leaf puti manuscripts tied with thread beside a brass oil lamp, a rudraksha mala and marigold flowers on a temple altar" loading="lazy">
        </figure>
      </div>
      <div>
        <span class="eyebrow">The practice</span>
        <h2>Scripture first, then the ritual</h2>
        <p>The image here is a puti, an Assamese palm-leaf manuscript, of the kind Mayong has always worked from. The method matters more than the imagery. A tantric problem is diagnosed the way a doctor diagnoses a physical one: by reading the evidence, ruling out what does not fit, and only then deciding on a treatment.</p>
        <p>That means the horoscope comes before the mantra, and the diagnosis before the puja. Where a problem is caused by something inside a family, by a legal matter, or by a medical one, you will be directed to whoever deals with that properly.</p>
        <p>Where a ritual genuinely is the answer, it is performed at Kamakhya Temple or at the Mayong ashram, and you are given a simple daily practice in Assamese, Hindi or English to carry on afterwards. A ritual without the daily practice is a one-day expense. The daily practice is what usually holds the change in place.</p>
        <a class="link-more" href="about.html">Read about Atul Nath's background</a>
      </div>
    </div>
  </div>
</section>

${S.processSection() && U.processBlock(Object.assign(chrome(), {
  processEyebrow: 'The method',
  processTitle: 'What actually happens after you call',
  processIntro: 'There is no fixed ritual for every problem. This is the sequence, and how much of it you need depends entirely on what the diagnosis shows.',
  stepWord: 'Step',
  process: PROCESS
}))}

${U.testimonialBlock(Object.assign(chrome(), {
  testiEyebrow: 'In their words',
  testiTitle: 'What people said afterwards',
  testiIntro: 'Names shortened at the request of the people quoted. Every case is different and no result can be promised in advance.',
  testimonials: TESTIMONIALS
}))}

${U.faqBlock(HEAD_FAQ, 'Questions people ask before they call')}`
});

/* -------------------------------------------------------------- 2. ABOUT */
pages.push({
  out: 'about.html',
  canonical: '/about.html',
  pair: '/hi/about.html',
  prefix: '',
  lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  title: 'About Atul Nath | Best Tantrik in India, Assam',
  desc: 'About Atul Nath Aghori Tantrik: 17 years in Mayong and 9 years at Kamakhya Temple. Best tantrik in Assam and India. Call +91 9365474087.',
  keywords: 'best tantrik in india, no 1 tantrik in india, famous tantrik in india, about atul nath, kamakhya best tantrik contact number, best tantrik in assam, aghori tantrik baba, vedic astrologer in assam',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: [
    { name: 'Home', href: 'index.html', url: '/' },
    { name: 'About Atul Nath', url: '/about.html' }
  ],
  c: chrome({ nav: NAV.map(n => n.href === 'about.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Ask a question before you book anything',
  ctaBody: 'You do not need a reason to call. If you want to understand how the work is done before committing to it, ask on the first call.',
  services: SERVICES.map(x => ({ name: x.title, url: '/' + x.file })),
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'How long has Atul Nath been practising?', a: 'He began his sadhana in Mayong in 2009 and has worked there continuously since. He started regular practice at Kamakhya Temple in Guwahati in 2017. Between the two, that is seventeen years in Mayong and nine years at Kamakhya as of 2026.' },
    { q: 'Is Atul Nath a tantrik or an astrologer?', a: 'Both, and the distinction matters. Astrology is the diagnostic tool: reading the janam patrika and the kundali to see what the chart actually shows. Tantra is the method of working with what the chart shows. Neither works well without the other, and a lot of what people bring turns out to need one before the other.' },
    { q: 'What does Atul Nath refuse to do?', a: 'He does not do work intended to harm another person, and he does not do work where one party is acting without the knowledge of the other. He also declines cases where the real problem is medical, legal or criminal, and refers those on. If he cannot help, he will usually say so on the first call and suggest who can.' },
    { q: 'Where is the Mayong ashram and how do I reach it?', a: 'It is in Mayong, Morigaon district, Assam, pin 782411, roughly 40 kilometres from Guwahati. Call +91 9365474087 and the exact meeting point and travel directions will be given to you, because the ashram is not on a main road and arriving unannounced is difficult.' }
  ],
  body: `${U.pagehead(Object.assign(chrome(), {
    eyebrow: 'About the practitioner',
    h1: 'About Atul Nath, tantrik and astrologer in Mayong and Kamakhya',
    sub: 'Seventeen years in Mayong, nine years at Kamakhya Temple, and a practice built on reading the evidence before deciding on a ritual.'
  }))}

${U.stats([
  { num: '2009', label: 'Started practice in Mayong' },
  { num: '2017', label: 'Began sadhana at Kamakhya' },
  { num: '17 yrs', label: 'Continuous Mayong practice' },
  { num: '10,000+', label: 'Consultations given' }
])}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Background</span>
        <h2>What Atul Nath is, and where the work comes from</h2>
        <p>Atul Nath was born in Mayong, in the hills of Morigaon district in Assam, in a family that had dealings with the tantric tradition of the area. Mayong is a small place that does not appear much on maps, but for several centuries it has been one of the recognised centres of tantra in north-east India. That is the world he grew up inside.</p>
        <p>He began his own sadhana in 2009. The early years were spent the way it has always been done there: study of the scriptural material, mantra sadhana, and a long period of working without a clientele to build. He started taking consultations properly in 2014, and by then had been reading horoscopes long enough to know that a great deal of what people were being told by other practitioners had no basis in the chart at all.</p>
        <p>In 2017 he began regular practice at Kamakhya Temple in Guwahati. That is nine years of sadhana at a Shakti Peetha, and it changed the shape of his work. Mayong gave him method. Kamakhya gave him a centre for offering, discipline, and the particular kind of puja that only happens at a temple of that standing.</p>
        <p>He works as both an astrologer and a tantrik, and the order matters. The janam patrika and the kundali come first, because the chart is the diagnosis. Tantra is what he uses to work with what the diagnosis shows. Practising the other way round, which is common in this line, produces confident answers with nothing behind them.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practice</span>
        <h3>Two places, one person</h3>
        <p>All consultations and all puja happen at one of two locations: the Mayong ashram, and the office near Kamakhya Temple on the Malakhuwa temple road in Guwahati. There is no third place, no agent, and nobody else collecting fees on his behalf. If you are told to send money to a different account, that is not this practice.</p>
        <h3 style="margin-top:26px">How a consultation runs</h3>
        <p>The first conversation is a phone call and it is free. You describe what is happening and he asks questions. If it makes sense to continue, a full horoscope reading is arranged and its cost is quoted before you agree to it. Only then is any ritual discussed, priced in writing, and dated.</p>
        <h3 style="margin-top:26px">What he will not do</h3>
        <p>He does not do work intended to injure another person, and he does not do work where one party is acting without the knowledge of the other. He does not take a case that is really a medical, legal or criminal matter, and he will usually say so on the first call. Roughly one in five people who call are sent to a doctor, a lawyer or the police instead, and are not charged for being told that.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Languages.</strong> Consultations are held in Assamese, Hindi and English. Visitors from outside India are commonly seen by appointment.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Frequently asked</span>
      <h2>About Atul Nath, answered</h2>
    </div>
    <div class="faq">
      <details class="faq__item"><summary class="faq__q">How long has Atul Nath been practising?</summary><div class="faq__a"><p>He began his sadhana in Mayong in 2009 and has worked there continuously since. He started regular practice at Kamakhya Temple in Guwahati in 2017. Between the two, that is seventeen years in Mayong and nine years at Kamakhya as of 2026.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Is Atul Nath a tantrik or an astrologer?</summary><div class="faq__a"><p>Both, and the distinction matters. Astrology is the diagnostic tool: reading the janam patrika and the kundali to see what the chart actually shows. Tantra is the method of working with what the chart shows. Neither works well without the other, and a lot of what people bring turns out to need one before the other.</p></div></details>
      <details class="faq__item"><summary class="faq__q">What does Atul Nath refuse to do?</summary><div class="faq__a"><p>He does not do work intended to harm another person, and he does not do work where one party is acting without the knowledge of the other. He also declines cases where the real problem is medical, legal or criminal, and refers those on. If he cannot help, he will usually say so on the first call and suggest who can.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Where is the Mayong ashram and how do I reach it?</summary><div class="faq__a"><p>It is in Mayong, Morigaon district, Assam, pin 782411, roughly 40 kilometres from Guwahati. Call +91 9365474087 and the exact meeting point and travel directions will be given to you, because the ashram is not on a main road and arriving unannounced is difficult.</p></div></details>
    </div>
  </div>
</section>`
});

/* ----------------------------------------------------------- 3. SERVICES */
pages.push({
  out: 'services.html',
  canonical: '/services.html',
  pair: '/hi/services.html',
  prefix: '',
  lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Tantrik Services in Assam | Atul Nath, 9365474087',
  desc: 'Spiritual services in Mayong and Kamakhya Temple: black magic removal, love problems, vashikaran, marriage disputes. Call +91 9365474087.',
  keywords: 'tantrik in assam, assam tantrik, tantrik services in assam, kamakhya temple tantriks, tantrik in kamakhya temple, kamakhya mandir tantrik vidya, best tantrik in assam, spiritual healer assam, vedic astrologer in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: [
    { name: 'Home', href: 'index.html', url: '/' },
    { name: 'Services', url: '/services.html' }
  ],
  c: chrome({ nav: NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Not sure which service you need?',
  ctaBody: 'Describe the problem on a phone call and you will be told which of these applies, or which applies to none of them. The first call is free.',
  services: SERVICES.map(x => ({ name: x.title, url: '/' + x.file })),
  serviceListName: 'All spiritual services offered by Atul Nath Aghori Tantrik in Assam',
  faqs: [
    { q: 'What spiritual services are available in Assam?', a: 'Atul Nath works on four main areas: black magic and evil eye removal, love problem solutions, vashikaran for direction and obstacle removal, and husband wife dispute work. He also reads horoscopes for marriage compatibility, business timing and general life questions. Astrology, palmistry and numerology are read as part of a consultation rather than sold separately.' },
    { q: 'How much do these services cost?', a: 'The first phone consultation is free. A full horoscope reading is quoted before it begins and is a modest amount. Ritual work varies considerably with what the ritual requires, and the price is agreed in writing before any date is fixed. No advance payment is asked for simply to book a conversation.' },
    { q: 'Can services be done remotely for people outside Assam?', a: 'The initial consultation, the horoscope reading and the daily remedies can all be done by phone and WhatsApp. The puja itself has to be performed in person at Kamakhya Temple or at the Mayong ashram, though somebody can attend on your behalf with your written authorisation if travelling is not possible.' },
    { q: 'Do you work on love marriage and family opposition?', a: 'Yes, and it is among the most common reasons people call. Love marriage opposition is usually a mix of a horoscope mismatch the family suspects and a genuine social objection. The kundali is read for both people, doshas are identified if they exist, and remedies are given for those. Where the opposition is purely social and the charts are clean, that is said plainly, because no ritual is going to change what a family will not accept.' }
  ],
  body: `${U.pagehead(Object.assign(chrome(), {
    eyebrow: 'What is offered',
    h1: 'Tantrik and Vedic astrology services in Mayong and Kamakhya Temple',
    sub: 'Sixteen areas of work, what each one involves, what it costs, and what it cannot do.'
  }))}

<section class="section">
  <div class="wrap">
    <div class="prose" style="max-width:840px;margin-bottom:52px">
      <span class="eyebrow">Overview</span>
      <h2>Spiritual services in Assam, and how they are priced</h2>
      <p>Atul Nath Aghori Tantrik works on sixteen areas of tantric, astrological and ritual practice from Mayong in Morigaon district and Kamakhya Temple in Guwahati. They are listed below in the order people most often need them, and each has a page of its own. Each has a full page of its own with the detail, and the questions at the foot of this page cover cost, distance and working remotely.</p>
      <p>Two things are true of all sixteen. First, the diagnosis comes before the ritual: a horoscope is read and the cause identified before anything is decided, priced or scheduled. Second, the price is agreed in writing before a date is fixed, and it does not change afterwards. If a practitioner will not give you a price, or will only give it on the second or third call, that is the whole answer.</p>
      <p>None of these is expensive in the sense that matters, which is that people lose money by going to the wrong person first. A horoscope reading on its own often settles a question that a year of remedies has not.</p>
    </div>
    ${U.serviceRows(S.rows())}
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="cols-2">
      <div class="card">
        <span class="card__num">What is included</span>
        <h3>Every consultation includes</h3>
        <p>A proper reading of the janam patrika and the relevant kundali, an explanation in plain language of what is showing in the chart, a realistic view of what can and cannot be changed, and written daily remedies if a ritual is advised. Nothing is withheld behind a further fee.</p>
      </div>
      <div class="card">
        <span class="card__num">What is not</span>
        <h3>What is never offered</h3>
        <p>No guaranteed result, no fixed price quoted over the phone without a diagnosis, no demand for a large advance payment, and no work intended to harm anybody. Where the real problem is medical, legal or criminal, you will be directed there instead.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection() && U.processBlock(Object.assign(chrome(), {
  processEyebrow: 'The method',
  processTitle: 'What actually happens after you call',
  processIntro: 'There is no fixed ritual for every problem. This is the sequence, and how much of it you need depends entirely on what the diagnosis shows.',
  stepWord: 'Step',
  process: PROCESS
}))}

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Frequently asked</span>
      <h2>About these services</h2>
    </div>
    <div class="faq">
      <details class="faq__item"><summary class="faq__q">What spiritual services are available in Assam?</summary><div class="faq__a"><p>Atul Nath works on four main areas: black magic and evil eye removal, love problem solutions, vashikaran for direction and obstacle removal, and husband wife dispute work. He also reads horoscopes for marriage compatibility, business timing, and general life questions. Astrology, palmistry and numerology are read as part of a consultation rather than sold separately.</p></div></details>
      <details class="faq__item"><summary class="faq__q">How much do these services cost?</summary><div class="faq__a"><p>The first phone consultation is free. A full horoscope reading is quoted before it begins and is a modest amount. Ritual work varies considerably with what the ritual requires, and the price is agreed in writing before any date is fixed. No advance payment is asked for simply to book a conversation.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Can services be done remotely for people outside Assam?</summary><div class="faq__a"><p>The initial consultation, the horoscope reading, and the daily remedies can all be done by phone and WhatsApp. The puja itself has to be performed in person at Kamakhya Temple or at the Mayong ashram, though someone can attend on your behalf with your written authorisation if travelling is not possible.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Do you work on love marriage and family opposition?</summary><div class="faq__a"><p>Yes, and it is among the most common reasons people call. Love marriage opposition is usually a mix of a horoscope mismatch that the family suspects and a genuine social objection. The kundali is read for both people, the doshas are identified if they exist, and remedies are given for those. Where the opposition is purely social and the charts are clean, that is said plainly, because no ritual is going to change what the family will not accept.</p></div></details>
    </div>
  </div>
</section>`
});

/* ------------------------------------------------------------ 4. CONTACT */
pages.push({
  out: 'contact.html',
  canonical: '/contact.html',
  pair: '/hi/contact.html',
  prefix: '',
  lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Kamakhya Tantrik Contact Number | Atul Nath | 9365474087',
  desc: 'Kamakhya tantrik contact number and Mayong tantrik contact number. Call or WhatsApp +91 9365474087. Free first consultation, 6 am to 10 pm.',
  keywords: 'kamakhya best tantrik contact number, kamakhya tantrik contact, kamakhya mandir tantrik contact number, assam tantrik contact number, mayong tantrik contact number, mayong assam tantrik contact number, mayong assam tantrik contact number whatsapp number, tantrik contact guwahati',
  ogImage: 'hero_bg.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: [
    { name: 'Home', href: 'index.html', url: '/' },
    { name: 'Contact', url: '/contact.html' }
  ],
  c: chrome({ nav: NAV.map(n => n.href === 'contact.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'The fastest route is a phone call',
  ctaBody: 'Calls and WhatsApp are answered between six in the morning and ten at night, every day. If you cannot get through, leave a message with your name and the district you are calling from.',
  services: SERVICES.map(x => ({ name: x.title, url: '/' + x.file })),
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'What is the Kamakhya tantrik contact number?', a: 'The number is +91 9365474087. It is answered from 6 am to 10 pm, seven days a week, and WhatsApp on the same number is checked regularly through the day. There is only this one number for both the Mayong and Kamakhya Temple practice.' },
    { q: 'Is there a separate contact number for Mayong?', a: 'No. The same number reaches both practices, which is deliberate. Mayong in Morigaon district and Kamakhya Temple in Guwahati are run by the same person, and having two numbers would only make it easier for somebody else to pose as one of them.' },
    { q: 'Can I visit without calling first?', a: 'You can, but calling first saves you a wasted trip. The Kamakhya Temple office in Guwahati is easier to reach and has set visiting hours. The Mayong ashram is off the main road and you need a meeting point in advance, so a call is genuinely necessary there.' },
    { q: 'Mayong to Kamakhya Temple, how far is it?', a: 'Approximately 40 kilometres by road, and about an hour and a half in normal traffic. Many people combine the two in one trip: the horoscope reading in Guwahati first, and the Mayong ashram visit on the same day or the next if an appointment can be made.' }
  ],
  body: `${U.pagehead(Object.assign(chrome(), {
    eyebrow: 'Reach him directly',
    h1: 'Kamakhya and Mayong tantrik contact number',
    sub: 'One number for both practices, answered six in the morning until ten at night, every day of the week.'
  }))}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div>
        <span class="eyebrow">Reach him directly</span>
        <h2 style="margin-bottom:26px">Phone, WhatsApp, email and two addresses</h2>
        <div class="info-list">
          <div class="info-list__row"><div class="info-list__k">Phone</div><div class="info-list__v"><a class="big" href="tel:${TEL}">${PHONE}</a><div class="muted" style="font-size:0.9rem">Daily 6:00 am to 10:00 pm. First call free.</div></div></div>
          <div class="info-list__row"><div class="info-list__k">WhatsApp</div><div class="info-list__v"><a class="big" href="https://wa.me/${WA}" rel="noopener">Message on WhatsApp</a><div class="muted" style="font-size:0.9rem">Send your name, your district, and a short description.</div></div></div>
          <div class="info-list__row"><div class="info-list__k">Email</div><div class="info-list__v"><a href="mailto:atulnath@mayongbesttantrik.com">atulnath@mayongbesttantrik.com</a><div class="muted" style="font-size:0.9rem">For horoscope documents and detailed enquiries.</div></div></div>
          <div class="info-list__row"><div class="info-list__k">Ashram</div><div class="info-list__v"><span>Mayong, Morigaon, Assam 782411</span><div class="muted" style="font-size:0.9rem">Practising here since 2009. Off the main road, so call for a meeting point.</div></div></div>
          <div class="info-list__row"><div class="info-list__k">Temple office</div><div class="info-list__v"><span>Kamakhya Temple Road, Malakhuwa, Guwahati, Assam 781010</span><div class="muted" style="font-size:0.9rem">Sadhana here since 2017. Easier to reach for visitors from outside Assam.</div></div></div>
        </div>
        <div class="callout" style="margin-top:30px">
          <p><strong>If someone else is asking you for money.</strong> There is one practice and one number. If you have been given a different account, a different WhatsApp number, or a person claiming to act on his behalf, call the number above and check before paying anything.</p>
        </div>
      </div>
      <div>
        <form class="form" action="#" method="post" novalidate>
          <span class="eyebrow">Request a callback</span>
          <h3 style="margin-bottom:22px">Send a short message</h3>
          <div class="form__row">
            <label for="cf-name">Your name</label>
            <input type="text" id="cf-name" name="name" autocomplete="name" required>
          </div>
          <div class="form__row">
            <label for="cf-phone">Phone or WhatsApp number</label>
            <input type="tel" id="cf-phone" name="phone" autocomplete="tel" required>
          </div>
          <div class="form__row">
            <label for="cf-place">District or city you are calling from</label>
            <input type="text" id="cf-place" name="place" autocomplete="address-level2">
          </div>
          <div class="form__row">
            <label for="cf-topic">What is it about</label>
            <select id="cf-topic" name="topic">
              <option>Black magic or evil eye</option>
              <option>Love problem</option>
              <option>Husband wife dispute</option>
              <option>Vashikaran or business</option>
              <option>Horoscope reading only</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="form__row">
            <label for="cf-msg">A few lines about the situation</label>
            <textarea id="cf-msg" name="message" required></textarea>
          </div>
          <button class="btn btn--primary btn--block" type="submit">Send message</button>
          <p class="form__note">Nothing you write here is shared with anyone. If you would rather just speak, call ${PHONE} instead.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Frequently asked</span>
      <h2>Before you pick up the phone</h2>
    </div>
    <div class="faq">
      <details class="faq__item"><summary class="faq__q">What is the Kamakhya tantrik contact number?</summary><div class="faq__a"><p>The number is +91 9365474087. It is answered from 6 am to 10 pm, seven days a week, and WhatsApp on the same number is checked regularly through the day. There is only this one number for both the Mayong and Kamakhya Temple practice.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Is there a separate contact number for Mayong?</summary><div class="faq__a"><p>No. The same number reaches both practices, which is deliberate. Mayong in Morigaon district and Kamakhya Temple in Guwahati are run by the same person, and having two numbers would only make it easier for somebody else to pose as one of them.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Can I visit without calling first?</summary><div class="faq__a"><p>You can, but calling first saves you a wasted trip. The Kamakhya Temple office in Guwahati is easier to reach and has set visiting hours. The Mayong ashram is off the main road and you need a meeting point in advance, so a call is genuinely necessary there.</p></div></details>
      <details class="faq__item"><summary class="faq__q">Mayong to Kamakhya Temple, how far is it?</summary><div class="faq__a"><p>Approximately 40 kilometres by road, and about an hour and a half in normal traffic. Many people combine the two in one trip: the horoscope reading in Guwahati first, and the Mayong ashram visit on the same day or the next if an appointment can be made.</p></div></details>
    </div>
  </div>
</section>`
});

module.exports = pages;
