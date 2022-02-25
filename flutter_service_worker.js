'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8f234506a6425ea7efd3fadcbc013b29",
"assets/assets/assets/click.gif": "1d4c487765a3594b2b7b3b915ea353d0",
"assets/assets/assets/creepy_room1.jpg": "cd2cfa83238ab85cb4af29e7783e2e45",
"assets/assets/assets/creepy_room2.jpg": "d0d65af1e44fca353ae6295b249ff31a",
"assets/assets/assets/creepy_room3.jpg": "4fcaa7248bc8068a530035222e65c54a",
"assets/assets/assets/creepy_room4.jpg": "9baf359b14288b1ae4a859360cbf819c",
"assets/assets/assets/creepy_room5.jpg": "e1d2b7361bdb91460479fcdc23f4be00",
"assets/assets/assets/flute.png": "3276ae0d2a86eb1bb43be70482044302",
"assets/assets/assets/guitar.png": "074f451068e398739bd34fde2ae43745",
"assets/assets/assets/happy_ghost.jpg": "9d0671b2705b2f1830c1cdc486f0d60f",
"assets/assets/assets/harp.png": "af9e32e2008d6f3b6b6e49221a421158",
"assets/assets/assets/mansion.jpg": "2f3aff37edd2008e3d6551e7ea96e46e",
"assets/assets/assets/ocarina.png": "eb6216e378b80b8a3805193a63cd4cf3",
"assets/assets/assets/pattern1.png": "36e179308f25f6dd4a5dd4a86de6fd72",
"assets/assets/assets/pattern2.png": "ac74cfccce05b1360bc848c80307a7e1",
"assets/assets/assets/pattern3.png": "935dc8ca17e8fc4d254624271a132101",
"assets/assets/assets/pattern4.png": "bb10e235bd5a104ea796ef9861ac238d",
"assets/assets/assets/piano.png": "29dd9c601c45a064b269631888392997",
"assets/assets/assets/puzzle_sound.png": "dc03a289c1ab16525408fba0c7b5d68c",
"assets/assets/assets/puzzle_spatial.png": "0df8e120d6ad025729e7a87a4f5102c8",
"assets/assets/assets/sculpture2.png": "82ceb604b5fbf8194b9cc461d3ee9cf0",
"assets/assets/assets/statue.png": "3ebaa59784c36d68e509c6193837f8ee",
"assets/assets/assets/violonchelo.png": "1ab4e21fd82f3cfa486b052191cd8284",
"assets/assets/assets/wood_texture.png": "8d28506a146afd4fba1a1cc7e9222e8e",
"assets/assets/icons/add.png": "388feb2c8605072fa832867f79e51a8b",
"assets/assets/icons/dot.png": "d4088dc08c4e5d193d80abaa6a27034c",
"assets/assets/icons/down_arrow.png": "5e0c07f50b6c5930d865e8e711c8cc46",
"assets/assets/icons/free.png": "37a2e4731d3c60fcfb376d30e4655bf4",
"assets/assets/icons/L-down.png": "95e954cb1b9ce0d746a454c4d75b8007",
"assets/assets/icons/L-left.png": "734d36e5cc15a6a9e6ff48f2de26c5d1",
"assets/assets/icons/L-right.png": "271383f399ea96d12926b937606964e8",
"assets/assets/icons/L-up.png": "93a3c615a7ed6a6ef0b75d8fbd9b7d3c",
"assets/assets/icons/left_arrow.png": "1ffc3d399877dc0909ebf3466217d3b2",
"assets/assets/icons/line-H.png": "efdb0b60997e072a079bb9cff44c2cb9",
"assets/assets/icons/line-V.png": "c0011d917eea9e3a73d072baebc32cf4",
"assets/assets/icons/remove.png": "a04954834bf84fb5667fa0e103e74cd7",
"assets/assets/icons/remove_all.png": "df244c3f8f9fe20ea387ad16c8b59e4a",
"assets/assets/icons/right_arrow.png": "5aff328175a2876266c50ba3867b91cf",
"assets/assets/icons/rotate_left.png": "b721ccd442c3977c2ecf292702b2bda6",
"assets/assets/icons/rotate_right.png": "61e250b2f8db12a6406801e1e2272f19",
"assets/assets/icons/shift.png": "d557b035943e90f04bf1f1e6bd445732",
"assets/assets/icons/sound.png": "95cadf025d71f93405a158e8ff768c5a",
"assets/assets/icons/square.png": "4b57403d517f5e3493405d287ba58b49",
"assets/assets/icons/up_arrow.png": "30d175181b40de2d68a513561c52f660",
"assets/assets/sounds/do.wav": "1d4da33d128f35c621524f575434e666",
"assets/assets/sounds/do8.wav": "0dee8ec33e44beeb0a3e30ed52b1866b",
"assets/assets/sounds/fa.wav": "606e8a63b20762eda256612e061158c5",
"assets/assets/sounds/la.wav": "dc15c2552aecd2423235f07080a2c94d",
"assets/assets/sounds/mi.wav": "bbd0338e4a63bcc045b98dd9b5e5c909",
"assets/assets/sounds/re.wav": "419e240d5f88e77117b45d547c435193",
"assets/assets/sounds/si.wav": "cbedeaf1800495a9a75c6d5661f1a5d8",
"assets/assets/sounds/sol.wav": "d8a457ec37dac60da3fa3226544003ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "54e67553efb1b25f45e44e4cbae4eec0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f4592444687e08e9ebec7773d3e04f25",
"/": "f4592444687e08e9ebec7773d3e04f25",
"main.dart.js": "06860b4f66bda2c5793a373499f6204d",
"manifest.json": "a7c51a6f46b6e4793d9d0ec006a8a653",
"version.json": "7fb12ca4df0669549c7c9b2e968236b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
