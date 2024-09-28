const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching');

// Precache the assets only once
precacheAndRoute(self.__WB_MANIFEST);

// Cache for HTML pages
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
    }),
  ],
});

// Warm the cache for page requests
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// Cache HTML pages
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement asset caching (for JS, CSS, and images)
registerRoute(
  ({ request }) => {
    return (
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'image'
    );
  },
  new CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50, // Max cache entries
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
      }),
    ],
  })
);
