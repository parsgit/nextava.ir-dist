if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>i(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/ArtistEditView-DQUOfYqB.js",revision:null},{url:"assets/ArtistListView-HG05oEIf.js",revision:null},{url:"assets/category-DsZE03iJ.js",revision:null},{url:"assets/IconBookmarkSolid-CtQqxQII.js",revision:null},{url:"assets/index-B-UYuOBm.css",revision:null},{url:"assets/index-eyY3AO2Y.js",revision:null},{url:"assets/LoginPageView-CVNYT2x7.js",revision:null},{url:"assets/MainView-BSG2AJOh.js",revision:null},{url:"assets/MusicEditView-DbsHHFAV.css",revision:null},{url:"assets/MusicEditView-QGC1KoUK.js",revision:null},{url:"assets/MusicListView-45iDDurd.js",revision:null},{url:"assets/MusicPlayView-DIRHy8ES.css",revision:null},{url:"assets/MusicPlayView-DjIyp_Kr.js",revision:null},{url:"assets/MusicTrakerView-B3dYl1Pt.js",revision:null},{url:"assets/MusicTrakerView-tn0RQdqM.css",revision:null},{url:"assets/MyCheckbox-BOx0gb0P.js",revision:null},{url:"assets/MyInput-DnrGBbUo.js",revision:null},{url:"assets/PrivacyPageView-BVY3Jxmh.js",revision:null},{url:"assets/PrivacyPageView-Cp36zM8i.css",revision:null},{url:"assets/RegisterPageView-DXDqtsT7.js",revision:null},{url:"assets/Richbox-48xin-T-.css",revision:null},{url:"assets/Richbox-DSuBrh9M.js",revision:null},{url:"assets/wavesurfer.esm-C5Vxh-qJ.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"0b1de5ac264d833f1781ae311640f4e8"},{url:"manifest.webmanifest",revision:"458473c49c8682abe726fd2bb98a2114"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
