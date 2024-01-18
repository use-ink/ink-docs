"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6322],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Working with Mapping",slug:"/datastructures/mapping",hide_title:!0},l=void 0,o={unversionedId:"datastructures/mapping",id:"version-5.x/datastructures/mapping",title:"Working with Mapping",description:"In this section we demonstrate how to work with ink! Mapping.",source:"@site/versioned_docs/version-5.x/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/5.x/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/mapping.md",tags:[],version:"5.x",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping",hide_title:!0},sidebar:"reference",previous:{title:"Working with StorageVec",permalink:"/5.x/datastructures/storagevec"},next:{title:"Storage Layout",permalink:"/5.x/datastructures/storage-layout"}},s={},p=[{value:"Example: Using a <code>Mapping</code>",id:"example-using-a-mapping",level:2},{value:"Considerations when using the <code>Mapping</code> type",id:"considerations-when-using-the-mapping-type",level:2},{value:"Storage loading behavior",id:"storage-loading-behavior",level:3},{value:"Use fallible storage methods for dynamically sized values",id:"use-fallible-storage-methods-for-dynamically-sized-values",level:3},{value:"Updating values",id:"updating-values",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"working-with-mapping"},"Working with Mapping"),(0,r.kt)("p",null,"In this section we demonstrate how to work with ink! ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Here is an example of a mapping from a user to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    /// Assign a balance to every account.\n    balances: ink::storage::Mapping<AccountId, Balance>,\n}\n")),(0,r.kt)("p",null,'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets credited their own balance.'),(0,r.kt)("h2",{id:"example-using-a-mapping"},"Example: Using a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")),(0,r.kt)("p",null,"The following example contract utilizes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," so that anyone can deposit and withdraw\nbalance for their own account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        /// Assign a balance to every account ID\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl MyContract {\n        /// Constructor to initialize the contract with an empty mapping.\n        #[ink(constructor, payable)]\n        pub fn new() -> Self {\n            let balances = Mapping::default();\n            Self { balances }\n        }\n\n        /// Retrieve the balance of the caller.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Option<Balance> {\n            let caller = self.env().caller();\n            self.balances.get(caller)\n        }\n\n        /// Credit more money to the contract.\n        #[ink(message, payable)]\n        pub fn transfer(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap_or(0);\n            let endowment = self.env().transferred_value();\n            self.balances.insert(caller, &(balance + endowment));\n        }\n\n        /// Withdraw all your balance from the contract.\n        pub fn withdraw(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap();\n            self.balances.remove(caller);\n            self.env().transfer(caller, balance).unwrap()\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"considerations-when-using-the-mapping-type"},"Considerations when using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")," type"),(0,r.kt)("p",null,"One of the main purposes of the ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," is to allow storing a lot of values."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are many additional data structures accessible under ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::collections"),",\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"BTreeMap")," (to name a few). Note that these data structures all exhibit\n",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," storage loading behavior, as opposed to the ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"!")),(0,r.kt)("h3",{id:"storage-loading-behavior"},"Storage loading behavior"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," value lives under it's own storage key. Briefly, this means that ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s\nare lazily loaded in ink!. In other words, if your message only accesses a single key of a\nmapping, it will not load the whole mapping but only the value being accessed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// This causes only a single storage access and the decoding of a single "MyValue" struct,\n// no matter how many elements there are inside the mapping.\nlet foo: MyValue = my_mapping.get(0)?;\n\nfor n in 0..5 {\n    // This causes a storage access and a decoding operation for each loop iteration.\n    // It is not possible to "fetch" all key/value pairs directly at once.\n    let bar: MyValue = my_mapping.get(n)?;\n}\n')),(0,r.kt)("p",null,"Furthermore, it follows that mapping values do not have a contiguous storage layout, and it is\nnot possible to iterate over the contents of a map."),(0,r.kt)("h3",{id:"use-fallible-storage-methods-for-dynamically-sized-values"},"Use fallible storage methods for dynamically sized values"),(0,r.kt)("p",null,"Reading from or writing to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," implies encoding or decoding\nthe according ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," key and value. This happens transparently under the hood.\nHowever, because the static buffer used to store the encoded data is of limited\nsize, it can fail and trap the contract."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The static buffer defaults to 16KB in size.")),(0,r.kt)("p",null,"This can be an issue for values with dynamically sized types.\nIt is recommended to use fallible storage methods (prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"try_"),") for\n",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s containing dynamically sized values."),(0,r.kt)("p",null,"Consider a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," values like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    on_chain_log: Mapping<u64, String>,\n    nonce: u64,\n}\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," overgrows the static buffer size, it will no longer fit into the mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn do_something(&mut self, data: String) {\n    let caller = self.env().caller();\n\n    let log_message = format!("{caller:?}: {data}");\n\n    // Panics if log_message overgrows the static buffer size!\n    self.on_chain_log.insert(&self.nonce, &log_message);\n\n    self.nonce += 1;\n}\n')),(0,r.kt)("p",null,"Instead, consider using the fallible ",(0,r.kt)("inlineCode",{parentName:"p"},"try_insert")," method to handle the situation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn do_something2(&mut self, data: String) {\n    let caller = self.env().caller();\n\n    let log_message = format!("{caller:?}: {data}");\n\n    // `try_insert` will not panic but return an error instead.\n    if self\n        .on_chain_log\n        .try_insert(&self.nonce, &log_message)\n        .is_err()\n    {\n        // We get the chance to handle this problem properly:\n        // Restrain the log message to a size guaranteed to fit.\n        let log_message = format!("{caller:?}: <data omitted>");\n        self.on_chain_log.insert(&self.nonce, &log_message);\n    }\n\n    self.nonce += 1;\n}\n')),(0,r.kt)("p",null,"We provide fallible ",(0,r.kt)("inlineCode",{parentName:"p"},"try_")," versions for all storage operations on ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"."),(0,r.kt)("h3",{id:"updating-values"},"Updating values"),(0,r.kt)("p",null,"The attentive reader may have noticed that accessing mapping values via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::get()"),"\nmethod will result in an owned value (a local copy), as opposed to a direct reference\ninto the storage. Changes to this value won't be reflected in the contract's storage\n\"automatically\". To avoid this common pitfall, the value must be inserted again at the same\nkey after it was modified. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," function from above example illustrates this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn transfer(&mut self) {\n    let caller = self.env().caller();\n    // `balance` is a local value and not a reference to the value on storage!\n    let balance = self.balances.get(caller).unwrap_or(0);\n    let endowment = self.env().transferred_value();\n    // The following line of code would have no effect to the balance of the\n    // caller stored in contract storage:\n    //\n    // balance += endowment;\n    //\n    // Instead, we use the `insert` function to write it back like so:\n    self.balances.insert(caller, &(balance + endowment));\n}\n")))}d.isMDXComponent=!0}}]);