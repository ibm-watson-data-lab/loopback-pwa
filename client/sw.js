// The name of the cache to use for this instance of the Service Worker
var cacheName = 'v1';

// The set of files to cache
var filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
];

// Pre-caches the files when the Service Worker is installed
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache)
        .then(function() {
          self.skipWaiting();
        });
      }));
});

// Deletes old caches when the new Service Worker is activated
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys()
    .then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName)
          return caches.delete(key);
      }));
  }));
  return self.clients.claim();
});

// Returns a response out of cache when fetched, or requests the resource if not already cached
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request)
    .then(function(response) {
      return response || fetch(e.request)
        .then(function (resp) {
          return caches.open(cacheName)
            .then(function(cache){
              cache.put(e.request, resp.clone());
              return resp;
          })
        }).catch(function(event){
          console.log('Error in Service Worker fetch event!');
        })
      })
  );
});
