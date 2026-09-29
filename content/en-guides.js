/* ==========================================================================
   content/en-guides.js - long-form informational pages (Article schema)
   plus the branded 404. Each guide targets its own informational keyword
   cluster and answers a question rather than selling a service.
   ========================================================================== */
const U = require('./ui.js');
const S = require('./en-shared.js');
const { PHONE, TEL, WA } = U;

const pages = [];
const D = '2026-09-29';

const byline = (dateLabel) => `<p class="muted" style="font-size:0.88rem;letter-spacing:0.04em;margin-top:20px">Written by Atul Nath Aghori Tantrik &middot; ${dateLabel} &middot; ${U.PHONE}</p>`;

/* ==================== 1. HISTORY / WHAT MAYONG IS FAMOUS FOR =========== */
pages.push({
  out: 'history-of-mayong-tantrik.html',
  canonical: '/history-of-mayong-tantrik.html',
  pair: '/hi/mayong-itihas.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  type: 'article',
  published: D,
  title: 'Mayong History | What Mayong Assam Is Famous For',
  desc: 'What is Mayong famous for? The history of Mayong in Assam, its tantric tradition, the 10 Mahavidyas and the mahavidya path. Read before you visit.',
  keywords: 'mayong is famous for, history of mayong, mayong assam history, what are the 10 mahavidyas, what is mahavidya path, mayong tantrik history, famous tantrik in mayong, mayong magic history, mayong morigaon tantra',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Mayong History', 'History of Mayong and what it is famous for', '/history-of-mayong-tantrik.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'about.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Reading about Mayong is free. Deciding about it is a phone call.',
  ctaBody: 'This page is written to let you judge the tradition from the outside, which is the point of it. If after reading it you want to talk to somebody who works there, the first call costs nothing.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'What is Mayong famous for?', a: 'Mayong, a small place in the hills of Morigaon district in Assam, is famous as a centre of tantra. It has been one for centuries, and the reason is partly that the Kachari or Deodhai tradition of the area kept a body of tantric knowledge that was preserved rather than destroyed. The word Mayong itself comes from the Deodhai language and is generally understood to mean a place of illusion or magic. It is not a tourist site. People come for consultations, not for sightseeing.' },
    { q: 'What are the 10 Mahavidyas?', a: 'The ten Mahavidyas are the ten principal forms of the Divine Mother or Shakti in Tantric Hinduism, each with a distinct character, colour, day of the week and association. The list varies slightly between the four Shakta lineages, but the core ten are: Kali, Tara, Mahakali, Kamakshi, Varamaheshwari, Mohini, V Mahalakshmi, Trishambari, Tripurasundari and Gayatri.' },
    { q: 'What is the mahavidya path?', a: 'The mahavidya path is the practice of working with one of the ten forms of the Divine Mother as your primary deity rather than treating the goddess as a single undifferentiated figure. It involves initiation from a competent teacher, daily practice specific to the chosen form, and the observance of that form\'s particular discipline. It is a serious path with a real structure, not a set of popular mantras.' },
    { q: 'Is the tantra of Mayong the same as Kamakhya tantra?', a: 'No, though they belong to the same region and are often confused. Mayong is a practice centred on method, mantra and scriptural discipline, and it grew in a landscape where the Kachari and later Vaishnavite traditions sat alongside older tantric knowledge. Kamakhya is a Shakti Peetha where the practice is centred on the goddess and on offering at the temple. They overlap and both belong here, and treating them as the same thing is a mistake.' }
  ],
  body: `${S.pagehead('Background', 'What Mayong Is Famous For, and How It Got That Way', 'A history of Mayong in Morigaon district, Assam: where the tantric tradition came from, what the word means, and what the practice there actually involves.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      ${byline('29 September 2026')}

      <p>Mayong is a small place in the hills of Morigaon district in Assam, roughly forty kilometres from Guwahati as the crow flies and further than that by the roads that actually connect it. It has a population counted in thousands, no tourist infrastructure, and almost no presence on a map. It is also, and this is the reason for this page, one of the recognised centres of tantra in north-east India. If you have searched for what Mayong is famous for, the answer is that, and the more interesting question is why it survived when much else did not.</p>

      <h2>The name</h2>
      <p>Mayong comes from the Deodhai language, spoken by the Kachari people of this region, and it is generally understood to mean a place of illusion or a place of magic. The word carries a double meaning in that it refers both to concealment and to deception, which is a fairly honest thing for a community to name itself after. A tantric tradition is a body of methods for working with forces that ordinary life does not show you, and both halves of that word apply.</p>
      <p>The Kacharis, who were the ruling people of the region before the Ahoms, brought their own religious practice with them, and the older animist and Shaiva elements of it were never completely displaced. Buddhism arrived in the twelfth and thirteenth centuries and stayed, and the whole religious landscape of the area became layered rather than a replacement sequence. When tantra took hold here, it did so in a landscape that already had a place for it, rather than having to create one.</p>

      <h2>Why a small place kept a tradition alive</h2>
      <p>There is a fairly obvious answer to why tantra is associated with Mayong rather than with a large city: it was never institutional enough to be suppressed and never wealthy enough to be noticed. There was no temple establishment to be broken up, no royal patronage to be appropriated, and no text of authority to be burned.</p>
      <p>What there was instead was transmission by lineage, from teacher to student, household to household, in a place with a stable population. That is a fragile way to hold knowledge and also an extraordinarily durable one. When a system of knowledge is carried by families rather than by institutions, it survives bad decades rather than bad rulers. A temple can be sacked. A lineage that has been teaching the same thing in the same families for five or six hundred years has a much better chance of still being there.</p>
      <p>This is also the reason the practice that survived here is a disciplined one. In a place with no audience, there is no point in performing, because nobody is watching. What is left is the method itself, and the method turns out to consist of study, mantra and discipline rather than of spectacle.</p>

      <h2>What the practice actually involves</h2>
      <p>It is worth being specific, because the popular image of this and of tantra generally has very little in common with what is done. A Mayong practice in its traditional form involves four things.</p>
      <p><strong>Scriptural study.</strong> The tradition was carried on palm-leaf manuscripts, the Assamese puti, and the material that survives is largely textual. The work begins with reading, not with ritual. A practitioner who has not read the material is not working from the tradition, whatever else they may be doing.</p>
      <p><strong>Mantra sadhana.</strong> Repetition of specific sound sequences, undertaken over years rather than minutes. This is a discipline of attention, and the results people describe from it are as much about the mind settling as about anything external.</p>
      <p><strong>Puja.</strong> Offering, done properly, with the correct materials and the correct timing. In a place with no temple, puja happens at a household shrine or in a small shrine, and the emphasis is on the offering being correct rather than on the size of the occasion.</p>
      <p><strong>Darshan and consultation.</strong> Being seen, and having the chart read. This is the part the public knows, and it is the smallest part of the practice, and the part most easily copied by people who have not done the other three.</p>
      <p>That ordering is the point. A person who goes straight to the fourth without the first three is not doing a Mayong practice. They may be doing something, and it may or may not be effective, but it is not this, and no amount of advertising changes what is underneath it.</p>

      <h2>The 10 Mahavidyas</h2>
      <p>The most searched informational question connected with this region is what the 10 Mahavidyas are, so it is worth answering properly. They are the ten principal forms of the Divine Mother, or Shakti, in Tantric Hinduism, each of which has a distinct character, a colour, a day of the week, a direction, a mantra and a set of associated practices.</p>
      <p>The list varies a little between the four Shakta lineages of the Shakta and Sakta traditions, and lists you find online will differ. The core ten, which is what most people are asking about, are Kali, Tara, Mahakali, Kamakshi, Varamaheshwari, Mohini, Mahalakshmi, Trishambari, Tripurasundari and Gayatri. Each is understood to have a different temperament and a different relationship to the practitioner, and working with one as a primary deity rather than treating the goddess as a single figure is a real structural difference, not a stylistic one.</p>
      <p>Each mahavidya also carries a specific discipline. Some are associated with practices that are socially severe, some with ones that are gentle, and the whole point of choosing a particular form is that it is supposed to match the person doing the choosing. Choosing a form because it is popular is a contradiction, and it is a common one.</p>

      <h2>What the mahavidya path is</h2>
      <p>Related to the above, and also frequently searched, is the mahavidya path. This is the practice of taking one of the ten forms of the Divine Mother as your primary deity and working with that form specifically, rather than approaching the goddess in general terms.</p>
      <p>Structurally it has three parts. Initiation, which has to come from a competent teacher and cannot be self-administered or bought. Daily practice specific to the chosen form, which is a fixed set of actions to be done at a fixed time. And observance of that form's particular discipline, which may involve restrictions on food, on solitude, on speech, or on timing, and which is the least popular and most important part.</p>
      <p>It is a serious path with real structure, and it is not a collection of mantras to try. The reason this is written on a page that is otherwise about history is that it is the part most often reduced to a shopping list, and the reduction is what makes it useless.</p>

      <h2>Mayong and Kamakhya are not the same thing</h2>
      <p>They sit forty kilometres apart and are constantly treated as one, and the conflation does neither of them any good. Mayong is a practice: a body of method, scriptural and disciplined, carried by lineage in a place. Kamakhya is a temple: a Shakti Peetha, one of the fifty-one, where the practice is centred on the goddess and on offering made at that specific place.</p>
      <p>People come to Mayong because the method is what they need. People come to Kamakhya because the place is what they need. Both are legitimate, they are not interchangeable, and anybody who claims a single technique covers both is not being precise about either.</p>

      <h2>What Mayong is not</h2>
      <p>Mayong is not a tourist destination, and pages describing it as a place to visit, with resorts and sightseeing, are describing something that does not exist as far as this tradition is concerned. It is not a place where one goes to have something removed from one's life by a stranger, and the framing of a practitioner as somebody who deals in removal rather than as somebody who diagnoses and works with what is found is the single most common distortion in the popular image.</p>
      <p>Nor is it a place where guarantees are available. Any practitioner who can guarantee an outcome in advance is not working from the tradition, because the tradition is built on the understanding that some things can be worked on and some cannot, and that telling the difference is the work.</p>
      <p>What it is, in the end, is a small place in Assam that kept a disciplined body of knowledge intact for longer than most places managed, and that is genuinely worth knowing about whether or not you ever visit.</p>

      <h2>If you are considering a visit</h2>
      <p>If after reading this you are considering going, the practical points are short. Mayong is in Morigaon district, Assam 782411, and the practice location is off the main road, so call before travelling and you will be given a meeting point. The first consultation is worth having before you travel at all, since it can be done by phone and it will tell you whether a visit is what you actually need.</p>
      <p>If you would rather read about the other place first, there is a page on Kamakhya Temple and the tantrik tradition attached to it, which covers the mythology, the yoni stone, the Ambubachi Mela and what actually happens at the temple.</p>
    </div>
  </div>
</article>

${S.faqSection([
  { q: 'What is Mayong famous for?', a: 'Mayong, a small place in the hills of Morigaon district in Assam, is famous as a centre of tantra. It has been one for centuries, and the reason is partly that the Kachari or Deodhai tradition of the area kept a body of tantric knowledge that was preserved rather than destroyed. The word Mayong itself comes from the Deodhai language and is generally understood to mean a place of illusion or magic. It is not a tourist site. People come for consultations, not for sightseeing.' },
  { q: 'What are the 10 Mahavidyas?', a: 'The ten Mahavidyas are the ten principal forms of the Divine Mother or Shakti in Tantric Hinduism, each with a distinct character, colour, day of the week and association. The list varies slightly between the four Shakta lineages, but the core ten are: Kali, Tara, Mahakali, Kamakshi, Varamaheshwari, Mohini, Mahalakshmi, Trishambari, Tripurasundari and Gayatri.' },
  { q: 'What is the mahavidya path?', a: 'The mahavidya path is the practice of working with one of the ten forms of the Divine Mother as your primary deity rather than treating the goddess as a single undifferentiated figure. It involves initiation from a competent teacher, daily practice specific to the chosen form, and the observance of that form\'s particular discipline. It is a serious path with a real structure, not a set of popular mantras.' },
  { q: 'Is the tantra of Mayong the same as Kamakhya tantra?', a: 'No, though they belong to the same region and are often confused. Mayong is a practice centred on method, mantra and scriptural discipline, and it grew in a landscape where the Kachari and later Vaishnavite traditions sat alongside older tantric knowledge. Kamakhya is a Shakti Peetha where the practice is centred on the goddess and on offering at the temple. They overlap and both belong here, and treating them as the same thing is a mistake.' }
], 'Mayong, asked and answered')}`
});

/* ========================= 2. ABOUT KAMAKHYA TEMPLE =================== */
pages.push({
  out: 'about-kamakhya-temple.html',
  canonical: '/about-kamakhya-temple.html',
  pair: '/hi/kamakhya-mandir.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  type: 'article',
  published: D,
  title: 'About Kamakhya Temple & Its Tantrik Tradition, Assam',
  desc: 'About Kamakhya Temple in Guwahati: the Shakti Peetha, the yoni stone, Ambubachi Mela and the tantrik tradition practiced there. Read this first.',
  keywords: 'about kamakhya temple, kamakhya temple tantriks, kamakhya mandir ka sabse bada tantrik, kamakhya mandir ke sabse bade tantrik, maa kamakhya mandir tantric, kamakhya mandir tantrik vidya, kamakhya temple history, kamakhya shakti peetha, ambubachi mela kamakhya',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['About Kamakhya Temple', 'About Kamakhya Temple and its tantrik tradition', '/about-kamakhya-temple.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'about.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Nine years at this temple, and a free first call',
  ctaBody: 'If you have read this far you probably have a question about your own situation. The first conversation is free and nothing is decided on it.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'Why is Kamakhya Temple important for tantriks?', a: 'Because of what it is rather than who visits it. Kamakhya is one of the fifty-one Shakti Peetha, places where the body of the goddess is understood to have fallen, and it sits on the Nilachal hill at the foot of which Guwahati was built. Working at a temple of that standing is understood to give a specificity that cannot be reproduced elsewhere, and it is the reason practitioners come here specifically rather than simply doing their work at home.' },
    { q: 'Who is the biggest tantrik at Kamakhya?', a: 'Nobody can answer that honestly, and the search for a kamakhya mandir ka sabse bada tantrik is really a search for an advertisement. There are many practitioners working in and around this temple, of very different quality, and the temple itself does not rank or endorse any of them. What can be checked is years of regular practice, whether the diagnosis precedes the ritual, and whether the practitioner will tell you when a problem is not a spiritual one.' },
    { q: 'What is the yoni stone at Kamakhya?', a: 'The temple is built around a stone that is held to be a part of the goddess Sati\'s womb, and it is covered by a stone fence with a small opening through which it is viewed. The belief is that the temple marks the place where the goddess was born from the body of Shiva, and that the annual menstruation of the goddess, observed at the Ambubachi Mela, is a celebration of creation and of the earth\'s fertility rather than anything shameful.' },
    { q: 'Can anybody perform puja at Kamakhya?', a: 'Puja is performed at the temple by its own priests, and that is the temple\'s own practice. What an outside practitioner such as Atul Nath does is arrange the offering through those priests and be present for it, with the diagnosis and the follow-up being his responsibility. That distinction matters, and it is one of the things that separates a real connection with the temple from a photograph taken in front of it.' }
  ],
  body: `${S.pagehead('Background', 'About Kamakhya Temple and Its Tantrik Tradition', 'A Shakti Peetha on Nilachal hill in Guwahati, the tradition that grew around it, and what the tantrik work there actually consists of.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      ${byline('29 September 2026')}

      <p>Kamakhya Temple stands on Nilachal hill on the northern edge of Guwahati, and it is one of the fifty-one Shakti Peetha. That designation is the single most important fact about it, and it means something quite specific: Kamakhya is a place where, in the account shared across the Shakta traditions, a part of the body of the goddess Sati fell when Shiva carried her corpse. The temple marks that place, and the whole of what happens there is built around that single idea.</p>

      <h2>The place itself</h2>
      <p>The temple sits on a hill with a commanding view over the Brahmaputra valley, which is why Guwahati developed where it did. The main temple is a stone structure in a Kerala-style architectural idiom, and inside it is a stone understood to be a part of the goddess. It is enclosed by a stone fence with a small opening, and the stone is viewed through that opening rather than directly.</p>
      <p>The central image is not anthropomorphic. There is no face, no limbs, no ordinary depiction of a goddess to look at. What is there is a yoni stone, and this is the feature of Kamakhya that surprises people arriving from more familiar temples, and it is also the feature that the tantric tradition here is built around.</p>

      <h2>Why the yoni stone matters</h2>
      <p>The narrative behind the site is that Sati, the wife of Shiva, died in Shiva's grief and was burned on his funeral pyre. Shiva carried her body and performed the tandava. From the different parts of her body, the various Shakti Peethas were formed, and at Kamakhya it is the womb, the yoni.</p>
      <p>Read carelessly this is a piece of mythology with a genital symbol at its centre, and it is regularly written about in terms chosen to make the writer sound shocked or clever. Read the way it is actually understood in the tradition, it is something more interesting than either. Kamakhya is understood as the place of origin rather than of loss. The goddess is not buried there, she is <em>born</em> there, out of Shiva's body, and the yoni stone is the organ of that birth. Creation happens through it rather than being ended by it.</p>
      <p>That is why the temple is a Shakti Peetha at all, and it is also why the tantric tradition attached to this place tends to concentrate on generation, fertility, and the capacity to produce life, rather than on protection or destruction. Practises done at Kamakhya are frequently about creation, of a child, of a business, of a family, of a future, and a great many people arrive expecting a removal ritual and are surprised to be offered something about beginnings.</p>

      <h2>Ambubachi Mela</h2>
      <p>Once a year, usually in June, the temple closes for three days for the Ambubachi Mela, and reopens for the Ambubachi Puja. The period is understood as the annual menstruation of the goddess, and the closing is a cessation of all activity, with the temple doors shut and the ground believed to be unfit for work. When it reopens, the Ambubachi Puja runs for several days and is a period of considerable activity and crowd.</p>
      <p>The understanding attached to it in the tradition is that the earth's fertility is suspended during those three days and restored at the reopening, which is why the new agricultural year begins from that point. There is nothing improper in the framing. The event is treated as a celebration of creation and of the earth's capacity to produce, and the crowds who attend it are a mix of devotees, families, and a great many people who have come to have their horoscopes read.</p>

      <h2>The tantrik tradition at the temple</h2>
      <p>People searching for kamakhya mandir tantrik vidya, or for the kamakhya mandir ke sabse bade tantrik, tend to expect a single figure. It is worth saying plainly that there is no such thing, and that the search is usually a search for an advertisement rather than for a person. There are many practitioners of very different quality working in and around this temple, the temple does not rank or endorse any of them, and the most visible ones are frequently not the most experienced.</p>
      <p>What the tradition attached to Kamakhya actually is: work done before the goddess, at a Shakti Peetha, with the offering made through the temple's own priests. The diagnosis and the follow-up are the practitioner's responsibility; the offering is the temple's. That distinction is a real one, and it is the clearest thing separating a genuine connection with Kamakhya from a photograph taken in front of it.</p>
      <p>It is also why location by itself proves nothing. Plenty of people work near this temple who have no practice at all, in the same way that plenty of people near any temple do. What can be checked is years of regular attendance and sadhana, whether the diagnosis comes before the ritual, and whether the practitioner will tell you honestly that your problem is medical or legal rather than spiritual.</p>

      <h2>What is done here</h2>
      <p>Atul Nath has been in regular sadhana at Kamakhya Temple since 2017, which is nine years, and works from an office on Kamakhya Temple Road at Malakhuwa in Guwahati. The work offered is black magic and evil eye removal, love problem and love marriage dosha work, husband wife dispute work, and horoscope reading on its own.</p>
      <p>Where the problem calls for it, the offering is made at the temple through its priests, with the practitioner present, and the daily practice that follows is given in writing. A ritual without a practice to carry on afterwards is a single day's expense, and the practice is normally what holds a change in place. That is the part most practitioners in this line leave out, and it is not a small omission.</p>

      <h2>If you are planning a visit</h2>
      <p>Guwahati is well connected and Kamakhya is straightforward to reach from most of the city, being on the northern edge. The temple is open for darshan daily outside the Ambubachi period, and the surrounding area is busy throughout the year.</p>
      <p>For anyone outside Assam, the sensible order is to make the first call before travelling. The conversation can be had by phone, the horoscope reading is done remotely, and it will tell you whether a visit is what you actually need. Where a puja is required, somebody can attend on your behalf with written authorisation. Mayong, the other place this practice works from, is covered on its own page.</p>
    </div>
  </div>
</article>

${S.faqSection([
  { q: 'Why is Kamakhya Temple important for tantriks?', a: 'Because of what it is rather than who visits it. Kamakhya is one of the fifty-one Shakti Peetha, places where the body of the goddess is understood to have fallen, and it sits on the Nilachal hill at the foot of which Guwahati was built. Working at a temple of that standing is understood to give a specificity that cannot be reproduced elsewhere, and it is the reason practitioners come here specifically rather than simply doing their work at home.' },
  { q: 'Who is the biggest tantrik at Kamakhya?', a: 'Nobody can answer that honestly, and the search for a kamakhya mandir ka sabse bada tantrik is really a search for an advertisement. There are many practitioners working in and around this temple, of very different quality, and the temple itself does not rank or endorse any of them. What can be checked is years of regular practice, whether the diagnosis precedes the ritual, and whether the practitioner will tell you when a problem is not a spiritual one.' },
  { q: 'What is the yoni stone at Kamakhya?', a: 'The temple is built around a stone that is held to be a part of the goddess Sati\'s womb, and it is covered by a stone fence with a small opening through which it is viewed. The belief is that the temple marks the place where the goddess was born from the body of Shiva, and that the annual menstruation of the goddess, observed at the Ambubachi Mela, is a celebration of creation and of the earth\'s fertility rather than anything shameful.' },
  { q: 'Can anybody perform puja at Kamakhya?', a: 'Puja is performed at the temple by its own priests, and that is the temple\'s own practice. What an outside practitioner such as Atul Nath does is arrange the offering through those priests and be present for it, with the diagnosis and the follow-up being his responsibility. That distinction matters, and it is one of the things that separates a real connection with the temple from a photograph taken in front of it.' }
], 'Kamakhya Temple, asked and answered')}`
});

/* ====================== 3. HOW TO FIND A REAL TANTRIK ================= */
pages.push({
  out: 'real-tantrik-assam.html',
  canonical: '/real-tantrik-assam.html',
  pair: '/hi/asan-me-sachcha-tantrik.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  type: 'article',
  published: D,
  title: 'How to Find a Real Tantrik in Assam (Checklist)',
  desc: 'How to find a genuine tantrik in Assam and avoid fraud. Red flags, questions to ask, realistic prices and what no honest practitioner promises.',
  keywords: 'how to find a real tantrik in assam, real tantrik assam, best tantrik in assam, tantrik in assam, assam tantrik, how to avoid tantrik fraud, verify a tantrik',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Finding a Real Tantrik', 'How to find a real tantrik in Assam', '/real-tantrik-assam.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'about.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Use the checklist before you pay anybody, including us',
  ctaBody: 'Everything on this page applies to Atul Nath as much as to anybody else. If a practitioner fails the test, including this one, you should walk away.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'How can I tell if a tantrik is genuine?', a: 'You do not need any knowledge of tantra to do this. Ask what in your horoscope the work is based on, whether the first consultation is free, whether the price is agreed in writing before a date is fixed, and whether they will tell you if the problem is not a spiritual one. A genuine practitioner answers all four specifically. Somebody who cannot is not being mysterious; they have nothing specific to say.' },
    { q: 'What is the going rate for a tantrik in Assam?', a: 'A first consultation should be free or close to it. A full horoscope reading is a modest amount and should be quoted before it begins. Ritual work varies enormously with what is actually required, and an honest practitioner will not give a standard tariff, because a jadu tona, a bhoota and a placed nazar are three different jobs. What is not normal is a large figure demanded in advance to book a conversation.' },
    { q: 'Are tantrik testimonials and reviews real?', a: 'Some are and some are not, and it is very difficult to tell which. Treat them as marketing rather than evidence. A testimonial is worth nothing as proof of anything, and a website full of them is a sign that the practitioner relies on marketing rather than on reputation built over years at one address.' },
    { q: 'Should I avoid a tantrik who is very young?', a: 'Age is not the measure. There are excellent young practitioners and long-established frauds. Years of regular practice at a fixed address is a much better indicator than either age or the size of the advertisement.' }
  ],
  body: `${S.pagehead('Guide', 'How to Find a Real Tantrik in Assam', 'You do not need any knowledge of tantra to check whether a practitioner is genuine. You need six questions and a willingness to walk away. This page is the checklist.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      ${byline('29 September 2026')}

      <p>Most people in Assam who are about to hand money to a tantrik do so without any way of telling whether they are dealing with a serious practitioner or a fraud. That is not a failing of intelligence. The information required to judge does not appear anywhere the person is advertised, and the advertising is designed to replace it. This page is an attempt to put the information back.</p>
      <p>None of what follows requires you to know anything about tantra, astrology or ritual. It requires you to ask six questions and to be prepared to leave if the answers are unsatisfying. That is the whole method, and it works because the people who are honest can answer all of it.</p>

      <h2>The six questions</h2>
      <p><strong>1. What in my horoscope is this work based on?</strong> This is the most important question in this article, and it is the one that should end the conversation if it cannot be answered. A genuine practitioner will tell you a house, a planet, a mahadasha period, a dosha, something specific to your chart. A fraud will talk about energy, vibrations, negative surroundings, ancestral problems, or the heaviness in your aura. None of those are specific, and none of them can be wrong.</p>
      <p>If the answer is a question back to you, or a request for money, or a claim that they will understand after they meet you, that is an answer.</p>
      <p><strong>2. Is the first consultation free?</strong> It should be. A first conversation where you describe the problem and the practitioner asks questions establishes nothing that requires payment, and paying for it is a way of making leaving harder. A small fee for a genuine, lengthy horoscope reading is fine. A fee to book an introductory conversation is not.</p>
      <p><strong>3. Do I get the price in writing, before a date is fixed?</strong> Yes, and it should not change afterwards. A practitioner who cannot state a figure is not necessarily dishonest, since a real diagnosis has to come first, but they should say when the figure will be known and they should give it then. If the price appears only after a deposit has been taken, that is the answer.</p>
      <p><strong>4. Will you tell me if my problem is not spiritual?</strong> A genuine one will, and should be willing to say it before you pay. Roughly one in five people who contact a serious practice is sent to a doctor, a lawyer or the police instead, and they are not charged for being told that. A practitioner who never sends anybody anywhere is not diagnosing, they are selling.</p>
      <p><strong>5. Where exactly are you, and can I visit?</strong> A fixed address, in a place anybody can find, is a strong signal. So is being willing to be visited by somebody who comes to check first. Practitioners who will not give a location, or who insist that the work is done remotely because of confidentiality, are usually working out of a temporary arrangement and expecting to move.</p>
      <p><strong>6. Do you work on problems that need a doctor, a lawyer or the police?</strong> The right answer is no, and it is a fast one to give. A practitioner who is comfortable discussing what a black magic curse really is will be perfectly comfortable saying that certain complaints are not something they deal with.</p>

      <h2>Red flags</h2>
      <p>Any one of these is a reason for caution. Several together means you should leave.</p>
      <ul>
        <li><strong>A guaranteed outcome.</strong> Black magic removed in three days, a spouse returning within a week, a permanent guarantee of any kind. It cannot be done and the promise is the tell.</li>
        <li><strong>A large advance payment to book.</strong> Consultation, diagnosis and booking should not require a deposit of any size. This is the single most reliable signal of fraud.</li>
        <li><strong>Urgency.</strong> Today only, this offer expires tonight, the muhurat is closing. Time pressure prevents the checking that would expose the problem.</li>
        <li><strong>Secrecy about the work.</strong> Not being allowed to tell your family, or being asked to keep the visit secret, is how victims are isolated. Legitimate practitioners have nothing to hide and say so.</li>
        <li><strong>No address, or a constantly moving one.</strong> Same for a WhatsApp number that changes between contacts.</li>
        <li><strong>Payment to a personal account belonging to somebody else.</strong> Especially a young person, a woman, or somebody introduced as a student or assistant. This is a well-known pattern and the money rarely returns.</li>
        <li><strong>Bad or mismatched testimonials.</strong> Photographs that do not match, reviews that appear on several unrelated sites, or testimonials in which the person is unnamed and unverifiable. Treat all testimonials as marketing, not evidence.</li>
        <li><strong>Enormous, dramatic advertising.</strong> The largest advertisers in this line are almost never the practitioners with the most work. A website with a great deal on it is a marketing budget, and a marketing budget is a cost that has to come back out of the fees.</li>
        <li><strong>Rudeness about your doubt.</strong> Anyone who treats scepticism as an insult is asking you to stop verifying.</li>
      </ul>

      <h2>Green flags</h2>
      <p>These are not proof either, but together they are worth a lot.</p>
      <ul>
        <li>Years of practice in one place, mentioned as a date rather than a claim. Seventeen years in Mayong is a fact you can check; the best tantrik in India is not.</li>
        <li>A fixed address you can travel to, and an appointment system rather than a queue.</li>
        <li>Willingness to explain the diagnosis before quoting a price.</li>
        <li>Written remedies you keep, in your own language, that you can read and understand.</li>
        <li>Being told no. A practitioner who refuses work, or who says your problem needs a doctor, is demonstrating exactly the judgement you are looking for.</li>
        <li>A modest, quiet presence, with little or no advertising.</li>
        <li>Asking you questions about your situation before talking about what they would do.</li>
      </ul>

      <h2>What things should actually cost</h2>
      <p>There is no fixed tariff and an honest practitioner will not give you one, because a jadu tona, a bhoota, a placed nazar and a dosha remedy are four different jobs. What is normal is this: the first consultation is free or close to it. A full horoscope reading is a modest sum, quoted in advance. Ritual work varies and is agreed in writing. House visits cost extra and are quoted.</p>
      <p>What is not normal is a large figure demanded before anything has been diagnosed, a price that only appears after a deposit, or a fee that is a significant fraction of a year's income for a problem that may not be a spiritual one.</p>

      <h2>Being asked to do harm</h2>
      <p>Some requests are refused by every serious practitioner, and a practitioner who agrees readily to any of them is telling you something important about what they are doing. These include separating somebody from their spouse, influencing a person who is not aware of the work, and harming anyone at all. Where a relationship is concerned, both parties agreeing to the work is a condition, not a formality.</p>

      <h2>Applying this to us</h2>
      <p>This page is written by a practitioner, and it would be worth nothing if the standard were only applied to other people. So, applied to Atul Nath: nine years of regular sadhana at Kamakhya Temple and seventeen years of continuous practice in Mayong, both datable. A fixed office on Kamakhya Temple Road at Malakhuwa in Guwahati and a fixed ashram in Mayong, Morigaon district, both visitable. The first consultation is free. The price is agreed in writing before a date is fixed and does not change. He sends a fair number of callers to a doctor or a lawyer instead, and does not charge for saying so. He does not do work to harm anyone, and he does not do relationship work without both parties knowing.</p>
      <p>If any of that does not match what you experience, you should take your money back, and you would be right to.</p>
    </div>
  </div>
</article>

${S.faqSection([
  { q: 'How can I tell if a tantrik is genuine?', a: 'You do not need any knowledge of tantra to do this. Ask what in your horoscope the work is based on, whether the first consultation is free, whether the price is agreed in writing before a date is fixed, and whether they will tell you if the problem is not a spiritual one. A genuine practitioner answers all four specifically. Somebody who cannot is not being mysterious; they have nothing specific to say.' },
  { q: 'What is the going rate for a tantrik in Assam?', a: 'A first consultation should be free or close to it. A full horoscope reading is a modest amount and should be quoted before it begins. Ritual work varies enormously with what is actually required, and an honest practitioner will not give a standard tariff, because a jadu tona, a bhoota and a placed nazar are three different jobs. What is not normal is a large figure demanded in advance to book a conversation.' },
  { q: 'Are tantrik testimonials and reviews real?', a: 'Some are and some are not, and it is very difficult to tell which. Treat them as marketing rather than evidence. A testimonial is worth nothing as proof of anything, and a website full of them is a sign that the practitioner relies on marketing rather than on reputation built over years at one address.' },
  { q: 'Should I avoid a tantrik who is very young?', a: 'Age is not the measure. There are excellent young practitioners and long-established frauds. Years of regular practice at a fixed address is a much better indicator than either age or the size of the advertisement.' }
], 'Finding a real tantrik, asked and answered')}`
});

/* ============================== 7. 404 =============================== */
pages.push({
  out: '404.html',
  canonical: '/404.html',
  prefix: '', lang: 'en',
  priority: 0.1, changefreq: 'yearly',
  noindex: true,
  title: 'Page Not Found | Atul Nath Aghori Tantrik',
  desc: 'That page does not exist. Find black magic removal, love problem solutions, vashikaran and horoscope reading, or call +91 9365474087.',
  keywords: '',
  ogImage: 'hero_bg.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: null,
  c: S.chrome(),
  ctaTitle: 'The first call is free',
  ctaBody: 'If you reached this page looking for something specific, calling is faster than reading. Describe the problem and you will be told whether it can be helped.',
  faqs: [],
  body: `<section class="hero" style="min-height:70vh;display:flex;align-items:center">
  <div class="hero__media">
    <img src="images/hero_bg.jpg" width="1920" height="1080" alt="" aria-hidden="true">
  </div>
  <div class="hero__inner">
    <div class="hero__copy">
      <span class="eyebrow">Error 404</span>
      <h1>This page is not here</h1>
      <p class="hero__sub">The address you followed does not match anything on this site. That happens, and it is more common than it should be because these pages get moved around.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="index.html">Go to the home page</a>
        <a class="btn btn--ghost" href="tel:${TEL}">Call ${PHONE}</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="prose" style="max-width:760px">
      <h2>What you were probably looking for</h2>
      <p>If you were looking for something specific, it is on one of the pages below. If you were looking for something that is not here at all, calling is faster than reading.</p>
    </div>
    <div style="margin-top:40px">
      ${U.serviceRows(S.rows())}
    </div>
  </div>
</section>`
});

module.exports = pages;
