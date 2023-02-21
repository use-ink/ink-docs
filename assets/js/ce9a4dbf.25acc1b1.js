"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Selectors",hide_title:!0,slug:"/basics/selectors"},i="Selectors",l={unversionedId:"basics/selectors",id:"basics/selectors",title:"Selectors",description:"Selectors in ink! are a language agnostic way of identifying constructors and messages.",source:"@site/docs/basics/selectors.md",sourceDirName:"basics",slug:"/basics/selectors",permalink:"/basics/selectors",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/selectors.md",tags:[],version:"current",frontMatter:{title:"Selectors",hide_title:!0,slug:"/basics/selectors"},sidebar:"reference",previous:{title:"Events",permalink:"/basics/events"},next:{title:"Trait Definitions",permalink:"/basics/trait-definitions"}},s={},c=[{value:"Selector Calculation",id:"selector-calculation",level:2},{value:"Selector Calculation: ink! Traits",id:"selector-calculation-ink-traits",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selectors"},"Selectors"),(0,r.kt)("p",null,"Selectors in ink! are a language agnostic way of identifying constructors and messages.\nThey are four-byte hexadecimal strings which look something like: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x633aa551"),"."),(0,r.kt)("p",null,"You can find the selector of an ink! constructor or message in your\n",(0,r.kt)("a",{parentName:"p",href:"/basics/metadata"},"contract metadata")," by looking for the ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," field of the dispatchable\nyou're interested in."),(0,r.kt)("p",null,"Here is an example of how you can grab the message name and selector from your contract\nmetadata using ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat target/ink/flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"flip: 0x633aa551"\n')),(0,r.kt)("h2",{id:"selector-calculation"},"Selector Calculation"),(0,r.kt)("p",null,"If you do not have access to a contract's metadata, you can also calculate it yourself."),(0,r.kt)("p",null,"The algorithm ink! uses is fairly straightforward:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get ",(0,r.kt)("em",{parentName:"li"},"just")," the name of the constructor or message"),(0,r.kt)("li",{parentName:"ol"},"Compute the ",(0,r.kt)("inlineCode",{parentName:"li"},"BLAKE2")," hash of the name"),(0,r.kt)("li",{parentName:"ol"},"Take the first four bytes of the hash as the selector")),(0,r.kt)("p",null,"Let's walk through a short example of what this looks like in practice. Consider the\nfollowing message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\nfn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n    unimplemented!()\n}\n")),(0,r.kt)("p",null,"To calculate the selector we:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Grab the name of the message, ",(0,r.kt)("inlineCode",{parentName:"li"},"frobinate")),(0,r.kt)("li",{parentName:"ol"},"Compute ",(0,r.kt)("inlineCode",{parentName:"li"},'BLAKE2("frobinate") = 0x8e39d7f22ef4f9f1404fe5200768179a8b4f2b67799082d7b39f6a8ca82da8f1')),(0,r.kt)("li",{parentName:"ol"},"Grab the first four bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x8e39d7f2"))),(0,r.kt)("h2",{id:"selector-calculation-ink-traits"},"Selector Calculation: ink! Traits"),(0,r.kt)("p",null,"These rules change a bit if you define any messages using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[ink::trait_defintion]"),"\n",(0,r.kt)("a",{parentName:"p",href:"/basics/trait-definitions"},"macro"),". For our first step, instead of taking ",(0,r.kt)("em",{parentName:"p"},"just")," the\nmessage name, we now also add the ",(0,r.kt)("em",{parentName:"p"},"trait name")," to the selector calculation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat target/ink/trait-flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"Flip::flip: 0xaa97cade"\n')),(0,r.kt)("p",null,"Let's see what this would look like in practice. Consider the following trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::trait_definition]\npub trait Frobinate {\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool;\n}\n\n-- snip --\n\nimpl Frobinate for Contract {\n    #[ink(message)]\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n        unimplemented!()\n    }\n}\n")),(0,r.kt)("p",null,"To calculate the selector we:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Grab the name of the trait ",(0,r.kt)("strong",{parentName:"li"},"and")," the name of the message, ",(0,r.kt)("inlineCode",{parentName:"li"},"Frobinate::frobinate")),(0,r.kt)("li",{parentName:"ol"},"Compute ",(0,r.kt)("inlineCode",{parentName:"li"},'BLAKE2("Frobinate::frobinate") = 0x8915412ad772b2a116917cf75df4ba461b5808556a73f729bce582fb79200c5b')),(0,r.kt)("li",{parentName:"ol"},"Grab the first four bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x8915412a"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't worry if you're not able to calculate the ",(0,r.kt)("inlineCode",{parentName:"p"},"BLAKE2")," hash of a string by hand. You\ncan use ",(0,r.kt)("a",{parentName:"p",href:"https://www.shawntabrizi.com/substrate-js-utilities/"},"Shawn's Substrate Utilities"),"\nto do it for you!")))}f.isMDXComponent=!0}}]);