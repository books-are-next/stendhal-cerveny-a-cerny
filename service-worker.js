/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-f19d5d8';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./cerveny_a_cerny_002.html","./cerveny_a_cerny_005.html","./cerveny_a_cerny_006.html","./cerveny_a_cerny_007.html","./cerveny_a_cerny_008.html","./cerveny_a_cerny_009.html","./cerveny_a_cerny_010.html","./cerveny_a_cerny_011.html","./cerveny_a_cerny_012.html","./cerveny_a_cerny_013.html","./cerveny_a_cerny_014.html","./cerveny_a_cerny_015.html","./cerveny_a_cerny_016.html","./cerveny_a_cerny_017.html","./cerveny_a_cerny_018.html","./cerveny_a_cerny_019.html","./cerveny_a_cerny_020.html","./cerveny_a_cerny_021.html","./cerveny_a_cerny_022.html","./cerveny_a_cerny_023.html","./cerveny_a_cerny_024.html","./cerveny_a_cerny_025.html","./cerveny_a_cerny_026.html","./cerveny_a_cerny_027.html","./cerveny_a_cerny_028.html","./cerveny_a_cerny_029.html","./cerveny_a_cerny_030.html","./cerveny_a_cerny_031.html","./cerveny_a_cerny_032.html","./cerveny_a_cerny_033.html","./cerveny_a_cerny_034.html","./cerveny_a_cerny_035.html","./cerveny_a_cerny_036.html","./cerveny_a_cerny_037.html","./cerveny_a_cerny_038.html","./cerveny_a_cerny_039.html","./cerveny_a_cerny_040.html","./cerveny_a_cerny_041.html","./cerveny_a_cerny_042.html","./cerveny_a_cerny_043.html","./cerveny_a_cerny_044.html","./cerveny_a_cerny_045.html","./cerveny_a_cerny_046.html","./cerveny_a_cerny_047.html","./cerveny_a_cerny_048.html","./cerveny_a_cerny_049.html","./cerveny_a_cerny_050.html","./cerveny_a_cerny_051.html","./cerveny_a_cerny_052.html","./cerveny_a_cerny_053.html","./cerveny_a_cerny_054.html","./cerveny_a_cerny_055.html","./cerveny_a_cerny_056.html","./cerveny_a_cerny_057.html","./cerveny_a_cerny_058.html","./cerveny_a_cerny_059.html","./cerveny_a_cerny_060.html","./cerveny_a_cerny_061.html","./cerveny_a_cerny_062.html","./cerveny_a_cerny_063.html","./cerveny_a_cerny_064.html","./cerveny_a_cerny_065.html","./cerveny_a_cerny_066.html","./cerveny_a_cerny_067.html","./cerveny_a_cerny_068.html","./cerveny_a_cerny_069.html","./cerveny_a_cerny_070.html","./cerveny_a_cerny_071.html","./cerveny_a_cerny_072.html","./cerveny_a_cerny_073.html","./cerveny_a_cerny_074.html","./cerveny_a_cerny_075.html","./cerveny_a_cerny_076.html","./cerveny_a_cerny_077.html","./cerveny_a_cerny_078.html","./cerveny_a_cerny_079.html","./cerveny_a_cerny_080.html","./cerveny_a_cerny_081.html","./cerveny_a_cerny_082.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.jpg","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
