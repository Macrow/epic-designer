import{Y as l,b as i,h as u}from"./index.0d4f5749.js";import{s as m}from"./plugin-vue_export-helper-dad06003.1d61e2b9.js";import{i as f,r as p,k,w as N,I as h,o as v,c as _,e as g,u as n}from"../app.b200646e.js";const y={class:"epic-sound-code"},E=f({__name:"index",setup(J){const c=l.getComponent("monacoEditor"),s=p(null),o=k("designer");let t={};N(()=>o.state.checkedNode,e=>{var a;i(t,h(e))||(a=s.value)==null||a.setValue(JSON.stringify(e,null,2))},{deep:!0});const r=JSON.stringify(o.state.checkedNode,null,2);function d(e){if(!o.state.checkedNode)return!1;t=JSON.parse(e),u(o.state.checkedNode,t)}return(e,a)=>(v(),_("div",y,[g(n(c),{ref_key:"monacoEditorRef",ref:s,class:"editor","model-value":n(r),"onUpdate:modelValue":d},null,8,["model-value"])]))}}),S=m(E,[["__scopeId","data-v-aa433531"]]);export{S as default};
