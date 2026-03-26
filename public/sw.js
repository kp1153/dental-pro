const CACHE_NAME = "dental-pro-v1";

// Install — cache कुछ नहीं, बस install हो
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

// Activate — पुराना cache साफ करो
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first, offline में cache से
self.addEventListener("fetch", (e) => {
  // POST requests cache नहीं होते
  if (e.request.method !== "GET") return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
