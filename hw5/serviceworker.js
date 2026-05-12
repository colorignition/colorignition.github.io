var staticCacheName = "hw5";
const urlsToCache = ["/", "styles.css", "images/lightblue.webp", "images/logo_flutter.png", "images/logo_ionic.png", "images/logo_reactnative.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});