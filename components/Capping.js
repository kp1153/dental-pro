import Link from "next/link";

export const metadata = {
  title: "कैपिंग — डेंटल क्राउन — एडवांस डेंटल क्लिनिक, डुमरियागंज",
  description: "कमजोर, टूटे या RCT के बाद के दाँत पर मजबूत और सुंदर कैप लगवाएं। डॉ. अनवर अली से संपर्क करें — 6387129705",
  keywords: "कैपिंग, डेंटल क्राउन, दाँत की कैप, कमजोर दाँत, डुमरियागंज, एडवांस डेंटल क्लिनिक",
};

const stats = [
  { num: "१०-१५", label: "साल तक चलती है" },
  { num: "२", label: "सिटिंग में पूरी" },
  { num: "१०+", label: "वर्षों का अनुभव" },
  { num: "०", label: "दर्द की गारंटी" },
];

const symptoms = [
  { icon: "😣", text: "दाँत बहुत ज्यादा टूट गया हो" },
  { icon: "🦷", text: "RCT के बाद दाँत को सुरक्षा चाहिए" },
  { icon: "💔", text: "दाँत में गहरी दरार आ गई हो" },
  { icon: "😬", text: "बड़ी फिलिंग के बाद दाँत कमजोर हो गया हो" },
  { icon: "🎨", text: "दाँत का रंग या आकार खराब हो गया हो" },
  { icon: "🦴", text: "दाँत बहुत घिस गया हो" },
];

const crownTypes = [
  { title: "पोर्सिलेन क्राउन", desc: "बिल्कुल असली दाँत जैसा दिखता है। Leeds NHS के अनुसार सामने के दाँतों के लिए सबसे अच्छा विकल्प। धातु से एलर्जी वाले मरीजों के लिए आदर्श।", icon: "🤍", best: "सामने के दाँत" },
  { title: "जिर्कोनिया क्राउन", desc: "Chrysanth Dental UK के अनुसार जिर्कोनिया क्राउन सबसे मजबूत और सुंदर होता है। धातु की मजबूती और पोर्सिलेन की सुंदरता का संयोजन।", icon: "💎", best: "सभी दाँत" },
  { title: "पोर्सिलेन-मेटल क्राउन", desc: "मजबूती और सुंदरता का संतुलन। ऊपर से सफेद, नीचे धातु का आधार। यह सबसे प्रचलित और किफायती विकल्प है।", icon: "⚪", best: "पिछले दाँत" },
  { title: "धातु क्राउन", desc: "सबसे मजबूत और टिकाऊ। Leeds NHS के अनुसार पिछले दाँतों के लिए जहाँ चबाने का दबाव ज्यादा होता है, यह सबसे उपयुक्त है।", icon: "🔘", best: "पिछले दाँत" },
];

const benefits = [
  { icon: "💪", title: "दाँत मजबूत होता है", desc: "Leeds Teaching Hospitals NHS के अनुसार कैप दाँत को चारों तरफ से ढककर उसे टूटने से बचाती है।" },
  { icon: "😊", title: "दर्द से राहत", desc: "कमजोर या संवेदनशील दाँत पर कैप लगने से ठंडे-गर्म की तकलीफ बंद हो जाती है।" },
  { icon: "✨", title: "सुंदर दिखता है", desc: "dentaly.org UK के अनुसार आधुनिक क्राउन बिल्कुल असली दाँत जैसे दिखते हैं। रंग और आकार बिल्कुल मेल खाता है।" },
  { icon: "🦷", title: "RCT के बाद जरूरी", desc: "Chapel Dental UK के अनुसार RCT के बाद दाँत नाजुक हो जाता है — क्राउन उसे टूटने से बचाता है।" },
  { icon: "🔄", title: "प्राकृतिक कार्य", desc: "कैप लगने के बाद दाँत पहले की तरह सामान्य रूप से खाना चबा सकता है और बोलने में मदद करता है।" },
  { icon: "🌟", title: "लंबे समय तक चलती है", desc: "High Street Smiles UK के अनुसार सही देखभाल से कैप १०-१५ साल तक आसानी से चलती है।" },
  { icon: "🛡️", title: "आगे की सड़न रुकती है", desc: "कैप दाँत को बाहरी वातावरण से पूरी तरह बचाती है जिससे आगे सड़न नहीं होती।" },
  { icon: "😄", title: "आत्मविश्वास बढ़ता है", desc: "टूटे या बदरंग दाँत पर सुंदर कैप लगने से मुस्कुराने का आत्मविश्वास वापस आता है।" },
  { icon: "⚡", title: "जल्दी और आसान", desc: "Leeds NHS के अनुसार आमतौर पर सिर्फ २ सिटिंग में पूरी कैप तैयार और फिट हो जाती है।" },
];

const steps = [
  { num: "०१", title: "जाँच और X-Ray", desc: "डॉक्टर दाँत की स्थिति, जड़ की मजबूती और मसूड़ों की सेहत जाँचते हैं। सही क्राउन का चुनाव किया जाता है।" },
  { num: "०२", title: "दाँत तैयार करना", desc: "लोकल एनेस्थीसिया देकर दाँत को विशेष आकार दिया जाता है ताकि क्राउन ठीक से बैठ सके।" },
  { num: "०३", title: "इंप्रेशन लेना", desc: "दाँत का सटीक साँचा लिया जाता है। इसी के आधार पर लैब में कैप बनाई जाती है।" },
  { num: "०४", title: "अस्थायी कैप", desc: "Leeds NHS के अनुसार स्थायी कैप तैयार होने तक अस्थायी कैप लगाई जाती है ताकि दाँत सुरक्षित रहे।" },
  { num: "०५", title: "स्थायी कैप फिट करना", desc: "लैब में तैयार स्थायी कैप को सटीक तरीके से फिट किया जाता है। रंग और आकार असली दाँत से मेल खाता है।" },
  { num: "०६", title: "बाइट जाँच", desc: "कैप लगने के बाद यह सुनिश्चित किया जाता है कि दाँतों का बाइट सही है और कैप आरामदायक है।" },
];

const comparison = [
  { feature: "मजबूती", crown: "बहुत मजबूत", filling: "सीमित" },
  { feature: "टिकाऊपन", crown: "१०-१५ साल", filling: "५-७ साल" },
  { feature: "दाँत की सुरक्षा", crown: "पूरी", filling: "आंशिक" },
  { feature: "दिखावट", crown: "बिल्कुल असली जैसी", filling: "थोड़ा अलग" },
  { feature: "संवेदनशीलता", crown: "बंद हो जाती है", filling: "रह सकती है" },
  { feature: "उपयुक्त कब", crown: "बड़ा नुकसान", filling: "छोटा नुकसान" },
];

const aftercare = [
  "पहले २४ घंटे बहुत कड़ी चीजें न चबाएं",
  "नरम टूथब्रश से ब्रश करें",
  "फ्लॉस का नियमित उपयोग करें",
  "बहुत चिपचिपी मिठाई से परहेज करें",
  "दाँत पीसने की आदत हो तो डॉक्टर को बताएं",
  "हर ६ महीने में जाँच करवाएं",
  "कैप ढीली लगे तो तुरंत डॉक्टर से मिलें",
  "Leeds NHS के अनुसार फ्लोराइड टूथपेस्ट से ब्रश करें",
];

const faqs = [
  { q: "कैप लगवाने में दर्द होता है?", a: "नहीं। लोकल एनेस्थीसिया से पूरी प्रक्रिया दर्द रहित होती है। बाद में हल्की संवेदनशीलता हो सकती है जो कुछ दिनों में ठीक हो जाती है।" },
  { q: "कैप कितने समय तक चलती है?", a: "High Street Smiles UK के अनुसार सही देखभाल से कैप १०-१५ साल तक चल सकती है। जिर्कोनिया और मेटल क्राउन और भी लंबे समय तक चलते हैं।" },
  { q: "कितनी सिटिंग लगती हैं?", a: "Leeds Teaching Hospitals NHS के अनुसार आमतौर पर २ सिटिंग लगती हैं। पहली सिटिंग में दाँत तैयार होता है और दूसरी में स्थायी कैप फिट होती है।" },
  { q: "RCT के बाद कैप क्यों जरूरी है?", a: "Chapel Dental UK के अनुसार RCT के बाद दाँत की नस निकल जाने से वह कमजोर हो जाता है। कैप उसे टूटने से बचाती है और कई साल तक सुरक्षित रखती है।" },
  { q: "कौन सी कैप सबसे अच्छी होती है?", a: "Chrysanth Dental UK के अनुसार जिर्कोनिया क्राउन सबसे आधुनिक और बेहतर विकल्प है। सामने के दाँत के लिए पोर्सिलेन और पिछले दाँत के लिए धातु अच्छा रहता है।" },
  { q: "क्या कैप टूट सकती है?", a: "आधुनिक क्राउन बहुत मजबूत होते हैं। बर्फ चबाने, दाँत पीसने या बहुत कड़ी चीजें खाने से कैप को नुकसान हो सकता है।" },
  { q: "कैप के बाद क्या सामान्य जीवन जी सकते हैं?", a: "हाँ। कैप लगने के बाद सब कुछ सामान्य रूप से खा-पी सकते हैं। बस शुरुआती कुछ दिन सावधानी रखें।" },
  { q: "क्या कैप दोबारा लग सकती है?", a: "हाँ। यदि कैप ढीली हो जाए या टूट जाए तो डॉक्टर उसे दोबारा ठीक कर सकते हैं या नई कैप लगा सकते हैं।" },
];

export default function CappingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">

      <section className="relative py-24 px-4 text-center overflow-hidden">
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
            <span className="text-white">कैपिंग — </span>
            <span className="text-yellow-400">डेंटल क्राउन</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            कमजोर, टूटे या RCT के बाद के दाँत पर मजबूत और सुंदर कैप लगवाएं।
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Leeds Teaching Hospitals NHS के अनुसार डेंटल क्राउन दाँत को मजबूती, सुंदरता और लंबी उम्र देता है। डॉ. अनवर अली के अनुभवी हाथों से पाएं परफेक्ट कैप।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6387129705" className="inline-block bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl text-lg hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20">
              📞 अभी अपॉइंटमेंट लें
            </a>
            <Link href="#types" className="inline-block border border-white/20 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/5 transition">
              और जानें →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="text-3xl font-extrabold text-yellow-400">{s.num}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">कैपिंग क्या है?</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">डेंटल क्राउन को समझें</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-yellow-400 font-semibold">डेंटल क्राउन यानी कैप</span> एक कस्टम-मेड ढक्कन है जो पूरे दाँत को ऊपर से ढक लेता है। Leeds Teaching Hospitals NHS के अनुसार यह उस दाँत के लिए सबसे अच्छा इलाज है जो टूट गया हो, कमजोर हो या बहुत ज्यादा सड़ गया हो।
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              dentaly.org UK के अनुसार कैप दाँत के <span className="text-green-400 font-semibold">आकार, मजबूती और सुंदरता</span> को पूरी तरह बहाल करती है। यह बिल्कुल असली दाँत जैसी दिखती है और काम करती है।
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chapel Dental UK के अनुसार RCT के बाद दाँत को क्राउन की जरूरत पड़ती है क्योंकि नस निकल जाने के बाद दाँत नाजुक हो जाता है और बिना कैप के टूट सकता है।
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">कब जरूरी है?</p>
            <h2 className="text-3xl font-extrabold text-white">इन स्थितियों में कैप जरूरी है</h2>
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

      <section id="types" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">प्रकार</p>
            <h2 className="text-3xl font-extrabold text-white">कैप के प्रकार</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">आपकी जरूरत और दाँत की स्थिति के अनुसार सबसे सही कैप चुनी जाती है</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {crownTypes.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{t.icon}</span>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg">{t.title}</h3>
                    <span className="text-green-400 text-xs font-semibold">✓ {t.best} के लिए</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">फायदे</p>
            <h2 className="text-3xl font-extrabold text-white">कैपिंग के लाभ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition group">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">प्रक्रिया</p>
            <h2 className="text-3xl font-extrabold text-white">कैप कैसे लगती है?</h2>
            <p className="text-gray-400 text-sm mt-3">हर कदम पर डॉक्टर आपके साथ हैं</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-600/40 transition">
                <div className="text-5xl font-extrabold text-green-700/30 mb-3">{s.num}</div>
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">तुलना</p>
            <h2 className="text-3xl font-extrabold text-white">कैप बनाम फिलिंग</h2>
            <p className="text-gray-400 text-sm mt-3">जानिए कब क्या बेहतर है</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-bold">विशेषता</th>
                  <th className="py-4 px-4 text-yellow-400 font-bold text-center">✅ कैप</th>
                  <th className="py-4 px-4 text-gray-500 font-bold text-center">🔵 फिलिंग</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="py-3 px-4 text-gray-400">{c.feature}</td>
                    <td className="py-3 px-4 text-green-400 text-center font-medium">{c.crown}</td>
                    <td className="py-3 px-4 text-gray-500 text-center">{c.filling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">देखभाल</p>
            <h2 className="text-3xl font-extrabold text-white">कैप के बाद देखभाल</h2>
            <p className="text-gray-400 text-sm mt-3">इन निर्देशों का पालन करें</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {aftercare.map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-600/30 transition">
                <span className="text-green-400 font-extrabold text-lg flex-shrink-0">✓</span>
                <p className="text-gray-300 text-sm">{c}</p>
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
                दाँत कमजोर है या टूट गया है? देर मत करें — आज ही कैप लगवाएं और अपनी मुस्कान वापस पाएं।
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

    </main>
  );
}