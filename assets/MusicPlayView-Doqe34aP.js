import{_ as p,o as i,c as r,a as e,r as a,m as ee,k as te,g as se,b as w,t as f,p as le,i as V,n as j,u as oe,f as D,F as ne,h as ae,q as E,e as ie,A as C,P as L,s as re,d as ce}from"./index-DX7cw2Yb.js";import{I as ue}from"./IconBookmarkSolid-BZ9D6bjU.js";const de={},ve={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"};function me(g,o){return i(),r("svg",ve,o[0]||(o[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"},null,-1)]))}const fe=p(de,[["render",me]]),xe={},pe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function ge(g,o){return i(),r("svg",pe,o[0]||(o[0]=[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z","clip-rule":"evenodd"},null,-1)]))}const P=p(xe,[["render",ge]]),be={},_e={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function he(g,o){return i(),r("svg",_e,o[0]||(o[0]=[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z","clip-rule":"evenodd"},null,-1)]))}const ke=p(be,[["render",he]]),we={},ye={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"};function $e(g,o){return i(),r("svg",ye,o[0]||(o[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},null,-1)]))}const Ce=p(we,[["render",$e]]),Te={},Be={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"};function Ie(g,o){return i(),r("svg",Be,o[0]||(o[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"},null,-1)]))}const Me=p(Te,[["render",Ie]]),ze={class:"min-h-screen flex flex-col"},Ve={class:"flex"},je={class:"grid gap-2 xs:gap-4 grid-cols-1 xs:grid-cols-2 items-center"},Le=["src"],Ze={class:"flex flex-col h-full px-4 xs:px-0"},Se={dir:"auto",class:"text-2xl font-semibold text-gray-800 mb-2"},He={dir:"auto",class:"text-2xl font-semibold text-gray-800 mb-2"},Fe={dir:"auto",class:"text-2xl font-semibold text-gray-800 mb-2"},Ne={key:0,class:"p-4 mt-4 text-lg"},Ae={dir:"auto",class:"text-gray-700"},Re={key:0,class:"p-2 bg-primary flex justify-between items-center"},Ue={class:"flex items-center gap-4 justify-center pb-2 pr-5"},De={class:"bg-black glass p-0 m-0"},Ee={class:"flex gap-1 xl:gap-4 py-0 items-center px-2 xl:px-4"},Pe={class:"flex"},qe={class:"flex-1 flex"},Oe=["value"],Ge={class:"text-white font-bold flex"},Je={class:"backdrop-blur-lg flex flex-col gap-4 p-4 overflow-y-auto flex-grow scroll-smooth"},Ke=["id"],Qe={class:"text-lg font-bold"},We={class:"text-lg font-bold"},Xe=["src"],Ye={__name:"MusicPlayView",setup(g){const o=ie(),b=ce(),T=o.params.music_id,n=a({}),l=a(null),x=a(0),y=a(0),B=a(!1),Z=a(0),S=a(!1),_=a(null),H=a(null),$=a(0),I=a(""),F=a(),h=a(!1),q=a(""),O=ee(()=>{const s=Math.floor(x.value/60),t=Math.floor(x.value%60);return`${s}:${t<10?"0":""}${t}`}),N=async()=>{if(C.get("login")==!1){const s=await swal({text:"برای نشانه گذاری و ذخیره لطفا ابتدا وارد حساب کاربری خود شود",buttons:{ok:"ورود به حساب",register:"ساخت حساب"}});s=="ok"?b.push({name:"client_login"}):s=="register"&&b.push({name:"client_register"})}else h.value==!1?L("client/bookmark/add",{music_id:T}).then(s=>{s.ok&&(h.value=!0,swal("","به لیست علاقه مندی‌ها(ذخیره شده ها) اضافه شد","success"))}):L("client/bookmark/remove",{music_id:T}).then(s=>{s.ok&&(h.value=!1)})};a(0);const G=()=>{l.value.played&&l.value.pause(),b.back()},J=()=>{L("client/music-info",{music_id:T}).then(s=>{s.ok&&(n.value=s.music,q.value=M(n.value.image),h.value=s.bookmark)})},M=s=>C.server+s,K=()=>{var s,t,u,d,v,m,k,c;if((t=(s=n.value)==null?void 0:s.name_64)!=null&&t.length)return C.server+"client/music-streem?name="+((u=n.value)==null?void 0:u.name_64)+"&artist="+((d=n.value)==null?void 0:d.artist_label);if((m=(v=n.value)==null?void 0:v.name_128)!=null&&m.length)return C.server+"client/music-streem?name="+((k=n.value)==null?void 0:k.name_128)+"&artist="+((c=n.value)==null?void 0:c.artist_label)},Q=()=>{b.push({hash:"#timelineBox"}),A()},A=()=>{l.value.paused?(l.value.play(),l.value.playbackRate=1,B.value=!0):(l.value.pause(),B.value=!1)},R=(s=!0)=>{var t,u,d,v,m;o.hash=="#timelineBox"?(S.value=!0,s&&((t=l==null?void 0:l.value)!=null&&t.paused)&&((u=l==null?void 0:l.value)==null||u.play()),I.value="fixed",F.value="h-screen flex flex-col",setTimeout(()=>{$.value=0},50)):(s&&((d=l==null?void 0:l.value)!=null&&d.played)&&((v=l==null?void 0:l.value)==null||v.pause()),S.value=!1,(m=_==null?void 0:_.value)!=null&&m.offsetHeight&&($.value=_.value.offsetHeight+H.value.offsetHeight),setTimeout(()=>{I.value="hidden overflow-y-auto flex-grow scroll-smooth"},500))};te(()=>o.hash,async()=>{R()});var U=0;const W=()=>{x.value=l.value.currentTime,Z.value=100/y.value*x.value;let s=0;for(const t of n.value.timeline){if(x.value>=t.start_at&&x.value<=t.start_at+t.duration){if(U!=s){if(U=s,s>0){const u=document.getElementById("item_"+(s-1));u&&u.scrollIntoView({behavior:"smooth"})}t.isPlaying=!0,t.class="bg-white/50 scale-[100%] duration-200 text-black",console.log("for (const timeline")}break}else t.class="bg-white/20 scale-[95%]";s+=1}},X=()=>{y.value=l.value.duration},Y=s=>{re(()=>{l.value.currentTime=y.value/100*s.target.value})};return se(()=>{}),R(!1),J(),(s,t)=>{var u,d,v,m,k;return i(),r("div",ze,[e("div",{ref_key:"box_head",ref:_,class:"p-2 bg-primary flex justify-between items-center"},[e("div",null,[e("button",{onClick:t[0]||(t[0]=c=>G()),class:"border-2 border-white/30 bg-black/10 py-2 px-4 active:bg-black/30 hover:bg-black/30 duration-200 rounded-xl"},[w(fe,{class:"size-8 text-white"})])]),e("div",Ve,[h.value==!1?(i(),r("button",{key:0,onClick:t[1]||(t[1]=c=>N()),class:"text-accent"},[w(Me,{class:"size-8"})])):(i(),r("button",{key:1,class:"text-accent",onClick:t[2]||(t[2]=c=>N())},[w(ue,{class:"size-8"})]))])],512),e("div",{ref_key:"box_info",ref:H,class:"px-2 xs:px-4 sm:px-8 py-6 sm:py-12 bg-gray-100 rounded-lg shadow max-w-5xl w-full mx-auto"},[e("div",je,[e("img",{class:"min-w-32 w-full object-cover rounded-xl",src:M(n.value.image),alt:"Song Image"},null,8,Le),e("div",Ze,[e("h2",Se,"نام : "+f((u=n.value)==null?void 0:u.title),1),e("h2",He,"از : "+f((d=n.value)==null?void 0:d.artist_name),1),e("div",Fe,"مدت زمان : "+f((y.value/60).toFixed(2))+" دقیقه",1),t[7]||(t[7]=e("p",{dir:"auto",class:"text-2xl font-semibold text-gray-800 mb-2"},"سطح: آسان.",-1)),e("button",{onClick:Q,class:"flex items-center gap-4 justify-center mt-auto mb-0 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"},[e("div",null,[w(P,{class:"size-10"})]),t[6]||(t[6]=le(" پخش و نمایش ترجمه "))])])]),(m=(v=n.value)==null?void 0:v.description)!=null&&m.length?(i(),r("div",Ne,[e("p",Ae,f((k=n.value)==null?void 0:k.description),1)])):V("",!0)],512),e("div",{class:j([[I.value],"left-0 right-0 bottom-0 bg-white z-50 transition-all duration-500 ease-in-out"]),style:E(`top:${$.value}px;`)},[e("div",{class:j(["relative z-10",F.value])},[$.value==0?(i(),r("div",Re,[e("div",null,[e("button",{onClick:t[3]||(t[3]=c=>oe(b).back()),class:"border-2 border-white/30 flex items-center gap-2 bg-black/10 py-1 px-2 xl:px-4 active:bg-black/30 hover:bg-black/30 duration-200 rounded-xl"},[w(Ce,{class:"size-10 text-white"}),t[8]||(t[8]=e("span",{class:"text-white font-bold"},"بازگشت",-1))])]),e("div",Ue,[e("button",{onClick:t[4]||(t[4]=c=>l.value.currentTime-=10),class:"btn btn-sm btn-accent btn-outline"}," -10 "),e("button",{onClick:t[5]||(t[5]=c=>l.value.currentTime+=10),class:"btn btn-sm btn-accent btn-outline"}," +10 ")])])):V("",!0),e("div",De,[e("div",Ee,[e("div",Pe,[e("button",{onClick:A,class:"rounded-full"},[B.value==!1?(i(),D(P,{key:0,class:"size-16 text-info"})):(i(),D(ke,{key:1,class:"size-16 text-info"}))])]),e("div",qe,[e("input",{onChange:Y,type:"range",min:"0",max:"100",value:Z.value,class:"range range-info bg-white/20"},null,40,Oe)]),e("div",Ge,f(O.value),1)])]),e("div",Je,[(i(!0),r(ne,null,ae(n.value.timeline,(c,z)=>(i(),r("div",{items:"timeline",ref_for:!0,ref:"item_"+z,id:"item_"+z,class:j(["p-2 rounded-xl text-center glass",c.class]),key:z},[e("div",Qe,f(c.text),1),e("div",We,f(c.translation),1)],10,Ke))),128))]),e("div",{class:"absolute blurred-background backdrop-blur-lg z-0 w-full h-full top-0 left-0 bg-top bg-cover bg-no-repeat",style:E({backgroundImage:`url(${M(n.value.image)})`})},null,4)],2)],6),n.value.title?(i(),r("audio",{key:0,class:"hidden",ref_key:"audioPlayer",ref:l,src:K(n.value),onTimeupdate:W,onLoadedmetadata:X},null,40,Xe)):V("",!0)])}}},st=p(Ye,[["__scopeId","data-v-35664280"]]);export{st as default};
