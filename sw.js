const CACHE_NAME = 'alo-tecnico-v1';
const assets = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Instala o Service Worker e guarda os arquivos essenciais no cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Ativa o Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker ativado!');
});

// Responde às requisições (permite que o app abra mais rápido)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});