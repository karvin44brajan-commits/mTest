const CACHE_NAME = 'mobywatel-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/card.css',
  './css/main.css',
  './js/bar.js',
  './js/card.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
