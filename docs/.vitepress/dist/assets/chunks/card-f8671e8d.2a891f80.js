import{N as u}from"./index-fc222aed.c18c7ba8.js";import"../guide_components_k-designer.md.c908a8ef.js";import{d as c,G as r,I as i}from"../app.eaa969de.js";const v=c({props:{record:{type:Object,required:!0,default:()=>({})}},setup(o,{attrs:f,slots:e}){return()=>{var n,s;var l;const t={...o.record,header:(n=(l=o.record)==null?void 0:l.label)!=null?n:""},a=(s=t.children)!=null?s:[];delete t.children;let d=null;return a.length?d=()=>a.map(p=>r(e,"node",{record:p})):d=()=>[r(e,"default")],i(u,t,{default:()=>r(e,"edit-node",{},d),header:()=>r(e,"header")})}}});export{v as default};
