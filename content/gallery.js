/* ==========================================================================
   content/gallery.js - THE IMAGE REGISTRY
   Single source of truth for every gallery image, in both languages.

   Adding an image: drop the file in images/gallery/, add one entry here, and
   it appears in the gallery grid, on the homepage strip, in the ImageGallery
   schema, and in the sitemap image entries. Nothing else needs editing.

   alt  = a literal description of what is in the frame. This is what Google
          Images indexes, so it names the actual subject rather than the
          keywords the page is trying to rank for.
   story = the short piece written about it. Kept separate from alt on purpose
          so the caption adds something a visitor actually reads, and so the
          same frame can carry a different caption on the Hindi page.

   The frames are atmospheric stock/editorial images of North Indian temple
   architecture, not documentary records of any ceremony. The stories are
   written to describe what is visible and what it means, and deliberately do
   not claim to be a photograph of Kamakhya Temple or of a particular puja.
   ========================================================================== */

const GALLERY = [
  {
    slug: 'kamakhya-temple-complex-night-mist',
    w: 1200, h: 896,
    alt: 'Night view over a hill temple complex, worn stone steps in the foreground leading past domes and shikharas, mist drifting between the buildings',
    title: 'After the lamps are lit',
    story: 'Nine years of sadhana at Kamakhya Temple meant standing in a courtyard like this long after the crowd had thinned and the lamps were the only thing still burning. The mist comes up off the hill faster than visitors expect, and the stone gives up its cold well past midnight. It is also the hour when most of the real work happens, because a puja performed for an audience and a puja performed because it is owed do not come out the same way.',
    altHi: 'रात में पहाड़ी मंदिर परिसर का दृश्य, आगे घिसे पत्थर की सीढ़ियां और पीछे गुंबद तथा शिखर, इनके बीच छलकता कोहरा',
    titleHi: 'दीपक जलने के बाद',
    storyHi: 'कामाख्या मंदिर में नौ साल के साधना का अर्थ था ऐसे आंगन में खड़े रहना, जब भीड़ जा चुकी हो और सिर्फ दीपक जल रहे हों। पहाड़ी से कोहरा उम्मीद से कहीं जल्दी उठता है, और आधी रात बाद तक पत्थर ठंडक देता रहता है। असली काम भी प्रायः इसी घंटे होता है, क्योंकि भीड़ के सामने की पूजा और जो देय है उसके लिए की गई पूजा एक जैसी नहीं निकलती।'
  },
  {
    slug: 'kamakhya-shikhara-golden-finial-mist',
    w: 768, h: 1376,
    alt: 'Close upward view of a great ribbed stone temple dome crowned with gilded finials, smaller spires below it, mist moving across the stonework',
    title: 'Reading a temple from below',
    story: 'A shikhara is built to be read from underneath, which is the only place it was ever meant to be seen from. The ribs carry the eye the full height of the structure, and the gilt at the crown catches whatever light is left. Ask a temple priest to explain a building and the discussion usually starts here rather than at the sanctum. The outside is what a tradition considers worth showing you first.',
    altHi: 'पत्थर के विशाल रिब वाले मंदिर गुंबद का नीचे से ऊपर का दृश्य, शिखर पर सुनहरे कलसे, नीचे छोटे शिखर और पत्थर पर छलकता कोहरा',
    titleHi: 'मंदिर को नीचे से पढ़ना',
    storyHi: 'शिखर ऐसा बनाया जाता है कि वह नीचे से ही पढ़ा जाए, और यही वह एक जगह है जहाँ से उसे देखा जाना चाहिए। रिब पूरी ऊँचाई तक नज़र को ऊपर उठाते हैं, और शिरो पर सुनहरा हिस्सा बची हुई रोशनी पकड़ लेता है। मंदिर के पंडित से इमारत की व्याख्या पूछिए, तो बात प्रायः यहीं से शुरू होती है, गर्भगृह से नहीं।'
  },
  {
    slug: 'stone-buddha-statue-ritual-mist',
    w: 768, h: 1376,
    alt: 'Weathered stone statue of a seated figure with a circular carved halo and vermilion marks on the forehead, marigold and white flowers at its base, mist behind',
    title: 'The two details that tell you somebody came',
    story: 'The vermilion on the forehead and the flowers at the base are the two details that tell you somebody was here today. Everything above that is carving done centuries ago and has not needed touching since. It is a useful habit to build, whether you are looking at a statue or looking at a tantrik: look for what is fresh, and ask about that first.',
    altHi: 'मौसम से घिसा पत्थर की बैठी मूर्ति, पीछे गोलाकार नक्काशी हाल और माथे पर सिंदूर, पैरों के पास गेंदे और सफेद फूल, पीछे कोहरा',
    titleHi: 'वो दो निशानी जो बताते हैं कोई आया था',
    storyHi: 'माथे पर लगा सिंदूर और पैरों के पास रखे फूल, यही दो चीज़ें बताती हैं कि आज कोई यहाँ आया था। उसके ऊपर जो कुछ है वह सैकड़ों साल पहले की नक्काशी है और तब से उसे छुआ नहीं गया। यह आदत किसी मूर्ति में भी काम आती है, किसी तांत्रिक में भी: जो नया है उसे पहले देखिए, और सवाल उसी से शुरू कीजिए।'
  },
  {
    slug: 'shiva-lingam-kumkum-dark-shrine',
    w: 768, h: 1376,
    alt: 'Stone Shiva lingam in a dark shrine with red-orange kumkum powder applied to its upper surface, a lamp burning in front, stone steps rising behind through mist',
    title: 'Kumkum, wet stone and a second lamp',
    story: 'Kumkum on a lingam is not decoration. It is applied and then left, and over months the stone underneath darkens and takes on a sheen that a fresh application cannot produce. The lamp in the frame is the second one; the first burns inside and is not seen. Working out which is which is a small part of learning how a puja is actually put together.',
    altHi: 'अंधेरे मंदिर में पत्थर का शिवलिंग, ऊपरी हिस्से पर लाल सिंदूर, आगे जलता दीपक और पीछे कोहरे में ऊपर जाती पत्थर की सीढ़ियां',
    titleHi: 'सिंदूर, गीला पत्थर और दूसरा दीपक',
    storyHi: 'लिंग पर सिंदूर सजावट नहीं है। उसे लगाया जाता है और वैसे ही रहने दिया जाता है, और कुछ महीनों में नीचे का पत्थर गहरा पड़ जाता है तथा वह चमक पाने लगता है जो नए लगाए सिंदूर से नहीं आती। तस्वीर में जो दीपक जल रहा है वह दूसरा है; पहला भीतर जलता है और उसे कोई नहीं देखता। पूजा कैसे रची जाती है, यह समझने में यह छोटा सा अंतर काफी मदद करता है।'
  },
  {
    slug: 'ancient-stone-temple-corridor-lingam',
    w: 768, h: 1376,
    alt: 'A narrow stone doorway with a carved lintel opening into a dim inner chamber, a stone lingam on a stepped plinth in the foreground, mist hanging in the corridor',
    title: 'A doorway, a step, then another',
    story: 'Old temple architecture is very good at making you slow down without ever telling you to. The doorway narrows, the corridor darkens, the steps rise, and by the time you reach the lingam you have already crossed several thresholds without deciding to. It is a built argument about attention, and it is a good deal older than any of the mantras recited in that room.',
    altHi: 'नक्काशी लेट्टर वाला संकरा पत्थर का द्वार जिसके पार धुंधला भीतरी कक्ष दिखता है, आगे सीढ़ीदार आधार पर पत्थर का शिवलिंग, गलियारे में कोहरा',
    titleHi: 'एक द्वार, फिर एक सीढ़ी, फिर एक और',
    storyHi: 'पुराने मंदिरों की वास्तुकला बिना कुछ कहे आपको धीमा करने में बहुत अच्छी है। द्वार सँकरा होता जाता है, गलियारा अंधेरा, सीढ़ियां ऊंची, और शिवलिंग तक पहुँचते-पहुँचते आप कई सीमाएं पार कर चुके होते हैं। यह ध्यान के बारे में एक बनी हुई दलील है, और उस कमरे में पढ़े जाने वाले मंत्रों से कहीं पुरानी।'
  },
  {
    slug: 'shiva-lingam-hibiscus-offering-mist',
    w: 1200, h: 896,
    alt: 'Rows of dark wet Shiva lingams in low light, a single red hibiscus flower and white blossoms laid across them, mist and a shaft of light above',
    title: 'One flower, one row, every morning',
    story: 'A row of lingams with a single hibiscus laid across them is a daily offering, not an occasion. The point is repetition: the same act, on the same stones, until the stones themselves have been altered by it. People ask what a ritual achieves. Often the honest answer is that it gives a restless person something exact to do every morning, and that turns out to be the part that holds.',
    altHi: 'हल्की रोशनी में गीले पत्थर के शिवलिंगों की कतार, उन पर रखा एक लाल गुड़हल और सफेद फूल, ऊपर कोहरा और रोशनी की किरण',
    titleHi: 'एक फूल, एक कतार, हर सुबह',
    storyHi: 'शिवलिंगों की कतार पर एक गुड़हल रखना कोई खास अवसर नहीं, रोज़ का नियम है। ज़रूरी उसकी दोहराव है: वही काम, उन्हीं पत्थरों पर, जब तक पत्थर भी उससे बदल न जाएं। लोग पूछते हैं पूजा से क्या होता है। अक्सर सच्चा जवाब यही होता है कि बेचैन व्यक्ति को हर सुबह ठीक से करने के लिए एक काम मिल जाता है, और टिकाऊपन अक्सर यही निकलता है।'
  }
];

/* the two-language views the renderer needs */
const byLang = (lang) => GALLERY.map(g => ({
  slug: g.slug,
  file: g.slug + '.jpg',
  w: g.w,
  h: g.h,
  alt: lang === 'hi' ? g.altHi : g.alt,
  title: lang === 'hi' ? g.titleHi : g.title,
  story: lang === 'hi' ? g.storyHi : g.story
}));

/* only what the homepage strip shows, so the first paint stays light */
const strip = (lang, n) => byLang(lang).slice(0, n || 3);

/* the one image used as a social preview on the gallery pages */
const FEATURED = GALLERY[0].slug;

module.exports = { GALLERY, byLang, strip, FEATURED };
