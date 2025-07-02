'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6da3cff95a1d2f9dce4bfbc7ae47440c",
"version.json": "5d034be4203a1bb621b5a30a9f5979c9",
"index.html": "22dbd901d5c3e11b6a49ba8fa991a092",
"/": "22dbd901d5c3e11b6a49ba8fa991a092",
"main.dart.js": "6ea2d8adae305f7e08ecae64df56a03a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "86df03065b4b9015a56e13c9425e939b",
"assets/AssetManifest.json": "bb19f0609be77ff77fa391f3cb51975d",
"assets/assert/life/4.png": "eca71ccb51176efe4c3213e119e4f6bf",
"assets/assert/life/3.png": "2253efc037bf1111e5a718790357feda",
"assets/assert/life/1.jpg": "2486862e7497238462a43126dab06563",
"assets/assert/top_images/IMG_0076.JPG": "94956227c5aedf6dabee508bda27fb4f",
"assets/assert/top_images/IMG_0056.jpg": "e10d63d2390df939a0e3d9e2a0a3c7e8",
"assets/assert/top_images/IMG_0057.jpg": "44309400db0923f263bea1d49a910695",
"assets/assert/top_images/IMG_0052.JPG": "78e58a7c4b2ba3d055b2011afdc2deae",
"assets/assert/entro8/Group%2520317.png": "df2a9beccd71af0d2e365689aca13303",
"assets/assert/entro8/Group%2520315.png": "d28f1a079471298cfed5bdbaf0675a21",
"assets/assert/entro8/Frame%252017.png": "e05d3f6ed4d5037506f6bb2b4564999e",
"assets/assert/entro8/logo/512x512.png": "216be813e36d9a5c3daf56fb89a51bab",
"assets/assert/entro8/Group%2520320.png": "3f1ed56bbe11506477832e5eb9f2a1f7",
"assets/assert/entro8/Group%2520321.png": "68dd806904ff85434a629e62eb467c8d",
"assets/assert/entro8/Group%2520319.png": "d1b9ec119112531653fbff73ef1f2c7f",
"assets/assert/entro8/Group%2520318.png": "34462ef4b17355de70ffe020ecbcbae7",
"assets/assert/flutter/8.png": "2bfd9164083cbb3096893ec384a7affd",
"assets/assert/flutter/9.png": "4035d5992fe27ef7c0debc0717c7c456",
"assets/assert/flutter/14.png": "ed7712ee8e3ed9c1c8212701f0f68ca9",
"assets/assert/flutter/15.png": "cb066478ff231ccc380b242f292a9871",
"assets/assert/flutter/17.png": "9248e9596620aeae95189cf9103307a2",
"assets/assert/flutter/16.png": "da0a7797d7dded0f042e89769d19a84c",
"assets/assert/flutter/12.png": "1fd25d404ae6cc4e28930ba566d7203e",
"assets/assert/flutter/13.png": "74b1f8026bc9e5f0835cb45939a6f8df",
"assets/assert/flutter/11.png": "5126a27968f17b83e9b3544295b1c314",
"assets/assert/flutter/10.png": "a1f644374674c1198f4d02ebf1348f12",
"assets/assert/flutter/4.png": "4e55a42eea481005c3437d6837beb377",
"assets/assert/flutter/5.png": "f5222cfd49a7ee578cf06f0fd4a665f7",
"assets/assert/flutter/7.png": "71218e3dfb246afa7c917d509040406d",
"assets/assert/flutter/6.png": "3f87c74f27f837134ce59768f807c86c",
"assets/assert/flutter/2.png": "68dd806904ff85434a629e62eb467c8d",
"assets/assert/flutter/3.png": "480cdd321c536b8bc7a50b99f68dcfaa",
"assets/assert/flutter/1.png": "28d8aee38f71e85dafa2ca9a977eb712",
"assets/assert/figma/8.png": "ba1f3603ecca88ce92e7ebf257754eb8",
"assets/assert/figma/4.png": "1c759d8910866b1717c16ea72f2b580b",
"assets/assert/figma/5.png": "ba618e44b99fce109353b3eecf8339f9",
"assets/assert/figma/7.png": "6ede38831207080bcd133ba50551ae76",
"assets/assert/figma/6.png": "0315273a3fc3a73b9ba47752f6759d88",
"assets/assert/figma/2.png": "65e7ddbe903fa17346f2915a83a277d2",
"assets/assert/figma/3.png": "3f1ed56bbe11506477832e5eb9f2a1f7",
"assets/assert/figma/1.png": "3522da04aaddb28fa7dae4350163cfcc",
"assets/assert/font/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assert/font/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/NOTICES": "3913d0c6fad0e766e2da0ba2ea093f56",
"assets/FontManifest.json": "cb16847ee5dc9eabe58ff4254aefcdbe",
"assets/AssetManifest.bin.json": "cbafe6394a851cfadfc49372f4f1246a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c0950f6e2378232992c86a508a983e01",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41e8302cbaf04408585d948a435f4421",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ed3cceeec97b463cc8f23f2b669755d1",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
