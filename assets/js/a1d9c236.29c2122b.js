"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},i=void 0,s={unversionedId:"datastructures/spread-storage-layout",id:"version-4.0.0-alpha.1/datastructures/spread-storage-layout",title:"Spread Storage Layout",description:"TODO",source:"@site/versioned_docs/version-4.0.0-alpha.1/datastructures/spread-storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/spread-storage-layout",permalink:"/4.0.0-alpha.1/datastructures/spread-storage-layout",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/datastructures/spread-storage-layout.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},sidebar:"reference",previous:{title:"Working with Mapping",permalink:"/4.0.0-alpha.1/datastructures/mapping"},next:{title:"Custom Data Structures",permalink:"/4.0.0-alpha.1/datastructures/custom-datastructure"}},l={},p=[{value:"Storage Organization",id:"storage-organization",level:3},{value:"Spreading",id:"spreading",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"TODO"),(0,n.kt)("p",{parentName:"admonition"},"Beware, this page is no longer up to date for 4.0!")),(0,n.kt)("h3",{id:"storage-organization"},"Storage Organization"),(0,n.kt)("p",null,"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/kv.svg",alt:"Storage Organization: Layout"})),(0,n.kt)("p",null,"ink!'s storage operates by storing and loading entries into and from a single storage\ncell. At the moment there is no way to customize this behaviour. Depending on the data\nwe're dealing with, this can end up being good or bad."),(0,n.kt)("p",null,"For example, if we have a somewhat small ",(0,n.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec")," loading all the elements\nat the same time can be advantegous - especially if we expect our message to interact\nwith most of them in a single call."),(0,n.kt)("p",null,"On the other hand, this can be problematic if we're loading a large ",(0,n.kt)("inlineCode",{parentName:"p"},"Vec")," and only\noperating on a few elements."),(0,n.kt)("h3",{id:"spreading"},"Spreading"),(0,n.kt)("p",null,"ink! spreads information to as many cells as possible. For example if you have the\nfollowing ",(0,n.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct every field will live in its own single storage cell.\nNote that for ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," all 32 bytes will share the same cell!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Spread {\n    a: i32,\n    b: [u8; 32],\n}\n")),(0,n.kt)("p",null,"The following schema depicts the storage layout for a vector with three elements,\npersisted to storage in a spread layout."),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/spread.svg",alt:"Storage Organization: Spreading"})))}u.isMDXComponent=!0}}]);