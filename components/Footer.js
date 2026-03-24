export default function Footer() {
  return (
    <footer className="bg-green-700 px-6 py-8 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <p className="text-white font-extrabold text-xl tracking-wide">🦷 एडवांस डेंटल क्लिनिक</p>
        <p className="text-green-200 text-sm">LIC के सामने, बस्ती रोड, डुमरियागंज</p>
        <p className="text-green-200 text-sm">📞 6387129705 | 9452531751</p>
        <p className="text-green-300 text-xs mt-3">© 2026 सर्वाधिकार सुरक्षित — डॉ. अनवर अली</p>
        <p className="text-green-300 text-xs">
          क्रिएटिव सॉल्यूशंस{" "}
          <a href="https://www.web-developer-kp.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
            www.web-developer-kp.com
          </a>{" "}
          के द्वारा वेबसाइट निर्माण और रखरखाव
        </p>
      </div>
    </footer>
  );
}