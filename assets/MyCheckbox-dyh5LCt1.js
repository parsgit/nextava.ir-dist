import{D as n,E as d,o as i,c as r,a as e,p as u,G as m,h as p,s as h,t as x,I as f}from"./index-CGhiAXIC.js";const _={class:"form-control"},k={class:"flex gap-4 cursor-pointer flex items-center"},b=["checked"],v={class:"flex flex-wrap"},V={class:"label-text"},y={__name:"MyCheckbox",props:n({title:{type:String,default:""},inputClass:{type:String,default:"checkbox"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const t=d(s,"modelValue"),l=s;return(o,a)=>(i(),r("div",_,[e("label",k,[u(e("input",{class:p([s.inputClass,"checkbox"]),"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c),checked:t.value,type:"checkbox"},null,10,b),[[m,t.value]]),e("div",v,[e("span",V,[h(x(l==null?void 0:l.title)+" ",1),f(o.$slots,"default")])])])]))}};export{y as _};
