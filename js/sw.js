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
