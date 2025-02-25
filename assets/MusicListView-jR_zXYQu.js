import{D as m,k as x,c as l,a as t,d as c,j as b,F as y,l as h,P as p,E as f,o as i,z as u,t as a,G as k}from"./index-C1Cm9XI4.js";const g={class:"container mx-auto p-4"},v={class:"min-w-full bg-white border border-gray-200 mt-4"},w={class:"py-2 px-4 border-b"},C={class:"py-2 px-4 border-b"},M={class:"py-2 px-4 border-b"},A={class:"py-2 px-4 border-b"},D={class:"py-2 px-4 border-b flex gap-4"},E=["onClick"],N={__name:"MusicListView",setup(L){const n=m([]),d=()=>{p("admin/music/list").then(o=>{o.ok&&(n.length=0,o.list.forEach(e=>{n.push(e)}))})},_=async o=>{await k({text:"Are you sure?",buttons:{ok:"Yes/Delete",cancel:"Cancel"}})=="ok"&&p("admin/music/remove",{id:o,remove_files:!0}).then(r=>{r.ok&&d()})};return x(()=>{d()}),(o,e)=>{const r=f("router-link");return i(),l("div",g,[e[3]||(e[3]=t("h1",{class:"text-2xl font-bold mb-4"},"Music List",-1)),c(r,{to:{name:"admin_music_new"},class:"btn btn-primary"},{default:b(()=>e[0]||(e[0]=[u("Create Music")])),_:1}),t("table",v,[e[2]||(e[2]=t("thead",null,[t("tr",{class:"bg-gray-100"},[t("th",{class:"py-2 px-4 border-b"},"Title"),t("th",{class:"py-2 px-4 border-b"},"Artist"),t("th",{class:"py-2 px-4 border-b"},"Album"),t("th",{class:"py-2 px-4 border-b"},"Year"),t("th",{class:"py-2 px-4 border-b"},"Actions")])],-1)),t("tbody",null,[(i(!0),l(y,null,h(n,s=>(i(),l("tr",{key:s.id,class:"hover:bg-gray-50"},[t("td",w,a(s.title),1),t("td",C,a(s.artist),1),t("td",M,a(s.album),1),t("td",A,a(s.year),1),t("td",D,[c(r,{to:{name:"admin_music_edit",params:{id:s.id}},class:"text-blue-500 hover:text-blue-700"},{default:b(()=>e[1]||(e[1]=[u("Edit")])),_:2},1032,["to"]),t("button",{onClick:V=>_(s.id),class:"text-red-500 hover:text-red-700"},"Delete",8,E)])]))),128))])])])}}};export{N as default};
