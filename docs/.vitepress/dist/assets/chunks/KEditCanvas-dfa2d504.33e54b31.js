import{d as V,i as A,g as I,o as E,c as Q,h as P,j as Z,a as C,U as ve,f as B,w as j,Q as te,z as Y,A as X,k as c,t as se,J as ee,F as pe,y as be,n as K,r as we,l as Ne,G as Ce,L as he,Y as q,C as Se,a6 as ie,N as ke,O as _e,Z as Re}from"../app.eaa969de.js";import{m as me,A as L,R as re,a as Oe,h as Be,b as $e,c as ze,_ as ue,d as Ee,z as ce,r as G,x as Ie,g as Te}from"../guide_components_k-designer.md.c908a8ef.js";function Ae(l){return ke()?(_e(l),!0):!1}function Pe(l){return typeof l=="function"?l():c(l)}const je=typeof window<"u";function Ve(l,i,n){const e=j(l,(...r)=>(he(()=>e()),i(...r)),n)}function H(l){var i;const n=Pe(l);return(i=n==null?void 0:n.$el)!=null?i:n}const fe=je?window:void 0;function De(){const l=B(!1);return Re()&&te(()=>{l.value=!0}),l}function Fe(l){const i=De();return I(()=>(i.value,!!l()))}var de=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Ke=(l,i)=>{var n={};for(var e in l)Ue.call(l,e)&&i.indexOf(e)<0&&(n[e]=l[e]);if(l!=null&&de)for(var e of de(l))i.indexOf(e)<0&&Me.call(l,e)&&(n[e]=l[e]);return n};function J(l,i,n={}){const e=n,{window:r=fe}=e,h=Ke(e,["window"]);let o;const y=Fe(()=>r&&"ResizeObserver"in r),p=()=>{o&&(o.disconnect(),o=void 0)},m=I(()=>Array.isArray(l)?l.map(d=>H(d)):[H(l)]),s=j(m,d=>{if(p(),y.value&&r){o=new ResizeObserver(i);for(const a of d)a&&o.observe(a,h)}},{immediate:!0,flush:"post",deep:!0}),t=()=>{p(),s()};return Ae(t),{isSupported:y,stop:t}}function Le(l,i={width:0,height:0},n={}){const{window:e=fe,box:r="content-box"}=n,h=I(()=>{var p,m;return(m=(p=H(l))==null?void 0:p.namespaceURI)==null?void 0:m.includes("svg")}),o=B(i.width),y=B(i.height);return J(l,([p])=>{const m=r==="border-box"?p.borderBoxSize:r==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(e&&h.value){const s=H(l);if(s){const t=e.getComputedStyle(s);o.value=Number.parseFloat(t.width),y.value=Number.parseFloat(t.height)}}else if(m){const s=Array.isArray(m)?m:[m];o.value=s.reduce((t,{inlineSize:d})=>t+d,0),y.value=s.reduce((t,{blockSize:d})=>t+d,0)}else o.value=p.contentRect.width,y.value=p.contentRect.height},n),j(()=>H(l),p=>{o.value=p?i.width:0,y.value=p?i.height:0}),{width:o,height:y}}const He={class:"action-item whitespace-nowrap"},Je=C("span",{class:"iconfont icon-fuzhi3"},null,-1),Qe=[Je],We=C("span",{class:"iconfont icon-shanchu1"},null,-1),Ze=[We],Ge=V({__name:"KPreviewWidgets",setup(l){const i=A("pageManager",{}),n=A("pageSchema"),e=A("designer"),r=B(null),h=B(null),o=B(null),y=B(!1),p=B(!1),m=B(!0),{canvasScale:s}=me();let t=null;const d=I(()=>{var z;var u,x,g,R,w;const N=i.componentInstances.value,k=(u=e.state.checkedNode)==null?void 0:u.id,S=(z=L.getComponentConfingByType((x=e.state.checkedNode)==null?void 0:x.type))!=null?z:null;if(!k||!(N!=null&&N[k]))return null;if(S!=null&&S.defaultSchema.input&&((g=e.state.checkedNode)==null?void 0:g.noFormItem)!==!0)return(R=N[k+"formItem"])==null?void 0:R.$el;const _=N[k];return((w=_==null?void 0:_.$el)==null?void 0:w.nodeName)==="#text"?null:_==null?void 0:_.$el}),a=I(()=>{var _;var u,x,g,R;const w=i.componentInstances.value,N=(u=e.state.hoverNode)==null?void 0:u.id,k=(_=L.getComponentConfingByType((x=e.state.hoverNode)==null?void 0:x.type))!=null?_:null;if(!N||!(w!=null&&w[N]))return null;if(k!=null&&k.defaultSchema.input&&((g=e.state.hoverNode)==null?void 0:g.noFormItem)!==!0)return(R=w[N+"formItem"])==null?void 0:R.$el;const S=w[N];return(S==null?void 0:S.$el.nodeName)==="#text"?null:S==null?void 0:S.$el}),{mutationObserver:b,observerConfig:$}=ne(T),{startTimedQuery:f,stopTimedQuery:v}=ze(T);j(()=>d.value,u=>{if(u){y.value=!0,b.observe(u,$);const x=u.parentNode;x&&(x.ondragstart=()=>{m.value=!1,f()},x.ondragend=()=>{m.value=!0,v()}),T()}else y.value=!1});const{mutationObserver:O,observerConfig:D}=ne(le);j(()=>a.value,u=>{u&&(O.observe(u,D),le())});let F=0;j(()=>{var u;return(u=e.state.hoverNode)==null?void 0:u.id},u=>{p.value=!0,clearTimeout(F),!u&&(F=setTimeout(()=>{p.value=!1},300))});function T(){var W,U,M;const u=d.value;if(!u)return;const{top:x,left:g}=(W=t==null?void 0:t.getBoundingClientRect())!=null?W:{top:0,left:0},{top:R,left:w,width:N,height:k}=u.getBoundingClientRect(),S=R-x+((U=t==null?void 0:t.scrollTop)!=null?U:0)*s.value,_=w-g+((M=t==null?void 0:t.scrollLeft)!=null?M:0)*s.value,z=k/s.value;r.value&&(r.value.style.width=`${N/s.value}px`,r.value.style.height=`${z}px`,r.value.style.top=`${S/s.value}px`,r.value.style.left=`${_/s.value}px`),o.value&&(S<45&&z<100?(o.value.style.top="",o.value.style.bottom="-30px",o.value.style["border-radius"]="0px 0px 4px 4px"):S<45?(o.value.style.top="0px",o.value.style["border-radius"]="0px 0px 4px 0"):(o.value.style.top="-30px",o.value.style["border-radius"]="4px 4px 0px 0px"))}function le(){var U,M,oe,ae;var u,x;const g=a.value;if(!g)return;const{top:R,left:w}=(U=t==null?void 0:t.getBoundingClientRect())!=null?U:{top:0,left:0},{top:N,left:k,width:S,height:_}=(M=(u=g.getBoundingClientRect)==null?void 0:u.call(g))!=null?M:(x=g.nextElementSibling)==null?void 0:x.getBoundingClientRect(),z=N-R+((oe=t==null?void 0:t.scrollTop)!=null?oe:0)*s.value,W=k-w+((ae=t==null?void 0:t.scrollLeft)!=null?ae:0)*s.value;h.value&&(h.value.style.width=`${S/s.value}px`,h.value.style.height=`${_/s.value}px`,h.value.style.top=`${z/s.value}px`,h.value.style.left=`${W/s.value}px`)}function ne(u){const x=window.MutationObserver,g={childList:!0,attributes:!0,subtree:!0};return{mutationObserver:new x(u),observerConfig:g}}function xe(){var _;var u,x;const g=ue(n.schemas,(_=(u=e.state.checkedNode)==null?void 0:u.id)!=null?_:"root");if(!g)return!1;const{list:R,schema:w,index:N}=g,k=Ee({...w,id:ce()});R.splice(N+1,0,k);const S=k.children?[...k.children]:[];for(;S.length>0;){const z=S.pop();z.id=ce(),((x=z.children)==null?void 0:x.length)>0&&S.push(...z.children)}e.setCheckedNode(k),G.push(n.schemas,"\u590D\u5236\u7EC4\u4EF6")}function ye(){var N;var u;const x=ue(n.schemas,(N=(u=e.state.checkedNode)==null?void 0:u.id)!=null?N:"root");if(!x)return!1;let{list:g,schema:R,index:w}=x;g.splice(w,1),w===g.length&&w--,e.setCheckedNode(g[w]),G.push(n.schemas,"\u5220\u9664\u7EC4\u4EF6")}return te(()=>{t=document.querySelector(".k-edit-range"),t==null||t.addEventListener("scroll",()=>{T()}),J(d,T),J(a,T)}),(u,x)=>{var S,_;var g,R,w,N,k;return E(),Q(pe,null,[Y(C("div",{ref_key:"selectorRef",ref:r,class:ee(["checked-widget absolute pointer-events-none z-20",{"transition-all":m.value}])},[C("div",{class:"action-box",ref_key:"actionBoxRef",ref:o},[C("div",He,se((g=c(e).state.checkedNode)==null?void 0:g.type)+" "+se((_=(R=c(e).state.checkedNode)==null?void 0:R.label)!=null?_:(N=c(L).getComponentConfingByType((S=(w=c(e).state.checkedNode)==null?void 0:w.type)!=null?S:""))==null?void 0:N.defaultSchema.label),1),C("div",{title:"\u590D\u5236",class:"action-item pointer-events-auto",onClick:xe},Qe),C("div",{title:"\u5220\u9664",class:"action-item pointer-events-auto",onClick:ye},Ze)],512)],2),[[X,y.value&&((k=c(e).state.checkedNode)==null?void 0:k.id)!=="root"]]),Y(C("div",{ref_key:"hoverWidgetRef",ref:h,class:"hover-widget absolute transition-all pointer-events-none z-998"},null,512),[[X,p.value]])],64)}}}),qe=["index","onClick","onMouseover"],Ye=V({__name:"KEditNodeItem",props:{schemas:{}},emits:["update:schemas"],setup(l,{emit:i}){const n=l,e=A("designer"),r=A("pageSchema"),h=I({get(){return n.schemas},set(m){i("update:schemas",m)}});function o(m){e.setCheckedNode(h.value[m])}function y(){e.setDisableHover(),G.push(r.schemas,"\u62D6\u62FD\u7EC4\u4EF6")}function p(){G.push(r.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(m,s)=>(E(),K(c(Ie),Se({modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=t=>h.value=t),"item-key":"id","component-data":{name:"draggable-range",type:"transition-group"},class:"draggable-range"},{animation:200,group:"edit-draggable",ghostClass:"moveing"},{onStart:s[2]||(s[2]=t=>{o(t.oldIndex),c(e).setDisableHover(!0)}),onEnd:s[3]||(s[3]=t=>y()),onAdd:s[4]||(s[4]=t=>{o(t.newIndex),p()})}),{item:Z(({element:t,index:d})=>[C("div",{index:d,onClick:q(a=>c(e).setCheckedNode(t),["stop"]),onMouseover:q(a=>c(e).setHoverNode(t),["stop"]),onMouseout:s[0]||(s[0]=q(a=>c(e).setHoverNode(null),["stop"]))},[P(ge,{schema:t},null,8,["schema"])],40,qe)]),_:1},16,["modelValue"]))}}),ge=V({__name:"KNodeItem",props:{schema:{}},setup(l){const i=l,n=i.schema;return(e,r)=>{const h=be("KNodeItem",!0);return["row","tabs"].includes(i.schema.type)?(E(),K(c(re),{key:0,record:i.schema},{"edit-node":Z(()=>[(E(!0),Q(pe,null,we(c(n).children,o=>(E(),K(h,{key:o.id,schema:o},null,8,["schema"]))),128))]),_:1},8,["record"])):(E(),K(c(re),{key:1,record:i.schema},{"edit-node":Z(()=>[c(n).children?(E(),K(Ye,{key:0,schemas:c(n).children,"onUpdate:schemas":r[0]||(r[0]=o=>c(n).children=o)},null,8,["schemas"])):Ne("",!0)]),_:1},8,["record"]))}}}),Xe={class:"edit-toolbar flex items-center justify-end text-gray-500 px-4"},et=C("span",{class:"icon iconfont"},"\uE60B",-1),tt=[et],lt=C("span",{class:"icon iconfont"},"\uE60C",-1),nt={class:"pr-8px w-82px cursor-pointer"},ot={class:"w-90px cursor-pointer"},at=V({__name:"toolbar",setup(l){const i=L.getComponent("slider"),n=L.getComponent("select"),{canvasScale:e}=me(),r=A("pageSchema"),h=B(null),o=I({get(){return`${(e.value*100).toFixed(0)}%`},set(d){e.value=Number(d)}}),y=[{label:"60%",value:"0.6"},{label:"80%",value:"0.8"},{label:"100%",value:"1.0"},{label:"120%",value:"1.2"},{label:"140%",value:"1.4"}];function p(d="demo.json"){let a="data:text/json;charset=utf-8,";a+=JSON.stringify(r,null,2);var b=encodeURI(a),$=document.createElement("a");$.setAttribute("href",b),$.setAttribute("download",d),$.click()}function m(){var d;(d=h.value)==null||d.click()}function s(d){var a;const b=(a=d.target.files)==null?void 0:a[0];if(!b)return;d.target.value=null;const $=new FileReader;$.readAsText(b),$.onload=f=>{var v;t((v=f.target)==null?void 0:v.result)}}function t(d){try{const a=JSON.parse(d!=null?d:"");Te(r,a)}catch(a){console.error(a)}}return(d,a)=>(E(),Q("div",Xe,[C("div",{title:"\u5BFC\u51FA",class:"pr-16px cursor-pointer",onClick:a[0]||(a[0]=b=>p("demo.json"))},tt),C("div",{title:"\u5BFC\u5165",class:"pr-16px cursor-pointer",onClick:a[1]||(a[1]=b=>m())},[lt,Y(C("input",{type:"file",ref_key:"fileRef",ref:h,onChange:s},null,544),[[X,!1]])]),C("div",nt,[P(c(n),{value:o.value,"onUpdate:value":a[2]||(a[2]=b=>o.value=b),modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=b=>o.value=b),options:y,size:"small"},null,8,["value","modelValue"])]),C("div",ot,[P(c(i),{min:.2,max:2,step:.1,tooltip:!1,value:c(e),"onUpdate:value":a[4]||(a[4]=b=>ie(e)?e.value=b:null),modelValue:c(e),"onUpdate:modelValue":a[5]||(a[5]=b=>ie(e)?e.value=b:null)},null,8,["value","modelValue"])])]))}}),st={class:"h-full flex flex-col relative"},it=["draggable"],rt=V({__name:"KEditScreenContainer",props:{rootSchema:{}},setup(l){const i=l,n=B(null),e=B(null),{pressSpace:r}=Oe(),{handleElementDragStart:h,handleElementDrag:o,handleElementDragEnd:y}=Be(n),{width:p,height:m}=Le(n),{canvasScale:s,handleZoom:t}=$e(e),d=B({}),a=I(()=>{var F,T;var f,v;const O=parseFloat((F=(f=i.rootSchema.componentProps.style)==null?void 0:f.width)!=null?F:1320),D=parseFloat((T=(v=i.rootSchema.componentProps.style)==null?void 0:v.height)!=null?T:800);return{width:O,height:D}});Ve(p,()=>{b(),$()}),j(()=>i.rootSchema.componentProps.style.width,b);function b(){let f=a.value.width,v=a.value.height;(Number.isNaN(f)||f<p.value)&&(f=p.value),(Number.isNaN(v)||f<m.value)&&(v=m.value),d.value={width:p.value+f+"px",height:m.value+v+"px"}}function $(){he(()=>{let f=a.value.width,v=a.value.height;(Number.isNaN(f)||f<p.value)&&(f=p.value),(Number.isNaN(v)||f<m.value)&&(v=m.value);const O=v/2,D=f/2;n.value.scrollTo(D,O)})}return J(n,([{contentRect:f}])=>{const v=(f.width-20)/a.value.width;v<1.2&&(s.value=v),b(),$()}),te(()=>{J(n,([{contentRect:f}])=>{const v=(f.width-20)/a.value.width;v<1.2?s.value=v:s.value=1.2,b(),$()})}),(f,v)=>(E(),Q("div",st,[P(at),C("div",{ref_key:"editScreenContainerRef",ref:n,class:ee(["flex-1 overflow-auto k-edit-screen-container",{"cursor-grab":c(r)}]),draggable:c(r),onWheel:v[0]||(v[0]=(...O)=>c(t)&&c(t)(...O)),onDragstart:v[1]||(v[1]=(...O)=>c(h)&&c(h)(...O)),onDragend:v[2]||(v[2]=(...O)=>c(y)&&c(y)(...O)),onDrag:v[3]||(v[3]=(...O)=>c(o)&&c(o)(...O))},[C("div",{id:"canvasContainer",class:"flex items-center justify-center",style:ve(d.value)},[C("div",{ref_key:"draggableElRef",ref:e,class:"transition-all"},[C("div",{class:ee({"pointer-events-none":c(r)})},[Ce(f.$slots,"default")],2)],512)],4)],42,it)]))}}),ut={class:"k-edit-canvas"},vt=V({__name:"KEditCanvas",setup(l){const i=A("pageSchema"),n=I(()=>i.schemas[0]),e=I(()=>{var o,y;var r,h;return{width:(o=(r=n.value.componentProps.style)==null?void 0:r.width)!=null?o:"1320px",height:(y=(h=n.value.componentProps.style)==null?void 0:h.height)!=null?y:"800px"}});return(r,h)=>(E(),Q("section",ut,[P(rt,{"root-schema":n.value},{default:Z(()=>[C("div",{class:"k-edit-range rounded-md overflow-auto relative",style:ve(e.value)},[P(ge,{schema:n.value},null,8,["schema"]),P(Ge)],4)]),_:1},8,["root-schema"])]))}});export{vt as default};
