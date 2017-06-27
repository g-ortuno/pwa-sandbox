self.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil((async () => {
        let cache = await caches.open('sandbox-v1');
        await cache.addAll([
            'index.html',
            'in-scope.html',
        ]);
        console.log('cached everything');
        let keys = await cache.keys();
        for(let key in keys) {
            console.log(key);
        }
    })());
});

self.addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith((async () => {
        try {
            return await fetch(event.request);
        } catch (error) {
            console.log(error);
            return await caches.match(event.request);
        }
    })());
});
