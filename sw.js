// Keeps the web app working offline once it has been opened: the app's own files are cached when it is
// installed, the libraries from the CDNs (Tone.js, three.js, the 3D models) the first time they load.
// web/build.sh stamps the version, so a new build replaces the old cache.
const CACHE = "mp-20261030112655";
const APP = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png",
  ...["Bb3", "Bb4", "C4", "C6", "Db4", "Eb3", "Eb4", "F4", "G4"].map(n => `sounds/samples/${n}.m4a`)];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url), cdn = /(^|\.)(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)$/.test(url.hostname);
  if (url.origin !== location.origin && !cdn) return;
  if (req.mode === "navigate") {  // the page: fresh when online, the cached copy offline
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
