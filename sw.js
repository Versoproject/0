

const VERSO_SW_CACHE = 'verso-shell-v3';
const VERSO_SW_STATIC = /\.(png|jpe?g|webmanifest)$/i;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSO_SW_CACHE).then((c) => c.addAll(['./'])).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('verso-shell-') && k !== VERSO_SW_CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith('/.well-known/') || /\.apk$/i.test(url.pathname)) return;
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await fetch(req, { cache: 'no-store' });

        if (res && res.ok && (res.headers.get('content-type') || '').includes('text/html')) {
          const copy = res.clone();
          caches.open(VERSO_SW_CACHE).then((c) => c.put('./', copy)).catch(() => {});
        }
        return res;
      } catch (err) {
        const cached = await caches.match('./');
        if (cached) return cached;
        throw err;
      }
    })());
    return;
  }
  if (VERSO_SW_STATIC.test(url.pathname)) {
    e.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      const res = await fetch(req);
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSO_SW_CACHE).then((c) => c.put(req, copy)).catch(() => {}); }
      return res;
    })());
  }
});

async function versoSwPersonal() {
  try { const r = await (await caches.open('verso-prefs')).match('personal'); return r ? (await r.text()) !== '0' : true; } catch (e) { return true; }
}

const VERSO_SUMMARY_TAG = 'verso-summary';
async function versoSwShow(d) {
  d = d || {};
  const tier = d.prio === 'urgent' ? 'u' : (d.prio === 'attention' ? 'a' : 'o');
  let prev = null;
  try { const ns = await self.registration.getNotifications({ tag: VERSO_SUMMARY_TAG }); prev = ns.length ? ns[ns.length - 1].data : null; } catch (e) {}
  const c = { u: 0, a: 0, o: 0, last: {} };
  if (prev && prev.c) { c.u = prev.c.u || 0; c.a = prev.c.a || 0; c.o = prev.c.o || 0; c.last = prev.c.last || {}; }
  c[tier] += 1;
  c.last[tier] = { body: d.body || '', entry: d.entry || '', title: d.title || '' };
  const top = c.u ? 'u' : (c.a ? 'a' : 'o');
  const head = top === 'u' ? `⚠ URGENT ${c.u}` : (top === 'a' ? `ATTENTION ${c.a}` : `${c.o} new`);
  const rest = [top !== 'u' && c.u ? `${c.u} urgent` : '', top !== 'a' && c.a ? `${c.a} attention` : '', top !== 'o' && c.o ? `${c.o} new` : ''].filter(Boolean).join(' · ');
  const lastTop = c.last[top] || {};
  const loud = tier === 'u' || tier === 'a';
  const urgent = tier === 'u';
  const opts = {
    body: (lastTop.body || '') + (rest ? `\n+ ${rest}` : ''),
    tag: VERSO_SUMMARY_TAG,
    renotify: loud,
    requireInteraction: top === 'u',
    icon: 'icons/verso-192.png',
    badge: 'icons/verso-badge-96.png',

    vibrate: urgent ? [400, 150, 400, 150, 400] : undefined,
    silent: d.silent === true || !loud,

    actions: lastTop.entry ? [{ action: 'read', title: 'Prečítaj text' }] : [],
    data: { entry: lastTop.entry || '', url: './', c }
  };
  return self.registration.showNotification(`Verso · ${head}`, opts);
}

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const visible = wins.some((w) => w.visibilityState === 'visible');
    wins.forEach((w) => w.postMessage({ type: 'verso-push', data: d }));

    if (visible) return;
    await versoSwShow(d);
  })());
});

self.addEventListener('message', (e) => {
  const m = e.data || {};
  if (m.type === 'verso-show') e.waitUntil(versoSwShow(m.data));
  if (m.type === 'verso-clear') e.waitUntil(self.registration.getNotifications().then(ns => ns.forEach(n => n.close())).catch(() => {}));
  if (m.type === 'verso-regime') e.waitUntil(caches.open('verso-prefs').then(c => c.put('personal', new Response(m.personal ? '1' : '0'))).catch(() => {}));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const entry = (e.notification.data && e.notification.data.entry) || '';
  const read = e.action === 'read';
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if ('focus' in w) {
        await w.focus();
        w.postMessage({ type: 'verso-open', entry, read });
        return;
      }
    }
    await self.clients.openWindow('./' + (entry ? ('?open=' + encodeURIComponent(entry) + (read ? '&read=1' : '')) : ''));
  })());
});
