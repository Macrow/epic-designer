import{I as h,O as o,ax as u,T as N,P as f,_,N as $}from"./index.52d9511d.js";import{r as g}from"./constants.fab22ac9.js";import{i as m,k as x,m as r,Q as j,o as v,t as C,v as O,B as E,G as k,u as p,a3 as w,x as B}from"../app.c1700df1.js";const P=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>u({})},sm:{type:o([Number,Object]),default:()=>u({})},md:{type:o([Number,Object]),default:()=>u({})},lg:{type:o([Number,Object]),default:()=>u({})},xl:{type:o([Number,Object]),default:()=>u({})}}),S=m({name:"ElCol"}),I=m({...S,props:P,setup(i){const t=i,{gutter:n}=x(g,{gutter:r(()=>0)}),a=N("col"),d=r(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),b=r(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):j(t[s])&&Object.entries(t[s]).forEach(([l,c])=>{e.push(l!=="span"?a.b(`${s}-${l}-${c}`):a.b(`${s}-${c}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(v(),C(B(e.tag),{class:k(p(b)),style:w(p(d))},{default:O(()=>[E(e.$slots,"default")]),_:3},8,["class","style"]))}});var K=_(I,[["__file","col.vue"]]);const Q=$(K);export{Q as E,P as c};
