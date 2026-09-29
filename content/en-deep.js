/* ==========================================================================
   content/en-deep.js - service pages, location pages, long-form guides, 404
   Every page owns a distinct keyword cluster and carries copy written for it
   alone. No shared narrative blocks.
   ========================================================================== */
const U = require('./ui.js');
const S = require('./en-shared.js');
const { PHONE, TEL, WA } = U;

const pages = [];

/* ============================ 1. BLACK MAGIC REMOVAL ==================== */
pages.push({
  out: 'black-magic-removal-kamakhya.html',
  canonical: '/black-magic-removal-kamakhya.html',
  pair: '/hi/black-magic-removal-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Black Magic Removal Kamakhya Temple | 9365474087',
  desc: 'Black magic removal at Kamakhya Temple by Atul Nath, the best kamakhya tantrik. Jadu tona, evil eye and bhoota removal. Call +91 9365474087.',
  keywords: 'black magic removal kamakhya temple, kamakhya temple black magic, kamakhya black magic, best kamakhya tantrik, kamakhya mandir ke tantrik ka number, kamakhya mandir me tantrik, kamakhya temple tantriks, tantrik in kamakhya temple, kamakhya mandir tantrik baba, kamakhya mandir tantrik vidya',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Black Magic Removal', 'Black magic removal at Kamakhya Temple', '/black-magic-removal-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'If you think something has been done to you, start with a call',
  ctaBody: 'You do not have to be certain that it is black magic. Describe what is happening and you will be told what it most likely is, and what to do about it.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'How do I know if it is really black magic?', a: 'You usually cannot be certain, and most people who believe it is turn out to have a mixture of cause. Genuine works do have patterns: a sudden unexplained change in behaviour, a run of bad luck across unrelated areas of life at once, money or health problems that arrive with no logical cause, and a persistent heaviness in a house or room. A doctor, a lawyer or a counsellor can sometimes explain the same symptoms better than a tantrik can, which is why the diagnosis always comes first.' },
    { q: 'What happens during black magic removal at Kamakhya Temple?', a: 'The puja is performed at Kamakhya Temple, which is a Shakti Peetha, so the work is done before the goddess rather than at a private shrine. What is offered, how many days it runs, and what it costs are all agreed in writing beforehand. Afterward you are given a daily practice to carry on at home, and a follow-up call is included.' },
    { q: 'How long does it take to feel different?', a: 'Many people report a shift in sleep and in general heaviness within a few days of the puja, and a real change in their situation over a few weeks. It is not instant in the way advertisements suggest, and anybody promising otherwise is not being straight with you.' },
    { q: 'Can you come to my house to remove black magic?', a: 'House visits are sometimes needed, particularly where the problem is said to be in the building rather than in the person, and where a yantra or an object has been buried on the property. There is an additional charge for a visit and it is quoted before it is arranged.' },
    { q: 'What does black magic removal cost at Kamakhya?', a: 'The first consultation is free. After the diagnosis, the cost depends on what the work actually is, and it is written down and agreed before a date is fixed. There is no standard tariff because jadu tona, a bhoota and a placed nazar are three different jobs with three different prices.' }
  ],
  body: `${S.pagehead('Service', 'Black Magic Removal at Kamakhya Temple', 'Jadu tona, bhoota, evil eye and placed nazar, worked on with puja at Kamakhya and daily practice afterwards. Diagnosis first, price in writing, no guarantees.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Before anything else</span>
        <h2>Not everything called black magic is black magic</h2>
        <p>This is the most useful thing to say on a page about black magic removal at Kamakhya Temple, and it is the part most practitioners leave out.</p>
        <p>People arrive convinced they have been cursed. Sometimes they are right. More often what they describe is a combination of a genuine problem, a genuine problem they are not seeing, and a fear that has grown around the first one. Sudden financial collapse is frequently a family dispute or a bad business decision being read as an attack. A spouse turning cold is often a dosha in the seventh house, which is a chart matter rather than a tantric one, and is treated differently. Constant illness in one member of a household is very often something a doctor should see first.</p>
        <p>Black magic does exist in this tradition, and genuine works carry a signature. But a signature shared with medical, legal, emotional and financial problems is not a diagnosis. Atul Nath reads the horoscope and asks a lot of questions before he will call anything a tantric work, and a fair number of calls end with a recommendation to see a doctor or a lawyer instead.</p>
        <h2>What genuine black magic tends to look like</h2>
        <p>These are the patterns that do point towards a tantric cause, and they are worth taking seriously rather than explaining away:</p>
        <ul>
          <li>Two or three unrelated areas of life going wrong at once, with no common cause you can identify</li>
          <li>Sudden and complete changes in a person's behaviour, speech or attitude, especially with no physical cause</li>
          <li>Repeated nightmares, sleep that will not settle, or a persistent sense of something watching</li>
          <li>A heaviness that seems attached to a particular room, house or plot of land</li>
          <li>Illness or misfortune that follows a specific person or family through every place they move to</li>
          <li>Objects appearing in the house, buried items found on the property, or a yantra placed without explanation</li>
        </ul>
        <p>One of these on its own is a coincidence. Several together, and especially the first two, justify a proper look.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">What is done</span>
        <h3>Kamakhya temple tantrik vidya</h3>
        <p>Kamakhya is one of the fifty-one Shakti Peetha, and the practice at the temple is centred on the goddess rather than on technique. The puja for a black magic removal is offered there because of what that place is, not as a formality. Atul Nath has been in regular sadhana at Kamakhya since 2017, and this kind of work is done in that context rather than in a private room elsewhere.</p>
        <h3 style="margin-top:26px">The four stages</h3>
        <p><strong>Diagnosis.</strong> The janam patrika is read, the house or situation is assessed, and the work is identified for what it actually is.</p>
        <p><strong>Puja.</strong> Performed at Kamakhya Temple, or at the Mayong ashram where the problem is not temple related. The number of days and what is offered are decided before the date is fixed.</p>
        <p><strong>Daily practice.</strong> Given to you in writing, in Assamese, Hindi or English, to be done at home. This is the part that holds the change and it is the part most practitioners skip.</p>
        <p><strong>Follow-up.</strong> A call a few days later to see what has shifted and to adjust the practice if needed.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>If you cannot reach Kamakhya.</strong> The puja must be performed in person, but somebody can attend on your behalf with your written authorisation, and the daily practice works the same way from any distance.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Cost and timing</span>
      <h2>What it costs, and how long it takes</h2>
    </div>
    <div class="cols-3">
      <div class="card">
        <span class="card__num">Consultation</span>
        <h3>Free first call</h3>
        <p>Fifteen to twenty minutes on the phone, no charge, no obligation. If the answer is that you do not need a puja, that is what you will hear on this call.</p>
      </div>
      <div class="card">
        <span class="card__num">Ritual</span>
        <h3>Quoted after diagnosis</h3>
        <p>Jadu tona, bhoota and placed nazar are three different jobs at three different prices. The figure is written down and agreed before any date is fixed, and it does not change afterwards.</p>
      </div>
      <div class="card">
        <span class="card__num">Timing</span>
        <h3>Days, not hours</h3>
        <p>Many people notice a shift in sleep and general heaviness within a few days, and a real change in their situation over several weeks. Nothing completes in seventy-two hours, whatever you have been told elsewhere.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'How do I know if it is really black magic?', a: 'You usually cannot be certain, and most people who believe it is turn out to have a mixture of cause. Genuine works do have patterns: a sudden unexplained change in behaviour, a run of bad luck across unrelated areas of life at once, money or health problems that arrive with no logical cause, and a persistent heaviness in a house or room. A doctor, a lawyer or a counsellor can sometimes explain the same symptoms better than a tantrik can, which is why the diagnosis always comes first.' },
  { q: 'What happens during black magic removal at Kamakhya Temple?', a: 'The puja is performed at Kamakhya Temple, which is a Shakti Peetha, so the work is done before the goddess rather than at a private shrine. What is offered, how many days it runs, and what it costs are all agreed in writing beforehand. Afterward you are given a daily practice to carry on at home, and a follow-up call is included.' },
  { q: 'How long does it take to feel different?', a: 'Many people report a shift in sleep and in general heaviness within a few days of the puja, and a real change in their situation over a few weeks. It is not instant in the way advertisements suggest, and anybody promising otherwise is not being straight with you.' },
  { q: 'Can you come to my house to remove black magic?', a: 'House visits are sometimes needed, particularly where the problem is said to be in the building rather than in the person, and where a yantra or an object has been buried on the property. There is an additional charge for a visit and it is quoted before it is arranged.' },
  { q: 'What does black magic removal cost at Kamakhya?', a: 'The first consultation is free. After the diagnosis, the cost depends on what the work actually is, and it is written down and agreed before a date is fixed. There is no standard tariff because jadu tona, a bhoota and a placed nazar are three different jobs with three different prices.' }
])}`
});

/* ============================ 2. LOVE PROBLEM ========================== */
pages.push({
  out: 'love-problem-solution-kamakhya.html',
  canonical: '/love-problem-solution-kamakhya.html',
  pair: '/hi/love-problem-solution-kamakhya.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Love Problem Solution Kamakhya | Atul Nath 9365474087',
  desc: 'Love problem solution in Kamakhya Temple by Atul Nath. Love marriage, family opposition and separated couples. Call +91 9365474087.',
  keywords: 'love problem solution kamakhya, love problem solution in kamakhya temple, kamakhya mandir me tantrik, best tantrik in kamakhya, kamakhya mandir ke tantrik ka number, kamakhya temple tantriks, tantrik in kamakhya temple, kamakhya mandir tantrik puja',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Love Problem Solution', 'Love problem solution in Kamakhya Temple', '/love-problem-solution-kamakhya.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Bring both horoscopes and the picture becomes clear',
  ctaBody: 'Most love problems are a mix of chart and circumstance. A first call will tell you which part is which, and whether either can be worked on.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'Can a tantrik bring back someone who has gone?', a: 'Sometimes people come to Mayong or Kamakhya asking exactly that, and the honest answer is that no one should promise it. What can be worked on is the kundali dosha that created the separation, the effects of outside interference, and the person\'s own state of mind. Where the relationship is genuinely finished, Atul Nath will say so rather than take the work and the money.' },
    { q: 'My family is against the marriage. Can ritual fix that?', a: 'Rarely, and it would be wrong to sell you that it could. Family opposition is usually a mixture of caste, region, income, education or a previous accusation of black magic. Where there is a genuine dosha in the charts, remedies help with that part. Where the objection is purely social, no ritual changes it, and you will be told to spend your effort on the practical things that actually move families.' },
    { q: 'Do both people need to come?', a: 'For anything involving a relationship, yes if at all possible. Both horoscopes are needed to read the dosha properly, and a working done without the other person present is guesswork. If one partner is unwilling, that in itself is usually the answer to the question being asked.' },
    { q: 'What about love marriage pairs, where the issue is dosha?', a: 'This is the most common reason a love marriage is stopped. Gun dosha, manglik or an unsettled seventh house can be a genuine obstacle to a marriage being accepted by a family that believes in it. Both kundalis are read together, the actual doshas are identified, and remedies are given for those specifically. Where the charts are clean and the family still objects, that is said plainly.' }
  ],
  body: `${S.pagehead('Service', 'Love Problem Solution in Kamakhya Temple', 'Love marriage opposition, separated couples, and relationships where a third party or a family dispute is in the way. Both horoscopes read together.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">What this work really is</span>
        <h2>Love problems have causes, and the cause decides the treatment</h2>
        <p>Most people who search for a love problem solution in Kamakhya want one of four things, and the four need completely different treatment. It is worth being clear about which one you have before you call, because it changes everything.</p>
        <p><strong>Family opposition to a love marriage.</strong> By far the most common in this region. The question is whether the opposition is a real dosha that the family can sense, or a social objection dressed as one. Gun dosha, manglik dosha, an unsettled seventh house and certain combinations in the kundali are all things families genuinely worry about, and remedies for those exist. Caste, region, income and education are not doshas and no ritual touches them.</p>
        <p><strong>A third party.</strong> A spouse who has moved to somebody else, or a relationship where somebody outside is involved. This sometimes has an energetic component and sometimes it is simply a decision somebody has already made. The chart reading will usually show which.</p>
        <p><strong>Distance and drift.</strong> Couples who were not actually incompatible but drifted apart, often with distance and family involvement. This needs a reading and advice more than a ritual, and usually far less money.</p>
        <p><strong>A relationship troubles the other person.</strong> Unexplained heaviness, anxiety, bad luck around one partner, or a feeling that something is wrong in the house. That is not a love problem, it is a protection question, and there is a separate page for it.</p>
        <h2>Why both horoscopes are read</h2>
        <p>A love problem cannot be read from one chart. Doshas that affect a relationship live in the connection between two charts, and reading only one is why so much of this work is done on guesses. Atul Nath reads both janam patrikas, looks at what each chart says about the seventh house, the upapada and the navamsa, and works from what is actually there.</p>
        <p>Where both charts are clean and the problem is still there, the answer is not a ritual. It is usually a conversation, a decision, or a separation that has already happened mentally and not been said out loud.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">How it is worked</span>
        <h3>Kamakhya temple puja</h3>
        <p>Where a ritual is called for, the puja is offered at Kamakhya Temple. For love marriage dosha work the traditional form is a mangal dosh nivarana puja, and it is performed for the couple rather than for one person against the other. That distinction is deliberate. Most of the horror stories about tantrik love work come from the other kind, and Atul Nath does not do it.</p>
        <h3 style="margin-top:26px">What you get</h3>
        <ul>
          <li>A joint horoscope reading, with both charts open at the same time</li>
          <li>A written list of the actual doshas found, and the ones that are not there</li>
          <li>Remedies for the specific doshas, in writing, in your language</li>
          <li>Puja at Kamakhya Temple where a ritual is genuinely the right answer</li>
          <li>A follow-up call, and an honest answer where nothing can be done</li>
        </ul>
        <h3 style="margin-top:26px">What is not offered</h3>
        <p>There is no vashikaran directed at one partner without the other knowing, and there is no work to separate a person from their spouse. Both are refused, and both are relatively common requests. Vashikaran where both people have agreed to it is a different matter and has its own page.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Send both horoscopes.</strong> If you can get your partner's janam patrika before the call, the reading is far more useful. Details of birth time matter, and a rough time is worse than no time because it can be wrong.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">The four situations</span>
      <h2>Which of these is closest to yours</h2>
    </div>
    <div class="cols-2">
      <div class="card">
        <span class="card__num">Situation one</span>
        <h3>Family opposing a love marriage</h3>
        <p>The most common case, and the one most often treated as purely spiritual when it is not. A dosha may be real, and the social objection usually also is. You need both dealt with, and only one of them is a ritual matter.</p>
      </div>
      <div class="card">
        <span class="card__num">Situation two</span>
        <h3>A partner involved with a third person</h3>
        <p>Read the two charts and look for what sits between them. Sometimes there is an active obstruction worth clearing. Sometimes the decision has already been made and the puja would only be money spent on an outcome nobody is waiting for.</p>
      </div>
      <div class="card">
        <span class="card__num">Situation three</span>
        <h3>Drifting apart after a normal beginning</h3>
        <p>Distance, family, a change in work, an argument that was not finished. This responds to advice and effort, and to much smaller amounts of work than people expect. Say so on the first call and it will be priced accordingly.</p>
      </div>
      <div class="card">
        <span class="card__num">Situation four</span>
        <h3>Something wrong around one partner</h3>
        <p>Unexplained heaviness, anxiety, illness or misfortune concentrated around one person. This is a protection question, not a love question, and it is covered on the black magic removal page rather than here.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'Can a tantrik bring back someone who has gone?', a: 'Sometimes people come to Mayong or Kamakhya asking exactly that, and the honest answer is that no one should promise it. What can be worked on is the kundali dosha that created the separation, the effects of outside interference, and the person\'s own state of mind. Where the relationship is genuinely finished, Atul Nath will say so rather than take the work and the money.' },
  { q: 'My family is against the marriage. Can ritual fix that?', a: 'Rarely, and it would be wrong to sell you that it could. Family opposition is usually a mixture of caste, region, income, education or a previous accusation of black magic. Where there is a genuine dosha in the charts, remedies help with that part. Where the objection is purely social, no ritual changes it, and you will be told to spend your effort on the practical things that actually move families.' },
  { q: 'Do both people need to come?', a: 'For anything involving a relationship, yes if at all possible. Both horoscopes are needed to read the dosha properly, and a working done without the other person present is guesswork. If one partner is unwilling, that in itself is usually the answer to the question being asked.' },
  { q: 'What about love marriage pairs, where the issue is dosha?', a: 'This is the most common reason a love marriage is stopped. Gun dosha, manglik or an unsettled seventh house can be a genuine obstacle to a marriage being accepted by a family that believes in it. Both kundalis are read together, the actual doshas are identified, and remedies are given for those specifically. Where the charts are clean and the family still objects, that is said plainly.' }
])}`
});

/* ============================= 3. VASHIKARAN =========================== */
pages.push({
  out: 'vashikaran-specialist-mayong.html',
  canonical: '/vashikaran-specialist-mayong.html',
  pair: '/hi/vashikaran-specialist-mayong.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Vashikaran Specialist in Mayong Assam | 9365474087',
  desc: 'Vashikaran specialist in Mayong, Assam. Atul Nath, 17 years in Mayong. Ethical vashikaran for love, business and family. Call +91 9365474087.',
  keywords: 'vashikaran specialist in mayong, best tantrik in mayong, best tantrik in mayong assam, mayong tantrik contact number, top tantrik in mayong, best mayong tantrik, mayong assam tantrik, mayong tantrik',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Vashikaran', 'Vashikaran specialist in Mayong', '/vashikaran-specialist-mayong.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Ask what vashikaran can and cannot do before you pay for it',
  ctaBody: 'There are honest uses for it and dishonest ones, and the difference is usually visible in the first call. Ask, and judge the answer.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'What is vashikaran actually for?', a: 'In the Mayong tradition, vashikaran is used for direction, focus and the clearing of obstacles. Applied properly it is closer to a discipline than to a spell: a practitioner works on their own chart first, aligns themselves with what they are trying to achieve, and the mantra is a support to that alignment rather than a lever on another person.' },
    { q: 'Can vashikaran be used to bring back a partner who has left?', a: 'Where both people want the relationship, yes, and that is legitimate work. Where one person does not know about it, no. Atul Nath does not do the second kind at all, and will not do it for a fee. There is no version of this that is a good idea.' },
    { q: 'Is vashikaran safe?', a: 'Used in the disciplined way, with the practitioner doing the work on their own chart, yes, and it has been the practice in this tradition for a very long time. What causes harm is not vashikaran but the misuse of it, and the misuse almost always involves secrecy, urgency and a large advance payment.' },
    { q: 'How much does vashikaran cost in Mayong?', a: 'The first call is free. A full horoscope reading is quoted before it begins. The ritual itself is priced according to the work, agreed in writing before a date is fixed, and there is no large advance demanded simply to book a conversation.' }
  ],
  body: `${S.pagehead('Service', 'Vashikaran Specialist in Mayong, Assam', 'Mayong tradition vashikaran for direction, focus and clearing obstacles. Used for business, family and relationships where both people agree. Seventeen years of practice in Mayong.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">A word that gets misused</span>
        <h2>Vashikaran is a discipline, not a spell</h2>
        <p>Vashikaran has a bad name in this region, and much of that is deserved. What most people mean when they search for a vashikaran specialist in Mayong is a way of making another person do something, and that version is both ineffective enough to be useless and harmful enough to be worth refusing.</p>
        <p>The word itself is older and more ordinary than that. It comes from the root meaning to attract or to draw toward, and in the Mayong tradition it refers to a set of practices by which a person brings their own mind, speech and conduct into line with what they are trying to build. The mantra is the least important part of it. The alignment of the practitioner's own chart and conduct is the part that does the work.</p>
        <p>That is why the first thing at a genuine Mayong vashikaran is a horoscope reading. Not as a formality, and not to find a weakness to exploit, but because a chart that is not worked on cannot be aligned. Most people who come asking for a quick ritual have a chart that shows the problem plainly, and the honest answer is that the chart needs attending to before any mantra is worth doing.</p>
        <h2>Where it is genuinely used</h2>
        <p><strong>Business and work.</strong> The commonest request in Mayong. A shop that has been losing money, a career that has stalled, a partnership that keeps failing. The chart usually shows a weak period or a badly placed mahadasha, and the practice is done to work with that period rather than to override it. This is the version that most reliably does something.</p>
        <p><strong>Family harmony.</strong> Where the chart shows ongoing tension between two houses in the kundali, work is done on that. Where the tension is a property dispute or a real incompatibility, you will be told that, because the practice cannot settle an argument that has a legal answer.</p>
        <p><strong>Relationships, where both people agree.</strong> A couple separated by circumstance, distance, or family pressure, who both want the same thing. Both charts are read and both people consent. This is legitimate and it is a great deal of the work done in Mayong.</p>
        <h2>Where it is refused</h2>
        <p>Any request to influence a person who is not aware of it. Any request to break up somebody else's marriage. Any request made with a demand for a large advance payment before the work begins. These three refusals are the whole difference between a real practice and the fraud, and if somebody tells you they will not make them, that is worth hearing as a warning rather than as a promise.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">The Mayong method</span>
        <h3>What happens in a session</h3>
        <ol>
          <li><strong>Both charts read.</strong> Yours, and your partner's if a relationship is involved.</li>
          <li><strong>The mahadasha is examined.</strong> Which planet is running, and what it governs in your chart. Most stalled situations are explained right here.</li>
          <li><strong>Obstacles are named.</strong> Weak houses, malefic aspects, and the specific period the chart says is difficult.</li>
          <li><strong>A written plan.</strong> What practice to follow, for how long, and what is expected and by when.</li>
          <li><strong>Puja if it is warranted.</strong> At the Mayong ashram or Kamakhya Temple, and only if the reading points to it.</li>
        </ol>
        <h3 style="margin-top:26px">Why Mayong</h3>
        <p>Mayong has been the centre of this work in north-east India for a long time, and the reason is that the practice survived there intact while it was being commercialised everywhere else. What you get here is closer to the original method than what you would find under the same name in a city shop.</p>
        <p>Atul Nath has worked in Mayong since 2009. That is seventeen years in one place, which in this line is unusual, and it is the reason the diagnosis tends to be careful. Most vashikaran work is done after a five minute phone call by somebody who has never read your chart.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>A test you can apply.</strong> Before agreeing to anything, ask what in your chart the work is based on. If the answer names a house, a planet or a dasha, you are dealing with a practitioner. If the answer is a feeling, you are not.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Straight answers</span>
      <h2>The three questions worth asking any vashikaran specialist</h2>
    </div>
    <div class="cols-3">
      <div class="card">
        <span class="card__num">Question one</span>
        <h3>What in my chart is this based on?</h3>
        <p>A real answer names something specific: a house, a planet, a mahadasha period, a dosha. A vague answer about energy, vibrations or negative surroundings means no chart was read, and no amount of money changes that.</p>
      </div>
      <div class="card">
        <span class="card__num">Question two</span>
        <h3>Do I need to pay anything to book a conversation?</h3>
        <p>No, and here it is free. Urgency and advance payment are the two oldest techniques in this trade, and they are used precisely because they stop people asking the first question.</p>
      </div>
      <div class="card">
        <span class="card__num">Question three</span>
        <h3>What happens if it does not work?</h3>
        <p>A serious answer is that some things do not work and you will be told which ones at the start. A guarantee, in this line, means the money has been taken and the outcome was never the point.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'What is vashikaran actually for?', a: 'In the Mayong tradition, vashikaran is used for direction, focus and the clearing of obstacles. Applied properly it is closer to a discipline than to a spell: a practitioner works on their own chart first, aligns themselves with what they are trying to achieve, and the mantra is a support to that alignment rather than a lever on another person.' },
  { q: 'Can vashikaran be used to bring back a partner who has left?', a: 'Where both people want the relationship, yes, and that is legitimate work. Where one person does not know about it, no. Atul Nath does not do the second kind at all, and will not do it for a fee. There is no version of this that is a good idea.' },
  { q: 'Is vashikaran safe?', a: 'Used in the disciplined way, with the practitioner doing the work on their own chart, yes, and it has been the practice in this tradition for a very long time. What causes harm is not vashikaran but the misuse of it, and the misuse almost always involves secrecy, urgency and a large advance payment.' },
  { q: 'How much does vashikaran cost in Mayong?', a: 'The first call is free. A full horoscope reading is quoted before it begins. The ritual itself is priced according to the work, agreed in writing before a date is fixed, and there is no large advance demanded simply to book a conversation.' }
])}`
});

/* ======================== 4. HUSBAND WIFE DISPUTE ====================== */
pages.push({
  out: 'husband-wife-dispute-mayong.html',
  canonical: '/husband-wife-dispute-mayong.html',
  pair: '/hi/husband-wife-dispute-mayong.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Husband Wife Dispute Solution Mayong | 9365474087',
  desc: 'Husband wife dispute solution in Mayong by Atul Nath, best astrologer in Mayong. Marriage counselling, graha shanti and dosha remedies. Call 9365474087.',
  keywords: 'husband wife dispute solution mayong, husband wife dispute in mayong, best astrologer in mayong, mayong assam tantrik, mayong famous tantrik, mayong tantrik contact number, marriage problem assam',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Marriage Dispute Work', 'Husband wife dispute solution in Mayong', '/husband-wife-dispute-mayong.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Both of you should be on the call, not just one',
  ctaBody: 'A marriage problem read from one side is a guess. If both partners can join a single call, the reading is worth far more and the work is much smaller.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'Can a tantrik really fix a marriage?', a: 'A tantrik cannot fix a marriage. What can happen is that the astrological cause of a particular quarrel pattern is found and worked on, a dosha that has been sitting under the relationship for years is dealt with, and both parties end up in a room with somebody who will say the difficult thing plainly. Where the marriage is genuinely finished, that gets said too.' },
    { q: 'My husband or wife will not come. What then?', a: 'A one-sided reading is possible but it is limited, and you will be told that in advance rather than after you have paid. The most useful thing that can happen in that situation is often not a ritual at all but a properly structured conversation that somebody neutral helps structure.' },
    { q: 'Is the work confidential between us?', a: 'Completely. This kind of problem is the most common reason people call and it is treated accordingly. Nothing is shared with family, nothing is discussed with anyone who calls on your behalf, and no case detail is used publicly, ever.' },
    { q: 'What if the problem is dowry related?', a: 'That is a legal and social matter before it is a spiritual one, and you will be told to deal with the law and the family first. Where there is also a dosha contributing to the situation it can be worked on, but the ritual is not the part that makes it stop.' }
  ],
  body: `${S.pagehead('Service', 'Husband Wife Dispute Solution in Mayong', 'For marriages under strain from in-laws, property, suspected third-party interference, or a dosha that has been sitting under the relationship for years.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The honest position</span>
        <h2>A marriage problem is usually three problems</h2>
        <p>When people search for a husband wife dispute solution in Mayong, they are usually dealing with something that is not one thing. What arrives at the ashram is a mixture of an astrological cause, a real social cause, and a communication failure that has been building for a while. Treating only the first of those is where most of this work goes wrong.</p>
        <p><strong>The astrological cause.</strong> Genuinely real, and worth finding. Certain doshas sit under marriages and produce recognisable patterns: the seventh lord afflicted and a history of sudden separations; manglik incompatibilities discovered after the wedding; a mahadasha period that genuinely does make one partner closed and the other unreasonable. These respond to a graha shanti and to remedies, and they are the part a tantrik is actually for.</p>
        <p><strong>The social cause.</strong> In-laws, dowry, property, a family that disapproved from the start, the earning power of one partner, a caste or region objection. This is the larger half of most cases in this region, and no ritual touches it. Work that promises otherwise is lying about something important.</p>
        <p><strong>The communication failure.</strong> Years of not saying what is actually the problem, and a great deal of the apparent conflict being a proxy for something else entirely. This is the part that a third party in the room is genuinely useful for, and it is the part that most spiritual advice ignores.</p>
        <h2>How the reading is done</h2>
        <p>Both janam patrikas are read, which is the minimum. The seventh house, the upapada, the navamsa and the dasha periods of both partners are looked at, and what is found is written down plainly. Doshas are named specifically, and doshas that are not there are also said, because families often spend years worrying about a problem their chart does not have.</p>
        <p>Where a real dosha is found, a graha shanti puja is performed at the Mayong ashram or at Kamakhya Temple, and remedies are given for both partners. Where the chart is clean and the marriage problem is plainly social, that is what you will be told, along with a realistic view of what would actually help.</p>
        <div class="callout" style="margin-top:28px">
          <p><strong>Both partners should attend.</strong> Not because it is a formality, but because a marriage read from one side is a guess, and a guess is what most of this profession runs on. If one partner will not come, that fact is often the clearest information available.</p>
        </div>
      </div>
      <div class="prose">
        <span class="eyebrow">Where people actually go wrong</span>
        <h3>Buying separate remedies for both partners</h3>
        <p>One partner is given a puja for the husband, the other is given a different puja for the wife, neither knows what the other was given, and the two rituals work against each other. Marriage work has to be done on the relationship, not on one person in it. If a practitioner is willing to do separate work for husband and wife, ask why.</p>
        <h3 style="margin-top:26px">Treating a dowry matter as a spiritual matter</h3>
        <p>Dowry demands have a legal remedy and a social one, and both are more effective than a puja. You will be told to use them first. If a practitioner suggests a ritual instead of a lawyer, the ritual will not be the thing that stops it.</p>
        <h3 style="margin-top:26px">Waiting too long</h3>
        <p>The average Indian marriage is under serious strain for some years before anybody says anything, and by the time it reaches a tantrik the pattern is well established. Nothing about that is a spiritual failure. It is usually a sign that two people stopped talking, and the reading is often most useful because it gives them a reason to.</p>
        <h3 style="margin-top:26px">Assuming a third party where there is none</h3>
        <p>Suspected outside interference is one of the most common things people present with, and it is genuinely difficult to distinguish from ordinary marital dissatisfaction without knowing the family's wider context. It is treated as a possibility to be checked rather than an assumption to be acted on.</p>
        <h3 style="margin-top:26px">Expecting the reading to settle the argument</h3>
        <p>It sometimes does, because a third party in the room changes how people speak. But a reading is not an argument settler, and a marriage where nobody is willing to talk is not a marriage a ritual can reach.</p>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'Can a tantrik really fix a marriage?', a: 'A tantrik cannot fix a marriage. What can happen is that the astrological cause of a particular quarrel pattern is found and worked on, a dosha that has been sitting under the relationship for years is dealt with, and both parties end up in a room with somebody who will say the difficult thing plainly. Where the marriage is genuinely finished, that gets said too.' },
  { q: 'My husband or wife will not come. What then?', a: 'A one-sided reading is possible but it is limited, and you will be told that in advance rather than after you have paid. The most useful thing that can happen in that situation is often not a ritual at all but a properly structured conversation that somebody neutral helps structure.' },
  { q: 'Is the work confidential between us?', a: 'Completely. This kind of problem is the most common reason people call and it is treated accordingly. Nothing is shared with family, nothing is discussed with anyone who calls on your behalf, and no case detail is used publicly, ever.' },
  { q: 'What if the problem is dowry related?', a: 'That is a legal and social matter before it is a spiritual one, and you will be told to deal with the law and the family first. Where there is also a dosha contributing to the situation it can be worked on, but the ritual is not the part that makes it stop.' }
])}`
});

/* ========================= 5. BEST TANTRIK MAYONG ====================== */
pages.push({
  out: 'best-tantrik-mayong.html',
  canonical: '/best-tantrik-mayong.html',
  pair: '/hi/best-tantrik-mayong.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'weekly',
  title: 'Best Tantrik in Mayong, Assam | Atul Nath 9365474087',
  desc: 'Best tantrik in Mayong, Assam. Atul Nath has practised in Mayong for 17 years. Mayong tantrik contact number +91 9365474087. Free first call.',
  keywords: 'best tantrik in mayong, mayong best tantrik, best mayong tantrik, best mayong tantrik assam, mayong tantrik, mayong famous tantrik, top tantrik in mayong, best tantrik in mayong assam, mayong tantrik reviews, mayong assam tantrik',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Best Tantrik in Mayong', 'Best tantrik in Mayong, Assam', '/best-tantrik-mayong.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'best-tantrik-mayong.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'The Mayong ashram number is the same number',
  ctaBody: 'There is no separate line for Mayong. One number reaches both practices, which makes it harder for anyone else to pose as us.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'Who is the best tantrik in Mayong?', a: 'There is no official ranking and nobody can honestly claim one. What can be checked: whether the person has been working in Mayong for years rather than months, whether they will read your chart before quoting a price, whether they have a fixed address you can visit, and whether they tell you when a problem is not theirs to solve. Atul Nath has practised in Mayong since 2009.' },
    { q: 'What is the Mayong tantrik contact number?', a: '+91 9365474087, answered from 6 am to 10 pm every day, with WhatsApp on the same number. It reaches both the Mayong ashram and the Kamakhya Temple office, because both are the same practice.' },
    { q: 'Is Mayong a tourist place?', a: 'No, and this page is not about visiting it as a tourist. Mayong is a small place in the hills of Morigaon district in Assam that has been the regional centre of tantra for centuries, and people come for consultations rather than for sightseeing.' },
    { q: 'How do I reach the Mayong ashram?', a: 'It is in Mayong, Morigaon district, Assam 782411, about 40 kilometres from Guwahati and roughly an hour and a half by road. It is not on a main road, so call first and you will be given the exact meeting point. Many people combine it with a visit to Kamakhya Temple in Guwahati on the same trip.' }
  ],
  body: `${S.pagehead('Location', 'Best Tantrik in Mayong, Assam', 'Atul Nath has practised in Mayong since 2009, seventeen years in one place. This page is about that practice, what it is good for, and how to judge whether a practitioner in Mayong is genuine.')}

${U.stats([
  { num: '2009', label: 'Began practice in Mayong' },
  { num: '17 yrs', label: 'Continuous practice, one place' },
  { num: '782411', label: 'Morigaon district, Assam' },
  { num: '40 km', label: 'From Guwahati, by road' }
])}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The search</span>
        <h2>There is no best tantrik in Mayong, and anybody claiming otherwise is selling</h2>
        <p>Half the difficulty of this search is that the question cannot be answered the way people want it answered. Mayong has no licensing body, no register, and no way to verify a claim of greatness. The people writing the advertisements are the same people making the claim.</p>
        <p>What can be checked is more useful than a ranking, though. Whether somebody has worked in Mayong for years instead of months. Whether they will read your horoscope before quoting anything. Whether they have a fixed address you can travel to and visit without arranging it an hour beforehand. Whether they will tell you that your problem is not a spiritual one. Whether the price is agreed in writing before a date is fixed, and whether the first conversation is free.</p>
        <p>Run a practitioner through that list and most of the obvious candidates fall away, without needing to know anything about tantra at all. The people who fail it are the ones who quote a guaranteed result and ask for an advance payment.</p>
        <h2>About this practice in Mayong</h2>
        <p>Atul Nath began his sadhana in Mayong in 2009 and has worked there continuously since. That single fact is the most relevant thing on this page, because seventeen years in one place is unusual in this profession and it is the reason the work tends to be careful rather than fast.</p>
        <p>Mayong is a small place in the hills of Morigaon district, and its significance is not really about size. It has been one of the recognised centres of tantra in north-east India for a long time, and the tradition that survived there is a disciplined one: scriptural study, mantra sadhana, and puja offered properly rather than improvised for a fee.</p>
        <p>The practice here does black magic and evil eye removal, love and marriage work, vashikaran used the Mayong way, and horoscope reading. What it does not do is work intended to harm anyone, work done without the other party's knowledge, or a case that is really medical or legal.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>Getting to Mayong</h3>
        <p>Mayong is in Morigaon district, Assam, pin 782411, about 40 kilometres from Guwahati and roughly an hour and a half by road. The ashram is not on a main road, so call before travelling and you will be given the exact meeting point and directions.</p>
        <p>Most visitors from outside Assam combine the two locations in a single trip: the horoscope reading at the Kamakhya Temple office in Guwahati first, which is easy to reach, and the Mayong ashram on the same day or the next where an appointment can be made.</p>
        <h3 style="margin-top:26px">What to have ready before you call</h3>
        <ul>
          <li>Your date, time and place of birth, as accurately as you have it</li>
          <li>Your partner's details if a relationship is involved</li>
          <li>A plain description of what has been happening, and roughly how long</li>
          <li>Anything that has already been done about it, and what it cost</li>
        </ul>
        <p>Having those four things ready means the first call is useful rather than a warm-up. Without a birth time the reading is largely guesswork, and it is better to say that on the phone than to find out afterwards.</p>
        <div class="callout" style="margin-top:28px">
          <p><strong>Mayong to Kamakhya Temple is about 40 km.</strong> If you are travelling from outside Assam, the Kamakhya Temple office in Guwahati is the easier of the two to reach, and the more practical place to start.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'Who is the best tantrik in Mayong?', a: 'There is no official ranking and nobody can honestly claim one. What can be checked: whether the person has been working in Mayong for years rather than months, whether they will read your chart before quoting a price, whether they have a fixed address you can visit, and whether they tell you when a problem is not theirs to solve. Atul Nath has practised in Mayong since 2009.' },
  { q: 'What is the Mayong tantrik contact number?', a: '+91 9365474087, answered from 6 am to 10 pm every day, with WhatsApp on the same number. It reaches both the Mayong ashram and the Kamakhya Temple office, because both are the same practice.' },
  { q: 'Is Mayong a tourist place?', a: 'No, and this page is not about visiting it as a tourist. Mayong is a small place in the hills of Morigaon district in Assam that has been the regional centre of tantra for centuries, and people come for consultations rather than for sightseeing.' },
  { q: 'How do I reach the Mayong ashram?', a: 'It is in Mayong, Morigaon district, Assam 782411, about 40 kilometres from Guwahati and roughly an hour and a half by road. It is not on a main road, so call first and you will be given the exact meeting point. Many people combine it with a visit to Kamakhya Temple in Guwahati on the same trip.' }
])}`
});

/* ======================= 6. TANTRIK BABA GUWAHATI ==================== */
pages.push({
  out: 'tantrik-baba-guwahati.html',
  canonical: '/tantrik-baba-guwahati.html',
  pair: '/hi/tantrik-baba-guwahati.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Best Tantrik in Guwahati | Aghori Baba, 9365474087',
  desc: 'Best tantrik in Guwahati and aghori tantrik in Guwahati. Atul Nath, 9 years at Kamakhya Temple. Free first call +91 9365474087.',
  keywords: 'best tantrik in guwahati, tantrik in guwahati, aghori tantrik in guwahati, tantrik baba in guwahati, assam tantrik, tantrik in assam, best tantrik in assam, guwahati tantrik contact number',
  ogImage: 'hero_bg.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Best Tantrik in Guwahati', 'Best tantrik in Guwahati', '/tantrik-baba-guwahati.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Most people travelling to Guwahati start with a phone call',
  ctaBody: 'The Kamakhya Temple office in Guwahati is the more accessible of the two locations. Calling first avoids a wasted day of travel.',
  services: S.SERVICES_INDEX,
  serviceListName: 'Spiritual services from Atul Nath Aghori Tantrik in Mayong and Kamakhya Temple',
  faqs: [
    { q: 'How do I find a genuine tantrik in Guwahati?', a: 'Ask three things before you pay anything: what in your chart is the work based on, will you tell me if my problem is not a spiritual one, and is the first conversation free. A real practitioner answers all three. Somebody who will not describe the basis of the work is describing the fee, not the treatment.' },
    { q: 'Do I need an appointment in Guwahati?', a: 'Yes. The office is on Kamakhya Temple Road at Malakhuwa and visits are by appointment, which is better than a walk-in queue and better for privacy. Calling +91 9365474087 arranges it.' },
    { q: 'Is a tantrik baba different from a tantrik?', a: 'Baba is a term of respect used for a practitioner in this tradition, the way a priest might be called. It is not a separate qualification. What matters is years of practice, whether the diagnosis precedes the ritual, and whether the practitioner will say no to you.' },
    { q: 'Can I be seen in Guwahati if I only live near Mayong?', a: 'Yes, and it is the usual arrangement. Mayong is in Morigaon district, about 40 kilometres from Guwahati, so the temple office in the city is often more convenient for a first meeting and for the puja.' }
  ],
  body: `${S.pagehead('Location', 'Best Tantrik in Guwahati, Assam', 'Atul Nath works from the office on Kamakhya Temple Road at Malakhuwa in Guwahati, where he has been in regular sadhana since 2017, and from the ashram in Mayong.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Guwahati practice</span>
        <h2>An aghori tantrik baba working near Kamakhya Temple</h2>
        <p>Guwahati has a great many people offering tantric and astrological services, and most of them are working out of a shop, a stall, or a room above a shop. The distinguishing feature of this practice is that it is rooted in the temple rather than near it.</p>
        <p>Atul Nath began regular sadhana at Kamakhya Temple in 2017, which is nine years ago now, and all consultations and puja in Guwahati are done from the office on Kamakhya Temple Road at Malakhuwa. The work offered there is black magic and evil eye removal, love problem solutions, vashikaran and husband wife dispute work, plus horoscope reading on its own for anybody who wants a chart read without a ritual attached.</p>
        <h2>What makes a Guwahati practice worth returning to</h2>
        <p>Judging a practitioner in this city is not difficult if you know what to look at. The things that matter are all ordinary and none of them are secret.</p>
        <p>Does the price get agreed in writing before a date is fixed? Is the first conversation free? Will the person read your chart before telling you what is wrong? Will they say when a problem is medical or legal rather than spiritual? Is there a fixed address you can reach without arranging it an hour beforehand? And is the number they give you the number they answer?</p>
        <p>Every one of those is testable, and every one of them fails more often with the large advertisers than with the small practices. A guaranteed result in three days and a large advance payment are the two oldest techniques in this trade, and they are still the most widely used.</p>
        <h2>Guwahati is a good place to start if you are visiting</h2>
        <p>For anyone travelling from outside Assam, the Kamakhya Temple office is much the more practical of the two locations. The ashram in Mayong is a smaller place in Morigaon district, off the main road, and needs a meeting point arranged in advance. Many people do the horoscope reading in the city and the ashram visit on the same trip or the next day.</p>
        <p>For people already in Guwahati, the walk-in hours at the temple office are available, though an appointment is still better. For people outside India, the first consultation, the chart reading and the daily remedies are all done by phone and WhatsApp, and somebody can attend the puja on your behalf with written authorisation.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>Guwahati office</h3>
        <p>Kamakhya Temple Road, Malakhuwa, Guwahati, Assam 781010. By appointment, with walk-in hours also available. This is the Shakti Peetha where the sadhana has been for nine years.</p>
        <h3 style="margin-top:26px">Mayong ashram</h3>
        <p>Mayong, Morigaon district, Assam 782411. About 40 kilometres and an hour and a half from Guwahati. Off the main road, so call for a meeting point. Practising here since 2009.</p>
        <h3 style="margin-top:26px">What to bring</h3>
        <p>Your date, time and place of birth, as accurately as you have them. Your partner's details if a relationship is involved. Both horoscopes are needed for anything to do with love or marriage, and a one-sided reading is guesswork.</p>
        <h3 style="margin-top:26px">Working with people outside Assam</h3>
        <p>Most of the people who call this number are not in Guwahati. They are calling from other states and from outside India, and the first conversation, the horoscope reading and the daily practice all work at a distance. The puja needs somebody present at the temple or the ashram, and that can be you or somebody you authorise in writing.</p>
        <div class="callout" style="margin-top:28px">
          <p><strong>If you cannot reach the number.</strong> There is only one, and it is answered from six in the morning until ten at night. If a different number, account or person is offered to you as the practice, call this one and check before paying anything.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'How do I find a genuine tantrik in Guwahati?', a: 'Ask three things before you pay anything: what in your chart is the work based on, will you tell me if my problem is not a spiritual one, and is the first conversation free. A real practitioner answers all three. Somebody who will not describe the basis of the work is describing the fee, not the treatment.' },
  { q: 'Do I need an appointment in Guwahati?', a: 'Yes. The office is on Kamakhya Temple Road at Malakhuwa and visits are by appointment, which is better than a walk-in queue and better for privacy. Calling +91 9365474087 arranges it.' },
  { q: 'Is a tantrik baba different from a tantrik?', a: 'Baba is a term of respect used for a practitioner in this tradition, the way a priest might be called. It is not a separate qualification. What matters is years of practice, whether the diagnosis precedes the ritual, and whether the practitioner will say no to you.' },
  { q: 'Can I be seen in Guwahati if I only live near Mayong?', a: 'Yes, and it is the usual arrangement. Mayong is in Morigaon district, about 40 kilometres from Guwahati, so the temple office in the city is often more convenient for a first meeting and for the puja.' }
])}`
});

module.exports = pages;
