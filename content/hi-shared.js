const fs = require('fs');
/* ==========================================================================
   content/hi-shared.js - Hindi chrome + the service list for Hindi pages
   ========================================================================== */
const hi = require('./hi.js');
const en = require('./en-shared.js');

// Hindi labels per English registry entry. One source of truth for the list,
// translations live here.
const HI_LABEL = {
  'black-magic-removal-kamakhya': 'कामाख्या काला जादू टोना',
  'dosha-correction-kamakhya': 'दोष निवारण',
  'pandit-and-puja-booking-kamakhya': 'पूजा और पंडित बुकिंग',
  'love-problem-solution-kamakhya': 'प्रेम समस्या हल',
  'lost-love-recovery-kamakhya': 'प्रेम वापसी',
  'relationship-solution-kamakhya': 'रिश्ता समाधान',
  'husband-wife-dispute-mayong': 'पति-पत्नी विवाद',
  'kundli-milan-match-making': 'कुंडली मिलान',
  'vashikaran-specialist-mayong': 'वशीकरण विशेषज्ञ',
  'business-problem-solution-mayong': 'व्यापार समस्या हल',
  'career-and-job-astrology-guwahati': 'करियर और नौकरी',
  'vastu-consultation-guwahati': 'वास्तु परामर्श',
  'child-birth-and-putra-santan': 'संतान और पुत्र संतान',
  'court-case-and-legal-aid-guwahati': 'मुकदमा और कानूनी',
  'name-correction-and-numerology': 'नाम सुधार और अंकशास्त्र'
};

const services = (onlyExisting) => en.SERVICES
  .filter(s => !onlyExisting || fs.existsSync(__dirname + '/../hi/' + s.file))
  .map(s => ({ name: HI_LABEL[s.slug] || s.short, url: '/' + s.file }));

module.exports = {
  chrome: hi.chrome,
  NAV: hi.NAV,
  ph: hi.ph,
  BIZ: hi.BIZ,
  PER: hi.PER,
  HFAQ: hi.HFAQ,
  services
};
