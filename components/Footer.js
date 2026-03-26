export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 z-50">

      <div className="max-w-6xl mx-auto px-4 py-3 text-center space-y-1">

        <p className="text-gray-400 text-xs md:text-sm">
          © 2026 सर्वाधिकार सुरक्षित
        </p>

        <p className="text-yellow-400 font-semibold text-sm md:text-base">
          क्रिएटिव सॉल्यूशंस द्वारा निर्मित वेबसाइट — 
          <a 
            href="https://www.web-developer-kp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            www.web-developer-kp.com
          </a>
        </p>

      </div>

    </footer>
  );
}