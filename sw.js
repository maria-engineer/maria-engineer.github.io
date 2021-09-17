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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b54a953e955b1ef6c0c0.js"
  },
  {
    "url": "framework-6e0ac133a68a0fe121a6.js"
  },
  {
    "url": "styles.cb60053c386e3f8cd267.css"
  },
  {
    "url": "app-f97ba0cd63cf212183d9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "42143ff635da4eb091bd70f0fdf60c0e"
  },
  {
    "url": "lcars.css"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8ef833ca28716ceeb654.js"
  },
  {
    "url": "polyfill-bf4c06d136d639c7200a.js"
  },
  {
    "url": "component---src-pages-blog-js-ad05e72f6ac14fc4660c.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "a05fd402b206e02a4a20e5bc3533a0f7"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "687cf50a47c98697413f87ccc865797d"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "4fddb22c854e95e6533cdb8c1052fc62"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "11f58ec55ff80b4ddb36fb7992649212"
  },
  {
    "url": "component---src-templates-blog-post-template-js-3a33955a46d62c5df0ad.js"
  },
  {
    "url": "page-data/blog/finding_a_house/page-data.json",
    "revision": "9832646724f9eed8bdc232f93aa82895"
  },
  {
    "url": "page-data/blog/house_purchase/page-data.json",
    "revision": "a9c8a5458f9fc6e8ee78ed023687ca66"
  },
  {
    "url": "page-data/blog/survey-house-purchase/page-data.json",
    "revision": "db50ea98069d58e3a1c99ed12c4f5af0"
  },
  {
    "url": "page-data/blog/uis_over_clis/page-data.json",
    "revision": "d753e8cbd0817f5293df9f16d08340c7"
  },
  {
    "url": "page-data/blog/work_life_balance_tips/page-data.json",
    "revision": "ead7ccf4f7d62a7857897267e1e2cacd"
  },
  {
    "url": "component---src-pages-chords-tsx-a324abe876ec7892a5ce.js"
  },
  {
    "url": "page-data/chords/page-data.json",
    "revision": "2b9c06ac47e6a644cc6b4bc928d1a6e2"
  },
  {
    "url": "component---src-pages-scales-tsx-2f1860a231842cdc1025.js"
  },
  {
    "url": "page-data/scales/page-data.json",
    "revision": "18e899e52ee1ebdd4fb3b2f7ac937288"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "aa7dd73039ca774207611f763640855d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-f97ba0cd63cf212183d9.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
