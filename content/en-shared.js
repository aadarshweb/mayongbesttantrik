/* ==========================================================================
   content/en-shared.js - English chrome, nav, and the SERVICE REGISTRY.

   Everything user-facing about services (homepage rows, services hub, footer
   list, SEO link index, ItemList schema) is DERIVED from the SERVICES array
   below. Add a service there and it appears everywhere. This exists because
   the previous build had hand-maintained lists that silently drifted.
   ========================================================================== */
const U = require('./ui.js');

/* ------------------------------------------------------------------------
   THE SERVICE REGISTRY
   cat    = group label used in the services hub and the link index
   tags   = the location keywords shown on the card
   hi     = true if a Hindi page exists (enables hreflang pairing)
   ------------------------------------------------------------------------ */
const SERVICES = [
  // --- black magic & protection ---
  { slug: 'black-magic-removal-kamakhya', blurb: 'Removal of black magic, evil eye, jadu tona and bhoota, worked on with puja at Kamakhya Temple and a daily practice you can carry on yourself. You are told what to expect in writing before anything starts.', file: 'black-magic-removal-kamakhya.html', cat: 'Black magic &amp; protection', title: 'Black magic removal at Kamakhya Temple', short: 'Black magic removal Kamakhya', tags: ['Kamakhya', 'Guwahati'], hi: true, tag: 'Kamakhya', permah: 'हरियाली तिला' },
  { slug: 'dosha-correction-kamakhya', blurb: 'Every dosha in the birth chart read properly, then worked on with dosha nivarana puja at Kamakhya and written remedies. Where a dosha is mild or cancelled by the other chart, that is said plainly.', file: 'dosha-correction-kamakhya.html', cat: 'Black magic &amp; protection', title: 'Kundali dosha correction and manglik dosh nivarana', short: 'Dosha correction', tags: ['Kamakhya', 'Manglik'], hi: true, tag: 'Dosha', permah: 'दोष निवारण' },
  { slug: 'pandit-and-puja-booking-kamakhya', blurb: 'Rituals arranged at the Shakti Peetha itself and performed by the temple priests. Navagraha, Maha Mrityunjaya, homa and festival puja, with the price agreed in writing before anything is booked.', file: 'pandit-and-puja-booking-kamakhya.html', cat: 'Black magic &amp; protection', title: 'Puja, homa and priest booking at Kamakhya Temple', short: 'Puja &amp; pandit booking', tags: ['Kamakhya', 'Ritual'], hi: true, tag: 'Puja', permah: 'पूजा बुकिंग' },

  // --- love & relationships ---
  { slug: 'love-problem-solution-kamakhya', blurb: 'For couples separated by family opposition, distance, betrayal or a third person. Both horoscopes read together, so the advice follows what the charts actually show rather than a guess.', file: 'love-problem-solution-kamakhya.html', cat: 'Love &amp; relationships', title: 'Love problem solution in Kamakhya Temple', short: 'Love problem solution', tags: ['Kamakhya', 'Assam'], hi: true, tag: 'Love', permah: 'प्रेम समस्या' },
  { slug: 'lost-love-recovery-kamakhya', blurb: 'For separation caused by fear, family or an outside obstruction. Told plainly which of the four possible causes this is, and where the relationship has genuinely finished that is said before any payment.', file: 'lost-love-recovery-kamakhya.html', cat: 'Love &amp; relationships', title: 'Lost love recovery and getting someone back', short: 'Lost love recovery', tags: ['Guwahati', 'Mayong'], hi: true, tag: 'Lost love', permah: 'प्रेम वापसी' },
  { slug: 'relationship-solution-kamakhya', blurb: 'For the same argument repeating, for coldness, for suspicion, and for family pressure that has entered the marriage. Both charts read, and often the answer is a conversation rather than a puja.', file: 'relationship-solution-kamakhya.html', cat: 'Love &amp; relationships', title: 'Relationship solution for couples in Kamakhya', short: 'Relationship solution', tags: ['Kamakhya', 'Couples'], hi: true, tag: 'Relationship', permah: 'रिश्ता समाधान' },
  { slug: 'husband-wife-dispute-mayong', blurb: 'Marriage work combining astrological and tantric practice, for families under strain from in-laws, property, dowry or suspected outside interference. Both partners are welcome, and usually should attend.', file: 'husband-wife-dispute-mayong.html', cat: 'Love &amp; relationships', title: 'Husband wife dispute solution in Mayong', short: 'Husband wife dispute', tags: ['Mayong', 'Assam'], hi: true, tag: 'Marriage', permah: 'पति-पत्नी विवाद' },
  { slug: 'kundli-milan-match-making', blurb: 'Both charts compared on the seventh house, upapada, nakshatra and current dasha, plus dosha milan and griha pravesh muhurat chosen from the two charts together rather than from a calendar.', file: 'kundli-milan-match-making.html', cat: 'Love &amp; relationships', title: 'Kundli milan and griha pravesh muhurat', short: 'Kundli milan &amp; match making', tags: ['Guwahati', 'Mayong'], hi: true, tag: 'Kundli', permah: 'कुंडली मिलान' },

  // --- money & work ---
  { slug: 'vashikaran-specialist-mayong', blurb: 'Mayong tradition vashikaran, used the old way for direction, focus and clearing obstacles. Applied to business, career and family, and to relationships where both people agree to the work being done.', file: 'vashikaran-specialist-mayong.html', cat: 'Money, work &amp; property', title: 'Vashikaran specialist in Mayong, Assam', short: 'Vashikaran specialist', tags: ['Mayong', 'Morigaon'], hi: true, tag: 'Vashikaran', permah: 'वशीकरण' },
  { slug: 'business-problem-solution-mayong', blurb: 'For a shop or business that will not turn. The chart is read to establish the timing, and the operational causes are named, because most losing businesses are losing for ordinary reasons.', file: 'business-problem-solution-mayong.html', cat: 'Money, work &amp; property', title: 'Business problem solution and dukan band removal', short: 'Business problem solution', tags: ['Mayong', 'Assam'], hi: true, tag: 'Business', permah: 'व्यापार समस्या' },
  { slug: 'career-and-job-astrology-guwahati', blurb: 'For a career going nowhere, a choice between offers, an interview, a promotion, a student choosing a course, or a decision about going abroad. The narrow claim is the one that holds up.', file: 'career-and-job-astrology-guwahati.html', cat: 'Money, work &amp; property', title: 'Career, job and foreign settlement astrology', short: 'Career &amp; job astrology', tags: ['Guwahati', 'Assam'], hi: true, tag: 'Career', permah: 'करियर ज्योतिष' },
  { slug: 'vastu-consultation-guwahati', blurb: 'For a home, shop or office where something feels persistently wrong. Practical corrections ranked by impact, and vastu shanti only where a reading warrants it. No demolition advice, ever.', file: 'vastu-consultation-guwahati.html', cat: 'Money, work &amp; property', title: 'Vastu consultation and vastu shanti for home and shop', short: 'Vastu consultation', tags: ['Guwahati', 'Assam'], hi: true, tag: 'Vastu', permah: 'वास्तु परामर्श' },

  // --- family & health ---
  { slug: 'child-birth-and-putra-santan', blurb: 'Conception muhurat, IVF cycle timing and a proper reading of both charts. A medical evaluation always comes first, and that is said at the start rather than at the end.', file: 'child-birth-and-putra-santan.html', cat: 'Family, health &amp; legal', title: 'Child birth, putra santan and IVF astrology', short: 'Child birth &amp; putra santan', tags: ['Kamakhya', 'Guwahati'], hi: true, tag: 'Children', permah: 'संतान' },
  { slug: 'court-case-and-legal-aid-guwahati', blurb: 'For family and property disputes where timing matters and where the stress of the case is affecting your judgement. Read alongside a lawyer, and never presented as a substitute for one.', file: 'court-case-and-legal-aid-guwahati.html', cat: 'Family, health &amp; legal', title: 'Court case and legal matter astrology', short: 'Court case &amp; legal aid', tags: ['Guwahati', 'Kamakhya'], hi: true, tag: 'Legal', permah: 'मुकदमा' },
  { slug: 'name-correction-and-numerology', blurb: 'A name worked out from the janam patrika rather than from a table of lucky numbers, with numerology and both palms read alongside the chart. The astrological side only, not the paperwork.', file: 'name-correction-and-numerology.html', cat: 'Family, health &amp; legal', title: 'Name correction, numerology and palm reading', short: 'Name correction &amp; numerology', tags: ['Assam', 'Guwahati'], hi: true, tag: 'Numerology', permah: 'नाम सुधार' }
];

const bySlug = (s) => SERVICES.find(x => x.slug === s);
const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'services.html', label: 'Services' },
  { href: 'best-tantrik-mayong.html', label: 'Best Tantrik in Mayong' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'contact.html', label: 'Contact' }
];

const PROCESS = [
  { title: 'First conversation', body: 'A phone call of fifteen to twenty minutes. You describe the problem in your own words. Nothing is promised and nothing is charged.' },
  { title: 'Chart and dosha reading', body: 'Your janam patrika is read properly, along with the other person\'s kundali where one is needed. Planetary afflictions are separated from coincidence.' },
  { title: 'Diagnosis and honest advice', body: 'You are told what is likely causing it, what is not, what can realistically change, and what cannot. If the answer is that you do not need this, that is what you will hear.' },
  { title: 'Ritual, if one is needed', body: 'Only if a ritual is genuinely the right tool. Mostly puja at Kamakhya Temple or the Mayong ashram, with simple daily sadhana given to you in writing.' }
];

const TESTIMONIALS = [
  { text: 'I had spent four years with a black magic work in Guwahati and got nothing. Atul Nath baba read my kundali in ten minutes and said the dosha was in the seventh house, which nobody else had mentioned. Six weeks of puja and the fear has not come back.', by: 'Rajiv M., Uzan Bazar, Guwahati' },
  { text: 'We came about a child dispute that had reached court. He refused to do any black magic work and did a graha shanti with both of us present instead. Two years on, the case is closed.', by: 'Sunita P., Uzan Bazar, Guwahati' },
  { text: 'What I appreciated most was that the price was agreed before the puja and nothing extra was asked for afterwards. My shop had a problem for two years. It is steady now.', by: 'Ramesh D., Silchar' }
];

/* rows for the numbered list on the homepage / services hub */
const row = (s) => ({
  title: s.title,
  body: s.blurb,
  url: s.file,
  cta: s.short,
  tags: s.tags
});
/* every service as a numbered row, in registry order */
const rows = (filter) => (filter ? SERVICES.filter(filter) : SERVICES).map(row);

const CATS = [];
for (const s of SERVICES) {
  let g = CATS.find(c => c.cat === s.cat);
  if (!g) { g = { cat: s.cat, links: [] }; CATS.push(g); }
  g.links.push({ url: s.file, label: s.short });
}

function chrome(over) {
  return Object.assign({
    prefix: '',
    lang: 'en',
    langHref: 'hi/index.html',
    brandName: 'Atul Nath',
    brandTag: 'Aghori Tantrik Baba',
    topLoc: 'Mayong, Morigaon &nbsp;&middot;&nbsp; Kamakhya Temple, Guwahati',
    topHours: 'Open daily 6:00 am - 10:00 pm',
    callNow: 'Call now',
    waNow: 'WhatsApp',
    contactCta: 'Request a callback',
    heroEyebrow: 'Kamakhya &amp; Mayong, Assam',
    heroH1: 'Best Tantrik in Kamakhya Temple &amp; Mayong <span class="accent">Atul Nath Aghori</span>',
    heroSub: 'Seventeen years of practice in Mayong and nine years of sadhana at Kamakhya Temple. Black magic removal, vashikaran, love and marriage work, and honest Vedic astrology.',
    note1: 'Consultation before any ritual',
    note2: 'No advance payment to book',
    note3: 'Calls answered 6 am to 10 pm',
    ctaTitle: 'Speak to Atul Nath before you decide anything',
    ctaBody: 'A short phone call is usually enough to know whether your problem is something that can be helped, and what it will take. There is no charge for the first conversation.',
    indexEyebrow: 'Every page on this site',
    indexTitle: 'Find the page that matches your situation',
    indexIntro: 'Each link below opens a page written for one specific problem at one specific place. Reading the right one first will save you time.',
    indexGroups: CATS.concat([{
      cat: 'Background reading',
      links: [
        { url: 'history-of-mayong-tantrik.html', label: 'What Mayong is famous for, and why' },
        { url: 'about-kamakhya-temple.html', label: 'About Kamakhya Temple and its tantric tradition' },
        { url: 'real-tantrik-assam.html', label: 'How to check whether a tantrik is genuine' },
        { url: 'gallery.html', label: 'Gallery: temples, lingams and offerings' },
        { url: 'about.html', label: 'About Atul Nath and his years of practice' }
      ]
    }]),
    footerAbout: 'Atul Nath',
    footerAboutBody: 'Aghori tantrik and Vedic astrologer working from Mayong in Morigaon district and Kamakhya Temple in Guwahati. Seventeen years in Mayong, nine years of sadhana at Kamakhya. The first consultation is free and confidential.',
    footerPages: 'Main pages',
    footerPagesList: [
      { url: 'index.html', label: 'Home' },
      { url: 'about.html', label: 'About Atul Nath' },
      { url: 'services.html', label: 'All ' + SERVICES.length + ' services' },
      { url: 'gallery.html', label: 'Gallery' },
      { url: 'contact.html', label: 'Contact and locations' }
    ],
    footerGuides: 'All services',
    footerGuidesList: SERVICES.map(s => ({ url: s.file, label: s.short })).concat([
      { url: 'history-of-mayong-tantrik.html', label: 'Mayong history' },
      { url: 'about-kamakhya-temple.html', label: 'About Kamakhya Temple' },
      { url: 'real-tantrik-assam.html', label: 'Finding a real tantrik' },
      { url: 'gallery.html', label: 'Gallery' }
    ]),
    footerContact: 'Contact',
    mapCaption: 'Kamakhya Temple, Malakhuwa, Guwahati, Assam 781010. Mayong ashram, Morigaon, Assam 782411, is about 40 km from here.',
    tag1: 'Best tantrik in Mayong',
    tag2: 'Black magic removal Kamakhya',
    tag3: 'Vashikaran specialist Mayong',
    footAddr: 'Mayong, Morigaon, Assam 782411. Kamakhya Temple Road, Guwahati, Assam 781010.',
    footHours: 'Daily 6:00 am to 10:00 pm. Walk-ins welcome at the Kamakhya Temple office.',
    rightsName: 'Atul Nath Aghori Tantrik',
    rights: 'All rights reserved.',
    nav: NAV
  }, over || {});
}

const cta = (title, body) => Object.assign(chrome(), { ctaTitle: title, ctaBody: body });

const processSection = (c) => U.processBlock(Object.assign(chrome(), {
  processEyebrow: 'The method',
  processTitle: 'What actually happens after you call',
  processIntro: 'There is no fixed ritual for every problem. This is the sequence, and how much of it you need depends entirely on what the diagnosis shows.',
  stepWord: 'Step',
  process: PROCESS
}));

const testiSection = () => U.testimonialBlock(Object.assign(chrome(), {
  testiEyebrow: 'In their words',
  testiTitle: 'What people said afterwards',
  testiIntro: 'Names shortened at the request of the people quoted. Every case is different and no result can be promised in advance.',
  testimonials: TESTIMONIALS
}));

const faqSection = (faqs, title) => U.faqBlock(faqs, title || 'Questions people ask first');

const pagehead = (eyebrow, h1, sub, over) => U.pagehead(Object.assign(chrome(over), { eyebrow, h1, sub }));

const crumb = (pairs) => pairs.map((p, i) => i === 0
  ? { name: p[1], href: p[2], url: '/' }
  : { name: p[1], url: p[2] });

module.exports = { SERVICES, bySlug, NAV, PROCESS, TESTIMONIALS, chrome, cta, row, rows, processSection, testiSection, faqSection, pagehead, crumb };
