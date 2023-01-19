"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Working with Mapping",slug:"/datastructures/mapping"},o=void 0,l={unversionedId:"datastructures/mapping",id:"version-4.0.0-alpha.1/datastructures/mapping",title:"Working with Mapping",description:"TODO: Beware, this page is no longer up to date for 4.0!",source:"@site/versioned_docs/version-4.0.0-alpha.1/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/4.0.0-alpha.1/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/datastructures/mapping.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Overview",permalink:"/4.0.0-alpha.1/datastructures/overview"},next:{title:"Spread Storage Layout",permalink:"/4.0.0-alpha.1/datastructures/spread-storage-layout"}},p={},s=[{value:"Initializing a Mapping",id:"initializing-a-mapping",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO: Beware, this page is no longer up to date for 4.0!")),(0,a.kt)("p",null,"In this section we want to demonstrate how to work with ink! ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0-beta/ink_storage/struct.Mapping.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,a.kt)("p",null,"Here is an example of a mapping from a user to a number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(SpreadAllocate)]\npub struct MyContract {\n    // Store a mapping from AccountIds to a u32\n    map: ink_storage::Mapping<AccountId, u32>,\n}\n")),(0,a.kt)("p",null,'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets their own number. '),(0,a.kt)("h2",{id:"initializing-a-mapping"},"Initializing a Mapping"),(0,a.kt)("p",null,"In order to correctly initialize a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," we need two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An implementation of the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_storage/4.0.0-beta/ink_storage/traits/trait.SpreadAllocate.html"},(0,a.kt)("inlineCode",{parentName:"a"},"SpreadAllocate"))," trait on our storage struct"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_lang/4.0.0-beta/ink_lang/utils/fn.initialize_contract.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ink_lang::utils::initalize_contract"))," initializer")),(0,a.kt)("p",null,"Not initializing storage before you use it is a common mistake that can break your smart\ncontract. If you do not initialize your ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s correctly you may end up with\ndifferent ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s operating on the same set of storage entries \ud83d\ude31."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#![cfg_attr(not(feature = \"std\"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct MyContract {\n        // Store a mapping from AccountIds to a u32\n        map: ink_storage::Mapping<AccountId, u32>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(count: u32) -> Self {\n            // This call is required in order to correctly initialize the\n            // `Mapping`s of our contract.\n            ink_lang::utils::initialize_contract(|contract: &mut Self| {\n                let caller = Self::env().caller();\n                contract.map.insert(&caller, &count);\n            })\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            // Even though we're not explicitly initializing the `Mapping`,\n            // we still need to call this\n            ink_lang::utils::initialize_contract(|_| {})\n        }\n\n        // Grab the number at the caller's AccountID, if it exists\n        #[ink(message)]\n        pub fn get(&self) -> u32 {\n            let caller = Self::env().caller();\n            self.map.get(&caller).unwrap_or_default()\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);