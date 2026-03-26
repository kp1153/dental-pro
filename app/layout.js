import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "डॉ. अनवर अली — एडवांस डेंटल क्लिनिक, डुमरियागंज",
  description: "डुमरियागंज के सबसे विश्वसनीय दंत चिकित्सक। RCT, फिक्स दाँत, कैपिंग, पायरिया इलाज, डिजिटल X-Ray। अभी अपॉइंटमेंट लें — 6387129705",
  keywords: "दंत चिकित्सक, डुमरियागंज, डॉ. अनवर अली, RCT, दाँत का इलाज, एडवांस डेंटल क्लिनिक",
  authors: [{ name: "डॉ. अनवर अली" }],
  openGraph: {
    title: "डॉ. अनवर अली — एडवांस डेंटल क्लिनिक",
    description: "डुमरियागंज के सबसे विश्वसनीय दंत चिकित्सक। अभी अपॉइंटमेंट लें।",
    url: "https://dentistanwarali.online",
    siteName: "एडवांस डेंटल क्लिनिक",
    locale: "hi_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}