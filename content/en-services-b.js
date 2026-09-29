/* ==========================================================================
   content/en-services-b.js
   New service pages, set B: money, work, family, legal, numerology.
   ========================================================================== */
const U = require('./ui.js');
const S = require('./en-shared.js');
const { PHONE, TEL, WA } = U;

const pages = [];

/* ==================== 1. BUSINESS PROBLEM ============================= */
pages.push({
  out: 'business-problem-solution-mayong.html',
  canonical: '/business-problem-solution-mayong.html',
  pair: '/hi/business-problem-solution-mayong.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Business Problem Solution in Mayong | 9365474087',
  desc: 'Business problem solution and dukan band removal by Atul Nath in Mayong. Shop loss, low profit, business vashikaran. Call +91 9365474087.',
  keywords: 'business problem solution, business vashikaran, dukan band, shop band karan, business astrology, vyapar jyotish, mayong tantrik for business, best tantrik in mayong, best mayong tantrik, top tantrik in mayong, vashikaran for business',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Business problems', 'Business problem solution in Mayong', '/business-problem-solution-mayong.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'A good chart does not run a business',
  ctaBody: 'Most business problems are not spiritual. The chart is read to find the timing, and the rest is usually pricing, stock, location or a bad partner, which is said plainly.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'My shop is running at a loss. Is it black magic?', a: 'Rarely, and it is worth being straight about that. The overwhelming majority of loss-making businesses are loss-making for ordinary reasons: buying badly, pricing wrong, sitting on dead stock, being in the wrong location, or having a partner who does not pull their weight. The chart is read to see whether the timing is heavy, because a period in the dasha will affect anything you start, and that is a real and useful answer.' },
    { q: 'Can vashikaran bring customers to a shop?', a: 'It is used for direction, focus and clearing obstacles, and applied to a business it is done by working on the proprietor own chart first. What it cannot do is manufacture customers who do not know the shop exists, fix bad stock, or compensate for a location nobody walks past. Any practitioner promising footfall from a ritual is selling you a lie with a Sanskrit word in it.' },
    { q: 'Should I start a new business while the current one is failing?', a: 'The chart is genuinely useful here. Starting during a heavy period multiplies whatever problems already exist, and in a large share of cases the right advice is to close, settle the losses properly, and start again in a better period. That is a cheaper answer than a year of remedies, and it is sometimes what is said.' },
    { q: 'Is business work the same as vashikaran for money?', a: 'Related but not identical. A business puja is usually done for the proprietor and sometimes for the premises, and it is combined with practical advice about the business. Vashikaran for money is broader and often involves a partner or a customer relationship. The right one is chosen from the chart, not from what is being sold.' }
  ],
  body: `${S.pagehead('Service', 'Business Problem Solution in Mayong', 'For a shop or business that will not turn, for low profit, for a bad partnership, and for deciding whether to start, continue or close. Chart read before remedy.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The unglamorous truth first</span>
        <h2>Most losing businesses are not cursed</h2>
        <p>Business is the area where spiritual claims do the most damage, because the remedies are available and because the causes are usually ordinary. A shop that is not trading is nearly always dealing with one of a short list of things, and no puja in Assam or anywhere else will touch them.</p>
        <p><strong>Pricing.</strong> The most common cause by a considerable distance. Underpriced goods look like a loss on paper and are frequently a healthy business.</p>
        <p><strong>Dead stock.</strong> Money sitting on shelves that will not move, and stock bought on relationship rather than on turnover.</p>
        <p><strong>Location.</strong> A shop where people do not walk past, or where the ones who do cannot park, or which is open at the wrong hours for the people who actually shop there.</p>
        <p><strong>Partners.</strong> A partnership where one person is not doing the work, or where the money is not accounted for. This is the single most common cause of a business that was profitable and then was not.</p>
        <p><strong>Timing.</strong> And this is the one that is genuinely astrological. A business started in a heavy period carries that heaviness with it, and the same business started eighteen months later can run entirely differently. This is what the chart reading is actually for.</p>
        <h2>What the chart reading establishes</h2>
        <p>Your janam patrika is read for the tenth house and its lord, the sixth house of losses and competition, the eleventh house of gains, and the mahadasha and antardasha you are currently running. The question being asked is specific: is the period you are in a heavy one, and would starting or continuing now carry that heaviness forward.</p>
        <p>The answer is given plainly, and it is frequently the one the person does not want: that now is not the time to expand, that the partnership should be dissolved, or that the right move is to close properly, take the loss, and start again in a better period. That answer is free, and it is the one that actually saves money.</p>
        <h2>Where ritual is used</h2>
        <p>Where the chart shows a heavy period and the business is otherwise sound, a business puja is offered at the Mayong ashram, which is where this work is traditionally done, with a proprietor puja and remedies given in writing.</p>
        <p>Where there is a partner, a customer or a competitor involved, the puja is done on the proprietor chart first and only touches a relationship where both parties know about it and agree to it. Nothing here is done secretly against another person, and requests of that kind are refused.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>What to bring</h3>
        <ul>
          <li>Date, time and place of birth</li>
          <li>What the business does and roughly when it started</li>
          <li>Whether it is a sole proprietorship or a partnership</li>
          <li>Whether the problem is no customers, no profit, or a specific partner</li>
          <li>What has already been spent on remedies, if anything</li>
        </ul>
        <h3 style="margin-top:26px">The three questions that decide it</h3>
        <p>These are asked before anything is sold, and the answers are more useful than any remedy:</p>
        <ol>
          <li>Is the problem that people are not coming, or that they come and do not buy?</li>
          <li>Is it one bad month or three bad years?</li>
          <li>Is there a partner, and is everyone doing an equal share of the work?</li>
        </ol>
        <p>Three bad years with a partner who does not pull their weight is a conversation, not a puja. That answer is given as often as any other.</p>
        <h3 style="margin-top:26px">Business vashikaran</h3>
        <p>Applied to a business it works the way it should: the proprietor chart is worked on first, alignment is established, and the mantra supports that rather than replacing it. It is a discipline for a proprietor who is disciplined, and it is not a substitute for knowing your own numbers.</p>
        <h3 style="margin-top:26px">Where the work is done</h3>
        <p>Business puja is offered at the Mayong ashram, since that is where this practice has been for seventeen years, and at Kamakhya Temple where a temple offering is wanted. Vastu for a shop or a new premises is a separate piece of work.</p>
        <h3 style="margin-top:26px">Cost and honesty</h3>
        <p>The first call is free. The chart reading is quoted before it begins. Any puja is agreed in writing before a date is fixed, and it is not sold as necessary. Roughly a fifth of business consultations end with no ritual at all, because the chart showed a good period and the problem is plainly operational.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Refused.</strong> No work is done to ruin a competitor business, and none to make a specific customer or partner act against their own interest. Both are declined, and the refusal is the same whether it is asked for politely or with a story attached.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'My shop is running at a loss. Is it black magic?', a: 'Rarely, and it is worth being straight about that. The overwhelming majority of loss-making businesses are loss-making for ordinary reasons: buying badly, pricing wrong, sitting on dead stock, being in the wrong location, or having a partner who does not pull their weight. The chart is read to see whether the timing is heavy, because a period in the dasha will affect anything you start, and that is a real and useful answer.' },
  { q: 'Can vashikaran bring customers to a shop?', a: 'It is used for direction, focus and clearing obstacles, and applied to a business it is done by working on the proprietor own chart first. What it cannot do is manufacture customers who do not know the shop exists, fix bad stock, or compensate for a location nobody walks past. Any practitioner promising footfall from a ritual is selling you a lie with a Sanskrit word in it.' },
  { q: 'Should I start a new business while the current one is failing?', a: 'The chart is genuinely useful here. Starting during a heavy period multiplies whatever problems already exist, and in a large share of cases the right advice is to close, settle the losses properly, and start again in a better period. That is a cheaper answer than a year of remedies, and it is sometimes what is said.' },
  { q: 'Is business work the same as vashikaran for money?', a: 'Related but not identical. A business puja is usually done for the proprietor and sometimes for the premises, and it is combined with practical advice about the business. Vashikaran for money is broader and often involves a partner or a customer relationship. The right one is chosen from the chart, not from what is being sold.' }
])}`
});

/* ==================== 2. CAREER & JOB ================================ */
pages.push({
  out: 'career-and-job-astrology-guwahati.html',
  canonical: '/career-and-job-astrology-guwahati.html',
  pair: '/hi/career-and-job-astrology-guwahati.html',
  prefix: '', lang: 'en',
  priority: 0.9, changefreq: 'monthly',
  title: 'Career &amp; Job Astrology in Guwahati | 9365474087',
  desc: 'Career, job and foreign settlement astrology by Atul Nath, Guwahati. Job prediction, interview, promotion and naukri dosha. Call +91 9365474087.',
  keywords: 'career astrology, job prediction, naukri, job astrology, interview prediction, promotion astrology, foreign settlement astrology, visa astrology, bidesh jyotish, best tantrik in guwahati, tantrik in guwahati, aghori tantrik in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Career and job', 'Career, job and foreign settlement astrology', '/career-and-job-astrology-guwahati.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'A chart can tell you what suits you and when',
  ctaBody: 'It cannot tell you what a company will decide. What it can do is narrow a genuinely uncertain field down, which for most people is worth one phone call.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Can you tell me whether I will get this job?', a: 'No, and anyone who says yes is guessing. A chart can indicate the period in which attempts are better supported, and the kind of work and environment a person is built for, which is genuinely useful when you are choosing between offers. It cannot tell you what an employer will decide, and any pretence otherwise should disqualify the practitioner.' },
    { q: 'Is foreign settlement astrology reliable?', a: 'It is one of the better-supported areas, because immigration involves a fixed external process, a fixed document set and fixed dates, so a chart reading can honestly indicate periods when the process is better supported. What it will not do is override a refusal. Visa outcomes are decided by officials, and no chart reading has ever changed one.' },
    { q: 'What is naukri dosha and is it worth worrying about?', a: 'Several planetary placements have a reputation for difficulty in employment, and most of them are conditional on other factors being present too. They are read properly from the chart rather than from the reputation, and a great many people who have been told they have one for years find out it is weak or cancelled. It is worth a reading; it is not worth a career spent worrying about.' },
    { q: 'Do you do career counselling for students?', a: 'Yes, and it is among the more useful applications. Where a student is undecided, the tenth house, the lords of the tenth and the current dasha frequently point to a field rather than a job, and knowing that before choosing a degree is worth considerably more than a horoscope read at twenty-six.' }
  ],
  body: `${S.pagehead('Service', 'Career, Job and Foreign Settlement Astrology', 'For a career that is going nowhere, a choice between offers, an interview, a promotion, or a decision about going abroad. Read from the chart, not guessed at.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">What a chart can and cannot do</span>
        <h2>The honest boundary, stated first</h2>
        <p>Career astrology is the area where promises are most easily made and least easily kept, so the limit is worth stating before anything is offered.</p>
        <p>A birth chart cannot tell you whether you will get a specific job. It cannot tell you whether an interview will succeed, because that decision belongs to a person you have not met. It cannot tell you when a promotion will come in a particular month, because promotion depends on a manager, a budget and sometimes a person you dislike.</p>
        <p>What it can do is narrower and considerably more useful. It can indicate the kind of work and the kind of environment a person is actually built for, which is a real question that most people never answer. It can indicate periods in which attempts are better supported than others, which is genuinely actionable because you usually have some control over when you apply. And it can identify placements that work against employment, and those can be worked on.</p>
        <p>That is a smaller claim than you will hear elsewhere, and it is the one that holds up.</p>
        <h2>What is read</h2>
        <p>The tenth house of the ascendant and its lord, which describe vocation. The sixth house, which describes work and competition and carries a good deal of employment difficulty in practice. The eleventh house for gains. And the mahadasha and antardasha in progress, because the same chart produces a completely different year to year, and a great deal of what looks like bad luck is simply a heavy period.</p>
        <p>For students, the same houses are read alongside the fourth house for education, and the reading is generally about direction rather than outcome: which field the chart supports, and which it does not, before a degree is chosen rather than after.</p>
        <h2>Naukri dosha</h2>
        <p>Several planetary placements have a reputation for employment difficulty, and almost all of them are conditional on additional factors being present simultaneously. Read properly, a large share of people who have been told for years that they carry one find that it is weak, or that it is cancelled by another placement, or that it belongs to a period that ended years ago.</p>
        <p>Where a dosha is real, graha shanti is offered at Kamakhya Temple with written remedies. It is worth a reading. It is not worth spending a career on.</p>
        <h2>Foreign settlement</h2>
        <p>One of the better-supported areas, for a specific reason: immigration is a process with fixed documents, fixed dates and a fixed external authority, so a chart can honestly indicate when the process is better supported and when effort is better spent elsewhere. People from Assam are asking about the Gulf, Singapore, the UK, Canada and Australia in roughly that order.</p>
        <p>What is not claimed: that a reading can produce a visa. It cannot. Visas are decided by officials against rules, and no remedy has ever changed one, in this practice or any other.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>Situations worth a reading</h3>
        <ul>
          <li>Two or more offers and no way to choose between them</li>
          <li>A field you trained for that you are not getting work in</li>
          <li>Repeated interview failures with no obvious reason</li>
          <li>A promotion or a government exam you keep missing</li>
          <li>A decision about going abroad</li>
          <li>A student choosing between courses or colleges</li>
          <li>Self-employment or a business start, where the tenth house matters most</li>
        </ul>
        <h3 style="margin-top:26px">What to bring</h3>
        <ul>
          <li>Date, time and place of birth, as accurate as available</li>
          <li>Your qualifications and what you are aiming at</li>
          <li>What has already been tried, and what it cost</li>
          <li>For foreign cases, which country and at what stage you are</li>
        </ul>
        <h3 style="margin-top:26px">For students</h3>
        <p>The most valuable age at which to do a reading, and considerably more valuable than at twenty-five. What comes out is usually a field rather than a job: whether commerce suits, whether design or engineering, whether teaching, whether the person is built for a technical or a people-facing line. Knowing that before a degree is chosen is worth more than any consultation afterwards.</p>
        <h3 style="margin-top:26px">Where the work is done</h3>
        <p>Reading by phone or in person at the Kamakhya Temple office in Guwahati, which suits most people working in the city. Graha shanti puja is performed at Kamakhya Temple, and for self-employment cases at the Mayong ashram.</p>
        <h3 style="margin-top:26px">Cost</h3>
        <p>First call free. Reading quoted before it begins. Puja, where one is warranted, agreed in writing before a date is fixed. Many career consultations end with advice and no ritual, because the chart showed a good period and nothing needed covering.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Not offered.</strong> No work to obtain a specific post by influencing a specific person, and no remedy against a named competitor. Career work is read from the chart and worked on the person own chart.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.processSection()}

${S.testiSection()}

${S.faqSection([
  { q: 'Can you tell me whether I will get this job?', a: 'No, and anyone who says yes is guessing. A chart can indicate the period in which attempts are better supported, and the kind of work and environment a person is built for, which is genuinely useful when you are choosing between offers. It cannot tell you what an employer will decide, and any pretence otherwise should disqualify the practitioner.' },
  { q: 'Is foreign settlement astrology reliable?', a: 'It is one of the better-supported areas, because immigration involves a fixed external process, a fixed document set and fixed dates, so a chart reading can honestly indicate periods when the process is better supported. What it will not do is override a refusal. Visa outcomes are decided by officials, and no chart reading has ever changed one.' },
  { q: 'What is naukri dosha and is it worth worrying about?', a: 'Several planetary placements have a reputation for difficulty in employment, and most of them are conditional on other factors being present too. They are read properly from the chart rather than from the reputation, and a great many people who have been told they have one for years find out it is weak or cancelled. It is worth a reading; it is not worth a career spent worrying about.' },
  { q: 'Do you do career counselling for students?', a: 'Yes, and it is among the more useful applications. Where a student is undecided, the tenth house, the lords of the tenth and the current dasha frequently point to a field rather than a job, and knowing that before choosing a degree is worth considerably more than a horoscope read at twenty-six.' }
])}`
});

/* ==================== 3. COURT CASE / LEGAL =========================== */
pages.push({
  out: 'court-case-and-legal-aid-guwahati.html',
  canonical: '/court-case-and-legal-aid-guwahati.html',
  pair: '/hi/court-case-and-legal-aid-guwahati.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  title: 'Court Case &amp; Legal Matter Astrology | 9365474087',
  desc: 'Court case and legal matter astrology in Guwahati by Atul Nath. Mukabla, property and family cases read alongside your lawyer. Call +91 9365474087.',
  keywords: 'court case tantrik, legal victory astrology, mukabla, court case remedy, property dispute astrology, family court case, family matter tantrik, tantrik in guwahati, best tantrik in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Court case and legal', 'Court case and legal matter astrology', '/court-case-and-legal-aid-guwahati.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'A remedy is not a lawyer',
  ctaBody: 'If you have a case in court, the lawyer decides the outcome. What is read here is the timing and the state of mind going into it, which is where people most often get it wrong.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Can a tantrik win a court case?', a: 'No, and this needs saying plainly. A court outcome is decided by a judge applying law to evidence, and nothing done outside the courtroom affects that. What is occasionally useful is a reading of timing, so that a filing, a hearing or a negotiation happens in a period that suits you, and the mental state of the person going in, which is where cases are commonly lost.' },
    { q: 'Is it against the law to do a puja for a court case?', a: 'Offering puja for a matter you are personally party to is one thing, which is generally not an offence. Doing anything to another party, including placing anything on their person or premises without their knowledge, is a different matter entirely and is not done here and should not be done by anybody.' },
    { q: 'Which cases is this worth doing for?', a: 'Family and property matters where both parties are in the same family, where the timing of a hearing matters, and where a person is so consumed by the case that they are making mistakes in it. Civil and commercial disputes are read the same way but the honest answer more often is that a good lawyer is the intervention required.' },
    { q: 'Will you work against my own family member?', a: 'Only where the other person knows about it and agrees to it, which in a legal matter effectively never happens. Legal disputes are worked on by reading timing and by working on the person own chart, never by acting against the other side.' }
  ],
  body: `${S.pagehead('Service', 'Court Case and Legal Matter Astrology', 'For family and property disputes where timing matters and where the stress of the case is affecting your judgement. Read alongside a lawyer, never instead of one.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">Stated first, so there is no misunderstanding</span>
        <h2>Nothing here decides a case. A judge does.</h2>
        <p>A court outcome is determined by a judge applying law to evidence. No remedy performed outside the courtroom changes that, and any practitioner who says otherwise is either mistaken or lying. That is the honest position and it is better to hear it before paying anything.</p>
        <p>So what is genuinely left, and it is not nothing.</p>
        <p><strong>Timing.</strong> The chart can indicate periods in which effort of any kind is better supported, and a filing date, a hearing date or a negotiation window can be chosen with that in mind. In a long family or property dispute that runs for years, which years you push and which years you wait is a genuinely consequential decision, and it is one people usually make without any information at all.</p>
        <p><strong>Your own state.</strong> Cases are lost by people who are not in a fit state to think. Months of acrimony produce statements that help the other side, evidence that contradicts itself, and settlements agreed in anger. Reading the chart for where a person is strongest and weakest across a case is often worth more than any other single thing in this paragraph.</p>
        <p><strong>Judgement about the case.</strong> A great many legal disputes are not winning or losing questions at all. Somebody can know, from outside, that a case being pursued will cost more than it recovers, and that a settlement now is better than a judgement in three years. That is a judgement about resources, and a clear head makes it better.</p>
        <h2>What is not done</h2>
        <p>Nothing is placed on another person, on their person, vehicle, home or premises, without their knowledge. Nothing is done to a judge or to an opposing party. No work is done to make a witness fail, and no work is done to deceive a court. Those are not refusals on principle alone. They are refusals because they are criminal, and because a practice that does them is not a practice you want associated with your name.</p>
        <h2>Where a lawyer is the real answer</h2>
        <p>Most legal problems need a good lawyer and not a priest, and this is said more often than it is sold. A free legal aid consultation exists in every district in Assam, and for most civil matters it costs nothing and is better than anything obtainable here. A reading is worth doing alongside one. It is not a substitute, and any practitioner presenting it as one is doing harm.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>Which cases this suits</h3>
        <ul>
          <li>Family and property matters within one family</li>
          <li>Cases that will run for years, where push-and-wait timing matters</li>
          <li>Divorce and maintenance matters with a fixed hearing schedule</li>
          <li>Inheritance and property partition disputes</li>
          <li>Where the stress of the case is visibly affecting your judgement</li>
        </ul>
        <h3 style="margin-top:26px">And which it does not</h3>
        <ul>
          <li>Anything criminal, where a lawyer is essential and urgently</li>
          <li>Where there is domestic violence, where safety comes before all else</li>
          <li>Where the remedy being offered is to act against another person</li>
        </ul>
        <h3 style="margin-top:26px">What to bring</h3>
        <ul>
          <li>Your date, time and place of birth</li>
          <li>What stage the matter is at, and the next date fixed</li>
          <li>Whether a lawyer is already involved</li>
          <li>The other party relationship to you, where relevant</li>
        </ul>
        <h3 style="margin-top:26px">What happens</h3>
        <p>The chart is read for the period the case is running in, and for your own capacity during it. Where a remedy is appropriate it is graha shanti or a specific puja at Kamakhya Temple, priced and agreed in writing beforehand.</p>
        <p>Where the reading concludes that the case is being pursued for reasons other than the best outcome for the person pursuing it, that is said. It is an uncomfortable thing to hear and it is a large part of the value.</p>
        <h3 style="margin-top:26px">Cost</h3>
        <p>First call free. Reading quoted before it begins. Any puja agreed in writing before a date is fixed. Where a free legal aid consultation is the right answer you will be told, and no charge for being told.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>If there is domestic violence.</strong> Nothing in this practice is an appropriate response. Contact a lawyer, the police, or a women helpline in Guwahati. That is the whole of the advice and it is given the same way to everyone.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.faqSection([
  { q: 'Can a tantrik win a court case?', a: 'No, and this needs saying plainly. A court outcome is decided by a judge applying law to evidence, and nothing done outside the courtroom affects that. What is occasionally useful is a reading of timing, so that a filing, a hearing or a negotiation happens in a period that suits you, and the mental state of the person going in, which is where cases are commonly lost.' },
  { q: 'Is it against the law to do a puja for a court case?', a: 'Offering puja for a matter you are personally party to is one thing, which is generally not an offence. Doing anything to another party, including placing anything on their person or premises without their knowledge, is a different matter entirely and is not done here and should not be done by anybody.' },
  { q: 'Which cases is this worth doing for?', a: 'Family and property matters where both parties are in the same family, where the timing of a hearing matters, and where a person is so consumed by the case that they are making mistakes in it. Civil and commercial disputes are read the same way but the honest answer more often is that a good lawyer is the intervention required.' },
  { q: 'Will you work against my own family member?', a: 'Only where the other person knows about it and agrees to it, which in a legal matter effectively never happens. Legal disputes are worked on by reading timing and by working on the person own chart, never by acting against the other side.' }
])}`
});

/* ==================== 4. CHILD BIRTH / PUTRA SANTAN =================== */
pages.push({
  out: 'child-birth-and-putra-santan.html',
  canonical: '/child-birth-and-putra-santan.html',
  pair: '/hi/child-birth-and-putra-santan.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  title: 'Child Birth &amp; Putra Santan Astrology | 9365474087',
  desc: 'Putra santan and child birth astrology at Kamakhya by Atul Nath. Barren couple, IVF timing and conception muhurat. Call +91 9365474087 first.',
  keywords: 'putra santan, child birth astrology, barren couple, IVF astrology, conception muhurat, santan dosh, kamakhya mandir puja, kamakhya mandir tantric, tantrik in kamakhya temple, best tantrik in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Child birth', 'Putra santan and child birth astrology', '/child-birth-and-putra-santan.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'See a doctor first. Always.',
  ctaBody: 'Every medical investigation should be done before anything is offered here, and if a doctor has not been seen, that is the first instruction, not a footnote.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Can astrology help a couple who cannot conceive?', a: 'It is a support and not a treatment. A medical evaluation should always come first, because the causes of difficulty conceiving are frequently treatable and are not astrological. What the chart can add is a conception muhurat, which is a real and well-supported application, and reading both charts to see whether anything in them is worth working on.' },
    { q: 'Does an IVF cycle work better in a particular month?', a: 'This is the area where astrological timing has the most legitimate claim, because an IVF cycle is a fixed schedule set in advance by a clinic, and choosing within that window is a real decision. It is not a substitute for the clinic and the timing is offered alongside their schedule, never instead of it.' },
    { q: 'What is a conception muhurat?', a: 'The time within a cycle when conception is most likely, chosen from the mother chart for the fifth house, the moon, and the panchang. It is one of the oldest applications in the tradition and one of the least speculative, because it is a narrow question with a checkable answer.' },
    { q: 'Do you guarantee a child?', a: 'Absolutely not, and no honest practitioner does. A couple trying for years is in real distress, and the most valuable part of a consultation is often a realistic account of what the charts show and what medical investigation has not yet ruled out, followed by a clear referral.' }
  ],
  body: `${S.pagehead('Service', 'Putra Santan and Child Birth Astrology', 'Conception muhurat, IVF cycle timing, and a proper reading of both charts. A medical evaluation always comes first, and that is said at the start rather than at the end.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The first instruction</span>
        <h2>See a doctor before you call anybody</h2>
        <p>A couple who cannot conceive should be having a medical evaluation, and in a large number of cases the cause is entirely treatable: a thyroid problem, a hormone imbalance, a blocked tube, a low sperm count, an infection, an immunological factor. These are ordinary, diagnosable conditions with ordinary treatments, and every week spent looking elsewhere is a week lost.</p>
        <p>So that is said first, to everybody, and it is not a formality. What follows is what astrology can add to a case that a competent doctor has already assessed.</p>
        <h2>What is genuinely useful here</h2>
        <p><strong>Conception muhurat.</strong> The time within a cycle when conception is most likely, chosen from the mother chart for the fifth house, the moon, and the panchang. It is one of the oldest applications in the tradition and one of the least speculative, because it is a narrow question with a checkable answer.</p>
        <p><strong>IVF cycle timing.</strong> This is the strongest legitimate claim in this whole area. An IVF cycle is a fixed schedule set in advance by a clinic, with a narrow window inside it. Choosing within that window from the charts is a real decision with a real effect, and it is offered alongside the clinic schedule and never instead of it.</p>
        <p><strong>Both charts read together.</strong> Where one chart shows a difficulty the other does not, that is worth knowing, and it changes what is worth working on.</p>
        <p><strong>Santan dosha and remedies.</strong> Where a placement is found that is traditionally held to affect children, remedies and a puja at Kamakhya Temple are offered, with a realistic account of what they do.</p>
        <h2>What is not offered</h2>
        <p>No prediction of a child gender or of a specific date of birth, because it is not possible and a wrong answer causes real harm. No promise of conception, and no package sold as a guarantee. No advice to stop or delay medical treatment, and no suggestion anywhere that a treatment should be replaced by a remedy.</p>
        <p>Nor is any claim made that a remedy treats an obstruction. An obstructed fallopian tube is treated by a doctor, and no amount of puja changes it.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>What to bring</h3>
        <ul>
          <li>Date, time and place of birth for both partners</li>
          <li>How long you have been trying, and any investigation done</li>
          <li>Any medical finding, in particular test results</li>
          <li>If on IVF, the clinic schedule and the available window</li>
          <li>Any previous remedies tried, and what they cost</li>
        </ul>
        <h3 style="margin-top:26px">Before the consultation</h3>
        <p>Have the medical work done, and take the findings with you, even if they are normal. Normal results are informative, and a chart read alongside them is a different and much more useful reading than a chart read on hope.</p>
        <h3 style="margin-top:26px">What you will get</h3>
        <ul>
          <li>Both charts read, fifth house and the relevant placements examined</li>
          <li>A written account of what the charts show, in plain terms</li>
          <li>A conception muhurat where one is wanted, within your cycle</li>
          <li>IVF cycle timing where a clinic window exists</li>
          <li>Putra santan puja at Kamakhya Temple where a remedy is warranted</li>
          <li>Written remedies, and a realistic statement of what they can and cannot do</li>
        </ul>
        <h3 style="margin-top:26px">Cost</h3>
        <p>First call free. The joint reading is quoted before it begins. A muhurat calculation is a modest separate amount. Any puja is agreed in writing before a date is fixed. Where the conclusion is that the medical route is the whole answer, that is said and no ritual is offered.</p>
        <h3 style="margin-top:26px">Timeliness</h3>
        <p>Where a cycle window is live, the muhurat is worked out quickly and to the day. Where a clinic has given a short window, that is understood and prioritised over anything else on the page.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>If you have not seen a doctor.</strong> Make that appointment before this one. In this practice roughly a third of the calls about children end with a referral rather than a remedy, and that is considered a good outcome.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.testiSection()}

${S.faqSection([
  { q: 'Can astrology help a couple who cannot conceive?', a: 'It is a support and not a treatment. A medical evaluation should always come first, because the causes of difficulty conceiving are frequently treatable and are not astrological. What the chart can add is a conception muhurat, which is a real and well-supported application, and reading both charts to see whether anything in them is worth working on.' },
  { q: 'Does an IVF cycle work better in a particular month?', a: 'This is the area where astrological timing has the most legitimate claim, because an IVF cycle is a fixed schedule set in advance by a clinic, and choosing within that window is a real decision. It is not a substitute for the clinic and the timing is offered alongside their schedule, never instead of it.' },
  { q: 'What is a conception muhurat?', a: 'The time within a cycle when conception is most likely, chosen from the mother chart for the fifth house, the moon, and the panchang. It is one of the oldest applications in the tradition and one of the least speculative, because it is a narrow question with a checkable answer.' },
  { q: 'Do you guarantee a child?', a: 'Absolutely not, and no honest practitioner does. A couple trying for years is in real distress, and the most valuable part of a consultation is often a realistic account of what the charts show and what medical investigation has not yet ruled out, followed by a clear referral.' }
])}`
});

/* ==================== 5. VASTU ======================================= */
pages.push({
  out: 'vastu-consultation-guwahati.html',
  canonical: '/vastu-consultation-guwahati.html',
  pair: '/hi/vastu-consultation-guwahati.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  title: 'Vastu Consultation in Guwahati | Atul Nath, 9365474087',
  desc: 'Vastu consultation and vastu shanti for home, shop and office in Guwahati by Atul Nath. Practical corrections, no demolition scares. Call 9365474087.',
  keywords: 'vastu consultation, vastu for house, vastu shanti, vastu for shop, vastu for office, vastu guru guwahati, vastu correction, ghar ka vastu, best tantrik in guwahati, tantrik in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Vastu', 'Vastu consultation and vastu shanti', '/vastu-consultation-guwahati.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'Most vastu problems are solved by moving furniture',
  ctaBody: 'A genuine vastu consultation ends with a list of changes you can make yourself this weekend. If it ends with a demolition, find somebody else.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Is vastu science or superstition?', a: 'Part of it is observation and part of it is tradition, and separating the two honestly is most of a good consultation. The parts that concern light, ventilation, the position of a door, and the circulation of a space are sensible building practice and stand on their own. The parts that concern specific angles and specific numbers are tradition, and are treated as such rather than dressed up as physics.' },
    { q: 'Do I have to do anything major to my house?', a: 'No. In most cases the recommendations are moving a bed, opening a blocked window, changing where a cooking fire sits, or putting a mirror somewhere other than facing a door. Demolition advice is essentially always a way of charging more, and it is never given here.' },
    { q: 'Can you do vastu without visiting the house?', a: 'For a flat or a house you can share a plan with dimensions and a photograph of each room, which is enough for a proper reading. For a shop or a plot where the surroundings matter, a visit is much better, and site visit charges are quoted in advance rather than after arrival.' },
    { q: 'How is vastu connected to the astrology?', a: 'A property is treated as part of the chart of the person who owns it, so the direction of the main door is read together with the owner horoscope. Vastu on its own is a placement exercise; vastu read with the owner chart is closer to what is actually done here.' }
  ],
  body: `${S.pagehead('Service', 'Vastu Consultation and Vastu Shanti', 'For a home, a shop or an office where something feels persistently wrong. Practical corrections first, ritual only where it is warranted, no demolition advice ever.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">The useful part and the traditional part</span>
        <h2>Most vastu advice is either obvious or invented</h2>
        <p>Vastu has a bad name for the same reason vashikaran does: because the honest version and the commercial version are sold side by side, and the commercial one is far more profitable.</p>
        <p>Sorted honestly, vastu advice falls into three groups.</p>
        <p><strong>Sensible building practice.</strong> Light, ventilation, the position of the main door relative to the slope of the land, where water accumulates, whether a room is used for the purpose it is shaped for. This is not mysticism. It is what people who build well have always known, and it stands on its own regardless of what anyone believes.</p>
        <p><strong>Tradition.</strong> Directions, specific angles, specific numbers, the orientation of a plot. There is no evidence for these and no honest practitioner will claim there is. They are treated as a traditional system, used because clients find it useful, and not sold as physics.</p>
        <p><strong>Predatory advice.</strong> Demolition of walls, replacing a door wholesale, buying a specific object from the person giving the consultation. This is where almost all the money is, and it is refused.</p>
        <h2>What a consultation is</h2>
        <p>A reading of the property together with the owner horoscope, producing a written list of changes, ranked by how much difference they are likely to make. Most of the list is things you can do yourself in a weekend. A minority needs a mason or an electrician, and where that is the case the cost is estimated honestly rather than inflated by the person who benefits.</p>
        <p>Vastu shanti puja is performed where a reading shows it is warranted, which is a minority of properties and a larger minority of business premises. Where the changes are sufficient on their own, no ritual is offered.</p>
        <h2>For shops and offices</h2>
        <p>Commercial vastu is treated more seriously than residential, because a business has a direction, a counter position, a cash position and a back entrance, and a badly placed one does affect trade in the ordinary sense of flow and visibility. The reading here covers the main door, the counter or workspace position, the cash or safe position, the toilet and the back door, and the light in the working area.</p>
        <p>It is also the most common place where advice is inflated, so the recommendations are written down with the reason for each one. If a change is said to help, it is said why.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>What to send for a first reading</h3>
        <ul>
          <li>A floor plan with dimensions, and the compass direction of the main door</li>
          <li>A photograph of each room, and of the outside approach</li>
          <li>Your date, time and place of birth, for the owner reading</li>
          <li>For a shop, where the counter, cash and back door are</li>
          <li>What is actually bothering you, which is usually not the same as what you think is wrong</li>
        </ul>
        <h3 style="margin-top:26px">What you will get</h3>
        <p>A written list of corrections, ranked, each with the reason. Most are free or near free to carry out. Where a cost is involved it is estimated, and it is never the case that the person advising benefits from the work recommended.</p>
        <h3 style="margin-top:26px">Site visits</h3>
        <p>Worth doing for a shop, a plot or an office, because the surroundings and the approach genuinely carry information a floor plan does not. The charge is quoted in advance and covers travel, so there is no bill to argue about afterwards.</p>
        <h3 style="margin-top:26px">Vastu shanti</h3>
        <p>Performed where a reading warrants it, with the specific defect addressed rather than as a general offering. Priced in writing before a date is fixed, and not recommended in the large majority of cases where the corrections do the work.</p>
        <h3 style="margin-top:26px">Cost</h3>
        <p>First call free. A written reading from plans and photographs is quoted before it begins. A site visit is quoted in advance. Any puja is agreed in writing before a date is fixed.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>Refused:</strong> advice to break down walls, replace doors, or buy anything from the person giving the consultation. If a consultation ends with any of those, it was not a consultation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.faqSection([
  { q: 'Is vastu science or superstition?', a: 'Part of it is observation and part of it is tradition, and separating the two honestly is most of a good consultation. The parts that concern light, ventilation, the position of a door, and the circulation of a space are sensible building practice and stand on their own. The parts that concern specific angles and specific numbers are tradition, and are treated as such rather than dressed up as physics.' },
  { q: 'Do I have to do anything major to my house?', a: 'No. In most cases the recommendations are moving a bed, opening a blocked window, changing where a cooking fire sits, or putting a mirror somewhere other than facing a door. Demolition advice is essentially always a way of charging more, and it is never given here.' },
  { q: 'Can you do vastu without visiting the house?', a: 'For a flat or a house you can share a plan with dimensions and a photograph of each room, which is enough for a proper reading. For a shop or a plot where the surroundings matter, a visit is much better, and site visit charges are quoted in advance rather than after arrival.' },
  { q: 'How is vastu connected to the astrology?', a: 'A property is treated as part of the chart of the person who owns it, so the direction of the main door is read together with the owner horoscope. Vastu on its own is a placement exercise; vastu read with the owner chart is closer to what is actually done here.' }
])}`
});

/* ==================== 6. NAME CORRECTION ============================= */
pages.push({
  out: 'name-correction-and-numerology.html',
  canonical: '/name-correction-and-numerology.html',
  pair: '/hi/name-correction-and-numerology.html',
  prefix: '', lang: 'en',
  priority: 0.8, changefreq: 'monthly',
  title: 'Name Correction &amp; Numerology in Assam | 9365474087',
  desc: 'Name correction, numerology and palm reading by Atul Nath in Guwahati. Nam akshar shodhan with your janam patrika. Call +91 9365474087.',
  keywords: 'name correction, naam badalna, numerology, name numerology, palm reading, hast rekha, nam akshar shodhan, lucky name, name change for career, tantrik in guwahati, best tantrik in guwahati',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], ['Name correction', 'Name correction, numerology and palm reading', '/name-correction-and-numerology.html']]),
  c: S.chrome({ nav: S.NAV.map(n => n.href === 'services.html' ? { ...n, current: true } : n) }),
  ctaTitle: 'A name is chosen from a chart, not from a list',
  ctaBody: 'The correct name comes out of your janam patrika. A list of lucky numbers handed over without reading the chart is the version to avoid.',
  services: S.SERVICES.map(s => ({ name: s.title, url: '/' + s.file })),
  serviceListName: 'All spiritual services from Atul Nath Aghori Tantrik',
  faqs: [
    { q: 'Does a name actually change anything?', a: 'It is a tradition rather than a mechanism, and it is treated as such. What is true is that a name used consistently shapes how people read you, and a name that has been corrected in a hurry can be a daily small irritation. A name is also fixed at birth in most families and changing it is not a trivial decision, which is why the chart is read before a suggestion is made.' },
    { q: 'How is the right name worked out?', a: 'From the janam patrika, not from a list. The nakshatra, the ruling number from the birth date, and the letters of the name in use are examined together, and a name is suggested that corresponds to the number the chart supports. A list of lucky numbers given without the chart is the version to be suspicious of, and it is extremely common.' },
    { q: 'Can you change my name legally?', a: 'No, and this is not an astrological service. A legal name change in India is a specific process under the relevant rules, and the gazette notification, or whatever applies, is a matter for a lawyer and a documents agent. What is offered is the astrological side: what your chart supports, and how to handle the change in practice.' },
    { q: 'Do you do palm reading as well?', a: 'Yes, and it is read alongside the chart rather than instead of it, which makes for a more useful reading than either on its own. Palmistry is treated as a traditional system with real observational content and no claim of mechanism, in the same way as vastu.' }
  ],
  body: `${S.pagehead('Service', 'Name Correction, Numerology and Palm Reading', 'A name worked out from the janam patrika rather than from a list, with numerology and palmistry read alongside the chart. The astrological side only, not the paperwork.')}

<section class="section">
  <div class="wrap">
    <div class="split split--top">
      <div class="prose">
        <span class="eyebrow">What this actually is</span>
        <h2>A tradition, not a mechanism, and said so plainly</h2>
        <p>A name does not cause anything. That is not what is claimed here. What is claimed is weaker and more useful: a name is fixed in the janam patrika at birth, and a name worked out from that chart can be made to correspond with it, and living with a name that corresponds with your chart is a small consistent alignment rather than a large one-off change.</p>
        <p>Two things follow, and both are practical.</p>
        <p>The first is that a name has to come from the chart. A list of lucky numbers, or a table of letters and digits, is a different product and a much cheaper one. The name is worked out from the nakshatra, the ruling number derived from the date of birth, and the letters currently in use, examined together. Where those three agree, the name is working. Where they do not, the mismatch is named.</p>
        <p>The second is that a legal name change in India is a specific documentary process and it is not an astrological service. A gazette notification, a change in the relevant records, updates to a PAN card, a passport, a bank, and so on, and none of that is done here. What is offered is the astrological side and a realistic account of whether changing a name in practice is worth the administrative effort, which for a lot of people it is not.</p>
        <h2>Numerology</h2>
        <p>The Chaldean system, read from the birth date and the name in use, examining the compound and the destiny number and the relationship between them. It is a traditional system with a self-consistent internal logic, and it is useful mainly for making an existing pattern explicit rather than for predicting anything.</p>
        <h2>Palmistry</h2>
        <p>Read from both hands, the line structure at first because that is genuinely observational, and then the mounts. Read alongside the janam patrika, which makes for a considerably more useful reading than either system produces alone, since the two can be checked against each other.</p>
        <p>For a first consultation both palms are needed, in person, and the lines are clearest when the hands are washed and relaxed rather than freshly scrubbed for the reading.</p>
      </div>
      <div class="prose">
        <span class="eyebrow">Practical</span>
        <h3>What to bring</h3>
        <ul>
          <li>Date, time and place of birth, as accurate as available</li>
          <li>Your name exactly as it appears on your birth certificate</li>
          <li>Any earlier name changes, and when</li>
          <li>Both hands, for a palm reading, in person</li>
          <li>For a business name, the registration details and the trade</li>
        </ul>
        <h3 style="margin-top:26px">What you will get</h3>
        <ul>
          <li>The nakshatra, ruling number and destiny number worked out from the birth date</li>
          <li>An examination of the name in use against the chart</li>
          <li>A suggested name where the chart supports a change, with the reasoning</li>
          <li>Where a change is not worth the paperwork, that is said instead</li>
          <li>For a business, a name and number checked before you print anything</li>
          <li>Palmistry read alongside the chart where wanted</li>
        </ul>
        <h3 style="margin-top:26px">Business names</h3>
        <p>Done before a name is printed, a domain is bought or signage is ordered, which is the only time it is much use. The number the business will operate under is checked against the proprietor horoscope, and that is the part that has actually been worth doing in a lot of cases.</p>
        <h3 style="margin-top:26px">On what it costs</h3>
        <p>The first call is free. A numerology and name reading is quoted before it begins and is a modest amount. A full consultation including the chart and both palms takes longer and is quoted separately. Nothing is charged for a list of names emailed afterwards, and nothing is charged for being told that no change is needed.</p>
        <div class="callout" style="margin-top:26px">
          <p><strong>A note on common practice.</strong> Changing a name on the strength of a table of numbers costs a great deal of money in the registration process and usually achieves very little. The chart reading exists so that you know whether yours is one of the cases where it matters.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${S.faqSection([
  { q: 'Does a name actually change anything?', a: 'It is a tradition rather than a mechanism, and it is treated as such. What is true is that a name used consistently shapes how people read you, and a name that has been corrected in a hurry can be a daily small irritation. A name is also fixed at birth in most families and changing it is not a trivial decision, which is why the chart is read before a suggestion is made.' },
  { q: 'How is the right name worked out?', a: 'From the janam patrika, not from a list. The nakshatra, the ruling number from the birth date, and the letters of the name in use are examined together, and a name is suggested that corresponds to the number the chart supports. A list of lucky numbers given without the chart is the version to be suspicious of, and it is extremely common.' },
  { q: 'Can you change my name legally?', a: 'No, and this is not an astrological service. A legal name change in India is a specific process under the relevant rules, and the gazette notification, or whatever applies, is a matter for a lawyer and a documents agent. What is offered is the astrological side: what your chart supports, and how to handle the change in practice.' },
  { q: 'Do you do palm reading as well?', a: 'Yes, and it is read alongside the chart rather than instead of it, which makes for a more useful reading than either on its own. Palmistry is treated as a traditional system with real observational content and no claim of mechanism, in the same way as vastu.' }
])}`
});

module.exports = pages;
