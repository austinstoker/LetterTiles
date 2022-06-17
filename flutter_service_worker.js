'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "038efcc4ea82c7b8bfbb760d24d7312f",
"assets/assets/audio/afraid_v1.mp3": "c909de309b14326bc834fae97182e2aa",
"assets/assets/audio/afraid_v2.mp3": "2d0ae55ea269bcfe431c63e3748c634f",
"assets/assets/audio/afraid_v3.mp3": "d9740b663b21545cc10d7c674627f93a",
"assets/assets/audio/again_v1.mp3": "4f125670bd11f0c4e3d06f75c3a6c402",
"assets/assets/audio/again_v2.mp3": "0d6393d7062004b904818cb38a56e075",
"assets/assets/audio/again_v3.mp3": "2a91821fadd63664617119fe6fc5d913",
"assets/assets/audio/beautiful_v1.mp3": "8160720befe7133883d07e571818d848",
"assets/assets/audio/beautiful_v2.mp3": "ca7527a935cb8e5a289867056f2e9d10",
"assets/assets/audio/beautiful_v3.mp3": "69426e314922c73744719c03e7b6d4ff",
"assets/assets/audio/because_v1.mp3": "4fdc90c8a67c45992e662946409596d3",
"assets/assets/audio/because_v2.mp3": "f92c4d5e98001f87625c73563c289d0a",
"assets/assets/audio/because_v3.mp3": "6745d7c30cbdefa9a2a3d30cd130f0e0",
"assets/assets/audio/built_v1.mp3": "6ae971c0aafea99c3494d338e5e1126c",
"assets/assets/audio/built_v2.mp3": "f32c35387c911a18b4b7949ea5346381",
"assets/assets/audio/built_v3.mp3": "09da16eeba7c35215b2df499bb9b0f06",
"assets/assets/audio/dollar_v1.mp3": "be58263058a1d3fec99755bd0ca83a51",
"assets/assets/audio/dollar_v2.mp3": "0a0d1e241fe92d05887d1b890ce64705",
"assets/assets/audio/dollar_v3.mp3": "d775828c3046fd97a23459cc0110bff2",
"assets/assets/audio/guess_v1.mp3": "1b55723e14c90f44cbc75abd9cec2bba",
"assets/assets/audio/guess_v2.mp3": "a5463b3f93aa14c922f199d61bd68564",
"assets/assets/audio/guess_v3.mp3": "ed0b018313e592341ebd46d735da83b1",
"assets/assets/audio/laugh_v1.mp3": "3a091ee1108886b47d868e6224b46b99",
"assets/assets/audio/laugh_v2.mp3": "9682d38dd842a482385f81a8507d24a7",
"assets/assets/audio/laugh_v3.mp3": "92f074d7cb5e42f46a3f47ccb66d274e",
"assets/assets/audio/nothing_v1.mp3": "0e23a54240612eb7c677009e7ab733b2",
"assets/assets/audio/nothing_v2.mp3": "157c01cdc161bc097d77a17528deaf12",
"assets/assets/audio/nothing_v3.mp3": "f203b45d34410e77ebb1f327ce80fe74",
"assets/assets/audio/once_v1.mp3": "42cbc60c1b9ec9584234c54760bcb65f",
"assets/assets/audio/once_v2.mp3": "c3581a3c141f974df6f6c01001c292f7",
"assets/assets/audio/once_v3.mp3": "2406b1b9d6e078096ca1f8c058297291",
"assets/assets/audio/square_v1.mp3": "8c466af1f6407dba4dffdd017d738a90",
"assets/assets/audio/square_v2.mp3": "664237efeee3a1836205993bd57476d5",
"assets/assets/audio/square_v3.mp3": "7de9017aedbeb554a4d9c9842e7cf2c6",
"assets/assets/audio/water_v1.mp3": "1aa156d1ef0b738718e8abeb9772a3f9",
"assets/assets/audio/water_v2.mp3": "cd25924aa6b304807c2fa4ec20980d17",
"assets/assets/audio/water_v3.mp3": "309dd399b76238d245bd06e5aedfee3d",
"assets/assets/Branding/AndroidBG.png": "198acb353c7dcca81d3f062355933924",
"assets/assets/Branding/AndroidFG.png": "0ff2eb2c51dee14a5a0993a73beac3eb",
"assets/assets/Branding/app-store-badge.png": "823cdcbd9883f36c180528ad03f18d28",
"assets/assets/Branding/Foreground.png": "47ed6d44164dfc9cdb49d413de1b18a0",
"assets/assets/Branding/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/Branding/Icon.png": "d9e398a029430f443c0481b0a03cba05",
"assets/assets/Branding/Icon512.png": "cdc05a97a9ceafcf67728b3d3e9d5926",
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/fonts/primer_print_bold.ttf": "a8dea059612584f3ac06cef8521f2b8d",
"assets/assets/images/grass.png": "942fd612ff3bc6907ce0167ea5a992ed",
"assets/assets/images/HowToUseThumbnail.jpg": "0b771115553037e4387be50513fd8ec9",
"assets/assets/images/parchment_texture.jpg": "19af62ef66085514371c7b433398ba9c",
"assets/assets/images/sky_with_sun.png": "0b66ecca02e1745e9cf9d1875ab6e158",
"assets/assets/Info/Flyout-About.png": "f3d74ea42c820d283f8001dab6f549f5",
"assets/assets/Landscape_4-3/grass.png": "942fd612ff3bc6907ce0167ea5a992ed",
"assets/assets/Landscape_4-3/MenuForeground.png": "f521b7ac365b45a5f98ccf01f7e1b8b6",
"assets/assets/Landscape_4-3/Sky.png": "34d38d5972b965af09954257d9d4eae6",
"assets/assets/Landscape_4-3/SkyWithLetters.png": "768e3d8ebaa88e588006fdfbd0ab61eb",
"assets/assets/Landscape_4-3/sky_with_sun.png": "0b66ecca02e1745e9cf9d1875ab6e158",
"assets/assets/Lesson_Icons/Back-icon-no-circle.png": "0fc659545577e8c71490a86e2791c0a4",
"assets/assets/Lesson_Icons/Go_Back_One.png": "147a9d34289f0e6df39ebed3c6b9433c",
"assets/assets/Lesson_Icons/Trash-icon-no-circle.png": "d37702223520e57d6c6d9052b8a6ea0f",
"assets/assets/Level_Buttons/BlankCloud.png": "8e6bd3c7ab29877c4f2a9636f5f880a3",
"assets/assets/Level_Buttons/GettingStarted.png": "a0074aa94cd3858f9db80da7c8b3bfdf",
"assets/assets/Level_Buttons/level_1_btn.png": "5ffa05eec2f0dd4b98d58dc603eed362",
"assets/assets/Level_Buttons/level_2_btn.png": "d30d8c8e6b59d9a40d846e6b3f59534b",
"assets/assets/Level_Buttons/level_k_btn.png": "932bd357b3bda60dc672b42644e505a6",
"assets/assets/Level_Buttons/PracticeA-Z.png": "2fa24552eff328312f227b1decbce95d",
"assets/FontManifest.json": "4b83ac5a2f10f6efd83eaab2265025a9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d10ebbe0cd776fbf2a4c60cc13fdfacc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-144.png": "479109ecd12af9321ba08bacba3a713e",
"icons/Icon-192.png": "8e12bc0337942af46eed69e8985bc329",
"index.html": "234b3f2f33a6713eac6469e3b72789a6",
 
"main.dart.js": "9edfe96062b40397ee018479b0105cee",
"manifest.json": "593e64c30077ccb784f1b24217cefa63",
"node_modules/.cache/wrangler/pages.json": "ea987e8acc3d2534e2e32f24384c0cf0",
"script.js": "b3d0451bfae78701a6a77ea4b04be407",
"version.json": "57bc33a2d2456a8a28829074021619b9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
