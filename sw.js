const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

var PRECACHE_URLS = [
  'index.html',
  './', //alias for index.html
  '/index.html',
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-196maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'favicon.ico',
  'sw.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(PRECACHE).then(funtion(cache) {
                               return cache.addAll(PRECACHE_URLS);
                })
  );
});

self.addEventListener('ativate', event => {
  console.log('Service Worker Activating...');
});

// serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(funtion(response){
                                 return response || fetch(event.request);
    })
);
});
