export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      <header className="bg-blue-700 text-white py-6 px-4 text-center shadow-md">
        <h1 className="text-3xl font-extrabold">डॉ. अनवर अली</h1>
        <p className="text-blue-200 text-sm mt-1">BDS — KGMU लखनऊ | लखनऊ मेडिकल कॉलेज</p>
        <p className="text-white font-semibold mt-1">रजि. सं. A17333</p>
      </header>

      <section className="bg-blue-50 py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">एडवांस डेंटल क्लिनिक</h2>
        <p className="text-gray-600 mb-1">📍 LIC के सामने, बस्ती रोड, डुमरियागंज</p>
        <p className="text-gray-600 mb-1">📞 <a href="tel:6387129705" className="text-blue-700 font-bold hover:underline">6387129705</a></p>
        <p className="text-gray-600">📞 <a href="tel:9452531751" className="text-blue-700 font-bold hover:underline">9452531751</a></p>
      </section>

      <section className="py-10 px-4 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-6">हमारी सेवाएं</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🦷", name: "फिक्स दाँत लगाना" },
            { icon: "🔬", name: "RCT से खराब दाँत बचाना" },
            { icon: "😁", name: "कमजोर दाँत की कैपिंग" },
            { icon: "📷", name: "डिजिटल X-Ray" },
            { icon: "🩺", name: "पायरिया का इलाज" },
            { icon: "✨", name: "टेढ़े-मेढ़े दाँत सीधे करना" },
          ].map((s, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-gray-700 font-semibold text-sm">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">डॉक्टर का परिचय</h2>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <div className="text-5xl mb-3">👨‍⚕️</div>
          <h3 className="text-xl font-bold text-blue-700">डॉ. अनवर अली</h3>
          <p className="text-gray-500 text-sm mt-1">BDS — KGMU लखनऊ</p>
          <p className="text-gray-500 text-sm">लखनऊ मेडिकल कॉलेज</p>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            डॉ. अनवर अली डुमरियागंज के एक अनुभवी दंत चिकित्सक हैं। वे पिछले कई वर्षों से मरीजों को
            उच्च गुणवत्ता की दंत चिकित्सा सेवाएं प्रदान कर रहे हैं।
          </p>
        </div>
      </section>

      <footer className="bg-blue-700 text-white text-center py-6 px-4">
        <p className="font-bold text-lg mb-1">एडवांस डेंटल क्लिनिक</p>
        <p className="text-blue-200 text-sm">LIC के सामने, बस्ती रोड, डुमरियागंज</p>
        <p className="text-blue-200 text-sm mt-1">© 2026 सर्वाधिकार सुरक्षित</p>
      </footer>

    </main>
  );
}