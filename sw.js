if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/IconBookmarkSolid-6Vx4WmXI.js",revision:null},{url:"assets/index-BB1_HYqM.css",revision:null},{url:"assets/index-BT5QUFoQ.js",revision:null},{url:"assets/LoginPageView-dihE-bwk.js",revision:null},{url:"assets/MainView-YauI7xGf.js",revision:null},{url:"assets/MusicEditView-Ch1zZIfx.js",revision:null},{url:"assets/MusicEditView-DbsHHFAV.css",revision:null},{url:"assets/MusicListView-CuqhHMen.js",revision:null},{url:"assets/MusicPlayView-C6G3XW4G.css",revision:null},{url:"assets/MusicPlayView-DazwQZk_.js",revision:null},{url:"assets/MusicTrakerView-BgHPNTfd.js",revision:null},{url:"assets/MusicTrakerView-tn0RQdqM.css",revision:null},{url:"assets/MyInput-D0pb6SxF.js",revision:null},{url:"assets/RegisterPageView-cg2kLcLN.js",revision:null},{url:"assets/wavesurfer.esm-C5Vxh-qJ.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"18854b0d4f113569f5b0d767ba13002a"},{url:"manifest.webmanifest",revision:"458473c49c8682abe726fd2bb98a2114"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
