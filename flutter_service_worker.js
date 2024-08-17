'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "242795a734fe9695194aec807ba93590",
"assets/AssetManifest.bin.json": "1f5bf0f705ca6d4f900d6250547d92db",
"assets/AssetManifest.json": "e19c68f282991afe716d8a71edb9b783",
"assets/assets/icons/box.svg": "303f433f7d0dfdb1760cd2f59d4b445e",
"assets/assets/icons/education.svg": "7d0f2843015074798e26fa66cf022c1a",
"assets/assets/icons/finance.svg": "0f87e52a07160dde35c6c19b72de50f2",
"assets/assets/icons/health.svg": "f0d541ee261f6d418ad062971a305bf6",
"assets/assets/icons/left_arrow.svg": "df38cfb6f9ac5bed504a86da618e984d",
"assets/assets/icons/right_arrow.svg": "8dabdf9f0ea66a75d7c9305db9ec7ed3",
"assets/assets/icons53c3031f": "df38cfb6f9ac5bed504a86da618e984d",
"assets/assets/icons9092ba5f": "0f87e52a07160dde35c6c19b72de50f2",
"assets/assets/iconsed39d351": "f0d541ee261f6d418ad062971a305bf6",
"assets/assets/images/eye.png": "d262938b81a5ea93030ba24c1bec5d1e",
"assets/assets/images/facebook.png": "21ee23e4acb42aa4fcb8b7794419d8d4",
"assets/assets/images/finance.png": "c389bd7317f6c90ead9727d23e66d440",
"assets/assets/images/FivR.png": "ffa1a9e372d801ea1e513bff2d8d974a",
"assets/assets/images/ham%2520burger.png": "0db499b08b9c401510e45ecc5258dbd3",
"assets/assets/images/img1.png": "b44376685886edaeb58ae8b9a8733366",
"assets/assets/images/img2.png": "da2e9a909d422c0850ab500873f7908f",
"assets/assets/images/img3.png": "6d61837cf19459568eb0c01c0b8aa978",
"assets/assets/images/instagram.png": "f000a286e735e0ee664fca5accfd4bd6",
"assets/assets/images/linkedin.png": "2c3a03e1691ccdeae48d6619941158ff",
"assets/assets/images/mosque.png": "47d9b1369db3462ec18d58ba94a5212a",
"assets/assets/images/netflix.png": "8d4207477f566c39180c85e64c8e7870",
"assets/assets/images/pixiJS-BG.png": "f00211e8ab0b30dc0035f18914658b45",
"assets/assets/images/pixijs.png": "1d8d8c07c42133e6b344da6876483b5d",
"assets/assets/images/road.png": "837935476f164d1ad57e23382bb7d38f",
"assets/assets/images/segment%2520logo%2520small.png": "599163cc9ea430b7711c350e74328ea6",
"assets/assets/images/telegram.png": "c90624f5b1e8b86cbad44b45c6dc6d03",
"assets/assets/images/user1.png": "35593dcd3781754914e3d0b6ab8665c9",
"assets/assets/images/user2.png": "d27b3b18eb62988902ded3909ca91e11",
"assets/assets/images/user3.png": "2cb5d08d9b72bb8cc3382c89ed86e2ec",
"assets/assets/images/user4.png": "7fc9b43a7c1513487d07b4d04667da81",
"assets/assets/images/youtube.png": "78bbc27d98e92a76507f1ba4dd9f3ae2",
"assets/assets/images1214cce9": "f000a286e735e0ee664fca5accfd4bd6",
"assets/assets/images2a449819": "8d4207477f566c39180c85e64c8e7870",
"assets/assets/images2f9c25ed": "7fc9b43a7c1513487d07b4d04667da81",
"assets/assets/images434a4533": "837935476f164d1ad57e23382bb7d38f",
"assets/assets/images5c8568a1": "c90624f5b1e8b86cbad44b45c6dc6d03",
"assets/assets/images60b4292d": "47d9b1369db3462ec18d58ba94a5212a",
"assets/assets/images9d5a83c2": "d27b3b18eb62988902ded3909ca91e11",
"assets/assets/imagesa136c5ec": "78bbc27d98e92a76507f1ba4dd9f3ae2",
"assets/assets/imagesb057c7fd": "1d8d8c07c42133e6b344da6876483b5d",
"assets/assets/imagesb1894974": "f00211e8ab0b30dc0035f18914658b45",
"assets/assets/vectors/fackbook.svg": "6b87388f12e1ea17e1672e0859d126e6",
"assets/assets/vectors/FivR.svg": "5e52178d7780ee26e4ef8d7791d06660",
"assets/assets/vectors/instagram.svg": "89459860d91476004dc54d6d3dc63622",
"assets/assets/vectors/linkedin.svg": "6f80518616005d79eaa4c3a1d9f70c82",
"assets/assets/vectors/netflix.svg": "ff547625006275d11f0eceaf07015ab1",
"assets/assets/vectors/pixijs.svg": "6f08331903c5a4fc9797b041f2d0f433",
"assets/assets/vectors/segment%2520logo%2520small.svg": "41dba953ffa43e14a998fe48c171e635",
"assets/assets/vectors/telegram.svg": "bb92f7f174967d8daf19baf781193539",
"assets/assets/vectors/youtube.svg": "660462ac933edcbf5d702a48c5adc110",
"assets/assets/vectors29b48984": "6f80518616005d79eaa4c3a1d9f70c82",
"assets/assets/vectors46249c31": "bb92f7f174967d8daf19baf781193539",
"assets/assets/vectors8e7e3ffb": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/vectors90249a7a": "5e52178d7780ee26e4ef8d7791d06660",
"assets/assets/vectors981892f1": "6b87388f12e1ea17e1672e0859d126e6",
"assets/assets/vectorsd0cf035a": "660462ac933edcbf5d702a48c5adc110",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67834fe70ffc9d941c2df0a13425cac7",
"assets/NOTICES": "9c019985d746293023b79ff269eeb46a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "32eb9b9da14bbfba79fcee1ba43810e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3e875b98b4dbc23585d720968e1164b",
"/": "b3e875b98b4dbc23585d720968e1164b",
"main.dart.js": "dd540f4b5b19013bca9b8f823645d79a",
"manifest.json": "09fc07cffa520cd0fe17888a37dcc79a",
"version.json": "22248edf1c6ef20ed9ae19bb4d8359c8"};
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
