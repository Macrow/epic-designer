import{d as h,f as B,v as N,o as t,c as a,h as M,a as m,F as f,r as b,J as k,t as g,k as n,n as R,B as S,l as p,i as V,Y as v}from"../app.eaa969de.js";import{A as y}from"../guide_components_k-designer.md.c908a8ef.js";const _={class:"k-breadcrumb pl-4 py-2 truncate"},w={key:0},z={key:0},D={key:1,class:"iconfont icon-zhankai m-1"},F=["onClick","onMouseenter"],H=h({__name:"k-breadcrumb",setup(C){const e=V("designer");function d(s){e.setCheckedNode(s)}return(s,o)=>(t(),a("div",_,[(t(!0),a(f,null,b(n(e).state.matched,(i,l)=>{var c;var r;return t(),a("span",{key:l},[l>n(e).state.matched.length-4?(t(),a("span",w,[n(e).state.matched.length>3&&l===n(e).state.matched.length-3?(t(),a("span",z,"...")):p("",!0),l!==0?(t(),a("span",D)):p("",!0),m("span",{class:"node-item cursor-pointer",onClick:u=>d(i),onMouseenter:v(u=>n(e).setHoverNode(i),["stop"]),onMouseleave:o[0]||(o[0]=v(u=>n(e).setHoverNode(null),["stop"]))},g((c=i.label)!=null?c:(r=n(y).getComponentConfingByType(i.type))==null?void 0:r.defaultSchema.label),41,F)])):p("",!0)])}),128))]))}}),j={key:0,class:"k-right-sidebar"},A={class:"actions-container"},E=["title","onClick"],K={class:"sidebar-content"},J=h({__name:"KRightSidebar",setup(C){var e;const d=y.getRightSidebars(),s=B(0),o=N(null);o.value=(e=d[0])==null?void 0:e.component;function i(l,r){if(s.value===r)return!1;o.value=l.component,s.value=r}return(l,r)=>o.value?(t(),a("div",j,[M(H),m("ul",A,[(t(!0),a(f,null,b(n(d),(c,u)=>(t(),a("li",{key:u,class:k(["action-item",{checked:s.value===u}]),title:c.title,onClick:q=>i(c,u)},g(c.title),11,E))),128))]),m("div",K,[m("aside",{class:k({hide:s.value===null})},[(t(),R(S(o.value)))],2)])])):p("",!0)}});export{J as default};
