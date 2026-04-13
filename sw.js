const CACHE_NAME = 'stuffbox-v3';
const BASE = '/-stuffbox';

self.addEventListener('install', event => {
  // Force immediate activation, skip waiting
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        BASE + '/',
        BASE + '/index.html',
        BASE + '/manifest.json'
      ]).catch(err => console.log('Cache install error:', err));
    })
  );
});

self.addEventListener('activate', event => {
  // Delete ALL old caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        console.log('Deleting cache:', k);
        return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Cache-first for CDN assets (unpkg)
  if (url.hostname === 'unpkg.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // For all other requests: network first, fall back to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
