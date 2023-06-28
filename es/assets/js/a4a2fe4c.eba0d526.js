"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={title:"System::ExtrinsicFailed",description:"u"},a="System::ExtrinsicFailed",o={unversionedId:"frontend/utils/events/system/extrinsic-failed",id:"frontend/utils/events/system/extrinsic-failed",title:"System::ExtrinsicFailed",description:"u",source:"@site/docs/frontend/utils/events/system/extrinsic-failed.md",sourceDirName:"frontend/utils/events/system",slug:"/frontend/utils/events/system/extrinsic-failed",permalink:"/es/frontend/utils/events/system/extrinsic-failed",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/events/system/extrinsic-failed.md",tags:[],version:"current",frontMatter:{title:"System::ExtrinsicFailed",description:"u"},sidebar:"reference",previous:{title:"Contracts::Instantiated",permalink:"/es/frontend/utils/events/contracts/instantiated"},next:{title:"planckToDecimal",permalink:"/es/frontend/utils/helpers/planck-to-decimal"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"systemextrinsicfailed"},"System::ExtrinsicFailed"),(0,i.kt)("p",null,"Utilties for use with the ExtrinsicFailed emitted by the System pallet during a\ntransaction."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx"},"example in the playground dApp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { formatExtrinsicFailed, isExtrinsicFailedEvent, asExtrinsicFailedEvent } from 'useink/utils';\n\nconsole.log(isExtrinsicFailedEvent(eventRecord)) // true or false\n\nconst failed = asExtrinsicFailedEvent(eventRecord);\nconsole.log(failed); // ExtrinsicFailed or undefined\n\nconst errorMessage = formatExtrinsicFailed(eventRecord, api);\nconsole.log(errorMessage); // string or undefined\n")),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\n// asExtrinsicFailedEvent\n{\n  name: string;\n  event: {\n    data: {\n      dispatchError: DispatchError;\n      dispatchInfo: DispatchInfo;\n    };\n  };\n  phase: Phase;\n  event: Event;\n  topics: Vec<Hash>;\n};\n")))}u.isMDXComponent=!0}}]);