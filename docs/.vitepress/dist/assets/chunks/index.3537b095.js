import{C as h,H as o,ak as u,L as _,I as f,_ as $,G as g}from"./index-bff0902e.b584476c.js";import{r as N}from"./constants.d58fdc74.js";import{i as m,k as x,m as r,Y as C,o as j,t as v,v as O,B as E,G as k,u as p,O as w,x as B}from"../app.b200646e.js";const S=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>u({})},sm:{type:o([Number,Object]),default:()=>u({})},md:{type:o([Number,Object]),default:()=>u({})},lg:{type:o([Number,Object]),default:()=>u({})},xl:{type:o([Number,Object]),default:()=>u({})}}),G=m({name:"ElCol"}),I=m({...G,props:S,setup(i){const t=i,{gutter:n}=x(N,{gutter:r(()=>0)}),a=_("col"),d=r(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),b=r(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):C(t[s])&&Object.entries(t[s]).forEach(([l,c])=>{e.push(l!=="span"?a.b(`${s}-${l}-${c}`):a.b(`${s}-${c}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(j(),v(B(e.tag),{class:k(p(b)),style:w(p(d))},{default:O(()=>[E(e.$slots,"default")]),_:3},8,["class","style"]))}});var K=$(I,[["__file","col.vue"]]);const R=g(K);export{R as E,S as c};
