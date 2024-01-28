import{r as R}from"./index-1b03fe98.js";var A={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=R,b=Symbol.for("react.element"),M=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,I=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,l){var s,a={},d=null,_=null;l!==void 0&&(d=""+l),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(_=r.ref);for(s in r)W.call(r,s)&&!N.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)a[s]===void 0&&(a[s]=r[s]);return{$$typeof:b,type:e,key:d,ref:_,props:a,_owner:I.current}}p.Fragment=M;p.jsx=C;p.jsxs=C;A.exports=p;var m=A.exports;const c=({message:e})=>m.jsx("div",{children:e});try{c.displayName="TestMessage",c.__docgenInfo={description:"メッセージを表示するテストコンポーネント",displayName:"TestMessage",props:{message:{defaultValue:null,description:"メッセージ",name:"message",required:!0,type:{name:"string"}}}}}catch{}const{useGlobals:k,useParameter:w}=__STORYBOOK_MODULE_PREVIEW_API__;var i="myAddonParameter",g={},L=()=>{let[e]=k();return{...w(i,g)??g,...e[i]}},D=e=>({[i]:e});const U=e=>{const r=L();return m.jsxs("div",{children:[m.jsx(c,{...e}),m.jsxs("div",{children:["myAddonState: ",JSON.stringify(r)]})]})},q={title:"TestMessage",render:U,component:c,args:{message:"Hello World"}},t={},o={args:{message:"こんにちは！"}},n={parameters:{...D({num:10})}},u={args:{message:"こんにちは！"},parameters:{...D({flag:!0,num:10})}};var f,y,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,F,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var O,P,B;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    ...createAssignableParametersForMyAddon({
      num: 10
    })
  }
}`,...(B=(P=n.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var S,T,h;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    message: "こんにちは！"
  },
  parameters: {
    ...createAssignableParametersForMyAddon({
      flag: true,
      num: 10
    })
  }
}`,...(h=(T=u.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const J=["Default","Text","DefaultWithParams","TextWithParams"];export{t as Default,n as DefaultWithParams,o as Text,u as TextWithParams,J as __namedExportsOrder,q as default};
