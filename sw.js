if(!self.define){let i,n={};const e=(e,c)=>(e=new URL(e+".js",c).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(c,s)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const a=i=>e(i,o),l={module:{uri:o},exports:r,require:a};n[o]=Promise.all(c.map((i=>l[i]||a(i)))).then((i=>(s(...i),r)))}}define(["./workbox-c1760cce"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.5ed1b315.js",revision:null},{url:"assets/index.d16a94b9.css",revision:null},{url:"assets/ListView.5a331abf.css",revision:null},{url:"assets/ListView.69d0e000.js",revision:null},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:null},{url:"assets/materialdesignicons-webfont.9bdfaf27.eot",revision:null},{url:"assets/materialdesignicons-webfont.c14484cf.ttf",revision:null},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:null},{url:"assets/SettingsView.3bc81233.css",revision:null},{url:"assets/SettingsView.42dc9a78.js",revision:null},{url:"assets/VTable.6b4ec5b9.js",revision:null},{url:"assets/VTable.9e76ea37.css",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"128ff56279b05d868729d1292f6cc486"},{url:"favicon-32x32.png",revision:"8f62325f6b19b11adc55abe9280c0821"},{url:"favicon.ico",revision:"01593c5544467b7cf0fecf31487b95c4"},{url:"img/icons/android-chrome-192x192.png",revision:"b75f4efb583a99e305285c70854c90f6"},{url:"img/icons/android-chrome-512x512.png",revision:"392dc001a561b697747ddddf7565a508"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"b75f4efb583a99e305285c70854c90f6"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"392dc001a561b697747ddddf7565a508"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"11c25c563981629cb251b8715d4790d6"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"d957b85706202d68cd14cfa31a1bb6ae"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"722d6060b83c274b333c072345bcd4cd"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"d8c601181019ca96c55084f8d47425e1"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"931a6631849de01890f375c434cdd409"},{url:"img/icons/apple-touch-icon.png",revision:"722d6060b83c274b333c072345bcd4cd"},{url:"img/icons/favicon-16x16.png",revision:"128ff56279b05d868729d1292f6cc486"},{url:"img/icons/favicon-32x32.png",revision:"8f62325f6b19b11adc55abe9280c0821"},{url:"img/icons/favicon.ico",revision:"01593c5544467b7cf0fecf31487b95c4"},{url:"img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"6b0ffd70df3c4ebe3b84b63f1cab41a3"},{url:"img/icons/mstile-150x150.png",revision:"c4fe766f08297005291388bf7571900b"},{url:"img/icons/safari-pinned-tab.svg",revision:"b748e4c5526896b9efdfde78c1a0c271"},{url:"index.html",revision:"3cfcda1e15cc1eeff3b495abbcd337a4"},{url:"./img/icons/android-chrome-192x192.png",revision:"b75f4efb583a99e305285c70854c90f6"},{url:"./img/icons/android-chrome-512x512.png",revision:"392dc001a561b697747ddddf7565a508"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"b75f4efb583a99e305285c70854c90f6"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"392dc001a561b697747ddddf7565a508"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"d8c601181019ca96c55084f8d47425e1"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"931a6631849de01890f375c434cdd409"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"11c25c563981629cb251b8715d4790d6"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"d957b85706202d68cd14cfa31a1bb6ae"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"722d6060b83c274b333c072345bcd4cd"},{url:"./img/icons/apple-touch-icon.png",revision:"722d6060b83c274b333c072345bcd4cd"},{url:"./img/icons/favicon-16x16.png",revision:"128ff56279b05d868729d1292f6cc486"},{url:"./img/icons/favicon-32x32.png",revision:"8f62325f6b19b11adc55abe9280c0821"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"6b0ffd70df3c4ebe3b84b63f1cab41a3"},{url:"./img/icons/mstile-150x150.png",revision:"c4fe766f08297005291388bf7571900b"},{url:"manifest.webmanifest",revision:"82c88347de3b77df92a9dee308b7b867"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
