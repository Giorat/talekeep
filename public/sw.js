if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,t,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CXBRhjBYBJWfwwm0vm38I/_buildManifest.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/CXBRhjBYBJWfwwm0vm38I/_ssgManifest.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/288-eed456ba1781955d83a5.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/675-86972d6484d518054f06.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/837-4a2c8c1953ff3f8c26c7.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/framework-79a2b562b8bd4b39345c.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/main-3d7a897f2db6f4dbd6ac.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/3d_scans-966bc639d0bde354ff02.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/404-6c44648959f21654a7c7.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/_app-b074ad7bcec438eff336.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/_error-fca8070fec15cacd9afb.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/index-81f926a0fb7289aad989.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/pages/newsletter-aa72f847eb9b25172f21.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/_next/static/chunks/webpack-363ecd9dfaf4a2c53f17.js",revision:"CXBRhjBYBJWfwwm0vm38I"},{url:"/assets/Logo_T.png",revision:"2458091f24dc21c295e68b32d690d158"},{url:"/assets/frame_end_video.png",revision:"2e972e0b0af9dffaa4cc7eed9196ee4a"},{url:"/assets/logo_r.png",revision:"567fbb1035ba2cb310976f682dd30862"},{url:"/assets/siteSocialPic.jpg",revision:"feda5819a8fc867a3ff5495d561dbf6b"},{url:"/assets/socialPic/newsletter.jpg",revision:"90202de66da8923029ff6a3471b53cc8"},{url:"/assets/talekeep.png",revision:"dbaa78fab493e680e4c6f32e23cd0635"},{url:"/manifest.json",revision:"137d7df344212a3664c9b97bc179d356"},{url:"/robots.txt",revision:"e806d11ee85a7fa4a7a5e482698d4e16"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));