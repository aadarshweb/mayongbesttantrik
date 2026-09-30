/* ==========================================================================
   content/en-legal.js - legal and governance pages.

   privacy-policy, terms, disclaimer, developer declaration.

   Two decisions worth knowing about before editing anything here.

   1. ALL FOUR ARE noindex AND OUT OF THE SITEMAP, deliberately. They are
      reachable from the footer of every page and they are real, readable
      documents that a visitor may need, but they are not search destinations.
      A privacy policy has no search demand, and a low-value legal page sitting
      in a 50-URL sitemap dilutes the crawl budget of the fifteen pages that do
      have demand. Google also treats "noindex, follow" plus a sitemap entry as
      a contradiction. So they are noindex here and filtered out in build.js.

      The consequence: these pages get NO hreflang, because build.js only emits
      hreflang when p.noindex is false. There is deliberately no Hindi
      translation of these four. That is why audit.js skips its hreflang checks
      for noindex pages.

   2. THE DEVELOPER DECLARATION IS A FACTUAL RECORD, NOT A SHIELD. It states
      what the developer did, what they did not do, and that they are not a
      party to the business. Every one of those is checkably true and is the
      kind of statement that actually holds up. It deliberately does NOT try to
      disclaim the CLIENT's own obligations to visitors, because a third party
      cannot do that by writing a page, and pretending to would make the whole
      document worthless. The client keeps full responsibility for the services;
      that is correct, and the page says so.
   ========================================================================== */
const U = require('./ui.js');
const S = require('./en-shared.js');
const { PHONE, TEL, WA } = U;

const pages = [];

/* Shared blocks, so the four documents stay consistent with each other.
   `legalNav` cross-links the four on every one of them, which is both the
   normal convention and the reason none of them can be orphaned. */
const contactBlock = `<div class="info-list">
  <div class="info-list__row"><div class="info-list__k">Phone</div><div class="info-list__v"><a class="big" href="tel:${TEL}">${PHONE}</a><div class="muted" style="font-size:0.9rem">Daily 6:00 am to 10:00 pm. The first call is free and nothing is charged for it.</div></div></div>
  <div class="info-list__row"><div class="info-list__k">Email</div><div class="info-list__v"><a href="mailto:atulnath@mayongbesttantrik.com">atulnath@mayongbesttantrik.com</a><div class="muted" style="font-size:0.9rem">For data requests, documents, and detailed enquiries. This is also the grievance contact.</div></div></div>
  <div class="info-list__row"><div class="info-list__k">WhatsApp</div><div class="info-list__v"><a href="https://wa.me/${WA}" rel="noopener">Message on WhatsApp</a><div class="muted" style="font-size:0.9rem">Do not send birth details of other people without their knowledge.</div></div></div>
</div>`;

const footers = `
<footer class="section section--tight" style="padding-bottom:0">
  <div class="wrap">
    <div class="prose" style="max-width:760px">
      <h2>Related pages</h2>
      <p>These four documents are read together. If you are about to book anything, the
      <a href="terms.html">terms</a> and the <a href="disclaimer.html">disclaimer</a> are the two that affect you most.</p>
      <ul>
        <li><a href="privacy-policy.html">Privacy Policy</a> &mdash; what we collect, and how to have it deleted</li>
        <li><a href="terms.html">Terms and Conditions</a> &mdash; fees, bookings, results and liability</li>
        <li><a href="disclaimer.html">Disclaimer</a> &mdash; what this website is not</li>
        <li><a href="developer-declaration.html">Developer Declaration</a> &mdash; who built this site and who runs the business</li>
      </ul>
      <h2 style="margin-top:34px">Questions before you book</h2>
      <p>If anything on this page is unclear, ask on the first call rather than assuming. It costs nothing to ask and it is
      much cheaper than misunderstanding later.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="tel:${TEL}">Call ${PHONE}</a>
        <a class="btn btn--ghost" href="contact.html">Contact and locations</a>
      </div>
    </div>
  </div>
</footer>`;

/* Reused page furniture. The legal pages are deliberately plainer than the
   service pages: no stats band, no testimonials, no gallery, no process
   timeline. A testimonial on a terms page is a small credibility problem.
   Takes only the crumb label and slug - the H1, sub and eyebrow are passed
   separately to S.pagehead() by each page, where the copy belongs. */
const legalHead = (crumbName, slug) => ({
  noindex: true,
  priority: 0.1,
  changefreq: 'yearly',
  type: 'website',
  ogImage: 'ritual.jpg',
  businessDesc: U.BUSINESS_DESC,
  personDesc: U.PERSON_DESC,
  trail: S.crumb([['Home', 'Home', 'index.html'], [crumbName, crumbName, slug]]),
  c: S.chrome(),
  ctaTitle: 'Ask before you book, not after',
  ctaBody: 'These pages are written to be read once, quietly, before you commit money to anything. If a clause here is unclear, the first phone call is free and you can get it explained.'
});

/* ==================== 1. PRIVACY POLICY ================================== */
pages.push(Object.assign(legalHead(
  'Privacy Policy',
  '/privacy-policy.html'
), {
  out: 'privacy-policy.html',
  canonical: '/privacy-policy.html',
  prefix: '', lang: 'en',
  title: 'Privacy Policy | Atul Nath Aghori Tantrik, Assam',
  desc: 'How Atul Nath Aghori Tantrik collects, uses, stores and protects your personal details and birth information, and how to ask for access or deletion.',
  keywords: 'privacy policy, tantrik privacy policy, kamakhya tantrik privacy, mayong tantrik data privacy, how to delete my horoscope data, assam tantrik privacy policy',
  body: `${S.pagehead('Legal', 'Privacy Policy', 'What is collected when you call, why it is collected, who sees it, how long it is kept, and how to have it deleted.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      <p class="lede">This policy explains what happens to your information when you contact Atul Nath Aghori Tantrik, whether by
      phone, WhatsApp, email, in person at the Mayong ashram or the Kamakhya Temple office, or through any page on this
      website. It is written to be read rather than skipped, because the details involved here are unusually personal.</p>

      <p class="muted" style="font-size:0.9rem">Last updated: 29 September 2026. Applies to mayongbesttantrik.com and to the
      practice run by Atul Nath Aghori Tantrik from Mayong, Morigaon, Assam and Kamakhya Temple, Guwahati.</p>

      <h2>1. Who this policy covers</h2>
      <p>This policy covers this website and the practice of Atul Nath Aghori Tantrik. It covers every way of getting in
      touch, not only the contact form. If you have never contacted us, we hold nothing about you and this policy has
      nothing to act on.</p>

      <h2>2. What is collected</h2>
      <p>Four kinds of information are collected, and only when you choose to give them.</p>

      <h3>2.1 Identifying details</h3>
      <p>Your name, your phone number, your district or town, and occasionally an email address. You give the phone number
      yourself when you call or message, so this is information you have actively supplied.</p>

      <h3>2.2 Birth and family details</h3>
      <p>Date, time and place of birth, and the corresponding details for a spouse, child or partner where the reading
      requires them. This is the most sensitive category of information in this policy, and it is treated as such. It is
      required before a horoscope can be read at all, so without it there is nothing to read and no reading is done.</p>
      <div class="callout" style="margin-top:22px">
        <p><strong>Other people's details.</strong> Birth details of a spouse, child or partner are collected only so the
        chart can be read. Please do not send them without that person's knowledge. Where both people must take part in a
        piece of work, both are asked directly.</p>
      </div>

      <h3>2.3 What the consultation is about</h3>
      <p>A short description of the problem, given in your words, because it is needed to read the chart against it. This
      is frequently about a relationship, a family dispute, money or health worries, and it is treated as confidential.</p>

      <h3>2.4 Payment information</h3>
      <p>The amount, the date and the method. Card numbers, UPI handles and bank account details are not stored on this
      website and are not retained after a transaction. See section 6.</p>

      <h3>2.5 Technical information</h3>
      <p>The ordinary logs any web server keeps: which page was requested, when, from roughly where, and the browser type.
      This website does not run advertising trackers, does not build a profile, and does not sell or share visitor data with
      advertising networks.</p>

      <h2>3. Why it is collected, and on what basis</h2>
      <p>Information is collected for the purpose of giving you the consultation you asked for, keeping the record of that
      consultation so the same question is not re-read from scratch, and meeting legal and accounting obligations. Where
      your consent is the basis relied on, you may withdraw it at any time by writing to the email address in section 12,
      and the work that depends on it will stop.</p>
      <p>Withdrawing consent does not affect anything done lawfully before it was withdrawn, and records already required to
      be kept for tax or legal reasons will be retained for the period those rules require.</p>

      <h2>4. How it is collected</h2>
      <p>Directly from you, on a call, on WhatsApp, by email, or in person. Consultation is not carried out through an
      anonymous form designed to harvest data. Nothing is collected from a third party about you.</p>

      <h2>5. Who it is shared with</h2>
      <ul>
        <li><strong>Temple priests and ritual suppliers</strong> &mdash; only what a booked ritual requires, and only with your agreement.</li>
        <li><strong>Your own family members</strong> &mdash; only where you have asked us to speak to them, as happens when both partners attend a consultation together.</li>
        <li><strong>Service providers</strong> &mdash; the hosting provider and, for payments, the payment processor. Each is bound to use the data only to provide that service.</li>
        <li><strong>Nobody else.</strong> Your details are not sold, rented, traded or shared for marketing, and not supplied to any list broker.</li>
      </ul>
      <p>We will not disclose anything to a third party merely because they ask, including someone claiming to be a
      relative, an ex-partner or a creditor. If there is a genuine legal requirement to disclose, you will be told first
      unless the law forbids it.</p>

      <h2>6. Payments</h2>
      <p>Payments are taken by cash, UPI or bank transfer. This website has no payment gateway and does not ask for or store
      card numbers, CVVs or UPI PINs. <strong>If anyone asks you for a card number, a CVV, a UPI PIN or an OTP by phone,
      message or email, it is not us.</strong> No legitimate request for those exists in this practice. Call the published
      number to check before paying anything to anyone.</p>

      <h2>7. How long it is kept</h2>
      <p>Consultation records, including birth details, are kept for as long as you remain a client and may reasonably
      continue to need them, and in any case for the period required by Indian tax and accounting rules. They are not kept
      indefinitely and not kept because they are useful.</p>
      <p>Once you ask in writing for your data to be deleted, it is deleted from working records within 30 days, except for
      the small portion that tax and accounting law requires to be retained, which is then kept under restricted access
      and no longer used for any purpose.</p>

      <h2>8. How it is protected</h2>
      <p>Records are kept on access-controlled devices and are not published anywhere. Access to client records is limited
      to the person conducting the reading. Reasonable care is taken, but no system that handles information over the
      internet or on a phone can be described as entirely secure, and no claim of perfect security is made here.</p>

      <h2>9. Your rights</h2>
      <p>Under the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 as applicable, you
      may:</p>
      <ul>
        <li>Ask what personal data is held about you, and get a copy of it.</li>
        <li>Ask for wrong or incomplete data to be corrected.</li>
        <li>Ask for your data to be erased, subject to what the law requires us to retain.</li>
        <li>Withdraw consent you have given.</li>
        <li>Nominate someone to exercise these rights on your behalf.</li>
        <li>Raise a grievance and receive a response.</li>
      </ul>
      <p>These are free. We do not charge for complying with a data request, and we do not require a reason for it.</p>

      <h2>10. Children</h2>
      <p>This practice does not act for anyone under 18 without the involvement and written agreement of a parent or
      guardian, and we would normally ask to speak to the guardian first. We do not knowingly collect personal data
      directly from a child. If you believe a child's details have been given to us, tell us and they will be removed.</p>

      <h2>11. Cookies and this website</h2>
      <p>This website uses no advertising cookies, no tracking pixels and no third-party analytics. Function is achieved
      with the minimum the browser already provides. Nothing on this site follows you around the internet afterwards.</p>

      <h2>12. How to contact us about your data</h2>
      <p>Write to <a href="mailto:atulnath@mayongbesttantrik.com">atulnath@mayongbesttantrik.com</a> with the word
      "Data request" in the subject line, or call ${PHONE} between 6:00 am and 10:00 pm. A grievance or data request is
      acknowledged within 7 days and answered within 30 days. Requests made by email are preferred, because they leave a
      written record that a deletion was actually requested.</p>
      <div style="margin-top:30px">${contactBlock}</div>

      <h2>13. If this policy changes</h2>
      <p>Any change will be made on this page with an updated date at the top, and it will apply from that date. If a
      change materially affects how your information is used, you will be told directly rather than left to find it here.</p>

      <h2>14. Acceptance</h2>
      <p>By continuing to use this website, or by contacting us about a consultation, you accept the handling of your
      information described above. If you do not accept it, please do not send birth details, and nothing further will
      follow from it.</p>
    </div>
  </div>
</article>
${footers}`
}));

/* ==================== 2. TERMS AND CONDITIONS ============================ */
pages.push(Object.assign(legalHead(
  'Terms and Conditions',
  '/terms.html'
), {
  out: 'terms.html',
  canonical: '/terms.html',
  prefix: '', lang: 'en',
  title: 'Terms and Conditions | Atul Nath Aghori Tantrik',
  desc: 'The terms on which Atul Nath Aghori Tantrik provides consultations, ritual work and puja booking in Mayong and Kamakhya Temple. Fees, results, liability.',
  keywords: 'tantrik terms and conditions, kamakhya puja terms, mayong tantrik booking terms, ritual service terms assam, astrology consultation terms and conditions, kamakhya tantrik service agreement',
  body: `${S.pagehead('Legal', 'Terms and Conditions', 'The terms on which consultations, ritual work and puja booking are provided, including fees, results, refusals and liability.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      <p class="lede">These terms govern every consultation, reading, ritual and puja booking arranged through this
      website or in person. They are written plainly on purpose. Nothing here is a trick and nothing is buried. If a term
      is unclear, ask before you pay rather than after.</p>

      <p class="muted" style="font-size:0.9rem">Last updated: 29 September 2026. Applies to Atul Nath Aghori Tantrik,
      Mayong, Morigaon, Assam 782411, and the office at Kamakhya Temple Road, Malakhuwa, Guwahati, Assam 781010.</p>

      <h2>1. The nature of the services</h2>
      <p>The services offered are religious and spiritual practice, and astrological consultation, carried out within the
      tantric and Vedic traditions of this region. They are a practice of faith, a reading of traditional texts, and a
      body of ritual. They are not a branch of science, they are not a medical treatment, and they do not replace
      qualified professional help. Please read the <a href="disclaimer.html">disclaimer</a> as well as these terms; it is
      not a formality, it sets out what these services can and cannot be relied on for.</p>

      <h2>2. Consultation and booking</h2>
      <ul>
        <li><strong>The first conversation is free.</strong> A telephone call, and nothing is charged for it.</li>
        <li><strong>A price is quoted before any work begins</strong>, and it does not change afterwards without agreement.</li>
        <li><strong>No advance payment is taken to book</strong> a time. A booking is confirmed by agreement, not by money.</li>
        <li><strong>Visits are by appointment</strong> at both locations. Walk-ins are welcome at the Kamakhya Temple office during opening hours, but an appointment avoids a wasted journey.</li>
        <li><strong>Priya kundali details must be accurate.</strong> A reading of a wrong chart is a reading of nothing, and no responsibility arises for the consequences of details supplied inaccurately.</li>
      </ul>

      <h2>3. Fees and payment</h2>
      <ul>
        <li>Fees are quoted per piece of work and confirmed in writing or on the call before it is booked.</li>
        <li>Payment is by cash, UPI or bank transfer.</li>
        <li>Consultations, dosha readings and ritual planning are charged for as quoted. Travel outside Guwahati and Morigaon districts, if agreed, is charged separately and named in advance.</li>
        <li><strong>Puja at a temple</strong> is performed by that temple's own priests, and the temple's fees are the temple's. They are quoted before booking and are not altered afterwards.</li>
        <li>Nothing beyond the agreed amount is ever asked for. There is no second payment demanded after a ritual is complete.</li>
      </ul>

      <h2>4. No promise of a particular result</h2>
      <p>This is the single most important term here. Astrology and tantra are not capable of guaranteeing an outcome, and
      anyone who guarantees one is not being honest. A ritual cannot be promised to remove a curse, to bring a particular
      person back, to produce a child, to win a case, or to make money appear. What is promised is the work, done properly
      and to the best of the ability of a person with seventeen years of practice. What results, if any, is a separate
      matter, and it is not within anyone's control, including the practitioner's.</p>
      <p>Where the honest reading is that a situation cannot be changed, or that a ritual is the wrong tool, that is what
      you will be told, including at this stage, on the free call.</p>

      <h2>5. What is asked of you</h2>
      <ul>
        <li>Give accurate birth details, and correct them immediately if you find an error.</li>
        <li>Follow the sadhana, remedy, mantra or fasting instruction given for a piece of work. It is given because it does the work, not as a formality.</li>
        <li>Attend the puja or the appointment on the date agreed, or inform us in advance if you cannot.</li>
        <li>Comply with the requirements of the temple where a ritual is booked. These are the temple's rules, not ours.</li>
        <li>Do not ask for work intended to injure, coerce, control or deceive another person. See section 7.</li>
      </ul>

      <h2>6. Refusals</h2>
      <p>Pieces of work are declined, and no fee is charged for the call on which this is explained, in the following
      cases. These are not conditions of sale and no refund arises, because nothing has been sold.</p>
      <ul>
        <li>Where the real problem is medical, legal or criminal, and needs a doctor, a lawyer or the police instead. In these cases, and roughly one in five calls, you will be directed on and not charged.</li>
        <li>Where the work is intended to harm another person.</li>
        <li>Where one party is acting without the knowledge of the other.</li>
        <li>Where a partner refuses to take part in work that genuinely requires both of them.</li>
        <li>Where the request is for something this practice does not perform at all.</li>
      </ul>
      <div class="callout" style="margin-top:22px">
        <p><strong>On court cases and legal matters.</strong> Astrological work on a legal matter is done alongside a
        lawyer and as a support to you, never as a substitute for one. Nothing said here is legal advice, and no
        astrological practice should be put in place of legal representation. Please see the
        <a href="disclaimer.html">disclaimer</a>.</p>
      </div>

      <h2>7. Work that is not performed at all</h2>
      <p>Certain things are outside what any honest practitioner will do, and outside what the law allows. These include
      any work whose purpose is to harm, injure, kill, coerce, stalk, defraud or deceive; any use of a tantric method
      against a person who has not consented to it; any attempt to remove a person from a spouse or a partner by
      deception; and any promise of a specific result presented as certain. Where a request falls into this category it
      is refused, and no payment is taken.</p>

      <h2>8. Cancellation, delay and refund</h2>
      <ul>
        <li><strong>Consultations and readings.</strong> If you cancel with at least 24 hours' notice, the fee is not charged or is returned. With less notice, or no notice, the fee stands, because the time was held and cannot be refilled on the day.</li>
        <li><strong>Puja and ritual work.</strong> Once a ritual has begun, it cannot be un-done and the fee is not returnable. This is stated at the time of booking, before anything is charged, not afterwards.</li>
        <li><strong>If we cancel</strong> for any reason, everything paid is returned in full, and where a temple ritual was booked, the temple's fee is refunded or carried forward by the temple's own arrangement.</li>
        <li><strong>Delay by force majeure</strong> &mdash; temple closure, weather, civil disruption, illness &mdash; the work is rescheduled. If it cannot be rescheduled, the fee is returned.</li>
      </ul>

      <h2>9. Confidentiality</h2>
      <p>What you say in a consultation stays in the consultation. Birth details, family circumstances and financial
      information are not discussed with other visitors, not used as example in public, and not published anywhere.
      Where another person must be told something for a piece of work to proceed, you are asked for your agreement first.
      Where both partners attend, each has been told the other is present.</p>

      <h2>10. Intellectual property</h2>
      <p>The photographs, text, page design and layout of this website are the property of the practice and are protected
      by copyright. They may be read and quoted with a link and attribution, and not otherwise reproduced, sold or
      republished in full. The name, image, telephone number and location appearing on this website may not be used to
      advertise, impersonate or misrepresent any other person or business. The code that operates this website was
      developed by a third-party web developer and is the property of the practice following handover; see the
      <a href="developer-declaration.html">developer declaration</a> for the division of responsibility between the
      developer and the operator.</p>

      <h2>11. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, and subject to section 6 and section 7 above, no liability arises for:</p>
      <ul>
        <li>any indirect or consequential loss, or loss of profit, opportunity, business, goodwill or anticipated savings, arising from any consultation or ritual;</li>
        <li>any decision taken, or not taken, by you on the basis of a reading or an explanation given;</li>
        <li>any outcome of the work, whether or not the work was performed with reasonable care and skill;</li>
        <li>the acts or omissions of any temple, priest, supplier or third party involved at your request;</li>
        <li>any act or omission of a visitor to this website, including an attempt to send prohibited work as described in section 7.</li>
      </ul>
      <p>Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud,
      or for anything else that cannot lawfully be excluded. Where a term is void, it is treated as deleted and the
      remainder continues.</p>

      <h2>12. Third-party links</h2>
      <p>This website may link to Google Maps, WhatsApp, a telephone dialler and a map embed. These are third-party
      services operated by others, over which we have no control, and their use is subject to their own terms and privacy
      policies. A link is provided for convenience and is not an endorsement of the linked site.</p>

      <h2>13. Changes to these terms</h2>
      <p>These terms may be updated, and the date at the top of this page will show when they last changed. The terms in
      force at the time a piece of work is booked are the terms that apply to that work.</p>

      <h2>14. Governing law and jurisdiction</h2>
      <p>These terms are governed by the law of India. The courts at Guwahati, Assam have exclusive jurisdiction over any
      dispute arising out of or in connection with them. Where a dispute concerns work performed in the Mayong ashram,
      the courts at Morigaon, Assam also have jurisdiction, and either place may be named at the client's choosing.</p>

      <h2>15. Contact</h2>
      <p>Questions about these terms, and any disagreement, are best settled on a call before anyone goes to a lawyer.
      That is faster for everyone and usually settles it.</p>
      <div style="margin-top:30px">${contactBlock}</div>

      <h2>16. Acceptance</h2>
      <p>Booking any consultation, reading or ritual, or using this website, constitutes acceptance of these terms and of
      the <a href="disclaimer.html">disclaimer</a> and the <a href="privacy-policy.html">privacy policy</a>. If you do not
      accept them, do not book, and nothing here will be enforced against you.</p>
    </div>
  </div>
</article>
${footers}`
}));

/* ==================== 3. DISCLAIMER ====================================== */
pages.push(Object.assign(legalHead(
  'Disclaimer',
  '/disclaimer.html'
), {
  out: 'disclaimer.html',
  canonical: '/disclaimer.html',
  prefix: '', lang: 'en',
  title: 'Disclaimer | Atul Nath Aghori Tantrik, Mayong and Kamakhya',
  desc: 'Disclaimer: this website carries spiritual and astrological information only. It is not medical, legal or financial advice, and no result is promised.',
  keywords: 'tantrik disclaimer, astrology disclaimer, kamakhya tantrik disclaimer, mayong tantrik disclaimer, astrology is not medical advice, spiritual services disclaimer',
  body: `${S.pagehead('Legal', 'Disclaimer', 'What this website is, and specifically what it is not. Read this before acting on anything written here.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      <p class="lede">Disclaimers are usually written to protect the writer. This one is written to tell you, plainly, what
      you can and cannot rely on here &mdash; because a page that protects nobody and informs nobody is not worth
      reading.</p>

      <p class="muted" style="font-size:0.9rem">Last updated: 29 September 2026. Please read alongside the
      <a href="terms.html">terms and conditions</a> and the <a href="privacy-policy.html">privacy policy</a>.</p>

      <h2>1. This website is for general information</h2>
      <p>Everything written on this website &mdash; every page, every article, every explanation of a dosha, a remedy, a
      mantra or a tradition &mdash; is general information about a religious and spiritual practice. It is published for
      readers who want to understand the tradition, and it is not written to the circumstances of any particular person.
      Reading a page here is not a consultation and creates no relationship of any kind with the practice.</p>

      <h2>2. Not medical advice</h2>
      <p>Nothing on this website is medical advice, and nothing on it is a diagnosis. There is no doctor-patient
      relationship between you and the author of any of it. A reading of a horoscope cannot tell you what is wrong with
      your body, and no page here should ever delay a visit to a doctor.</p>
      <div class="callout" style="margin-top:22px">
        <p><strong>If you have a health problem, see a doctor first.</strong> Fever, pain, pregnancy, a mental health
        difficulty, difficulty conceiving, a child who is not thriving, an injury, or anything that is getting worse:
        these are medical questions and they belong to a qualified medical practitioner. A consultation should be about how
        a situation is dealt with in the tradition, never about whether to stop taking a prescribed medicine, and it
        should only ever sit alongside proper medical care, never in place of it.</p>
      </div>

      <h2>3. Not legal advice</h2>
      <p>Nothing on this website is legal advice, and no page creates an attorney-client relationship. Pages dealing with
      court cases, property disputes and family matters are general information about how astrological work is
      approached in such situations. They are not a substitute for a lawyer, and no statement here should influence how
      you conduct a case, whether you settle one, or whether you consult a lawyer at all. Consult a qualified lawyer. In
      any legal proceeding, a lawyer decides the strategy, and nothing on this website should be put in front of a court
      as if it were evidence of anything.</p>

      <h2>4. Not financial advice</h2>
      <p>Nothing here is financial, investment, business or tax advice. Pages on business problems, career, property and
      numerology are general information within a traditional practice. Do not invest, lend, borrow, sell, buy, start or
      end a business, or make any financial commitment, on the basis of anything written here. A consultation is a
      spiritual and astrological discussion and is not a financial recommendation of any kind.</p>

      <h2>5. This is a practice of faith, not a science</h2>
      <p>The tantric and Vedic practices described on this website are religious and traditional in origin. They are held
      and followed as a body of spiritual practice, and they are not scientifically validated. They are not presented here
      as proven, and no claim of scientific or clinical effectiveness is made for any of them. A reader who does not
      accept the tradition is under no obligation to, and is not the audience these pages are written for.</p>

      <h2>6. No result is guaranteed</h2>
      <p>No page here, and no consultation, promises that any particular outcome will occur. A page may describe what a
      tradition associates with a dosha, a placement or a remedy; describing an association is not a promise of an
      effect. Outcomes depend on many factors outside any single person's control, including the client&rsquo;s own
      circumstances, decisions and conduct, and the actions of other people. Where a work cannot achieve what is wanted,
      that is said at the start rather than after payment. See the <a href="terms.html">terms and conditions</a>,
      section 4.</p>

      <h2>7. Testimonials and examples are individual</h2>
      <p>Any account, testimonial or case history appearing on this website or given during a consultation describes one
      person&rsquo;s experience at one particular time. It is not a typical result, an average, a guarantee, or evidence
      that the same thing will happen to anyone else. Names are shortened. Details have been altered to protect the
      people quoted. Nobody quoted is a guarantee of anything, and no reference to a result should be read as a claim that
      a similar result is available to the reader.</p>

      <h2>8. Prices, timings and availability</h2>
      <p>Fees, timings, opening hours, locations and availability change and can change without notice. Nothing on this
      website is an offer capable of acceptance, and nothing here is a quotation. The price of any work is confirmed
      before it is booked, and the <a href="terms.html">terms and conditions</a> section 3 govern it. A price stated on a
      page that differs from the price agreed before booking is governed by the agreed price.</p>

      <h2>9. Your decisions are yours</h2>
      <p>Every decision you take on the basis of anything on this website or in a consultation is yours alone. Neither
      the author nor anyone associated with this website accepts responsibility for decisions taken, or not taken, in
      reliance on it, and no one acting here will take responsibility for another person&rsquo;s decision on your behalf.
      If a reading causes you to act in a way you later regret, the responsibility for that action rests with the person
      who took it.</p>

      <h2>10. Accuracy, and corrections</h2>
      <p>Reasonable care is taken over the accuracy of the traditional references on this site, but the material is
      written for general readers and errors are possible. Where a page contains a mistake, it should be reported to the
      email address below and it will be corrected. Nothing on this website is offered as exhaustive, and the absence of
      something here is not a statement that it does not exist.</p>

      <h2>11. Third-party services and external links</h2>
      <p>This website links to and embeds Google Maps, WhatsApp, a telephone dialler, Google Fonts and social platforms.
      These are operated by other companies under their own terms and privacy policies, over which we have no control and
      no responsibility. Once you follow a link or make a call or a message, you are dealing with that service and not
      with this website, and its handling of your data is a matter between you and it. A link is a convenience, not an
      endorsement.</p>

      <h2>12. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, and except in the case of death or personal injury caused by negligence,
      or for fraud, or for anything that cannot lawfully be excluded, no liability is accepted for any loss arising from
      use of this website or reliance on anything written in it, including loss of profit, business, opportunity, data or
      goodwill, and including any loss arising from a third-party service linked from this site.</p>

      <h2>13. Report a problem</h2>
      <p>If a page contains an error, an inaccuracy, or content you believe should be removed, please say so. Reports are
      read and acted on.</p>
      <div style="margin-top:30px">${contactBlock}</div>

      <h2>14. Acknowledgement</h2>
      <p>By reading this page, you confirm that you understand what the services described on this website are and are
      not, and in particular that they do not constitute medical, legal or financial advice, and that no particular
      result is promised. If that is not the arrangement you are looking for, the <a href="contact.html">contact page</a>
      will tell you who to approach instead, and in most cases the right person is a doctor, a lawyer or an accountant
      rather than a tantrik.</p>
    </div>
  </div>
</article>
${footers}`
}));

/* ==================== 4. DEVELOPER DECLARATION =========================== */
pages.push(Object.assign(legalHead(
  'Developer Declaration',
  '/developer-declaration.html'
), {
  out: 'developer-declaration.html',
  canonical: '/developer-declaration.html',
  prefix: '', lang: 'en',
  title: 'Developer Declaration | Website Handover and Scope of Work',
  desc: 'Declaration by the web developer: technical work only, site handed over to the client, and no responsibility for the services, advice or business run on it.',
  keywords: 'developer declaration, website handover declaration, web developer disclaimer, website built by developer and handed over, technical work only no liability, website developer scope of work',
  body: `${S.pagehead('Governance', 'Developer Declaration and Handover Statement', 'Who built this website, what was handed over, and the limits of what a web developer can be responsible for.')}

<article class="section">
  <div class="wrap">
    <div class="prose">
      <p class="lede">This website was designed and built by an independent web developer, and then handed over to the
      business it was built for. The developer was not involved in the business that runs on it, is not a party to it,
      and takes no responsibility for it. This page says so plainly, and says exactly what the developer&rsquo;s work
      covered.</p>

      <p class="muted" style="font-size:0.9rem">Last updated: 29 September 2026. Relates to mayongbesttantrik.com and
      to the practice of Atul Nath Aghori Tantrik, Mayong, Morigaon, Assam and Kamakhya Temple, Guwahati.</p>

      <h2>1. Who wrote this and why</h2>
      <p>This is a factual record, put on the website so that it is in public view rather than buried in a contract, of
      what an independent web developer did and did not do in connection with this website. It is a statement of fact
      about a division of responsibility, not a claim that anybody is exempt from their own obligations.</p>

      <h2>2. What the developer did</h2>
      <p>The developer&rsquo;s work was technical, and consisted of the following.</p>
      <ul>
        <li>Designing and building the website, including its page structure, layout, visual design and the writing and implementation of its HTML, CSS and JavaScript.</li>
        <li>Building both language versions of the site, the English pages and the Hindi pages, and the relationship between them.</li>
        <li>Technical search engine work: page titles and descriptions, canonical URLs, structured data, the sitemap, the robots file and the site manifest.</li>
        <li>Technical performance work: image handling, loading behaviour, layout stability, caching, and Core Web Vitals.</li>
        <li>Accessibility work against WCAG 2.2 AA, including tap targets, contrast, keyboard operation and reduced-motion behaviour.</li>
        <li>Setting up the site&rsquo;s own quality checks, which test every page for broken links, orphan pages, unresolved language alternates, malformed structured data and character-encoding corruption.</li>
        <li>Handing the finished website, its source files, its domain and hosting configuration over to the business, and providing instruction on how to maintain and update it.</li>
      </ul>
      <p>All of that work is complete. The website is finished, and it is now the property of the business.</p>

      <h2>3. What the developer did not do</h2>
      <p>The developer did not, and does not:</p>
      <ul>
        <li>provide any tantric, astrological, spiritual, medical, legal or financial advice, or any consultation of any kind;</li>
        <li>hold out as a tantrik, astrologer, priest, guru or healer, or as a representative, employee, agent, partner or associate of the business;</li>
        <li>sell, book, arrange, deliver, price or carry out any service, ritual or puja, or receive any payment on behalf of the business;</li>
        <li>communicate with any visitor, client, patient, devotee or customer of the business about anything other than the technical operation of the website;</li>
        <li>write, verify, endorse or approve the business&rsquo;s claims about its own history, qualifications, testimonials, results, prices or services;</li>
        <li>give any assurance about the effect of any service described on the website.</li>
      </ul>

      <h2>4. Handover and ownership</h2>
      <p>The website, including its design, code, content structure and technical configuration, was delivered to the
      business, and on completion of the engagement and payment in full, all intellectual property in it passed to the
      business. The business is the owner of the website, of the domain, and of the content published on it.</p>
      <p>From handover onward the business is solely responsible for the website: for the accuracy and legality of its
      content, for the services it offers, for how it deals with visitors, for its compliance with applicable law, and
      for the running of its business. The developer no longer controls, edits, operates or publishes the website, and has
      no access to it, to its hosting, to its domain or to its data.</p>

      <h2>5. The developer is not the operator of this business</h2>
      <p>Atul Nath Aghori Tantrik is the business that operates this website and provides the services described on it.
      The developer is not that business, is not its proprietor, is not employed by it, is not a partner in it, and has
      no authority to bind it. The developer holds no interest in the business and receives nothing from any consultation,
      booking, ritual or payment made through or in connection with this website.</p>

      <h2>6. The developer is not a party to any contract with a visitor</h2>
      <p>Any consultation, reading, ritual, puja, booking or payment is a contract between the visitor and the business,
      and is governed by the <a href="terms.html">terms and conditions</a> of that business. The developer is not a
      party to any such contract, has no rights under it, and assumes no obligations under it. No visitor acquires any
      right against the developer by using this website or by entering into any arrangement with the business, and any
      such claim would be a matter for the business to answer, not for the developer.</p>

      <h2>7. No responsibility for services, advice or outcomes</h2>
      <p>The developer is not responsible for, and accepts no responsibility for:</p>
      <ul>
        <li>the spiritual, astrological or any other advice, consultation, reading, diagnosis or explanation given to any person by the business;</li>
        <li>the performance, quality, suitability, effect or outcome of any ritual, puja, remedy or service, or the failure of any of them to achieve any result;</li>
        <li>any physical, mental, emotional, financial, legal or other harm or loss arising out of a consultation or from reliance on advice given by the business;</li>
        <li>the business&rsquo;s fees, prices, offers, refunds, payment arrangements, tax, accounting or bookkeeping;</li>
        <li>any claim, representation, testimonial, review, rating or statement published on the website, whether or not the developer wrote the underlying technology that displays it;</li>
        <li>any dispute between the business and a visitor, client or third party, of any kind.</li>
      </ul>
      <p>Every one of the above is the sole responsibility of the business, and the developer has no control over any of
      it and no involvement in any of it.</p>

      <h2>8. No responsibility for the content of the website</h2>
      <p>The words, images, claims and information published on this website are the business&rsquo;s content. The
      developer&rsquo;s work was to build a website capable of displaying it, not to verify it. The developer is not the
      author of that content, does not endorse it, and is not responsible for it. Where the business has been advised that
      something is inaccurate or unlawful, that advice is the business&rsquo;s to act on, and the responsibility for
      acting on it, or not, is the business&rsquo;s alone.</p>

      <h2>9. What the developer does remain responsible for</h2>
      <p>To keep this statement honest, the limits above are not a blank cheque. The developer remains responsible for the
      quality of the technical work delivered under the engagement, and specifically for correcting a defect in that
      technical work, such as a broken link, a page that fails to load, or a form that does not work, on being told
      about it. This covers the code as delivered. It does not cover anything arising from the business&rsquo;s own later
      edits, additions, instructions or deletions, or from the business&rsquo;s content, and it does not extend to the
      services described on the website.</p>

      <h2>10. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, the developer accepts no liability for any loss, damage, cost or expense
      of any kind, direct, indirect or consequential, arising out of or in connection with the use of this website, the
      content published on it, the services described on it, or any consultation, booking, payment or arrangement made
      with the business, howsoever arising and wherever arising.</p>
      <p>Nothing in this declaration excludes or limits the developer&rsquo;s liability for death or personal injury
      caused by the developer&rsquo;s negligence, for fraud or fraudulent misrepresentation by the developer, or for
      anything else that cannot lawfully be excluded or limited. Where any part of this declaration is held to be void or
      unenforceable, it is treated as deleted and the remainder continues in full force.</p>

      <h2>11. Governing law</h2>
      <p>This declaration is governed by the law of India, and the courts at Guwahati, Assam have exclusive jurisdiction
      over any dispute concerning it.</p>

      <h2>12. A note on this declaration</h2>
      <div class="callout" style="margin-top:22px">
        <p><strong>This is a statement of fact, not legal advice.</strong> It records the division of work between an
        independent developer and the business, and it cannot transfer the business&rsquo;s own obligations to a visitor
        to anyone else &mdash; the business remains responsible for its services and for obeying the law that applies to
        it, whatever any third party writes on a page. If the business wants its position on this settled properly rather
        than stated on a website, it should have a lawyer in Assam review its contracts, its service terms and its
        position under the law on spiritual and astrological practice, rather than relying on this page alone.</p>
      </div>

      <h2>13. How to raise a technical matter</h2>
      <p>A defect in the technical work should be raised first with the business, which holds the website and can pass it
      on. Questions about a consultation, a booking, a payment or a service are not technical matters and are not for
      the developer; they belong to the business, on <a href="contact.html">the contact page</a> or on ${PHONE}.</p>
      <div style="margin-top:30px">${contactBlock}</div>
    </div>
  </div>
</article>
${footers}`
}));

module.exports = pages;
