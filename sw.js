if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/IconBookmarkSolid-IvTe9xvX.js",revision:null},{url:"assets/index-8Tr2xcJV.js",revision:null},{url:"assets/index-CFN2X9oX.css",revision:null},{url:"assets/LoginPageView-Mu8ox7_J.js",revision:null},{url:"assets/MainView-DgNyiT7-.js",revision:null},{url:"assets/MusicEditView-Bntg7n38.js",revision:null},{url:"assets/MusicEditView-DbsHHFAV.css",revision:null},{url:"assets/MusicListView-NIlsv1b-.js",revision:null},{url:"assets/MusicPlayView-DcHa8OkT.js",revision:null},{url:"assets/MusicPlayView-YTTEF_bQ.css",revision:null},{url:"assets/MusicTrakerView-Btl6zfQj.js",revision:null},{url:"assets/MusicTrakerView-tn0RQdqM.css",revision:null},{url:"assets/MyInput-CFWQOTrk.js",revision:null},{url:"assets/RegisterPageView-BFWLdm3A.js",revision:null},{url:"assets/wavesurfer.esm-C5Vxh-qJ.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"56fc05c4aa25ea6bee23e527e80adfbe"},{url:"manifest.webmanifest",revision:"458473c49c8682abe726fd2bb98a2114"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
