var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  'css/style.css',
  'js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName.then(funtion(cache) {
                               return cache.addAll(filesToCache);
                })
  );
});

// serve cached content when offline
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(funtion(response){
                                 return response || fetch(e.request);
    })
);
});
