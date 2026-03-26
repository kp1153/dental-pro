export default function manifest() {
  return {
    name: "एडवांस डेंटल क्लिनिक",
    short_name: "Dental Pro",
    description: "डॉ. अनवर अली — एडवांस डेंटल क्लिनिक, डुमरियागंज",
    start_url: "/login/pin",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#0a0f1e",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
