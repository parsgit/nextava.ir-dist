import{z as m,i as x,c as l,a as t,b as i,w as d,F as y,j as h,P as u,B as f,o as b,s as c,h as g,t as r,C as k}from"./index-D11NS5oJ.js";const v={class:"container mx-auto p-4"},w={class:"mt-4 flex gap-4"},C={class:"min-w-full bg-white border border-gray-200 mt-4"},M={class:"py-2 px-4 border-b"},A={class:"py-2 px-4 border-b"},B={class:"py-2 px-4 border-b"},L={class:"py-2 px-4 border-b"},V={class:"py-2 px-4 border-b flex gap-4"},D=["onClick"],F={__name:"MusicListView",setup(E){const n=m([]),p=()=>{u("admin/music/list").then(o=>{o.ok&&(n.length=0,o.list.forEach(s=>{n.push(s)}))})},_=async o=>{await k({text:"Are you sure?",buttons:{ok:"Yes/Delete",cancel:"Cancel"}})=="ok"&&u("admin/music/remove",{id:o,remove_files:!0}).then(a=>{a.ok&&p()})};return x(()=>{p()}),(o,s)=>{const a=f("router-link");return b(),l("div",v,[s[4]||(s[4]=t("h1",{class:"text-2xl font-bold mb-4"},"Music List",-1)),t("div",w,[i(a,{to:{name:"admin_music_new"},class:"btn btn-primary"},{default:d(()=>s[0]||(s[0]=[c("Create Music")])),_:1}),i(a,{to:{name:"admin_artists"},class:"btn btn-primary"},{default:d(()=>s[1]||(s[1]=[c("Artists")])),_:1})]),t("table",C,[s[3]||(s[3]=t("thead",null,[t("tr",{class:"bg-gray-100"},[t("th",{class:"py-2 px-4 border-b"},"Title"),t("th",{class:"py-2 px-4 border-b"},"Artist"),t("th",{class:"py-2 px-4 border-b"},"Album"),t("th",{class:"py-2 px-4 border-b"},"Year"),t("th",{class:"py-2 px-4 border-b"},"Actions")])],-1)),t("tbody",null,[(b(!0),l(y,null,h(n,e=>(b(),l("tr",{key:e.id,class:g(["hover:bg-gray-50",{"opacity-70 bg-red-200/30":!e.published}])},[t("td",M,r(e.title),1),t("td",A,r(e.artist),1),t("td",B,r(e.album),1),t("td",L,r(e.year),1),t("td",V,[i(a,{to:{name:"admin_music_edit",params:{id:e.id}},class:"text-blue-500 hover:text-blue-700"},{default:d(()=>s[2]||(s[2]=[c("Edit")])),_:2},1032,["to"]),t("button",{onClick:N=>_(e.id),class:"text-red-500 hover:text-red-700"},"Delete",8,D)])],2))),128))])])])}}};export{F as default};
