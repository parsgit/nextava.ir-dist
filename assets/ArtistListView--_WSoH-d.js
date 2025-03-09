import{z as u,i as x,c as n,a as t,b as c,w as b,F as y,j as h,P as p,B as f,o as l,s as _,t as i,C as g}from"./index-D11NS5oJ.js";const k={class:"container mx-auto p-4"},v={class:"mt-4 flex gap-4"},w={class:"min-w-full bg-white border border-gray-200 mt-4"},A={class:"py-2 px-4 border-b"},C={class:"py-2 px-4 border-b"},L={class:"py-2 px-4 border-b"},B={class:"py-2 px-4 border-b flex gap-4"},N=["onClick"],F={__name:"ArtistListView",setup(V){const a=u([]),d=()=>{p("admin/artist/list").then(o=>{o.ok&&(a.length=0,o.list.forEach(e=>{a.push(e)}))})},m=async o=>{await g({text:"Are you sure?",buttons:{ok:"Yes/Delete",cancel:"Cancel"}})=="ok"&&p("admin/artist/remove",{id:o,remove_files:!0}).then(r=>{r.ok&&d()})};return x(()=>{d()}),(o,e)=>{const r=f("router-link");return l(),n("div",k,[e[3]||(e[3]=t("h1",{class:"text-2xl font-bold mb-4"},"Artist List",-1)),t("div",v,[c(r,{to:{name:"admin_artist_new"},class:"btn btn-primary"},{default:b(()=>e[0]||(e[0]=[_("Create Artist")])),_:1})]),t("table",w,[e[2]||(e[2]=t("thead",null,[t("tr",{class:"bg-gray-100 text-left"},[t("th",{class:"py-2 px-4 border-b"},"Name"),t("th",{class:"py-2 px-4 border-b"},"Label"),t("th",{class:"py-2 px-4 border-b"},"Type"),t("th",{class:"py-2 px-4 border-b"},"Actions")])],-1)),t("tbody",null,[(l(!0),n(y,null,h(a,s=>(l(),n("tr",{key:s.id,class:"hover:bg-gray-50"},[t("td",A,i(s.name),1),t("td",C,i(s.label),1),t("td",L,i(s.type),1),t("td",B,[c(r,{to:{name:"admin_artist_edit",params:{id:s.id}},class:"text-blue-500 hover:text-blue-700"},{default:b(()=>e[1]||(e[1]=[_("Edit")])),_:2},1032,["to"]),t("button",{onClick:D=>m(s.id),class:"text-red-500 hover:text-red-700"},"Delete",8,N)])]))),128))])])])}}};export{F as default};
