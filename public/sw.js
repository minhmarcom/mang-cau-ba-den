const CACHE_NAME = "mang-cau-ba-den-v2";
const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
  "/app-icon-192.png",
  "/app-icon-512.png",
  "/hero-mang-cau.jpg",
  "/vuon-mang-cau.jpg",
  "/mang-cau-tren-canh.jpg",
  "/thuc-te-dong-goi-nhieu-thung.jpg",
  "/thuc-te-dong-goi.jpg",
  "/thuc-te-mang-cau-tuoi.jpg",
  "/thuc-te-phan-loai.jpg",
  "/thuc-te-thu-hoach.jpg",
  "/thuc-te-vuon-mang-cau.jpg",
  "/fonts/be-vietnam-pro-400.ttf",
  "/fonts/be-vietnam-pro-500.ttf",
  "/fonts/be-vietnam-pro-600.ttf",
  "/fonts/be-vietnam-pro-700.ttf",
  "/fonts/dm-serif-display-regular.ttf",
  "/fonts/dm-serif-display-italic.ttf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("/", copy));
          return response;
        })
        .catch(() => caches.match("/"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
