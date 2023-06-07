"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5590],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),c=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,s(s({ref:e},l),{},{components:r})):a.createElement(f,s({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[p]="string"==typeof t?t:n,s[1]=u;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6848:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Custom Data Structures",slug:"/datastructures/custom-datastructure"},s=void 0,u={unversionedId:"datastructures/custom",id:"version-3.x/datastructures/custom",title:"Custom Data Structures",description:"While the inkstorage crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core SpreadLayout/PackedLayout traits (and the StorageLayout trait for supporting the metadata generated for the .contract bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the inkstorage data structures as long as they fulfill the mere requirements stated by those two traits.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/datastructures/custom.md",sourceDirName:"datastructures",slug:"/datastructures/custom-datastructure",permalink:"/es/3.x/datastructures/custom-datastructure",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/custom.md",tags:[],version:"3.x",frontMatter:{title:"Custom Data Structures",slug:"/datastructures/custom-datastructure"},sidebar:"reference",previous:{title:"Spread Storage Layout",permalink:"/es/3.x/datastructures/spread-storage-layout"},next:{title:"Overview",permalink:"/es/3.x/examples"}},i={},c=[],l={toc:c},p="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(p,(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While the ",(0,n.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core ",(0,n.kt)("inlineCode",{parentName:"p"},"SpreadLayout"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"PackedLayout")," traits (and the ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageLayout")," trait for supporting the metadata generated for the ",(0,n.kt)("inlineCode",{parentName:"p"},".contract")," bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the ",(0,n.kt)("inlineCode",{parentName:"p"},"ink_storage")," data structures as long as they fulfill the mere requirements stated by those two traits."),(0,n.kt)("p",null,"A basic example of a custom struct is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"struct Inner {\n    value: bool\n}\n\n#[ink(storage)]\npub struct MyContract {\n    inner: Inner\n}\n")),(0,n.kt)("p",null,"Compiling the above will result in errors. While having an inner struct which holds only a boolean might not be the best idea, it serves well to illustrate how to implement the trait:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"impl SpreadLayout for Inner {\n    const FOOTPRINT: u64 = 1;\n\n    fn pull_spread(ptr: &mut KeyPtr) -> Self {\n        Self {\n            value: SpreadLayout::pull_spread(ptr),\n        }\n    }\n\n    fn push_spread(&self, ptr: &mut KeyPtr) {\n        SpreadLayout::push_spread(&self.value, ptr);\n    }\n\n    fn clear_spread(&self, ptr: &mut KeyPtr) {\n        SpreadLayout::clear_spread(&self.value, ptr);\n    }\n}\n\n")),(0,n.kt)("p",null,"You can check what each method does in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadLayout.html"},"trait's docs"),". Check how some data structures are implemented, such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/3.3.1/src/ink_storage/lazy/mapping.rs.html#113"},"Mapping"),"."))}d.isMDXComponent=!0}}]);