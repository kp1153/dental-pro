import Link from "next/link";

const stats = [
  { num: "१२-२४", label: "महीने में पूरा" },
  { num: "१०+", label: "वर्षों का अनुभव" },
  { num: "हर उम्र", label: "के लिए उपलब्ध" },
  { num: "१००%", label: "सुरक्षित इलाज" },
];

const problems = [
  { icon: "😬", text: "दाँत टेढ़े-मेढ़े या भीड़े हुए हों" },
  { icon: "😕", text: "ऊपर के दाँत बहुत आगे निकले हों" },
  { icon: "😤", text: "ऊपर और नीचे के दाँत ठीक से न मिलते हों" },
  { icon: "😮", text: "दाँतों के बीच बड़े गैप हों" },
  { icon: "😣", text: "बोलने या खाने में तकलीफ हो" },
  { icon: "😔", text: "टेढ़े दाँतों की वजह से आत्मविश्वास कम हो" },
  { icon: "🦷", text: "दाँत साफ करने में मुश्किल हो" },
  { icon: "😖", text: "जबड़े में दर्द या खिंचाव हो" },
  { icon: "🤔", text: "दाँत सही जगह पर नहीं उगे हों" },
];

const bracesTypes = [
  {
    title: "मेटल ब्रेसेस",
    desc: "NHS UK के अनुसार मेटल ब्रेसेस सबसे आम और प्रभावी प्रकार है। हर दाँत पर एक ब्रैकेट लगाया जाता है जो एक तार से जुड़ा होता है। यह सबसे किफायती और टिकाऊ विकल्प है।",
    icon: "⚙️",
    best: "सभी के लिए",
  },
  {
    title: "सिरेमिक ब्रेसेस",
    desc: "NHS inform Scotland के अनुसार सिरेमिक ब्रेसेस दाँत के रंग के होते हैं जिससे कम दिखाई देते हैं। सुंदरता के साथ-साथ प्रभावी इलाज — बड़ों के लिए लोकप्रिय।",
    icon: "🤍",
    best: "बड़ों के लिए",
  },
  {
    title: "क्लियर एलाइनर",
    desc: "NHS UK के अनुसार क्लियर एलाइनर पारदर्शी प्लास्टिक के होते हैं जो खाना खाते समय निकाले जा सकते हैं। बिल्कुल दिखाई नहीं देते। वयस्कों में बहुत लोकप्रिय।",
    icon: "💎",
    best: "वयस्कों के लिए",
  },
  {
    title: "रिमूवेबल ब्रेसेस",
    desc: "NHS inform Scotland के अनुसार रिमूवेबल ब्रेसेस प्लास्टिक की प्लेट होती है जो निकाली जा सकती है। हल्की समस्याओं के लिए उपयुक्त। खाते समय निकाल सकते हैं।",
    icon: "🔄",
    best: "हल्की समस्याओं के लिए",
  },
];

const benefits = [
  {
    icon: "😄",
    title: "आत्मविश्वास बढ़ता है",
    desc: "London Orthodontic Group के अनुसार सीधे दाँत किशोरों के आत्मसम्मान और सामाजिक कौशल पर गहरा प्रभाव डालते हैं।",
  },
  {
    icon: "🦷",
    title: "सफाई आसान होती है",
    desc: "NHS UK के अनुसार सीधे दाँतों की सफाई आसान होती है जिससे सड़न और मसूड़ों की बीमारी का खतरा कम होता है।",
  },
  {
    icon: "🍎",
    title: "खाना चबाना आसान",
    desc: "NHS inform Scotland के अनुसार सही बाइट से खाना ठीक से चबाया जा सकता है जिससे पाचन बेहतर होता है।",
  },
  {
    icon: "🗣️",
    title: "बोलने में सुधार",
    desc: "टेढ़े दाँतों से कुछ शब्द बोलने में तकलीफ होती है। ब्रेसेस से उच्चारण सुधरता है।",
  },
  {
    icon: "💪",
    title: "जबड़ा मजबूत",
    desc: "NHS UK के अनुसार सही बाइट से जबड़े की मांसपेशियों और जोड़ों पर दबाव कम होता है।",
  },
  {
    icon: "🌟",
    title: "स्थायी परिणाम",
    desc: "NHS inform Scotland के अनुसार ब्रेसेस के बाद रिटेनर पहनने से दाँत जीवन भर सीधे रहते हैं।",
  },
  {
    icon: "🏥",
    title: "दंत स्वास्थ्य बेहतर",
    desc: "London Orthodontic Group के अनुसार सीधे दाँत रोग प्रतिरोधी होते हैं। टेढ़े दाँतों में बैक्टीरिया ज्यादा जमते हैं।",
  },
  {
    icon: "😁",
    title: "सुंदर मुस्कान",
    desc: "सीधे और सुंदर दाँत व्यक्तित्व को निखारते हैं। पहली मुलाकात में अच्छा प्रभाव पड़ता है।",
  },
  {
    icon: "⚡",
    title: "आधुनिक तकनीक",
    desc: "NHS UK के अनुसार आज के ब्रेसेस पहले से बहुत कम दिखते हैं और ज्यादा आरामदायक हैं।",
  },
];

const steps = [
  {
    num: "०१",
    title: "जाँच और परामर्श",
    desc: "डॉक्टर दाँतों की स्थिति, बाइट और जबड़े की बनावट जाँचते हैं। X-Ray और तस्वीरें ली जाती हैं।",
  },
  {
    num: "०२",
    title: "इलाज की योजना",
    desc: "मरीज की उम्र, समस्या और जरूरत के अनुसार सबसे सही ब्रेसेस का चुनाव किया जाता है।",
  },
  {
    num: "०३",
    title: "ब्रेसेस लगाना",
    desc: "हर दाँत पर ब्रैकेट लगाया जाता है और तार से जोड़ा जाता है। यह दर्द रहित होता है।",
  },
  {
    num: "०४",
    title: "नियमित जाँच",
    desc: "NHS UK के अनुसार हर ४ से १० हफ्ते में तार कसा जाता है। दाँत धीरे-धीरे सही जगह आते हैं।",
  },
  {
    num: "०५",
    title: "ब्रेसेस हटाना",
    desc: "१२ से २४ महीने बाद ब्रेसेस हटाए जाते हैं। दाँत सुंदर और सीधे हो जाते हैं।",
  },
  {
    num: "०६",
    title: "रिटेनर लगाना",
    desc: "NHS UK के अनुसार ब्रेसेस हटने के बाद रिटेनर पहनना जरूरी है ताकि दाँत वापस न जाएं।",
  },
];

const ageGroups = [
  {
    age: "७-१२ साल",
    title: "बचपन",
    desc: "London Orthodontic Group के अनुसार ७ साल की उम्र में पहली जाँच करवाएं। इस उम्र में समस्या जल्दी पकड़ में आती है और इलाज आसान होता है।",
    icon: "👦",
  },
  {
    age: "१२-१७ साल",
    title: "किशोरावस्था",
    desc: "NHS UK के अनुसार यह ब्रेसेस के लिए सबसे अच्छी उम्र है। सभी दाँत आ चुके होते हैं और हड्डी अभी लचीली होती है।",
    icon: "🧑",
  },
  {
    age: "१८+ साल",
    title: "वयस्क",
    desc: "Perfect Smile Studios UK के अनुसार वयस्कों में भी ब्रेसेस पूरी तरह कारगर हैं। क्लियर एलाइनर और सिरेमिक ब्रेसेस से बिना दिखे इलाज संभव है।",
    icon: "👨",
  },
];

const carePoints = [
  "हर भोजन के बाद ब्रश करें",
  "फ्लॉस और इंटरडेंटल ब्रश का उपयोग करें",
  "टॉफी, हार्ड कैंडी और च्युइंग गम न खाएं",
  "NHS inform UK के अनुसार फिजी ड्रिंक्स से परहेज करें",
  "कड़ी चीजें जैसे बर्फ या गाजर न चबाएं",
  "खेल खेलते समय माउथ गार्ड पहनें",
  "हर ४-१० हफ्ते में डॉक्टर से मिलें",
  "रिटेनर पहनने के निर्देशों का पालन करें",
];

const myths = [
  {
    myth: "ब्रेसेस सिर्फ बच्चों के लिए हैं",
    fact: "NHS UK और Perfect Smile Studios UK के अनुसार ब्रेसेस हर उम्र के लिए उपलब्ध हैं। आज वयस्कों में क्लियर एलाइनर बहुत लोकप्रिय हैं।",
  },
  {
    myth: "ब्रेसेस लगाने में बहुत दर्द होता है",
    fact: "NHS inform Scotland के अनुसार ब्रेसेस लगाना दर्द रहित है। शुरुआती कुछ दिन हल्की तकलीफ होती है जो दवा से ठीक हो जाती है।",
  },
  {
    myth: "ब्रेसेस बहुत दिखते हैं",
    fact: "NHS UK के अनुसार आज के सिरेमिक और क्लियर एलाइनर ब्रेसेस लगभग अदृश्य होते हैं।",
  },
  {
    myth: "ब्रेसेस हटने के बाद दाँत वापस टेढ़े हो जाते हैं",
    fact: "NHS UK के अनुसार रिटेनर पहनने से दाँत जीवन भर सीधे रहते हैं।",
  },
];

const faqs = [
  {
    q: "ब्रेसेस लगाने में कितना समय लगता है?",
    a: "NHS UK के अनुसार इलाज आमतौर पर १२ से २४ महीने में पूरा होता है। यह समस्या की गंभीरता पर निर्भर करता है।",
  },
  {
    q: "क्या ब्रेसेस के साथ खाना खा सकते हैं?",
    a: "NHS inform Scotland के अनुसार फिक्स ब्रेसेस के साथ सामान्य खाना खाया जा सकता है। बस टॉफी, हार्ड कैंडी और च्युइंग गम से बचें।",
  },
  {
    q: "कितनी बार डॉक्टर से मिलना होगा?",
    a: "NHS UK के अनुसार हर ४ से १० हफ्ते में एक बार मिलना होता है जिसमें तार कसा जाता है।",
  },
  {
    q: "क्या वयस्क ब्रेसेस लगवा सकते हैं?",
    a: "हाँ। Perfect Smile Studios UK के अनुसार वयस्कों में भी ब्रेसेस पूरी तरह कारगर हैं। क्लियर एलाइनर से बिना दिखे इलाज संभव है।",
  },
  {
    q: "ब्रेसेस हटने के बाद क्या करना होगा?",
    a: "NHS UK के अनुसार ब्रेसेस हटने के बाद रिटेनर पहनना जरूरी है। यह दाँतों को सीधा बनाए रखता है।",
  },
  {
    q: "क्या ब्रेसेस से दाँत कमजोर होते हैं?",
    a: "नहीं। NHS inform Scotland के अनुसार ब्रेसेस से दाँत कमजोर नहीं होते बशर्ते सफाई ठीक से की जाए।",
  },
  {
    q: "सबसे कम दिखने वाले ब्रेसेस कौन से हैं?",
    a: "NHS UK के अनुसार क्लियर एलाइनर यानी पारदर्शी एलाइनर सबसे कम दिखते हैं। ये खाते समय निकाले जा सकते हैं।",
  },
  {
    q: "किस उम्र में ब्रेसेस लगवाना सबसे अच्छा है?",
    a: "London Orthodontic Group के अनुसार १२-१७ साल की उम्र सबसे अच्छी है। लेकिन हर उम्र में इलाज संभव है।",
  },
];

export default function Braces() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <section id="braces" className="relative py-24 px-4 text-center overflow-hidden">
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
            <span className="text-white">ब्रेसेस — </span>
            <span className="text-yellow-400">दाँत सीधे करें</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            टेढ़े-मेढ़े और भीड़े हुए दाँतों को सुंदर और सीधा बनाएं।
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            NHS UK के अनुसार ब्रेसेस से दाँतों की देखभाल आसान होती है, बाइट
            सुधरता है और मुस्कान खूबसूरत होती है। डॉ. अनवर अली के अनुभवी हाथों
            से पाएं परफेक्ट मुस्कान।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6387129705"
              className="inline-block bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl text-lg hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20"
            >
              📞 अभी अपॉइंटमेंट लें
            </a>
            <Link
              href="#types"
              className="inline-block border border-white/20 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/5 transition"
            >
              और जानें →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-5 border border-white/10"
            >
              <div className="text-2xl font-extrabold text-yellow-400">
                {s.num}
              </div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              कब जरूरी है?
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              इन स्थितियों में ब्रेसेस जरूरी हैं
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-400/20 transition"
              >
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-gray-300 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              उम्र के अनुसार
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              हर उम्र के लिए उपलब्ध
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
              ब्रेसेस बच्चों, किशोरों और वयस्कों — सभी के लिए हैं
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((a, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 hover:bg-white/10 transition"
              >
                <div className="text-5xl mb-3">{a.icon}</div>
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">
                  {a.age}
                </span>
                <h3 className="text-white font-bold text-xl mt-1 mb-3">
                  {a.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              प्रकार
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              ब्रेसेस के प्रकार
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
              आपकी जरूरत और पसंद के अनुसार सही ब्रेसेस चुना जाता है
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bracesTypes.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{t.icon}</span>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-lg">
                      {t.title}
                    </h3>
                    <span className="text-green-400 text-xs font-semibold">
                      ✓ {t.best}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              फायदे
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              ब्रेसेस के लाभ
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              प्रक्रिया
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              इलाज कैसे होता है?
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              हर कदम पर डॉक्टर आपके साथ हैं
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-600/40 transition"
              >
                <div className="text-5xl font-extrabold text-green-700/30 mb-3">
                  {s.num}
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              भ्रम और सच
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              ब्रेसेस के बारे में गलतफहमियाँ
            </h2>
          </div>
          <div className="space-y-4">
            {myths.map((m, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-600/20 transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">
                    ❌ भ्रम:
                  </span>
                  <p className="text-gray-400 text-sm">{m.myth}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-sm flex-shrink-0 mt-0.5">
                    ✅ सच:
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {m.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              देखभाल
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              ब्रेसेस के दौरान देखभाल
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              इन निर्देशों का पालन करें
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {carePoints.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-600/30 transition"
              >
                <span className="text-green-400 font-extrabold text-lg flex-shrink-0">
                  ✓
                </span>
                <p className="text-gray-300 text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">
              सवाल-जवाब
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              अक्सर पूछे जाने वाले सवाल
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/20 transition"
              >
                <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5 flex-shrink-0">
                    ❓
                  </span>
                  {f.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-700/10 via-[#0d1f4f] to-yellow-400/5 border border-white/10 rounded-3xl p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-white mb-3">
                डॉ. अनवर अली से मिलें
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
                टेढ़े दाँत हैं? आज ही जाँच करवाएं और अपने बच्चे या खुद के लिए
                परफेक्ट मुस्कान पाएं।
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: "📍",
                  label: "पता",
                  value: "LIC के सामने, बस्ती रोड, डुमरियागंज",
                },
                { icon: "📞", label: "फोन", value: "6387129705 / 9452531751" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-wide mb-1">
                    {c.label}
                  </p>
                  <p className="text-gray-300 text-sm">{c.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6387129705"
                className="bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20 text-center"
              >
                📞 6387129705
              </a>
              <a
                href="tel:9452531751"
                className="border border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/5 transition text-center"
              >
                📞 9452531751
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
