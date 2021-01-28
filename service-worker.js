/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ed6cf6e4ecb82de0de17ccf9a83a48e"
  },
  {
    "url": "assets/css/0.styles.d634755b.css",
    "revision": "51d735bdee4241f3fc972953c51cc07a"
  },
  {
    "url": "assets/img/date_21.6bf2eda8.png",
    "revision": "6bf2eda8f4e44ad367a6bbde36c90201"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.634fc3cc.js",
    "revision": "d8b26ef2d8e7fa158aa2b6539f391434"
  },
  {
    "url": "assets/js/11.58eeb38a.js",
    "revision": "042fbe6904d0fa8520b510fc73e66047"
  },
  {
    "url": "assets/js/2.5de7d26b.js",
    "revision": "4d951e021848f11ce2744a8af93a67e2"
  },
  {
    "url": "assets/js/3.301fbbca.js",
    "revision": "fea59ccf82e2a0b26086922b4dce28a3"
  },
  {
    "url": "assets/js/4.a47989f1.js",
    "revision": "6694d426bd2319cd7199b81da24b5066"
  },
  {
    "url": "assets/js/5.e60e8e0a.js",
    "revision": "e121214090ceb024f888153ca858f229"
  },
  {
    "url": "assets/js/6.a6979166.js",
    "revision": "0551de29c409d9a61ea5d5165399f2c3"
  },
  {
    "url": "assets/js/7.29275507.js",
    "revision": "ed6955f0b146ad05a32d0cd71f709ce1"
  },
  {
    "url": "assets/js/8.d0266942.js",
    "revision": "24c0acedf9c85e35e28ec32970536168"
  },
  {
    "url": "assets/js/9.365814da.js",
    "revision": "633cab519f94dce6d891f2be9630e52f"
  },
  {
    "url": "assets/js/app.5b3735e0.js",
    "revision": "bc1e5e50c17934d06d81beff5506a7a4"
  },
  {
    "url": "config.html",
    "revision": "aabbccffb7a27b08c80a0177de98df80"
  },
  {
    "url": "guide/index.html",
    "revision": "b2ac2d078f66276b92c76e12e72e7f89"
  },
  {
    "url": "img/date_22.png",
    "revision": "5c9bf4058ad9930c7a0e0135a2e4ed56"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "9e6ef6997a3fe4d4f183e4514c57c7c8"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "3c81a72c2854718abeee468af000377c"
  },
  {
    "url": "img/icons/android-chrome-maskable-192x192.png",
    "revision": "c45d450aa72849c7fd4c3d142ab2f034"
  },
  {
    "url": "img/icons/android-chrome-maskable-512x512.png",
    "revision": "aee33baf7208b7bcc573804d844ae73a"
  },
  {
    "url": "img/icons/apple-touch-icon-114x114.png",
    "revision": "b995553c10687e3cac4e8633bf41cb80"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "5e055714d2c647827907bbf144cf409f"
  },
  {
    "url": "img/icons/apple-touch-icon-144x144.png",
    "revision": "d196b21311c7afa3e50e02cde6da26ce"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "07a57e58675dd0a90ea64ce06ccce203"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "399f33a48650472be8b927b06ebdb620"
  },
  {
    "url": "img/icons/apple-touch-icon-57x57.png",
    "revision": "03aac452898e1326e4bdc0360a08aa66"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "cc459fb0dddc8e6ab8218f6daadb97e3"
  },
  {
    "url": "img/icons/apple-touch-icon-72x72.png",
    "revision": "2fc868da97ad47ec1cdced60aa9d9633"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "6750379e1669dacf022f94179c572541"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "399f33a48650472be8b927b06ebdb620"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "3ea886c962ac8f0eb22def263aa71a1d"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "37518e401620e1c3288156e0ae282f50"
  },
  {
    "url": "img/icons/mstile-144x144.png",
    "revision": "376a31cdfe0dd01c0283b1e9576dfe48"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "2b9421606637c4d540eda9177847af07"
  },
  {
    "url": "img/icons/mstile-310x150.png",
    "revision": "84f811c096da5f45380aa84a3577cde4"
  },
  {
    "url": "img/icons/mstile-310x310.png",
    "revision": "e76d4f16ce053eae5fd7884d1886e56b"
  },
  {
    "url": "img/icons/mstile-70x70.png",
    "revision": "d1000825f4b9e3d3ee6b41b9e2e5cd50"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "2eec000bf8f9c654594ecc7b79abb155"
  },
  {
    "url": "index.html",
    "revision": "03d5be1d0714fdd5978bc841ad1da568"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
