import{r as n,av as B,at as e,aw as y,ax as R,ay as W,az as f,aA as X}from"./index-CP9bCmGD.js";import{b as J,H as Q,S as Y}from"./background-CxeNiwkN.js";import{c as A}from"./createLucideIcon-TYYbd2PC.js";import{B as $}from"./button-CgrXsSCX.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=A("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=A("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),ee="_container_1651u_1",te="_overlay_1651u_40",ne="_skeletonContainer_1651u_140",d={container:ee,"bread-background":"_bread-background_1651u_1","bread-background__title":"_bread-background__title_1651u_9",overlay:te,"productsCategories-container":"_productsCategories-container_1651u_47","hide-ul":"_hide-ul_1651u_72","products-container":"_products-container_1651u_76","products-container__box":"_products-container__box_1651u_88","products-container__box_cart":"_products-container__box_cart_1651u_94","products-container__total-count":"_products-container__total-count_1651u_128",skeletonContainer:ne,"ul-block":"_ul-block_1651u_161","minus-block":"_minus-block_1651u_193"};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var h=function(){return h=Object.assign||function(a){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(a[u]=i[u])}return a},h.apply(this,arguments)};function re(t,a){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&a.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i}var ae=function(){return Math.random().toString(36).substring(6)},oe=function(t){var a=t.animate,i=a===void 0?!0:a,r=t.backgroundColor,o=r===void 0?"#f5f6f7":r,u=t.backgroundOpacity,l=u===void 0?1:u,p=t.baseUrl,g=p===void 0?"":p,c=t.children,s=t.foregroundColor,_=s===void 0?"#eee":s,b=t.foregroundOpacity,q=b===void 0?1:b,v=t.gradientRatio,j=v===void 0?2:v,F=t.uniqueKey,k=t.rtl,G=k===void 0?!1:k,C=t.speed,H=C===void 0?1.2:C,E=t.style,K=E===void 0?{}:E,O=t.title,P=O===void 0?"Loading...":O,w=t.beforeMask,x=w===void 0?null:w,T=re(t,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),m=F||ae(),N="".concat(m,"-diff"),S="".concat(m,"-animated-diff"),L="".concat(m,"-aria"),U=G?{transform:"scaleX(-1)"}:null,V="".concat(H,"s"),M="".concat(j*-1," 0"),z="".concat(j," 0");return n.createElement("svg",h({"aria-labelledby":L,role:"img",style:h(h({},K),U)},T),P?n.createElement("title",{id:L},P):null,x&&n.isValidElement(x)?x:null,n.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(g,"#").concat(N,")"),style:{fill:"url(".concat(g,"#").concat(S,")")}}),n.createElement("defs",null,n.createElement("clipPath",{id:N},c),n.createElement("linearGradient",{id:S,gradientTransform:"translate(".concat(M,")")},n.createElement("stop",{offset:"0%",stopColor:o,stopOpacity:l}),n.createElement("stop",{offset:"50%",stopColor:_,stopOpacity:q}),n.createElement("stop",{offset:"100%",stopColor:o,stopOpacity:l}),i&&n.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(M,"; 0 0; ").concat(z),dur:V,repeatCount:"indefinite"}))))},I=function(t){return t.children?n.createElement(oe,h({},t)):n.createElement(ce,h({},t))},ce=function(t){return n.createElement(I,h({viewBox:"0 0 476 124"},t),n.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),n.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),n.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),n.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),n.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),n.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const se=I,ie=({categoriesData:t,records:a,total_count:i,isLoading:r})=>{const[o,u]=n.useState(!1),l=B(),p=()=>{u(!o)},g=s=>{l(W(s))};n.useEffect(()=>{document.title="Продукты"},[]);const c=()=>e.jsx("div",{className:d.skeletonContainer,children:new Array(5).fill(null).map((s,_)=>e.jsx(se,{speed:2,width:198,height:279,viewBox:"0 0 198 279",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:e.jsx("rect",{x:"27",y:"22",rx:"12",ry:"12",width:"198",height:"279"})},_))});return e.jsxs("section",{className:d.container,children:[e.jsxs("div",{className:d["bread-background"],children:[e.jsx("img",{height:205,src:J,alt:""}),e.jsxs("div",{className:d["bread-background__title"],children:[e.jsxs(y,{to:"/",children:[e.jsx(Q,{}),e.jsx("h1",{children:"Home"})]}),e.jsx("span",{children:e.jsx(Y,{})}),e.jsx(y,{to:"/products",children:e.jsx("h1",{children:"Products"})})]})]}),e.jsxs("div",{className:d.overlay,children:[e.jsxs("div",{className:`${d["productsCategories-container"]} ${o?d["hide-ul"]:""}`,children:[e.jsxs("div",{className:d["minus-block"],style:{display:"flex",gap:"176px"},children:[e.jsx("h1",{onClick:()=>l(R(1)),children:"Products"}),o?e.jsx(Z,{onClick:p}):e.jsx(D,{onClick:p})]}),e.jsx("div",{className:d["ul-block"],children:t==null?void 0:t.map(s=>e.jsx("ul",{children:e.jsx("li",{onClick:()=>g(s.id),style:{cursor:"pointer"},children:s.name})},s.id))})]}),e.jsxs("div",{className:d["products-container"],children:[e.jsx("h1",{children:"Products"}),e.jsx("div",{className:d["products-container__box"],children:r?c():!a||(a==null?void 0:a.length)===0?e.jsx("p",{style:{fontStyle:"italic"},children:"К сожалению 😕 не удалось получить товары. Попробуйте повторить попытку позже."}):a==null?void 0:a.map(s=>e.jsxs(y,{to:`/products/${s.id}`,className:d["products-container__box_cart"],children:[e.jsx("img",{src:`http://10.251.4.131/kurbonoff/upload?filename=${s.image_path}`,alt:"image"}),e.jsx("p",{children:s==null?void 0:s.title})]},s.id))}),e.jsx("div",{className:d["products-container__total-count"],children:e.jsx("p",{children:a&&a.length>0&&e.jsxs(e.Fragment,{children:["Общее количество продуктов: ",e.jsx("span",{children:i})]})})})]})]})]})},pe=()=>{const t=B(),a=f(({products:c})=>c.categoriesData),i=f(({products:c})=>c.records),r=f(({products:c})=>c.total_count),o=f(({products:c})=>c.isLoading),u=f(({products:c})=>c.total_pages),[l,p]=n.useState(1);n.useEffect(()=>{t(X()),t(R({page:l}))},[t,l]);const g=c=>{c>0&&c<=u&&p(c)};return e.jsxs(e.Fragment,{children:[e.jsx(ie,{categoriesData:a,records:i,total_count:r,isLoading:o}),e.jsx("div",{style:{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs("div",{children:[e.jsx($,{disabled:l===1,onClick:()=>g(l-1),style:{marginRight:8},children:"Назад"}),e.jsx("span",{children:`Страница ${l} из ${u}`}),e.jsx($,{disabled:l===u,onClick:()=>g(l+1),style:{marginLeft:8},children:"Вперед"})]})})]})};export{pe as default};