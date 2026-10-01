'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c54967c0977e5e0f29714086c204f15",
"assets/AssetManifest.bin.json": "4cdc9aed2856799075fcecd9719637e7",
"assets/AssetManifest.json": "8ca85b9c63f0d04e779ea63cce5b473f",
"assets/assets/icon/BIONICS-Page-1.drawio.png": "2c84c214d602542ba561bef9807bbc22",
"assets/assets/icon/Hotel%2520Pantry%2520Shopping.jpg": "4bcd2c66e33deb75125aa22f1187a907",
"assets/assets/icon/icon.jpg": "b40764bd4fce9744e80b5cdf22aa4a70",
"assets/assets/icon/icon.png": "fecf67af5d729d231b0407a164c7ef86",
"assets/assets/icon/Logo_Bionic-removebg-preview.png": "1c77b5ea881072dc3a5b7ed3cd017a9f",
"assets/assets/icon/Merchandise%2520Shopping.jpg": "0339cfecd63f57545b9703b75acbe60d",
"assets/assets/icon/Restaurant%2520Shopping.jpg": "f5e8620183c0d4c88c36a09ecbdc6f80",
"assets/assets/icon/Services%2520Shopping.jpg": "d04a9e46ee7383f0b24b1616b3f329f3",
"assets/assets/iptv_channels/iptv_channels.json": "b83f7b46fc5cc12f2d1c5af11041c68a",
"assets/assets/logo/AppleTV.png": "f687c679e00aefd207619bb8839852d5",
"assets/assets/logo/Disney+.png": "79a111d5653dab019ec8d45a2d9a218c",
"assets/assets/logo/Hotel%2520Pantry%2520Shopping.jpg": "4bcd2c66e33deb75125aa22f1187a907",
"assets/assets/logo/Hotel.jpg": "c821b95e128df69c1eeca46538cc5e75",
"assets/assets/logo/Iqiyi.png": "13a42c7fa4f754002a90f0617e9f73b4",
"assets/assets/logo/LeftHome.jpg": "263abe5c607a58bb77790c945efb5e60",
"assets/assets/logo/LogoHotel.png": "514fb9b314af6aee677002248d047941",
"assets/assets/logo/Merchandise%2520Shopping.jpg": "0339cfecd63f57545b9703b75acbe60d",
"assets/assets/logo/Netflix.png": "a55cce2353545f8b630eb9e6c3d3f89f",
"assets/assets/logo/PrimeVideo.png": "508a158f07af594686590d0dfbf33f0e",
"assets/assets/logo/Restaurant%2520Shopping.jpg": "f5e8620183c0d4c88c36a09ecbdc6f80",
"assets/assets/logo/RightHome.jpg": "f67dcee142d4582cf9de0810fe81c004",
"assets/assets/logo/Services%2520Shopping.jpg": "d04a9e46ee7383f0b24b1616b3f329f3",
"assets/assets/logo/Vidio.png": "bda74a4d65b79e5f5c1611174e041f9c",
"assets/assets/logo/WelcomeHotel.jpg": "8f113b79cf27b65d496ea6696cbdbf6f",
"assets/assets/logo/WeTV.png": "778066b1cde18f7f0728998e14ac2e14",
"assets/assets/logo/Youtube.png": "11912f1574d05f6050d71662bc260779",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6dfdc8a357405ac8fa605b3690d963bb",
"assets/NOTICES": "8017b0ab2fdb3ba5eafa3d857a9e367e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0eba97bb519d39f8d1d73f71f3d4cc66",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/experimental_webparagraph/canvaskit.js": "230c0e2b182dcd1061c06c2fe7b64b5f",
"canvaskit/experimental_webparagraph/canvaskit.js.symbols": "0c6d97b036dffdc0f4bc4552ae7b5c9d",
"canvaskit/experimental_webparagraph/canvaskit.wasm": "e008e87c245b0718932b34e9a15be803",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_heavy.js": "19b2126c270db6dde2255bec30c3e4f9",
"canvaskit/skwasm_heavy.js.symbols": "455930e12e6ef2d961627fe6f0c0cd0c",
"canvaskit/skwasm_heavy.wasm": "f22698a773ef756eff818039e37be5c3",
"canvaskit/wimp.js": "40195751139ab9e4b7c62b19c420f63b",
"canvaskit/wimp.js.symbols": "e9ac11318ebff9b7ad24ca7841f69b3f",
"canvaskit/wimp.wasm": "9242e201530449825b5645ed3d5af22c",
"favicon.png": "3df829b55f13c1c5ad4bd88307a35377",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a5e260d3ff5a73cb652bc8c8f8ed93bb",
"hotel_tv.wgt": "bfe5e68c75a881cb5880299e1d4b7a7d",
"icons/Icon-192.png": "1140480927cb86ad2fd9231105f00133",
"icons/Icon-512.png": "d1798d71973650694400814e059ade68",
"icons/Icon-maskable-192.png": "1140480927cb86ad2fd9231105f00133",
"icons/Icon-maskable-512.png": "d1798d71973650694400814e059ade68",
"index.html": "7fec2be469c8a64decc3ab8efea2a186",
"/": "7fec2be469c8a64decc3ab8efea2a186",
"main.dart.js": "e7e69a2fea8791aee351b02586758f64",
"manifest.json": "cea911ca16839e4dfe816d44b66a0a1a",
"sssp_config.xml": "943556ff5d7af77e4700759a3afe8b40",
"version.json": "cd25f3a17881324d16307b655e8b533b"};
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
