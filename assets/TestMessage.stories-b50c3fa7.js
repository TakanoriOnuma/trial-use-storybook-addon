import{r as L}from"./index-1b03fe98.js";var b={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=L,$=Symbol.for("react.element"),I=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,N=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var a,n={},i=null,g=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(g=r.ref);for(a in r)W.call(r,a)&&!k.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)n[a]===void 0&&(n[a]=r[a]);return{$$typeof:$,type:e,key:i,ref:g,props:n,_owner:N.current}}l.Fragment=I;l.jsx=C;l.jsxs=C;b.exports=l;var s=b.exports;const d=({message:e})=>s.jsx("div",{children:e});try{d.displayName="TestMessage",d.__docgenInfo={description:"メッセージを表示するテストコンポーネント",displayName:"TestMessage",props:{message:{defaultValue:null,description:"メッセージ",name:"message",required:!0,type:{name:"string"}}}}}catch{}const{useGlobals:w,useParameter:U}=__STORYBOOK_MODULE_PREVIEW_API__;var p="myAddonParameter",y={},G=()=>{let[e]=w();return{...U(p,y)??y,...e[p]}},D=e=>({[p]:e});const{useGlobals:J,useParameter:V}=__STORYBOOK_MODULE_PREVIEW_API__;var _="myAddonParameterLegacy",f={},Y=()=>{let[e]=J();return{...V(_,f)??f,...e[_]}},j=e=>({[_]:e});const q=e=>{const r=G(),t=Y();return s.jsxs("div",{children:[s.jsx(d,{...e}),s.jsxs("div",{children:["myAddonState: ",JSON.stringify(r)]}),s.jsxs("div",{children:["myAddonStateLegacy: ",JSON.stringify(t)]})]})},H={title:"TestMessage",render:q,component:d,args:{message:"Hello World"}},o={},u={args:{message:"こんにちは！"}},m={parameters:{...D({num:10}),...j({num:10})}},c={args:{message:"こんにちは！"},parameters:{...D({flag:!0,num:10}),...j({flag:!0,num:10})}};var v,x,P;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var A,O,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  }
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,S,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    ...createAssignableParametersForMyAddon({
      num: 10
    }),
    ...createAssignableParametersForMyAddonLegacy({
      num: 10
    })
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,h,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  },
  parameters: {
    ...createAssignableParametersForMyAddon({
      flag: true,
      num: 10
    }),
    ...createAssignableParametersForMyAddonLegacy({
      flag: true,
      num: 10
    })
  }
}`,...(R=(h=c.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const z=["Default","Text","DefaultWithParams","TextWithParams"];export{o as Default,m as DefaultWithParams,u as Text,c as TextWithParams,z as __namedExportsOrder,H as default};
