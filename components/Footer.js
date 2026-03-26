export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-green-700 px-6 py-3 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-1">
        <p className="text-white text-xs">© 2026 सर्वाधिकार सुरक्षित — डॉ. अनवर अली</p>
        <p className="text-white text-xs">
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