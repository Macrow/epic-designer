import{i as z,k,r as C,m as V,o as d,c as m,d as t,e as r,v as w,u as n,F as D,E,y as F,aa as G,ab as L,G as P,a4 as y}from"../app.c1700df1.js";import{R as j}from"./vuedraggable.umd-6a5b6da9.96e89de6.js";import{z as N,ch as _,cg as q,ci as H}from"./index.52d9511d.js";import{m as B}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.b898144b.js";const J={class:"epic-component-view flex flex-col"},K={class:"search-box px-10px py-6px"},O={class:"flex flex-1 overflow-auto"},Q={class:"tabs-box"},T=["title","onClick"],$={class:"h-full flex-1 overflow-auto py-2 box-border"},A=["onClick"],M={class:"text-center pt-42px text-gray-400"},le=z({__name:"index",setup(W){const S=N.getComponent("input"),p=k("pageSchema"),v=k("designer"),f=N.getComponentSchemaGroups(),o=C(""),h={title:"\u5168\u90E8",list:[]},c=C(h),I=V(()=>[h,...f.value]),u=V(()=>{let a=c.value.list;if(c.value.title==="\u5168\u90E8"){const l=f.value.map(e=>e.list);a=[].concat(...l)}return o.value?a.filter(l=>{var e;return(e=l.label)==null?void 0:e.includes(o.value)}):a});function R(a){c.value=a}function U(a){var b;var l;const e=q(p.schemas,(b=(l=v.state.checkedNode)==null?void 0:l.id)!=null?b:"root");if(!e)return!1;let{list:s,schema:i,index:x}=e;i.children&&!i.childImmovable&&(s=i.children,x=i.children.length-1);const g=_(a);s.splice(x+1,0,g),v.setCheckedNode(g),H.push(p.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(a,l)=>(d(),m("div",J,[t("div",K,[r(n(S),{placeholder:"\u641C\u7D22\u7EC4\u4EF6",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),clearable:"",allowClear:"",value:o.value,"onUpdate:value":l[1]||(l[1]=e=>o.value=e)},{prefix:w(()=>[r(n(B),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),t("div",O,[t("div",Q,[(d(!0),m(D,null,E(I.value,(e,s)=>(d(),m("div",{class:P(["tab cursor-pointer truncate",{checked:c.value.title===e.title}]),key:s,title:e.title,onClick:i=>R(e)},y(e.title),11,T))),128))]),t("div",$,[r(n(j),F({modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{clone:n(_),"item-key":"id",class:"grid grid-cols-[auto_auto] px-10px gap-2"}),{item:w(({element:e})=>[t("div",{class:"source-componet-item flex items-center truncate",onClick:s=>U(e)},[r(n(B),{prefix:"",name:e.icon},null,8,["name"]),t("div",null,y(e.label),1)],8,A)]),_:1},16,["modelValue","clone"]),G(t("div",M,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u7EC4\u4EF6",512),[[L,!u.value.length]])])])]))}});export{le as default};
