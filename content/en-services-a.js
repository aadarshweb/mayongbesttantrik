/* ==========================================================================
   content/en-services-a.js
   New service pages, set A: love, relationships, dosha, puja booking.
   Each owns a distinct keyword cluster. Copy is written per page.
   ========================================================================== */
const U = require('./ui.js');
const S = require('./en-shared.js');
const { PHONE, TEL, WA } = U;

const pages = [];

/* ==================== 1. LOST LOVE RECOVERY ========================== */
pages.push({
  out: 'lost-love-recovery-kamakhya.html',
  canonical: '/lost-love-recovery-kamakhya.html',
  pair: '/hi/lost-love-recovery-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Lost Love Recovery Kamakhya | Atul Nath 9365474087',
  desc: 'Lost love recovery and getting someone back, by Atul Nath at Kamakhya. Honest kundali reading first, no guaranteed results. Call +91 9365474087.',
  keywords: 'lost love, lost love recovery, get ex back, pyaar wapas, love breakup, prem vichar, best tantrik in guwahati, kamakhya mandir me tantrik, mayong tantrik, kamakhya tantrik contact',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Lost love recovery', 'Lost love recovery at Kamakhya', '/lost-love-recovery-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Nobody can make another person come back',
  ctaBody: 'What can be worked on is the cause of the separation, the effect of outside interference, and where you have landed. All three are read before anything is quoted.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Can a tantrik really bring back a lost lover?', a: 'Anyone who guarantees it is lying or has not understood your situation. What is genuinely worked on: a kundali dosha that produced the separation, an active jadu tona or third-party obstruction, and the person own state of mind. Where the relationship has genuinely finished, Atul Nath will say so on the first call rather than after payment.' },
    { q: 'How long does it take to get a sign of change?', a: 'Where a dosha is working, the effects of puja often show within days as a change in mood or a contact from the other side. A sustained reversal takes weeks, not hours. Anyone quoting seventy-two hours is selling you a timeline they do not control.' },
    { q: 'What if the person has completely blocked me?', a: 'That is common and it is not a dead end. A block usually means fear, and fear usually means something is wrong in the other person chart too. Both horoscopes are read. Where the blocking is coming from outside the relationship rather than from a decision, it is treated as a protection case instead of a return case, and it is priced differently.' },
    { q: 'Do I need both horoscopes for this?', a: 'Yes, without exception. A lost-love reading from one chart is guesswork, because the dosha that causes separation usually sits in the relationship between two charts. If the other person details are not available, the reading is limited and you will be told that before you pay for it.' }
  ],
  body: `${S.pagehead('Service', 'Lost Love Recovery at Kamakhya Temple', 'For separation caused by family, distance, a third party, or a dosha. Both horoscopes read, and told plainly where it can be worked on and where it cannot.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The honest position</span>
        <h2>Most lost-love cases are not a love problem</h2>
        <p>People search for lost love recovery because they have lost something. What they have usually lost is not a relationship but a situation, and the situation is often the result of something specific that could be identified if anyone had looked properly.</p>
        <p>Working through what actually causes separation, there are only a few real possibilities, and they need completely different treatment.</p>
        <p><strong>A dosha in one or both charts.</strong> The seventh house, the upapada or the navamsa can carry a affliction that produces a recognisable pattern: relationships that end at the same stage, partners who meet under the same bad transit, or a spouse who is repeatedly the one to leave. This is real, it can be identified, and remedies exist.</p>
        <p><strong>Outside obstruction.</strong> A third party, or a family member actively working against the relationship. Sometimes this has an energetic component, a jadu tona or a nazar deliberately applied. Where there is evidence of that, it is a protection case that happens to involve a relationship, and the treatment is different.</p>
        <p><strong>Fear.</strong> The other person is frightened, most often of losing face with family, of the practical consequences, or of what the charts show. Fear produces blocking, silence and sudden coldness that looks exactly like a decision. It is not a decision, and it can move.</p>
        <p><strong>A finished relationship.</strong> Some of these are finished. The other person has decided, or decided long ago and simply not said so. No ritual reaches this, and a practitioner who says otherwise is taking money for a result they know is not available.</p>
        <h2>What the reading establishes</h2>
        <p>Both janam patrikas are read. The seventh house of each, the upapada lagna, the navamsa, and the dasha both parties are in are examined together, because a dosha that separates people usually only shows up in the interaction between two charts, not in either alone.</p>
        <p>What comes out of that is written down plainly: which of the four situations above this appears to be, what the timing looks like, and what is realistic. Where a dosha is the cause, a puja is offered at Kamakhya Temple and daily sadhana is given. Where it is fear, that is a different conversation and often costs nothing.</p>
        <div class="callout" style="margin-top:28px">
          <p><strong>What is never done.</strong> No work is done to separate anybody from a spouse, and no vashikaran is used on a person who does not know about it. Where the request is for either, it is refused.</p>
        </div>
      </div>
      <div class="prose">
        <span class="eyebrow">How it is worked</span>
        <h3>The Kamakhya puja</h3>
        <p>Where a ritual is called for, it is offered at Kamakhya Temple rather than at a private shrine. The work is done before the goddess, through the temple priests, with Atul Nath present. It is not a guarantee of return, and anyone who sells it as one is misrepresenting what a puja can do.</p>
        <h3 style="margin-top:26px">What you get</h3>
        <ul>
          <li>Both horoscopes read together, not one chart guessed at</li>
          <li>A written statement of which of the four situations this is</li>
          <li>The doshas named specifically, and the ones that are not there</li>
          <li>Timing: what the charts say about the weeks and months ahead</li>
          <li>Puja at Kamakhya Temple where a ritual is genuinely the right answer</li>
          <li>Daily practice in Assamese, Hindi or English, given in writing</li>
        </ul>
        <h3 style="margin-top:26px">What it costs</h3>
        <p>The first phone call is free and no amount is quoted on it. A full reading of both charts is a separate, modest figure given before it begins. Ritual work is priced on what the ritual requires and agreed in writing before a date is fixed. There is no package called a guaranteed return, because no honest practitioner can offer one.</p>
        <h3 style="margin-top:26px">If it is a finished relationship</h3>
        <p>You will be told. It costs you one phone call and it is the single most useful thing this practice does, because most people spend months and a great deal of money finding out from a practitioner who was never going to be honest about it. Being told no, early and free, is worth having.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'Can a tantrik really bring back a lost lover?', a: 'Anyone who guarantees it is lying or has not understood your situation. What is genuinely worked on: a kundali dosha that produced the separation, an active jadu tona or third-party obstruction, and the person own state of mind. Where the relationship has genuinely finished, Atul Nath will say so on the first call rather than after payment.' },
  { q: 'How long does it take to get a sign of change?', a: 'Where a dosha is working, the effects of puja often show within days as a change in mood or a contact from the other side. A sustained reversal takes weeks, not hours. Anyone quoting seventy-two hours is selling you a timeline they do not control.' },
  { q: 'What if the person has completely blocked me?', a: 'That is common and it is not a dead end. A block usually means fear, and fear usually means something is wrong in the other person chart too. Both horoscopes are read. Where the blocking is coming from outside the relationship rather than from a decision, it is treated as a protection case instead of a return case, and it is priced differently.' },
  { q: 'Do I need both horoscopes for this?', a: 'Yes, without exception. A lost-love reading from one chart is guesswork, because the dosha that causes separation usually sits in the relationship between two charts. If the other person details are not available, the reading is limited and you will be told that before you pay for it.' }
])}`
});

/* ==================== 2. RELATIONSHIP SOLUTION ======================== */
pages.push({
  out: 'relationship-solution-kamakhya.html',
  canonical: '/relationship-solution-kamakhya.html',
  pair: '/hi/relationship-solution-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Relationship Solution Kamakhya | Atul Nath 9365474087',
  desc: 'Relationship solution for couples, read from both horoscopes at Kamakhya. Trust issues, fights, coldness, third parties. Call +91 9365474087.',
  keywords: 'relationship problem solution, relationship solution, couple problem, love couple problem, kamakhya mandir me tantrik, best tantrik in guwahati, kamakhya mandir tantrik vidya, tantrik in kamakhya temple',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Relationship solution', 'Relationship solution at Kamakhya', '/relationship-solution-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Bring both horoscopes, not just your side of it',
  ctaBody: 'A relationship problem read from one person is an opinion. Read from both charts it becomes a diagnosis, and the difference in cost is small.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'What kinds of relationship problems do you work on?', a: 'Recurring fights over the same small thing, growing cold and distant, suspicion that something has happened, family and in-law pressure, trouble settling after the wedding, and situations where a third party appears to be involved. What all of these have in common is a pattern, and a pattern can be traced to a chart.' },
    { q: 'Do both partners have to be present?', a: 'Strongly preferred, and usually necessary for anything involving a ritual. Where one partner is willing and the other is not, the reading can still be done from one chart, but it is limited, priced accordingly, and you are told that up front rather than discovering it afterwards.' },
    { q: 'Is a relationship reading just marriage compatibility?', a: 'No. Kundli milan is about whether two charts can work together in the abstract. This is about your specific relationship and what is actually happening in it, which is a different reading and often finds things a compatibility score would not.' },
    { q: 'Can you fix a relationship that is really over?', a: 'No, and that gets said. Some relationships have finished and the arguments are a way of negotiating the ending rather than avoiding it. Where that is the case you will be told, because staying in a dead relationship for another two years helps nobody.' }
  ],
  body: `${S.pagehead('Service', 'Relationship Solution for Couples at Kamakhya', 'For the same argument repeating, for coldness, for suspicion, for family pressure, and for a third party that may or may not exist. Both horoscopes, read together.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">What relationship work actually is</span>
        <h2>Six things people come with, and what causes each</h2>
        <p>Relationship consultations look repetitive because the problems repeat. What comes through the door is nearly always one of six situations, and each has a different cause and a different honest answer.</p>
        <p><strong>The same argument, every time, about something small.</strong> This is almost always a dosha in the seventh house or the upapada of one of the two charts, sitting in a dasha that keeps activating it. It is identifiable, and remedies work. It is one of the most reliably fixable presentations.</p>
        <p><strong>Coldness after the first year or two.</strong> Often a straightforward transit. When both partners are in periods that run at different tempos, one feels abandoned while the other feels criticised, and neither is wrong from where they are standing. This responds to timing advice more than to ritual.</p>
        <p><strong>Suspicion about a third party.</strong> Genuinely difficult to distinguish from ordinary insecurity without knowing the wider family context. Treated as a question to be examined, not an assumption to be acted on. Where there is actual evidence of interference it is treated as a protection case.</p>
        <p><strong>Family and in-law pressure that has entered the relationship.</strong> A dosha and a social problem usually together. Only the dosha part is a ritual matter, and pretending otherwise wastes money and delays the part that can actually be worked on.</p>
        <p><strong>Trouble settling after the wedding.</strong> Griha pravesh timing, which is one of the most genuinely useful and least expensive things an astrologer can tell you, and which is often the whole of the problem. That is covered on the kundli milan page.</p>
        <p><strong>Two people who are finished and arguing about the furniture.</strong> More common than anyone admits. Said plainly when it is found, because staying in a dead relationship for another two years helps nobody.</p>
        <h2>What the reading does</h2>
        <p>Both janam patrikas are read at the same time. The seventh house, the upapada lagna and the navamsa of each are examined, then the two dasha periods are compared, because a mismatch in timing explains a great deal of what people experience as a character flaw in their partner.</p>
        <p>What comes back is a written answer to a specific question: which of the six situations this is, what the timing looks like, and what is realistic. A graha shanti or a dosha puja is done at Kamakhya Temple only where a ritual is the right tool.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">The method</span>
        <h3>What both partners should do first</h3>
        <p>Write down the three things that actually matter to each of you, separately, before you speak to anyone. Not the complaints. The three things you would need to feel that this relationship is worth continuing. Almost nobody does this, and almost everybody finds the exercise clarifying on its own.</p>
        <h3 style="margin-top:26px">What both partners should bring</h3>
        <ul>
          <li>Date, time and place of birth, as accurately as possible</li>
          <li>Each partner's own horoscope, not one between the two of you</li>
          <li>A plain description of the pattern, not the last argument</li>
          <li>What has already been tried, and what it cost</li>
          <li>Whether anyone has previously blamed black magic for this</li>
        </ul>
        <h3 style="margin-top:26px">The part that is not astrology</h3>
        <p>Some of this is a communication problem wearing astrological clothing. If both partners are in the room, or on a three-way call, the reading usually ends with a direct conversation neither of them was willing to have, and that is frequently the actual solution.</p>
        <p>This is not a substitute for therapy and it is not presented as one. Where what is actually happening is anxiety, depression, trauma or an addiction, you will be sent to a doctor or a counsellor, and no ritual is offered, because a ritual will not touch any of those.</p>
        <h3 style="margin-top:26px">Cost and timing</h3>
        <p>The first call is free. A joint reading of both charts is quoted before it starts. Ritual work is agreed in writing before a date is fixed. Most couples who need a ritual need one, and most couples who do not need one are told so and charged for the reading only.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>One partner asking about the other alone.</strong> This happens constantly and it is nearly always a sign that a conversation has already ended inside the relationship. It can be read, but the answer is usually about the person asking rather than about the relationship.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'What kinds of relationship problems do you work on?', a: 'Recurring fights over the same small thing, growing cold and distant, suspicion that something has happened, family and in-law pressure, trouble settling after the wedding, and situations where a third party appears to be involved. What all of these have in common is a pattern, and a pattern can be traced to a chart.' },
  { q: 'Do both partners have to be present?', a: 'Strongly preferred, and usually necessary for anything involving a ritual. Where one partner is willing and the other is not, the reading can still be done from one chart, but it is limited, priced accordingly, and you are told that up front rather than discovering it afterwards.' },
  { q: 'Is a relationship reading just marriage compatibility?', a: 'No. Kundli milan is about whether two charts can work together in the abstract. This is about your specific relationship and what is actually happening in it, which is a different reading and often finds things a compatibility score would not.' },
  { q: 'Can you fix a relationship that is really over?', a: 'No, and that gets said. Some relationships have finished and the arguments are a way of negotiating the ending rather than avoiding it. Where that is the case you will be told, because staying in a dead relationship for another two years helps nobody.' }
])}`
});

/* ==================== 3. DOSHA CORRECTION ============================= */
pages.push({
  out: 'dosha-correction-kamakhya.html',
  canonical: '/dosha-correction-kamakhya.html',
  pair: '/hi/dosha-correction-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Dosha Correction & Manglik Dosha | Kamakhya, 9365474087',
  desc: 'Kundali dosha correction and manglik dosh nivarana at Kamakhya Temple. Gun dosha, kundali dosh and real remedies by Atul Nath. Call +91 9365474087.',
  keywords: 'manglik dosha, manglik dosh nivarana, kundali dosha, dosha correction, gun dosha, dosh pariksha, kamakhya mandir me tantrik, kamakhya mandir tantrik vidya, kamakhya mandir tantrik puja, kamakhya tantrik',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Dosha correction', 'Kundali dosha correction at Kamakhya', '/dosha-correction-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'A dosha is a chart position, not a curse',
  ctaBody: 'A dosha is a placement in a birth chart. It is read, named and worked on like anything else in the chart, and it is not a sentence about your life.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'What is a manglik dosha actually?', a: 'A manglik dosha is a combination of planetary placements in the birth chart, traditionally identified from the seventh house and certain houses from it, that is considered to create difficulties in marriage. It is a chart position, not a character trait and not a sentence about anyone future. Most manglik doshas are found by matching two charts, which is why a dosha milan is often much less serious than the individual dosha suggested.' },
    { q: 'Does manglik dosha get fully removed?', a: 'Remedies reduce the effect and are traditionally done before marriage, when the chart is the only thing operating. A planetary placement in a birth chart does not disappear, and anyone promising total permanent removal of a chart position is overstating what is possible. What is offered is dosha nivarana puja with written remedies, and an honest account of what it does.' },
    { q: 'How much does dosha correction cost?', a: 'The dosha pariksha from the chart is the first step and is a modest amount quoted before it begins. The nivarana puja at Kamakhya Temple is priced according to the dosha and its severity, and agreed in writing before a date is fixed. Many people need the reading and the remedies rather than the puja, and are told so.' },
    { q: 'Why does my family believe in it more than my partner does?', a: 'Because the belief is usually inherited rather than examined, and because a family that is not sure of a match looks for a reason. That is understandable, and it is worth noticing that a dosha is a statement about planets, not about a family being unlucky. Both readings, done properly, settle the question faster than an argument.' }
  ],
  body: `${S.pagehead('Service', 'Kundali Dosha Correction and Manglik Dosh Nivarana', 'Dosha read from the birth chart properly, then worked on with puja at Kamakhya Temple and remedies you can carry on yourself. No dosha is claimed that is not in the chart.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Straightening this out</span>
        <h2>A dosha is a chart position. It is not a curse and not a character.</h2>
        <p>Almost everything written about dosha treats it as a property of a person, as though being born with a particular placement in the seventh house meant something about your character or your future. It does not. A dosha is a combination of planets in specific houses from specific points. That is all it is. It is a coordinate in a birth chart, read and worked on the way any other part of a chart is read.</p>
        <p>Two things follow from that, and both matter.</p>
        <p>The first is that a dosha is only meaningful in context. A manglik dosha is not a verdict on a person, and a dosha is not fully meaningful until the two charts being compared are read together. The same placement in two different charts can be a serious obstacle in one and completely absorbed in the other. The practice of declaring people manglik from an individual chart, without comparing, has done more harm to families than any other single piece of folk astrology.</p>
        <p>The second is that a dosha can be worked on. Dosha nivarana is an established practice precisely because a chart is a description of tendencies rather than a set of instructions, and tendencies can be modified by remedy, by ritual, and by timing. What cannot be done is removing a planetary placement from a birth chart, and anyone promising to remove one permanently is overstating what is available.</p>
        <h2>The doshas that come up most</h2>
        <p><strong>Manglik or Mangal dosha.</strong> The best known, and the one that causes the most damage, because it is used to refuse a match. Traditionally identified from the seventh house and the houses from it, with Mars the significator. It is treated seriously because it does need attention, and treated proportionately because it very often is not a bar to a marriage.</p>
        <p><strong>Gun dosha.</strong> A Bhuta dosha involving a count from the seventh house, or a kuta dosha between two charts. A mismatch between two kundalis, which is a compatibility question rather than a problem with either person.</p>
        <p><strong>Kala sarpa dosha.</strong> All planets hemmed between two nodes. Widely feared and much less serious than the fear attached to it, which is worth saying because the fear itself causes most of the damage.</p>
        <p><strong>Kaal Sarp and Pitra dosha.</strong> Family-related placements that in this tradition have a remedy attached involving ancestral rites, and where the work is often as much about the living family as about the chart.</p>
        <h2>What is done</h2>
        <p>The birth chart is read in full and every dosha present is listed. Where a second chart is involved, both are compared, because a dosha milan frequently removes a dosha that an individual reading had raised. The findings are given in writing.</p>
        <p>Where a remedy is warranted, dosha nivarana puja is performed at Kamakhya Temple, through the temple priests, with Atul Nath present. You are given remedies in writing in Assamese, Hindi or English, to be done before and around the marriage, and a time is identified that suits the chart rather than a date picked by a calendar.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>Dosha pariksha, the first step</h3>
        <p>A full reading of the birth chart to identify what is actually present. This is separate from the puja and is the most valuable part, because a great many people who arrive certain they have a serious dosha find out they have a mild one, or that their partner chart balances it, or that what they were told years ago was never in the chart at all.</p>
        <h3 style="margin-top:26px">The nivarana puja</h3>
        <p>Offered at Kamakhya Temple. What it is intended to do is reduce the effect of the placement and clear the way for the remedies to work, not to delete a planet from a birth chart. Priced by the dosha, agreed in writing, and never as a package with a guaranteed outcome.</p>
        <h3 style="margin-top:26px">What you need to bring</h3>
        <ul>
          <li>Date, time and place of birth, as accurately as you have them</li>
          <li>The other partner chart, for a dosha milan, before any conclusion is drawn</li>
          <li>What was told to you previously, and by whom, if you were told anything</li>
          <li>The intended date of marriage, if one has been fixed</li>
        </ul>
        <h3 style="margin-top:26px">For families refusing a match</h3>
        <p>Both charts are read and both are paid for as one job, because a dosha milan done on one chart is meaningless. If the result is that the dosha is mild or cancelled by the other chart, that is said plainly, in writing, and is usually enough.</p>
        <h3 style="margin-top:26px">If there is no dosha</h3>
        <p>Then there is no dosha, and no puja is offered. Finding that out is worth the price of the reading, because the alternative is paying for a remedy for a condition that was never there.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Manglik dosha and time.</strong> Remedies are traditionally done before marriage, while the chart is the only thing operating. Doing them after a wedding has been broken over one is a different and harder job, though not an impossible one.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'What is a manglik dosha actually?', a: 'A manglik dosha is a combination of planetary placements in the birth chart, traditionally identified from the seventh house and certain houses from it, that is considered to create difficulties in marriage. It is a chart position, not a character trait and not a sentence about anyone future. Most manglik doshas are found by matching two charts, which is why a dosha milan is often much less serious than the individual dosha suggested.' },
  { q: 'Does manglik dosha get fully removed?', a: 'Remedies reduce the effect and are traditionally done before marriage, when the chart is the only thing operating. A planetary placement in a birth chart does not disappear, and anyone promising total permanent removal of a chart position is overstating what is possible. What is offered is dosha nivarana puja with written remedies, and an honest account of what it does.' },
  { q: 'How much does dosha correction cost?', a: 'The dosha pariksha from the chart is the first step and is a modest amount quoted before it begins. The nivarana puja at Kamakhya Temple is priced according to the dosha and its severity, and agreed in writing before a date is fixed. Many people need the reading and the remedies rather than the puja, and are told so.' },
  { q: 'Why does my family believe in it more than my partner does?', a: 'Because the belief is usually inherited rather than examined, and because a family that is not sure of a match looks for a reason. That is understandable, and it is worth noticing that a dosha is a statement about planets, not about a family being unlucky. Both readings, done properly, settle the question faster than an argument.' }
])}`
});

/* ==================== 4. PUJA & PANDIT BOOKING ======================== */
pages.push({
  out: 'pandit-and-puja-booking-kamakhya.html',
  canonical: '/pandit-and-puja-booking-kamakhya.html',
  pair: '/hi/pandit-and-puja-booking-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Puja &amp; Pandit Booking Kamakhya Temple | 9365474087',
  desc: 'Puja, homa and pandit booking at Kamakhya Temple, Guwahati. Navagraha, Maha Mrityunjaya, Lalita and festival puja with written price. Call 9365474087.',
  keywords: 'kamakhya mandir puja, kamakhya pandit, puja booking kamakhya temple, navagraha puja, maha mrityunjaya puja, lalita puja, kamakhya mandir tantric, kamakhya mandir tantrik baba, puja in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Puja booking', 'Puja and pandit booking at Kamakhya', '/pandit-and-puja-booking-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Puja arranged, price agreed in writing first',
  ctaBody: 'Call with the date you have in mind and the puja you want. The price is agreed before anything is booked, and the priest who performs it is the temple own, not a substitute.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Who actually performs the puja at Kamakhya?', a: 'The temple own priests, which is the only form of puja at a Shakti Peetha that means what it is supposed to mean. Atul Nath arranges the offering through them and is present for it, with the diagnosis and any follow-up being his responsibility. The distinction matters and it is the clearest thing separating a real connection with Kamakhya from a photograph taken in front of it.' },
    { q: 'How much does puja at Kamakhya cost?', a: 'It varies with the puja, the number of days, and what has to be arranged. The figure is quoted over the phone before anything is booked and is put in writing, and it does not change afterwards. Temple fees, priest dakshina and material costs are included in the figure given to you rather than added afterwards.' },
    { q: 'Do I need to be there in person?', a: 'For a puja you want for yourself, being there is better and it is not always possible if you are travelling from outside Assam. Somebody can attend on your behalf with written authorisation, and the offering is made with your name and gotra. Call and it will be arranged properly.' },
    { q: 'Can you just book a priest without any consultation?', a: 'Yes. Ritual booking is offered on its own, with no diagnosis and no advice, and many people want exactly that. If during the booking it becomes clear that the puja is being used to cover a problem that is actually medical, legal or a family matter, that is said once and the booking still goes ahead if you want it.' }
  ],
  body: `${S.pagehead('Service', 'Puja, Homa and Priest Booking at Kamakhya Temple', 'Rituals arranged at the Shakti Peetha itself, performed by the temple priests. Price agreed in writing before booking, and no pressure attached to a consultation.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Ritual booking</span>
        <h2>Puja at the temple, not beside it</h2>
        <p>Kamakhya is a Shakti Peetha. What makes ritual here different is not the size of the gathering or the length of the chanting, it is that the offering is made at that specific place, before that specific deity, by the priests of that temple. Anything arranged through the temple therefore differs in kind from the same ritual performed in a room elsewhere, and it is worth knowing which one you are paying for.</p>
        <p>What this practice does is arrange the offering through the temple's own priests, be present for it, and handle the diagnosis and any follow-up that is needed. What it does not do is substitute a friend of a friend for the temple priests, which is the most common thing that happens to people booking rituals in a city and what makes the results, in either direction, unreliable.</p>
        <h2>What is arranged</h2>
        <p><strong>Navagraha puja.</strong> The nine planetary deities, the standard remedy for almost anything. Frequently requested before a journey, a new venture, an examination or a marriage, and genuinely one of the more useful things you can do if the chart says a period is heavy.</p>
        <p><strong>Maha Mrityunjaya puja.</strong> Longer, and the traditional choice for fear, anxiety and the sense of something wrong that has no identifiable cause. Where the anxiety is medical rather than spiritual, that is said, and a doctor is recommended first.</p>
        <p><strong>Lalita, Santoshi Mata, Shani and other specific deity pujas.</strong> Each of these has its own occasion and its own logic, and picking one because it is popular is how people end up performing rituals with no reason behind them. Tell me the situation and the puja gets chosen from the situation.</p>
        <p><strong>Homa.</strong> Where the chart and the timing support it and the person wants one. Not routine, and never sold as necessary.</p>
        <p><strong>Festival puja.</strong> Navratri, Durga Puja, Kali Puja and the Ambubachi period, when the temple is busiest and the dates go early. Booking well ahead matters more than anything else for those.</p>
        <h2>What it costs and how it is arranged</h2>
        <p>One phone call. Give the date you have in mind and the puja you want, or describe the situation and let the puja be chosen. The figure is quoted, put in writing, and does not change afterwards. Temple fees, priest dakshina and materials are inside that figure rather than added later.</p>
        <p>Advance payment is asked for once a date is fixed, which is a different thing from being asked for money to make an appointment. If anyone requests a deposit simply to discuss a booking, that is a different arrangement and not this one.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Booking</span>
        <h3>How to arrange one</h3>
        <ol>
          <li><strong>Call or WhatsApp</strong> with the date you have in mind and the puja you want.</li>
          <li><strong>Ask for the price</strong> and get it in writing before anything else.</li>
          <li><strong>Confirm the date</strong>, which is checked against the temple calendar and any festival period.</li>
          <li><strong>Attend, or authorise someone</strong> in writing to attend on your behalf with your details and gotra.</li>
          <li><strong>Collect the prasad</strong> and any written remedy or mantra given for the period.</li>
        </ol>
        <h3 style="margin-top:26px">Booking for someone else</h3>
        <p>Very common, and perfectly proper. Somebody who cannot travel can be represented. What is needed is their full name, their date and place of birth for the offering to be made astrologically, their gotra, and your written authorisation. Arrange it by phone and it is done properly rather than left to whoever is standing at the counter.</p>
        <h3 style="margin-top:26px">Timings and festivals</h3>
        <p>Dates are checked against the temple calendar, the moon, and the chart where a remedy is involved. During Ambubachi the temple closes for three days and reopens for the Ambubachi Puja, and the period is a bad time to book anything unrelated. Navratri, Durga Puja and Kali Puja fill up weeks in advance, and that is the single most common reason a preferred date is unavailable.</p>
        <h3 style="margin-top:26px">If you want a consultation too</h3>
        <p>It is available and often worth having, but it is not attached and not required. A great many people simply want a puja done properly and are better served by having one that is well chosen than by being talked into additional work. If a consultation is booked as well, the first phone conversation is free and the reading is quoted separately.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Temple office.</strong> Kamakhya Temple Road, Malakhuwa, Guwahati 781010. Daily 6:00 am to 10:00 pm. Call before travelling, particularly for festival dates and for the Ambubachi period.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.faqSection([
  { q: 'Who actually performs the puja at Kamakhya?', a: 'The temple own priests, which is the only form of puja at a Shakti Peetha that means what it is supposed to mean. Atul Nath arranges the offering through them and is present for it, with the diagnosis and any follow-up being his responsibility. The distinction matters and it is the clearest thing separating a real connection with Kamakhya from a photograph taken in front of it.' },
  { q: 'How much does puja at Kamakhya cost?', a: 'It varies with the puja, the number of days, and what has to be arranged. The figure is quoted over the phone before anything is booked and is put in writing, and it does not change afterwards. Temple fees, priest dakshina and material costs are included in the figure given to you rather than added afterwards.' },
  { q: 'Do I need to be there in person?', a: 'For a puja you want for yourself, being there is better and it is not always possible if you are travelling from outside Assam. Somebody can attend on your behalf with written authorisation, and the offering is made with your name and gotra. Call and it will be arranged properly.' },
  { q: 'Can you just book a priest without any consultation?', a: 'Yes. Ritual booking is offered on its own, with no diagnosis and no advice, and many people want exactly that. If during the booking it becomes clear that the puja is being used to cover a problem that is actually medical, legal or a family matter, that is said once and the booking still goes ahead if you want it.' }
])}`
});

/* ==================== 5. KUNDLI MILAN ================================ */
pages.push({
  out: 'kundli-milan-match-making.html',
  canonical: '/kundli-milan-match-making.html',
  pair: '/hi/kundli-milan-match-making.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Kundli Milan &amp; Griha Pravesh Muhurat | 9365474087',
  desc: 'Kundli milan, dosha milan and griha pravesh muhurat by Atul Nath in Guwahati. Match making and marriage timing from both charts. Call 9365474087.',
  keywords: 'kundli milan, kundli matching, match making, dosha milan, griha pravesh muhurat, shubh muhurat, marriage muhurat, best tantrik in guwahati, tantrik in guwahati, kamakhya mandir puja',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Kundli milan', 'Kundli milan, match making and griha pravesh muhurat', '/kundli-milan-match-making.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'The date matters as much as the match',
  ctaBody: 'Two charts can be compatible and still be married badly in a bad month. Griha pravesh timing is the cheapest useful thing on this whole site.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'How does kundli milan actually work?', a: 'Both birth charts are read and compared on a set of points, traditionally including the seventh house of each, the upapada lagna, the nakshatra, and the dasha each party is running. It is not a single score. The result is a written report of where the two charts agree, where they pull against each other, and what that means practically.' },
    { q: 'Is a low milan score a reason not to marry?', a: 'No, and this is the most misunderstood thing in the whole area. Most couples have a middling milan and a perfectly good marriage, because a chart is a set of tendencies and a marriage is made of two people deciding things. A serious dosha that actually blocks a match is rare and is a different matter from a mediocre score.' },
    { q: 'What is griha pravesh muhurat and why does it matter?', a: 'The time a married couple first enters their shared home. Tradition holds that starting a marriage in an unfavourable period sets a pattern for it, and practically the muhurat is chosen from both charts together rather than from a calendar. It is the least expensive and most reliably useful piece of work on this site, and many couples who had trouble settling simply had not chosen a date.' },
    { q: 'Can you find a match for me?', a: 'Astrologically, yes: both charts are read and a realistic picture of what the two charts can sustain is given, and where doshas exist they are worked on. A literal matrimonial bureau is not what this is, and anyone promising to find a bride or groom from a chart reading is selling something.' }
  ],
  body: `${S.pagehead('Service', 'Kundli Milan, Match Making and Griha Pravesh Muhurat', 'Both charts compared properly, dosha milan, and a marriage date chosen from the two charts together rather than from a calendar.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">How a milan is done</span>
        <h2>It is not a score, and a score is not the point</h2>
        <p>Kundli milan has a bad reputation for two reasons, and both are worth correcting before anyone pays for one.</p>
        <p>The first is that it is usually sold as a single number. Two charts are given a score out of some total, and the number is treated as a verdict. This is a distortion of a much more useful process. A real milan reads both charts in full and compares them on several separate points, each of which means something specific, and the result is a description of how two charts interact rather than a grade.</p>
        <p>The second is the assumption that a low score is a reason not to marry. It very rarely is. A middling milan with two people who are willing to do the work produces a good marriage, and a strong milan with two people who are not going to talk to each other produces a bad one. The chart describes tendencies; it does not decide anything, and anyone treating a milan score as a veto is making an astrological argument that astrology does not support.</p>
        <h2>What is actually compared</h2>
        <p>The seventh house of each chart and its lord, because this governs marriage most directly. The upapada lagna, which describes the substance of the married life. The nakshatra of the ascendant in each, which describes the character each brings. The dasha periods both parties are running at the present time, because a poor combination in one year is not the same as a poor combination over forty years. And the doshas in each, and in combination.</p>
        <p>Where the comparison finds something genuinely obstructive, dosha nivarana remedies and a puja are offered at Kamakhya Temple. Where it does not, that is said, and it is said in writing, because a written finding settles a family argument in a way that an opinion does not.</p>
        <h2>Match making</h2>
        <p>What can be done is the astrological part: both charts read, the combination assessed honestly, doshas worked on where they exist, and a clear statement of what these two charts can sustain together and what will need work.</p>
        <p>What is not offered is a matrimonial bureau. Nobody can locate a suitable bride or groom from a birth chart, and anyone who offers to is describing a data business dressed as astrology.</p>
        <h2>Griha pravesh muhurat</h2>
        <p>Separately from the milan and much more useful than most people expect. The time a couple first enters their shared home is chosen from both charts together, along with the moon and the panchang, rather than picked from a list of convenient dates. It costs very little and it is the single most common thing found missing in couples who married compatibly and then settled badly.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>What both parties need to provide</h3>
        <ul>
          <li>Date, exact time and place of birth for each person</li>
          <li>Where the time is uncertain, say so rather than guessing</li>
          <li>Whether a date has already been fixed, and who fixed it</li>
          <li>Any dosha either family already knows about</li>
          <li>For griha pravesh, the house and the approximate move-in date</li>
        </ul>
        <h3 style="margin-top:26px">On uncertain birth times</h3>
        <p>Birth time matters more for milan than for most other readings, and if it is wrong the seventh house reading is wrong. A rough time is worse than none, because it produces confident conclusions from wrong data. If the time is not known, that is stated and the reading is done on the parts of the chart that do not depend on it, which is still useful but is called something narrower.</p>
        <h3 style="margin-top:26px">On fixed marriage dates</h3>
        <p>Plenty of dates arrive already fixed by the families. Where a date is workable, it is confirmed and the muhurat adjusted as much as it can be. Where the date is genuinely poor for both charts, that is said once with the reason, and a better date within a reasonable window is offered. If the families will not move, the puja is arranged to support the date as it stands.</p>
        <h3 style="margin-top:26px">Cost</h3>
        <p>The first call is free. A full milan of both charts is quoted before it begins. Dosha nivarana puja and griha pravesh muhurat are separate and each is quoted before it is arranged. Nothing is bundled, and no date is held open on the promise of a payment.</p>
        <h3 style="margin-top:26px">For families from outside Assam</h3>
        <p>Most enquiries here come from outside the state, often from couples working in Delhi, Mumbai, the Gulf or further afield. Both charts are read remotely, the report is sent in writing, and where a puja is needed somebody can attend at the temple on your behalf with written authorisation. The muhurat can be worked out for wherever you are living.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>The most common finding.</strong> In a large share of the milan done here, the charts turn out to be compatible and the real problem is a date. That is a good outcome, and it is also a cheap one.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'How does kundli milan actually work?', a: 'Both birth charts are read and compared on a set of points, traditionally including the seventh house of each, the upapada lagna, the nakshatra, and the dasha each party is running. It is not a single score. The result is a written report of where the two charts agree, where they pull against each other, and what that means practically.' },
  { q: 'Is a low milan score a reason not to marry?', a: 'No, and this is the most misunderstood thing in the whole area. Most couples have a middling milan and a perfectly good marriage, because a chart is a set of tendencies and a marriage is made of two people deciding things. A serious dosha that actually blocks a match is rare and is a different matter from a mediocre score.' },
  { q: 'What is griha pravesh muhurat and why does it matter?', a: 'The time a married couple first enters their shared home. Tradition holds that starting a marriage in an unfavourable period sets a pattern for it, and practically the muhurat is chosen from both charts together rather than from a calendar. It is the least expensive and most reliably useful piece of work on this site, and many couples who had trouble settling simply had not chosen a date.' },
  { q: 'Can you find a match for me?', a: 'Astrologically, yes: both charts are read and a realistic picture of what the two charts can sustain is given, and where doshas exist they are worked on. A literal matrimonial bureau is not what this is, and anyone promising to find a bride or groom from a chart reading is selling something.' }
])}`
});

module.exports = pages;
