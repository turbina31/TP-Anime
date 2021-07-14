'use srtict';

const offline_version = 1;
const cache_name = 'offline';
const offline_url = [
        './js/main.js',
  './css/estilos.css',
  './css/material-kit.css',
  './index.html',
  './offline/offline.html',
  './imagenes.html',
  './videos.html',
    './offline/css/material-kit.css',
  './offline/css/style.css',
    './offline/js/core/jquery.min.js',
    './offline/js/core/bootstrap-material-design.js',
    './offline/js/main.js',
  './offline/js/app.js',
  './offline/images/blue.png',
  './offline/images/candy-crush-background.jpg',
  './offline/images/green.png',
  './offline/images/orange.png',
  './offline/images/purple.png',
  './offline/images/red.png',
  './offline/images/yellow.png',
  "./img/dragon-ball-super.jpg",
  "./img/kimi-no-na-wa.jpg",
  "./img/naruto.jpg",
  "./img/naruto2.jpg",
  "./img/naruto3.jpg",
  "./img/pokemon.jpg",
  "./img/pokemon2.jpg",
  "./img/sword-art.jpg",
  './img/icons/alert.svg',
  "./img/icons/logo192x192.png",
  "./img/icons/logo512x512.png",
  "./img/icons/inicio.png",
  "./img/descarga.png",
  "./img/icons/video.png",
  "./img/icons/inicio.svg",
  "./img/descarga.svg",
  "./img/icons/video.svg",
  './img/icons/enviar.svg',
  './img/icons/link.svg',
  './img/icons/sinopcis.svg',
  './js/material-kit.js',
  './js/api.js',
  './js/core/bootstrap-material-design.min.js',
  './js/core/jquery.min.js',
  './js/core/popper.min.js'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cache_name);
      await cache.addAll(new Request(offline_url));
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          const networkResponse = await fetch(event.request);
          return networkResponse;
        }catch (error){
          const cache = await caches.open(cache_name);
          const cachedResponse = await cache.match('offline/offline.html');
        }
      })()
    );
  }
});
