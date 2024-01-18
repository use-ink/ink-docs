"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3351],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(g,l(l({ref:a},p),{},{components:n})):t.createElement(g,l({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16160:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const o={title:"Trabajando con Mapping",slug:"/datastructures/mapping",hide_title:!0},l=void 0,i={unversionedId:"datastructures/mapping",id:"version-5.x/datastructures/mapping",title:"Trabajando con Mapping",description:"En esta secci\xf3n demostramos como trabajar con ink! Mapping.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/es/5.x/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/mapping.md",tags:[],version:"5.x",frontMatter:{title:"Trabajando con Mapping",slug:"/datastructures/mapping",hide_title:!0},sidebar:"reference",previous:{title:"Working with StorageVec",permalink:"/es/5.x/datastructures/storagevec"},next:{title:"Estructura del storage",permalink:"/es/5.x/datastructures/storage-layout"}},s={},c=[{value:"Ejemplo: Usando un <code>Mapping</code>",id:"ejemplo-usando-un-mapping",level:2},{value:"Consideraciones al usar el tipo <code>Mapping</code>",id:"consideraciones-al-usar-el-tipo-mapping",level:2},{value:"Comportamiento de carga del Storage",id:"comportamiento-de-carga-del-storage",level:3},{value:"Actualizando valores",id:"actualizando-valores",level:3}],p={toc:c},u="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"trabajando-con-mapping"},"Trabajando con Mapping"),(0,r.kt)("p",null,"En esta secci\xf3n demostramos como trabajar con ink! ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Aqu\xed vemos un ejemplo de un mapping entre un usuario y su ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    /// Asigna un balance a cada cuenta.\n    balances: ink::storage::Mapping<AccountId, Balance>,\n}\n")),(0,r.kt)("p",null,'Esto significa que para una clave dada, se puede almacenar una \xfanica instancia de un tipo de valor. En este caso, se le acredita a cada "usuario" su propio balance.'),(0,r.kt)("h2",{id:"ejemplo-usando-un-mapping"},"Ejemplo: Usando un ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")),(0,r.kt)("p",null,"El siguiente ejemplo de contrato utiliza un ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," para que cualquiera pueda depositar y retirar el balance de su propia cuenta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        /// Asigna un balance a cada AccountId\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl MyContract {\n        /// Constructor para inicializar el contrato con un mapping vac\xedo.\n        #[ink(constructor, payable)]\n        pub fn new() -> Self {\n            let balances = Mapping::default();\n            Self { balances }\n        }\n\n        /// Recuperar el balance de quien llama al mensaje.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Option<Balance> {\n            let caller = self.env().caller();\n            self.balances.get(caller)\n        }\n\n        /// Acreditar m\xe1s dinero al contrato. \n        #[ink(message, payable)]\n        pub fn transfer(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap_or(0);\n            let endowment = self.env().transferred_value();\n            self.balances.insert(caller, &(balance + endowment));\n        }\n\n        /// Retirar todo el balance del contrato.\n        pub fn withdraw(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap();\n            self.balances.remove(caller);\n            self.env().transfer(caller, balance).unwrap()\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"consideraciones-al-usar-el-tipo-mapping"},"Consideraciones al usar el tipo ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")),(0,r.kt)("p",null,"Uno de lo prop\xf3sitos principales del ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," de ink! es permitir el almacenamiento de muchos valores."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Hay muchas estructuras de datos adicionales accesibles a trav\xe9s de ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::prelude::collections"),"\ntal como ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"BTreeMap")," (para mencionar algunos). Tener en cuenta que estas estructuras de datos exhiben el comportamiento de carga del storage ",(0,r.kt)("inlineCode",{parentName:"p"},"Packed"),", a diferencia del ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," ink!")),(0,r.kt)("h3",{id:"comportamiento-de-carga-del-storage"},"Comportamiento de carga del Storage"),(0,r.kt)("p",null,"Cada valor de ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," tiene su propia key de storage. Esto significa que los ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s se cargan de manera diferida en ink!. En otras palabras, si su mensaje tiene acceso a una sola key de un mapping, no cargar\xe1 el mapping completo sino s\xf3lo el valor al que se est\xe1 teniendo acceso."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Esto genera un solo acceso al storage y la decodificaci\xf3n de una sola struct "MyValue" \n// sin importar cu\xe1ntos elementos hayan dentro del mapping.\nlet foo: MyValue = my_mapping.get(0)?;\n\nfor n in 0..5 {\n    // Esto genera un solo acceso al storage y una decodificaci\xf3n para cada iteraci\xf3n.\n    // No es posible "obtener" todos los pares de key/value directamente de una sola vez.\n    let bar: MyValue = my_mapping.get(n)?;\n}\n')),(0,r.kt)("p",null,"Adem\xe1s, los valores del mapping no tienen una disposici\xf3n de storage contiguo, y no es posible iterar el contenido de un map."),(0,r.kt)("h3",{id:"actualizando-valores"},"Actualizando valores"),(0,r.kt)("p",null,"El lector puede haber notado que el acceso a valores de mapping a trav\xe9s del m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::get()"),' dar\xe1 como resultado un valor propio (copia local), a diferencia de una referencia directa dentro del storage. Los cambios en este valor no se ver\xe1n reflejados "autom\xe1ticamente" en el storage del contrato. Para evitar este error com\xfan, el valor debe ser insertado  nuevamente en la misma key luego de haber sido modificado. La funci\xf3n ',(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," del ejemplo anterior ilustra esto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn transfer(&mut self) {\n    let caller = self.env().caller(); \n    // `balance` es un valor local y no una referencia al valor en el storage!\n    let balance = self.balances.get(caller).unwrap_or(0);\n    let endowment = self.env().transferred_value();\n    // La siguiente l\xednea de c\xf3digo no tendr\xeda ning\xfan efecto en el balance guardado en el storage del contrato de la cuenta que llama:\n    //\n    // balance += endowment;\n    //\n    // En cambio, usamos la funci\xf3n `insert` de la siguiente manera para sobrescribirlo:\n    self.balances.insert(caller, &(balance + endowment));\n}\n")))}d.isMDXComponent=!0}}]);