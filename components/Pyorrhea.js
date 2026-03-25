import Link from "next/link";


const stats = [
  { num: "१००%", label: "इलाज संभव है" },
  { num: "तुरंत", label: "राहत मिलती है" },
  { num: "१०+", label: "वर्षों का अनुभव" },
  { num: "सुरक्षित", label: "दर्द रहित इलाज" },
];

const symptoms = [
  { icon: "🩸", text: "ब्रश करते समय मसूड़ों से खून आना" },
  { icon: "😣", text: "मसूड़ों में सूजन और लालिमा" },
  { icon: "💨", text: "मुँह से बदबू जो जाती नहीं" },
  { icon: "😬", text: "दाँत हिलने लगना" },
  { icon: "😔", text: "मसूड़े दाँत से हटने लगना" },
  { icon: "🤢", text: "मसूड़ों से पस निकलना" },
  { icon: "😖", text: "खाना चबाने में तकलीफ" },
  { icon: "🦷", text: "दाँतों के बीच जगह बढ़ना" },
  { icon: "🌡️", text: "मसूड़ों में दर्द और जलन" },
];

const stages = [
  { title: "जिंजिवाइटिस", stage: "प्रारंभिक अवस्था", desc: "मसूड़ों में हल्की सूजन और ब्रश करते समय खून। यह पूरी तरह ठीक हो सकता है। Antonio Liñares के अनुसार यह चेतावनी का समय है।", color: "text-yellow-400", icon: "⚠️" },
  { title: "पेरियोडोन्टाइटिस", stage: "मध्य अवस्था", desc: "हड्डी और मसूड़ों को नुकसान शुरू हो जाता है। smile2impress UK के अनुसार इस अवस्था में दाँत थोड़े हिलने लगते हैं। तुरंत इलाज जरूरी।", color: "text-orange-400", icon: "🔶" },
  { title: "एडवांस्ड पायरिया", stage: "गंभीर अवस्था", desc: "Guy's NHS के अनुसार गंभीर हड्डी का नुकसान, दाँत बहुत हिलना और मसूड़ों से पस। इस अवस्था में भी इलाज संभव है।", color: "text-red-400", icon: "🔴" },
];

const causes = [
  { icon: "🦠", title: "प्लाक और टार्टर", desc: "Kirkland Premier Dentistry USA के अनुसार पायरिया का मुख्य कारण दाँतों पर प्लाक जमना है। सही सफाई न होने पर यह टार्टर बन जाता है।" },
  { icon: "🚬", title: "धूम्रपान और तंबाकू", desc: "Brandon Dental Care UK के अनुसार धूम्रपान करने वालों में पायरिया ज्यादा तेजी से बढ़ता है और शरीर की प्रतिरोधक क्षमता कम हो जाती है।" },
  { icon: "💊", title: "मधुमेह", desc: "Kirkland Premier Dentistry USA के अनुसार मधुमेह के रोगियों में पायरिया का खतरा बहुत अधिक होता है। रक्त शर्करा नियंत्रण जरूरी है।" },
  { icon: "🧬", title: "आनुवंशिकता", desc: "thomas-dentistry USA के अनुसार कुछ लोग आनुवंशिक रूप से पायरिया के प्रति अधिक संवेदनशील होते हैं। उन्हें नियमित जाँच जरूरी है।" },
  { icon: "💊", title: "कुछ दवाएं", desc: "Gentle Touch Dental USA के अनुसार कुछ हृदय रोग की दवाएं मसूड़ों की बीमारी का खतरा बढ़ा देती हैं।" },
  { icon: "🍬", title: "खराब आहार", desc: "Kirkland Premier Dentistry USA के अनुसार विटामिन और खनिज की कमी भी पायरिया को बढ़ावा देती है।" },
];

const treatments = [
  { num: "०१", title: "स्केलिंग और पॉलिशिंग", desc: "AMD Dental USA के अनुसार स्केलिंग में दाँतों की सतह और मसूड़ों के नीचे जमा टार्टर और प्लाक हटाया जाता है। यह पायरिया का पहला और सबसे जरूरी इलाज है।" },
  { num: "०२", title: "रूट प्लानिंग", desc: "smile2impress UK के अनुसार स्केलिंग के बाद दाँत की जड़ की सतह को चिकना किया जाता है ताकि बैक्टीरिया दोबारा न जम सकें और मसूड़े वापस जुड़ सकें।" },
  { num: "०३", title: "एंटीबायोटिक दवाएं", desc: "AMD Dental USA के अनुसार संक्रमण गंभीर होने पर मुँह पर लगाने वाली या खाने वाली एंटीबायोटिक दवाएं दी जाती हैं।" },
  { num: "०४", title: "डीप क्लीनिंग", desc: "Guy's NHS के अनुसार गंभीर पायरिया में मसूड़ों की गहरी सफाई के लिए लोकल एनेस्थीसिया दिया जाता है। यह ५-६ सिटिंग में पूरा हो सकता है।" },
  { num: "०५", title: "फ्लैप सर्जरी", desc: "Kirkland Premier Dentistry USA के अनुसार यदि प्रारंभिक इलाज काम नहीं करता तो फ्लैप सर्जरी की जाती है जिसमें मसूड़ों के नीचे जमा टार्टर निकाला जाता है।" },
  { num: "०६", title: "नियमित रखरखाव", desc: "Guy's NHS के अनुसार पायरिया का इलाज जीवन भर चलता है। नियमित जाँच और सफाई से इसे नियंत्रण में रखा जा सकता है।" },
];

const healthRisks = [
  { icon: "❤️", risk: "हृदय रोग", desc: "Brandon Dental UK के अनुसार पायरिया के बैक्टीरिया रक्त में मिलकर हृदय रोग का खतरा बढ़ाते हैं।" },
  { icon: "🧠", risk: "अल्जाइमर", desc: "Brandon Dental UK के अनुसार पायरिया के बैक्टीरिया मस्तिष्क में बीटा-एमिलॉयड बढ़ाते हैं जो अल्जाइमर से जुड़ा है।" },
  { icon: "🍬", risk: "मधुमेह", desc: "पायरिया और मधुमेह एक-दूसरे को बढ़ाते हैं। पायरिया से रक्त शर्करा नियंत्रण बिगड़ सकता है।" },
  { icon: "🤰", risk: "गर्भावस्था", desc: "Brandon Dental UK के अनुसार गर्भवती महिलाओं में पायरिया से समय से पहले प्रसव का खतरा बढ़ सकता है।" },
];

const prevention = [
  "रोज सुबह और रात को दो मिनट ब्रश करें",
  "रोज फ्लॉस का उपयोग करें",
  "माउथवॉश से कुल्ला करें",
  "धूम्रपान और तंबाकू बिल्कुल बंद करें",
  "मीठे खाद्य पदार्थ कम खाएं",
  "हर ६ महीने में डेंटिस्ट से जाँच करवाएं",
  "मधुमेह हो तो रक्त शर्करा नियंत्रित रखें",
  "पर्याप्त पानी पिएं — मुँह साफ रहता है",
];

const faqs = [
  { q: "पायरिया क्या होता है?", a: "Antonio Liñares Spain के अनुसार पायरिया यानी पेरियोडोन्टाइटिस एक संक्रामक बीमारी है जिसमें दाँतों के आसपास की हड्डी और मसूड़े धीरे-धीरे नष्ट हो जाते हैं। यह दाँत गिरने का मुख्य कारण है।" },
  { q: "क्या पायरिया ठीक हो सकता है?", a: "हाँ। smile2impress UK के अनुसार शुरुआती अवस्था में पायरिया पूरी तरह ठीक हो सकता है। गंभीर अवस्था में इसे नियंत्रित किया जा सकता है।" },
  { q: "मसूड़ों से खून आना गंभीर है?", a: "Antonio Liñares Spain के अनुसार मसूड़ों से खून आना पहली चेतावनी है। यह जिंजिवाइटिस हो सकता है जो पायरिया में बदल सकता है। तुरंत डॉक्टर से मिलें।" },
  { q: "पायरिया में दाँत टूटते हैं?", a: "हाँ। Kirkland Premier Dentistry USA के अनुसार इलाज न करने पर हड्डी का नुकसान इतना बढ़ जाता है कि दाँत हिलने लगते हैं और गिर जाते हैं।" },
  { q: "पायरिया का इलाज कितने समय में होता है?", a: "Guy's NHS के अनुसार गंभीर पायरिया में ५-६ सिटिंग लग सकती हैं। इसके बाद नियमित रखरखाव जरूरी है।" },
  { q: "क्या पायरिया दोबारा हो सकता है?", a: "Antonio Liñares Spain के अनुसार पायरिया एक बार इलाज के बाद दोबारा हो सकता है। इसीलिए नियमित जाँच और सफाई जरूरी है।" },
  { q: "क्या पायरिया सिर्फ बूढ़ों को होता है?", a: "नहीं। Smile Sky USA के अनुसार पायरिया किसी भी उम्र में हो सकता है। खराब ओरल हाइजीन किसी को भी प्रभावित कर सकती है।" },
  { q: "पायरिया और दिल की बीमारी का क्या संबंध है?", a: "Brandon Dental UK के अनुसार पायरिया के बैक्टीरिया रक्त में मिलकर हृदय रोग, स्ट्रोक और मधुमेह का खतरा बढ़ाते हैं।" },
];

export default function Pyorrhea() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      <section id="pyorrhea" className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-green-700/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow-400/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-700/20 border border-green-600/30 text-green-400 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            एडवांस डेंटल क्लिनिक — डुमरियागंज
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-white">पायरिया — </span>
            <span className="text-yellow-400">मसूड़ों का इलाज</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            मसूड़ों से खून, सूजन, बदबू और दाँत हिलना — ये सब पायरिया के लक्षण हैं।
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Antonio Liñares Spain के अनुसार पायरिया दाँत गिरने का मुख्य कारण है। समय पर इलाज से दाँत बचाए जा सकते हैं। डॉ. अनवर अली से आज ही मिलें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6387129705" className="inline-block bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl text-lg hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20">
              📞 अभी अपॉइंटमेंट लें
            </a>
            <Link href="#stages" className="inline-block border border-white/20 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/5 transition">
              और जानें →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="text-2xl font-extrabold text-yellow-400">{s.num}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">क्या है?</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">पायरिया को समझें</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-yellow-400 font-semibold">पायरिया</span> यानी पेरियोडोन्टाइटिस एक गंभीर मसूड़ों की बीमारी है। Antonio Liñares Spain के अनुसार यह दाँतों के आसपास की हड्डी और मसूड़ों को धीरे-धीरे नष्ट करती है।
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Gentle Touch Dental USA के अनुसार पायरिया एक <span className="text-red-400 font-semibold">मूक बीमारी</span> है — इसमें लंबे समय तक दर्द नहीं होता इसलिए लोग ध्यान नहीं देते। जब तक पता चलता है तब तक नुकसान हो चुका होता है।
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Brandon Dental UK के अनुसार पायरिया सिर्फ मुँह की बीमारी नहीं है — यह हृदय रोग, मधुमेह, अल्जाइमर और गर्भावस्था की जटिलताओं का खतरा भी बढ़ाती है।
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">लक्षण</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया के लक्षण</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">इनमें से कोई भी लक्षण हो तो तुरंत डॉक्टर से मिलें</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-400/20 transition">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stages" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">अवस्थाएं</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया की तीन अवस्थाएं</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">जितनी जल्दी इलाज उतना बेहतर परिणाम</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
                <div className="text-4xl mb-3">{s.icon}</div>
                <span className={`text-xs font-bold uppercase tracking-wide ${s.color}`}>{s.stage}</span>
                <h3 className={`font-bold text-xl mt-1 mb-3 ${s.color}`}>{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">कारण</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया क्यों होता है?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {causes.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/20 hover:bg-white/10 transition group">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">इलाज</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया का इलाज कैसे होता है?</h2>
            <p className="text-gray-400 text-sm mt-3">हर अवस्था के अनुसार इलाज किया जाता है</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {treatments.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-600/40 transition">
                <div className="text-5xl font-extrabold text-green-700/30 mb-3">{t.num}</div>
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-2">खतरे</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया और सामान्य स्वास्थ्य</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">पायरिया सिर्फ मुँह की बीमारी नहीं है</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {healthRisks.map((h, i) => (
              <div key={i} className="bg-white/5 border border-red-400/10 rounded-2xl p-6 hover:border-red-400/20 transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{h.icon}</span>
                  <h3 className="text-red-400 font-bold text-lg">{h.risk}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">बचाव</p>
            <h2 className="text-3xl font-extrabold text-white">पायरिया से बचाव कैसे करें?</h2>
            <p className="text-gray-400 text-sm mt-3">रोकथाम इलाज से बेहतर है</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {prevention.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-600/30 transition">
                <span className="text-green-400 font-extrabold text-lg flex-shrink-0">✓</span>
                <p className="text-gray-300 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">सवाल-जवाब</p>
            <h2 className="text-3xl font-extrabold text-white">अक्सर पूछे जाने वाले सवाल</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/20 transition">
                <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 flex-shrink-0">❓</span>
                  {f.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-700/10 via-[#0d1f4f] to-yellow-400/5 border border-white/10 rounded-3xl p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-white mb-3">डॉ. अनवर अली से मिलें</h2>
              <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
                मसूड़ों से खून आता है या दाँत हिल रहे हैं? देर मत करें — आज ही जाँच करवाएं और अपने दाँत बचाएं।
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "📍", label: "पता", value: "LIC के सामने, बस्ती रोड, डुमरियागंज" },
                { icon: "📞", label: "फोन", value: "6387129705 / 9452531751" },
              ].map((c, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-wide mb-1">{c.label}</p>
                  <p className="text-gray-300 text-sm">{c.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6387129705" className="bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20 text-center">
                📞 6387129705
              </a>
              <a href="tel:9452531751" className="border border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/5 transition text-center">
                📞 9452531751
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}