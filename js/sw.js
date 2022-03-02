console.log('cool');

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
