"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"useSalter",description:"A React hook for generating random salt hex values and validating them."},l="useSalter",s={unversionedId:"frontend/react/hooks/contracts/use-salter",id:"frontend/react/hooks/contracts/use-salter",title:"useSalter",description:"A React hook for generating random salt hex values and validating them.",source:"@site/docs/frontend/react/hooks/contracts/use-salter.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-salter",permalink:"/frontend/react/hooks/contracts/use-salter",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-salter.md",tags:[],version:"current",frontMatter:{title:"useSalter",description:"A React hook for generating random salt hex values and validating them."},sidebar:"reference",previous:{title:"useMetadata",permalink:"/frontend/react/hooks/contracts/use-metadata"},next:{title:"useTx",permalink:"/frontend/react/hooks/contracts/use-tx"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesalter"},"useSalter"),(0,a.kt)("p",null,"A React hook for generating random salt hex values and validating them."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx"},"example in the playground dApp"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSalter } from 'useink'\n\nexport const DeployPage: React.FC = () => {\n  const S = useSalter();\n\n  return (\n    <div>\n      <label htmlFor='salt'>Salt</label>\n      <input\n        value={S.salt}\n        onChange={(e) => S.set(e.target.value)}\n      />\n\n      {S.error && <p>{S.error}</p>\n\n      <button\n        type='button'\n        onClick={S.regenerate}\n      >\n        Regenerate\n      </button>\n    </div>\n  )\n};\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  salt: string;\n  regenerate: () => void;\n  set: (salt: string) => void;\n  error?: SalterError;\n  resetState: () => void;\n}\n\nexport enum SalterError {\n  InvalidHash = 'Invalid salt hash value.',\n}\n")))}d.isMDXComponent=!0}}]);