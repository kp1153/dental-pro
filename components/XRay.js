import Link from "next/link";


const stats = [
  { num: "९०%", label: "कम रेडिएशन" },
  { num: "तुरंत", label: "परिणाम मिलते हैं" },
  { num: "१००%", label: "सटीक जाँच" },
  { num: "सुरक्षित", label: "गर्भवती के लिए भी" },
];

const xrayTypes = [
  { title: "बाइटविंग X-Ray", desc: "dentistry.co.uk UK के अनुसार इससे ऊपर और नीचे के दाँतों के बीच की सड़न, हड्डी का घनत्व और क्राउन की फिटिंग जाँची जाती है। मरीज एक सेंसर को दाँतों से दबाकर रखता है।", icon: "🦷", use: "सड़न और भराई जाँच" },
  { title: "पेरियापिकल X-Ray", desc: "Kent Express UK के अनुसार इससे दाँत की पूरी जड़ और आसपास की हड्डी देखी जाती है। हड्डी की हानि, सड़न और मसूड़ों की बीमारी का पता चलता है।", icon: "🔍", use: "जड़ और हड्डी जाँच" },
  { title: "पैनोरैमिक / OPG", desc: "dentistry.co.uk UK के अनुसार OPG से एक ही तस्वीर में पूरे मुँह के दाँत, जबड़ा और आसपास की हड्डी दिखती है। अक्ल दाँत, सिस्ट और जबड़े की समस्या का पता चलता है।", icon: "🌐", use: "पूरे मुँह की जाँच" },
  { title: "CBCT 3D स्कैन", desc: "ADA USA के अनुसार CBCT से जबड़े की तीन आयामी तस्वीर मिलती है। इम्प्लांट की योजना और जटिल मामलों में सबसे सटीक जाँच।", icon: "🖥️", use: "इम्प्लांट योजना" },
];

const benefits = [
  { icon: "⚡", title: "तुरंत परिणाम", desc: "Kent Express UK के अनुसार डिजिटल X-Ray की तस्वीर कंप्यूटर पर तुरंत आ जाती है। पुराने X-Ray फिल्म की तरह इंतजार नहीं करना पड़ता।" },
  { icon: "🛡️", title: "बहुत कम रेडिएशन", desc: "dentistry.co.uk UK के अनुसार डिजिटल X-Ray पुराने X-Ray की तुलना में सिर्फ १०% रेडिएशन देता है। Bridgewater NHS के अनुसार दो डेंटल X-Ray तीन घंटे की हवाई यात्रा जितनी रेडिएशन देते हैं।" },
  { icon: "🔬", title: "बेहद सटीक", desc: "Kent Express UK के अनुसार डिजिटल सेंसर बहुत उच्च रिज़ोल्यूशन की तस्वीर देते हैं जिन्हें ज़ूम और एडजस्ट किया जा सकता है।" },
  { icon: "🌿", title: "पर्यावरण के अनुकूल", desc: "dentistry.co.uk UK के अनुसार डिजिटल X-Ray में कोई केमिकल नहीं होता। पुराने X-Ray के केमिकल से पर्यावरण को नुकसान होता था।" },
  { icon: "💾", title: "हमेशा सुरक्षित", desc: "Kent Express UK के अनुसार डिजिटल X-Ray कंप्यूटर में सुरक्षित रहती है। पुराने X-Ray खराब हो जाते थे पर डिजिटल हमेशा वैसी ही रहती है।" },
  { icon: "🎨", title: "बेहतर विश्लेषण", desc: "dentistry.co.uk UK के अनुसार डॉक्टर डिजिटल तस्वीर की चमक और कंट्रास्ट बदल सकते हैं जिससे छिपी हुई समस्या भी दिख जाती है।" },
  { icon: "📤", title: "आसानी से साझा", desc: "Kent Express UK के अनुसार डिजिटल X-Ray को इंटरनेट से किसी भी विशेषज्ञ के साथ तुरंत साझा किया जा सकता है।" },
  { icon: "✅", title: "गर्भवती के लिए सुरक्षित", desc: "Guy's and St Thomas' NHS के अनुसार डेंटल X-Ray गर्भवती महिलाओं के लिए सुरक्षित है। X-Ray की किरण बच्चे की तरफ नहीं जाती।" },
  { icon: "🏥", title: "ADA और NHS से मान्यता", desc: "ADA USA और NHS UK दोनों के अनुसार डिजिटल X-Ray आधुनिक दंत चिकित्सा का सबसे महत्वपूर्ण हिस्सा है।" },
];

const detects = [
  { icon: "🦠", text: "दाँतों के बीच की छिपी सड़न" },
  { icon: "🦴", text: "जबड़े की हड्डी की हानि" },
  { icon: "🦷", text: "दाँत की जड़ का संक्रमण" },
  { icon: "😬", text: "मसूड़ों की बीमारी" },
  { icon: "🧠", text: "अक्ल दाँत की स्थिति" },
  { icon: "🎯", text: "इम्प्लांट के लिए सटीक माप" },
  { icon: "💊", text: "दाँत के आसपास की गाँठ या सिस्ट" },
  { icon: "🔱", text: "जबड़े की बनावट की समस्या" },
  { icon: "⚠️", text: "छिपे हुए फ्रैक्चर और दरारें" },
];

const steps = [
  { num: "०१", title: "तैयारी", desc: "मरीज को एक विशेष कुर्सी पर बैठाया जाता है। धातु के गहने और चश्मा हटाने की सलाह दी जाती है।" },
  { num: "०२", title: "सेंसर लगाना", desc: "मुँह के अंदर एक छोटा डिजिटल सेंसर रखा जाता है। यह बिल्कुल आरामदायक होता है।" },
  { num: "०३", title: "X-Ray लेना", desc: "डॉक्टर कमरे से बाहर जाकर X-Ray लेते हैं। यह सिर्फ कुछ सेकंड का काम है।" },
  { num: "०४", title: "तुरंत तस्वीर", desc: "तस्वीर तुरंत कंप्यूटर स्क्रीन पर आ जाती है। पुरानी फिल्म की तरह इंतजार नहीं करना पड़ता।" },
  { num: "०५", title: "विश्लेषण", desc: "डॉक्टर तस्वीर को ज़ूम और एडजस्ट करके समस्या का सटीक पता लगाते हैं।" },
  { num: "०६", title: "इलाज की योजना", desc: "X-Ray के आधार पर सबसे सही इलाज की योजना बनाई जाती है और मरीज को समझाई जाती है।" },
];

const comparison = [
  { feature: "रेडिएशन", digital: "९०% कम", traditional: "बहुत ज्यादा" },
  { feature: "परिणाम", digital: "तुरंत", traditional: "२०-३० मिनट" },
  { feature: "तस्वीर की गुणवत्ता", digital: "बेहद उच्च", traditional: "सीमित" },
  { feature: "ज़ूम करना", digital: "हाँ", traditional: "नहीं" },
  { feature: "केमिकल", digital: "नहीं", traditional: "हाँ" },
  { feature: "भंडारण", digital: "कंप्यूटर में", traditional: "फिजिकल फाइल" },
  { feature: "साझा करना", digital: "तुरंत ऑनलाइन", traditional: "मुश्किल" },
  { feature: "टिकाऊपन", digital: "हमेशा", traditional: "खराब हो सकती है" },
];

const faqs = [
  { q: "डिजिटल X-Ray में कितना दर्द होता है?", a: "बिल्कुल नहीं। X-Ray लेते समय कोई दर्द नहीं होता। बस मुँह में एक छोटा सेंसर रखना होता है।" },
  { q: "डिजिटल X-Ray कितना सुरक्षित है?", a: "Bridgewater NHS UK के अनुसार दो डेंटल X-Ray में उतनी ही रेडिएशन होती है जितनी तीन घंटे की हवाई यात्रा में। यह बेहद सुरक्षित है।" },
  { q: "क्या गर्भवती महिला X-Ray करवा सकती है?", a: "Guy's and St Thomas' NHS के अनुसार डेंटल X-Ray गर्भवती महिलाओं के लिए सुरक्षित है। X-Ray की किरण बच्चे की तरफ नहीं जाती। फिर भी डॉक्टर को पहले बताएं।" },
  { q: "OPG और साधारण X-Ray में क्या फर्क है?", a: "dentistry.co.uk UK के अनुसार OPG में एक ही तस्वीर में पूरा मुँह दिखता है जबकि साधारण X-Ray में सिर्फ कुछ दाँत दिखते हैं।" },
  { q: "कितने समय में X-Ray की रिपोर्ट मिलती है?", a: "डिजिटल X-Ray की तस्वीर तुरंत कंप्यूटर पर आ जाती है। उसी समय डॉक्टर देखकर बता सकते हैं।" },
  { q: "बच्चों के लिए X-Ray सुरक्षित है?", a: "हाँ। ADA USA के अनुसार बच्चों के लिए X-Ray लेते समय रेडिएशन की मात्रा और बारंबारता का विशेष ध्यान रखा जाता है।" },
  { q: "कितने समय में एक बार X-Ray करवाना चाहिए?", a: "ADA USA के अनुसार यह मरीज की उम्र और दाँतों की स्थिति पर निर्भर करता है। डॉक्टर की सलाह पर ही X-Ray करवाएं।" },
  { q: "क्या X-Ray से कैंसर हो सकता है?", a: "Bridgewater NHS UK के अनुसार दाँत के X-Ray में कैंसर का खतरा दस लाख में एक से भी कम है। यह पूरी तरह सुरक्षित है।" },
];

const safetyPoints = [
  "Guy's NHS के अनुसार X-Ray सिर्फ तभी लें जब जरूरी हो",
  "गर्भावस्था में पहले डॉक्टर को बताएं",
  "बच्चों के लिए विशेष सावधानी रखी जाती है",
  "ADA USA के अनुसार डिजिटल X-Ray सबसे सुरक्षित विकल्प है",
  "धातु के गहने और चश्मा पहले उतारें",
  "डॉक्टर के निर्देशों का पालन करें",
];

export default function XRay() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      <section id="xray" className="relative py-24 px-4 text-center overflow-hidden">
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
            <span className="text-white">डिजिटल </span>
            <span className="text-yellow-400">एक्स-रे</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            आधुनिक डिजिटल X-Ray से दाँतों की सटीक और तुरंत जाँच।
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            dentistry.co.uk UK के अनुसार डिजिटल X-Ray पुराने X-Ray की तुलना में ९०% कम रेडिएशन देता है और तस्वीर की गुणवत्ता कहीं बेहतर होती है। डॉ. अनवर अली के क्लिनिक में आधुनिक डिजिटल X-Ray की सुविधा उपलब्ध है।
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
            <h2 className="text-3xl font-extrabold text-white mb-4">डिजिटल X-Ray को समझें</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-yellow-400 font-semibold">डिजिटल डेंटल X-Ray</span> एक आधुनिक तकनीक है जिसमें पुरानी X-Ray फिल्म की जगह डिजिटल सेंसर का उपयोग होता है। Kent Express UK के अनुसार यह सेंसर X-Ray की किरणों को पकड़कर तुरंत कंप्यूटर पर तस्वीर भेज देता है।
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Bridgewater NHS के अनुसार X-Ray से वे समस्याएं भी दिख जाती हैं जो <span className="text-green-400 font-semibold">डॉक्टर आँखों से नहीं देख सकते</span> — जैसे दाँतों के बीच की सड़न, जड़ का संक्रमण और हड्डी की हानि।
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              ADA USA के अनुसार अमेरिका में ८६% से अधिक डेंटल क्लिनिक अब डिजिटल X-Ray का उपयोग करते हैं क्योंकि यह अधिक सुरक्षित, सटीक और तेज है।
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">क्या पता चलता है?</p>
            <h2 className="text-3xl font-extrabold text-white">X-Ray से किन समस्याओं का पता चलता है?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {detects.map((d, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-400/20 transition">
                <span className="text-2xl flex-shrink-0">{d.icon}</span>
                <p className="text-gray-300 text-sm">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">प्रकार</p>
            <h2 className="text-3xl font-extrabold text-white">X-Ray के प्रकार</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">जरूरत के अनुसार सही X-Ray चुना जाता है</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {xrayTypes.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{t.icon}</span>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg">{t.title}</h3>
                    <span className="text-green-400 text-xs font-semibold">✓ {t.use}</span>
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
            <h2 className="text-3xl font-extrabold text-white">डिजिटल X-Ray के लाभ</h2>
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
            <h2 className="text-3xl font-extrabold text-white">X-Ray कैसे लिया जाता है?</h2>
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
            <h2 className="text-3xl font-extrabold text-white">डिजिटल बनाम पुराना X-Ray</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-bold">विशेषता</th>
                  <th className="py-4 px-4 text-yellow-400 font-bold text-center">✅ डिजिटल X-Ray</th>
                  <th className="py-4 px-4 text-gray-500 font-bold text-center">❌ पुराना X-Ray</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="py-3 px-4 text-gray-400">{c.feature}</td>
                    <td className="py-3 px-4 text-green-400 text-center font-medium">{c.digital}</td>
                    <td className="py-3 px-4 text-gray-500 text-center">{c.traditional}</td>
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
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">सुरक्षा</p>
            <h2 className="text-3xl font-extrabold text-white">X-Ray सुरक्षा निर्देश</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {safetyPoints.map((c, i) => (
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
                दाँत में कोई भी समस्या हो — डिजिटल X-Ray से तुरंत सटीक जाँच करवाएं और सही इलाज पाएं।
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