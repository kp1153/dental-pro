import Link from "next/link";

export const metadata = {
  title: "आरसीटी — रूट कैनाल ट्रीटमेंट — एडवांस डेंटल क्लिनिक, डुमरियागंज",
  description: "खराब और दर्द करने वाले दाँत को निकाले बिना बचाएं। डॉ. अनवर अली से आरसीटी करवाएं — 6387129705",
  keywords: "आरसीटी, रूट कैनाल, दाँत का दर्द, दाँत बचाना, डुमरियागंज, एडवांस डेंटल क्लिनिक",
};

const stats = [
  { num: "९५%", label: "सफलता दर" },
  { num: "१-३", label: "सिटिंग में पूरा" },
  { num: "१०+", label: "वर्षों का अनुभव" },
  { num: "०", label: "दर्द की गारंटी" },
];

const symptoms = [
  { icon: "😣", text: "दाँत में तेज और लगातार दर्द हो" },
  { icon: "🥶", text: "ठंडा या गर्म लगने पर दर्द हो" },
  { icon: "🦷", text: "दाँत काला पड़ गया हो" },
  { icon: "🤕", text: "मसूड़ों पर सूजन या फोड़ा हो" },
  { icon: "😬", text: "चबाने या दाँत पर दबाव पड़ने से दर्द हो" },
  { icon: "🌡️", text: "दाँत की जड़ में संक्रमण हो" },
];

const benefits = [
  { icon: "🦷", title: "दाँत बचता है", desc: "NHS UK के अनुसार RCT का सबसे बड़ा फायदा यह है कि खराब दाँत को निकालने की जरूरत नहीं पड़ती।" },
  { icon: "😊", title: "दर्द से राहत", desc: "Cleveland Clinic USA के अनुसार RCT के बाद दर्द पूरी तरह ठीक हो जाता है। संक्रमण खत्म होता है।" },
  { icon: "🚫", title: "संक्रमण रुकता है", desc: "Newcastle NHS के अनुसार RCT बैक्टीरिया को जड़ से खत्म करता है और आगे फैलने से रोकता है।" },
  { icon: "💪", title: "दाँत मजबूत बनता है", desc: "RCT के बाद क्राउन लगाने से दाँत पहले से भी ज्यादा मजबूत हो जाता है।" },
  { icon: "😁", title: "मुस्कान सुरक्षित", desc: "दाँत निकलवाने से बचने पर चेहरे की बनावट और मुस्कान बरकरार रहती है।" },
  { icon: "🦴", title: "हड्डी सुरक्षित", desc: "NHS UK के अनुसार दाँत निकलवाने पर हड्डी सिकुड़ने लगती है — RCT से यह नहीं होता।" },
  { icon: "⚡", title: "तुरंत राहत", desc: "पहली सिटिंग के बाद ही दर्द में काफी आराम मिल जाता है।" },
  { icon: "💰", title: "किफायती", desc: "दाँत निकलवाकर इम्प्लांट लगवाने से RCT सस्ता पड़ता है और परिणाम भी बेहतर होता है।" },
  { icon: "🌟", title: "लंबे समय तक फायदा", desc: "patient.info UK के अनुसार सफल RCT के बाद दाँत कई वर्षों तक बिना किसी परेशानी के चलता है।" },
];

const steps = [
  { num: "०१", title: "जाँच और X-Ray", desc: "डॉक्टर दाँत की पूरी जाँच करते हैं। X-Ray से संक्रमण की गहराई और जड़ की स्थिति देखी जाती है।" },
  { num: "०२", title: "एनेस्थीसिया", desc: "लोकल एनेस्थीसिया देकर दाँत और आसपास के हिस्से को पूरी तरह सुन्न किया जाता है। इससे दर्द बिल्कुल नहीं होता।" },
  { num: "०३", title: "पल्प निकालना", desc: "दाँत के अंदर की नस यानी पल्प और संक्रमित हिस्से को सावधानी से निकाला जाता है।" },
  { num: "०४", title: "नहर की सफाई", desc: "रूट कैनाल को विशेष उपकरणों और एंटीसेप्टिक से पूरी तरह साफ और कीटाणुरहित किया जाता है।" },
  { num: "०५", title: "भराई करना", desc: "साफ की गई नहर को विशेष सामग्री से भरा जाता है ताकि भविष्य में बैक्टीरिया न पनप सके।" },
  { num: "०६", title: "क्राउन लगाना", desc: "इलाज के बाद दाँत को मजबूत बनाने के लिए कैप या क्राउन लगाई जाती है। यह दाँत को टूटने से बचाती है।" },
];

const myths = [
  { myth: "RCT में बहुत दर्द होता है", fact: "Cleveland Clinic USA के अनुसार आधुनिक तकनीक से RCT बिल्कुल दर्द रहित है। लोकल एनेस्थीसिया से कोई तकलीफ नहीं होती।" },
  { myth: "RCT के बाद दाँत कमजोर हो जाता है", fact: "RCT के बाद क्राउन लगाने से दाँत पहले से भी मजबूत हो जाता है।" },
  { myth: "दाँत निकलवाना ज्यादा आसान है", fact: "NHS UK के अनुसार दाँत बचाना हमेशा बेहतर होता है। निकलवाने के बाद हड्डी कमजोर होती है।" },
  { myth: "RCT बहुत महंगा है", fact: "इम्प्लांट या ब्रिज की तुलना में RCT बहुत किफायती है और परिणाम भी बेहतर होते हैं।" },
];

const aftercare = [
  "इलाज के बाद कुछ घंटे कुछ न खाएं",
  "नरम खाना खाएं — पहले कुछ दिन",
  "इलाज वाले दाँत से कड़ी चीजें न चबाएं",
  "डॉक्टर की दी हुई दवाएं नियमित लें",
  "रोज ब्रश और फ्लॉस करें",
  "हर ६ महीने में जाँच करवाएं",
  "मसूड़ों में सूजन हो तो तुरंत डॉक्टर को दिखाएं",
  "क्राउन लग जाने के बाद सामान्य जीवन जिएं",
];

const faqs = [
  { q: "RCT में कितना दर्द होता है?", a: "Cleveland Clinic USA के अनुसार आधुनिक तकनीक से RCT बिल्कुल दर्द रहित है। लोकल एनेस्थीसिया से इलाज के दौरान कोई दर्द नहीं होता। बाद में हल्की तकलीफ हो सकती है जो दवा से ठीक हो जाती है।" },
  { q: "RCT में कितनी सिटिंग लगती हैं?", a: "NHS UK के अनुसार आमतौर पर १ से ३ सिटिंग लगती हैं। यह संक्रमण की गंभीरता पर निर्भर करता है।" },
  { q: "क्या RCT के बाद दाँत निकालना पड़ सकता है?", a: "patient.info UK के अनुसार यदि RCT सफल रहा तो दाँत कई वर्षों तक सुरक्षित रहता है। विफलता की स्थिति में दाँत निकालना पड़ सकता है।" },
  { q: "RCT के बाद क्राउन क्यों जरूरी है?", a: "RCT के बाद दाँत की नस निकल जाने से वह थोड़ा कमजोर हो जाता है। क्राउन उसे टूटने से बचाता है और मजबूती देता है।" },
  { q: "RCT कितने समय तक चलता है?", a: "patient.info UK के अनुसार एक साल बाद X-Ray लेकर सफलता जाँची जाती है। सफल RCT कई वर्षों तक चलता है।" },
  { q: "क्या बच्चों के दूध के दाँत में RCT होता है?", a: "हाँ। King's College NHS के अनुसार बच्चों के दूध के दाँत में भी RCT हो सकता है ताकि दाँत समय से पहले न गिरे।" },
  { q: "RCT के बाद क्या खा सकते हैं?", a: "पहले कुछ घंटे कुछ न खाएं। बाद में नरम खाना खाएं। क्राउन लग जाने के बाद सब कुछ सामान्य रूप से खा सकते हैं।" },
  { q: "अगर RCT न करवाएं तो क्या होगा?", a: "Newcastle NHS के अनुसार इलाज न करवाने पर संक्रमण फैलता रहेगा, हड्डी को नुकसान होगा और अंत में दाँत निकालना पड़ेगा।" },
];

export default function RCTPage() {
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
            <span className="text-white">आर</span>
            <span className="text-yellow-400">सीटी</span>
          </h1>
          <p className="text-white/80 text-xl font-semibold mb-3">रूट कैनाल ट्रीटमेंट</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            दर्द करने वाले दाँत को निकाले बिना बचाएं। आधुनिक तकनीक से दर्द रहित RCT।
          </p>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            NHS UK और Cleveland Clinic USA के अनुसार RCT सबसे सुरक्षित और प्रभावी तरीका है खराब दाँत को बचाने का। डॉ. अनवर अली के अनुभवी हाथों से पाएं राहत।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6387129705" className="inline-block bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl text-lg hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20">
              📞 अभी अपॉइंटमेंट लें
            </a>
            <Link href="#symptoms" className="inline-block border border-white/20 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/5 transition">
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
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">RCT क्या है?</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">रूट कैनाल ट्रीटमेंट को समझें</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              हर दाँत के अंदर एक नरम हिस्सा होता है जिसे <span className="text-yellow-400 font-semibold">पल्प</span> कहते हैं। इसमें नसें और रक्त वाहिकाएं होती हैं। जब दाँत में गहरी सड़न, चोट या दरार की वजह से यह पल्प संक्रमित हो जाता है तो असहनीय दर्द होता है।
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-green-400 font-semibold">RCT यानी रूट कैनाल ट्रीटमेंट</span> में संक्रमित पल्प को निकालकर, नहर को साफ करके और भरकर दाँत को बचाया जाता है। Newcastle NHS के अनुसार यह एक सुरक्षित और सफल प्रक्रिया है।
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              patient.info UK के अनुसार RCT का उद्देश्य संक्रमित पल्प हटाना, नहर को कीटाणुरहित करना और भविष्य में बैक्टीरिया को पनपने से रोकना है।
            </p>
          </div>
        </div>
      </section>

      <section id="symptoms" className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">लक्षण</p>
            <h2 className="text-3xl font-extrabold text-white">इन लक्षणों में RCT जरूरी हो सकता है</h2>
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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">फायदे</p>
            <h2 className="text-3xl font-extrabold text-white">RCT के लाभ</h2>
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

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">प्रक्रिया</p>
            <h2 className="text-3xl font-extrabold text-white">RCT कैसे होता है?</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">हर कदम पर डॉक्टर आपके साथ हैं</p>
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

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">भ्रम और सच</p>
            <h2 className="text-3xl font-extrabold text-white">RCT के बारे में गलतफहमियाँ</h2>
            <p className="text-gray-400 text-sm mt-3">जानिए सच क्या है</p>
          </div>
          <div className="space-y-4">
            {myths.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-600/20 transition">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">❌ भ्रम:</span>
                  <p className="text-gray-400 text-sm">{m.myth}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-sm flex-shrink-0 mt-0.5">✅ सच:</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{m.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">देखभाल</p>
            <h2 className="text-3xl font-extrabold text-white">RCT के बाद देखभाल</h2>
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

      <section className="py-16 px-4">
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
                दाँत में दर्द है? देर मत करें — जितनी जल्दी इलाज होगा, उतना बेहतर परिणाम मिलेगा।
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