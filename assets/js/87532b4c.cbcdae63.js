"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"useCodeHash",description:"A React hook for validating code hash values for contract code on chain."},c="useCodeHash",s={unversionedId:"frontend/react/hooks/contracts/use-code-hash",id:"frontend/react/hooks/contracts/use-code-hash",title:"useCodeHash",description:"A React hook for validating code hash values for contract code on chain.",source:"@site/docs/frontend/react/hooks/contracts/use-code-hash.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-code-hash",permalink:"/frontend/react/hooks/contracts/use-code-hash",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-code-hash.md",tags:[],version:"current",frontMatter:{title:"useCodeHash",description:"A React hook for validating code hash values for contract code on chain."},sidebar:"reference",previous:{title:"useCallSubscription",permalink:"/frontend/react/hooks/contracts/use-call-subscription"},next:{title:"useContract",permalink:"/frontend/react/hooks/contracts/use-contract"}},i={},l=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecodehash"},"useCodeHash"),(0,o.kt)("p",null,"A React hook for validating code hash values for contract code on chain."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx"},"example in the playground dApp"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCodeHash } from 'useink'\n\nexport const DeployPage: React.FC = () => {\n  const C = useCodeHash();\n\n  return (\n    <div>\n      <label htmlFor='codeHash'>Code Hash</label>\n      <input\n        name='codeHash'\n        value={C.codeHash}\n        onChange={(e) => C.set(e.target.value)}\n      />\n      {C.error && <p>{C.error}</p>}\n    </div>\n  )\n};\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  codeHash: string;\n  set: (hash: string) => void;\n  error?: CodeHashError;\n  resetState: () => void;\n}\n\nexport enum CodeHashError {\n  InvalidHash = "Invalid code hash value."\n}\n')))}p.isMDXComponent=!0}}]);