import{z as m,i as x,c as l,a as t,b,w as c,F as y,j as h,P as p,B as f,o as i,s as u,h as g,t as a,C as k}from"./index-8z_iIv3t.js";const v={class:"container mx-auto p-4"},w={class:"min-w-full bg-white border border-gray-200 mt-4"},C={class:"py-2 px-4 border-b"},M={class:"py-2 px-4 border-b"},A={class:"py-2 px-4 border-b"},B={class:"py-2 px-4 border-b"},L={class:"py-2 px-4 border-b flex gap-4"},V=["onClick"],z={__name:"MusicListView",setup(D){const n=m([]),d=()=>{p("admin/music/list").then(o=>{o.ok&&(n.length=0,o.list.forEach(e=>{n.push(e)}))})},_=async o=>{await k({text:"Are you sure?",buttons:{ok:"Yes/Delete",cancel:"Cancel"}})=="ok"&&p("admin/music/remove",{id:o,remove_files:!0}).then(r=>{r.ok&&d()})};return x(()=>{d()}),(o,e)=>{const r=f("router-link");return i(),l("div",v,[e[3]||(e[3]=t("h1",{class:"text-2xl font-bold mb-4"},"Music List",-1)),b(r,{to:{name:"admin_music_new"},class:"btn btn-primary"},{default:c(()=>e[0]||(e[0]=[u("Create Music")])),_:1}),t("table",w,[e[2]||(e[2]=t("thead",null,[t("tr",{class:"bg-gray-100"},[t("th",{class:"py-2 px-4 border-b"},"Title"),t("th",{class:"py-2 px-4 border-b"},"Artist"),t("th",{class:"py-2 px-4 border-b"},"Album"),t("th",{class:"py-2 px-4 border-b"},"Year"),t("th",{class:"py-2 px-4 border-b"},"Actions")])],-1)),t("tbody",null,[(i(!0),l(y,null,h(n,s=>(i(),l("tr",{key:s.id,class:g(["hover:bg-gray-50",{"opacity-70 bg-red-200/30":!s.published}])},[t("td",C,a(s.title),1),t("td",M,a(s.artist),1),t("td",A,a(s.album),1),t("td",B,a(s.year),1),t("td",L,[b(r,{to:{name:"admin_music_edit",params:{id:s.id}},class:"text-blue-500 hover:text-blue-700"},{default:c(()=>e[1]||(e[1]=[u("Edit")])),_:2},1032,["to"]),t("button",{onClick:E=>_(s.id),class:"text-red-500 hover:text-red-700"},"Delete",8,V)])],2))),128))])])])}}};export{z as default};
