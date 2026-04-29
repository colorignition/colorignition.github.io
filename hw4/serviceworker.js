var staticCacheName = "pwad";
const urlsToCache = ["/", "hw4.js", "styles.css", "images/lightblue.jpg", "images/lightgold.jpg"];

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