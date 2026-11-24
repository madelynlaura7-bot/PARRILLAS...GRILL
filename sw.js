const CACHE='grill-house-v1';
const CORE=['./','./index.html','./css/styles.css','./js/app.js','./manifest.json','./assets/icon.svg','./data/catalog.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(cache=>cache.put(r,copy));}return res;}).catch(()=>caches.match('./index.html'))));});
