"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),v=i,d=u["".concat(c,".").concat(v)]||u[v]||f[v]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},22870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Overview",hide_title:!0,slug:"/basics/contract-testing/overview"},s=void 0,a={unversionedId:"testing/overview",id:"version-5.x/testing/overview",title:"Overview",description:"ink! supports three different stages of testing: unit, integration",source:"@site/versioned_docs/version-5.x/testing/overview.md",sourceDirName:"testing",slug:"/basics/contract-testing/overview",permalink:"/5.x/basics/contract-testing/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/overview.md",tags:[],version:"5.x",frontMatter:{title:"Overview",hide_title:!0,slug:"/basics/contract-testing/overview"},sidebar:"reference",previous:{title:"Sirato",permalink:"/5.x/basics/verification/sirato"},next:{title:"Off-chain Tests",permalink:"/5.x/basics/contract-testing/off-chain"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ink! supports three different stages of testing: unit, integration\nand end-to-end tests. On this page we'll explain what the purpose\nof each stage is about and how to use it."),(0,i.kt)("img",{src:"/img/testing.png"}),(0,i.kt)("p",null,"Generally you can think of those three types of testing as a pyramid\nwith the top being the most elaborate test. The End-to-End (E2E)\ntests at the top will test the lower layers of the pyramid as part\nof them."))}f.isMDXComponent=!0}}]);