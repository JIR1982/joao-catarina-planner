const CACHE = "planner-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        "/joao-catarina-planner/",
        "/joao-catarina-planner/index.html",
        "/joao-catarina-planner/calendar.html",
        "/joao-catarina-planner/shopping-list.html",
        "/joao-catarina-planner/manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
