"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[552],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(k,l(l({ref:a},i),{},{components:t})):n.createElement(k,l({ref:a},i))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23271:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={title:"Formato de la Metadata",slug:"/datastructures/storage-in-metadata",hide_title:!0},l=void 0,d={unversionedId:"datastructures/storage-in-metadata",id:"datastructures/storage-in-metadata",title:"Formato de la Metadata",description:"La estructura del storage de un contrato se ve reflejada dentro de la metadata. Permite a herramientas de terceros trabajar con un contrato y poder mejorar la comprensi\xf3n de la estructura del storage de cualquier contrato.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/datastructures/storage-in-metadata.md",sourceDirName:"datastructures",slug:"/datastructures/storage-in-metadata",permalink:"/es/datastructures/storage-in-metadata",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/storage-in-metadata.md",tags:[],version:"current",frontMatter:{title:"Formato de la Metadata",slug:"/datastructures/storage-in-metadata",hide_title:!0},sidebar:"reference",previous:{title:"Estructuras de Datos Personalizadas",permalink:"/es/datastructures/custom-datastructure"},next:{title:"Introducci\xf3n",permalink:"/es/frontend/overview"}},c={},s=[{value:"C\xe1lculo de la key del storage para valores de un ink! <code>Mapping</code>",id:"c\xe1lculo-de-la-key-del-storage-para-valores-de-un-ink-mapping",level:2},{value:"Accediendo a elementos del storage con la llamada de runtime <code>contractsApi</code>",id:"accediendo-a-elementos-del-storage-con-la-llamada-de-runtime-contractsapi",level:2},{value:"Accediendo a elementos del storage con la llamada RPC <code>childState</code>",id:"accediendo-a-elementos-del-storage-con-la-llamada-rpc-childstate",level:2},{value:"Encontrando el ID del child trie de los contratos",id:"encontrando-el-id-del-child-trie-de-los-contratos",level:3},{value:"Calcular el <code>PrefixedStorageKey</code> del ID del child trie",id:"calcular-el-prefixedstoragekey-del-id-del-child-trie",level:3},{value:"Calcular la key del storage usando hasheo transparente",id:"calcular-la-key-del-storage-usando-hasheo-transparente",level:3},{value:"Ejemplo completo",id:"ejemplo-completo",level:3}],i={toc:s},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"formato-de-la-metadata"},"Formato de la Metadata"),(0,r.kt)("p",null,"La estructura del storage de un contrato se ve reflejada dentro de la metadata. Permite a herramientas de terceros trabajar con un contrato y poder mejorar la comprensi\xf3n de la estructura del storage de cualquier contrato."),(0,r.kt)("p",null,"Dado un contrato con el siguiente storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    balance: Balance,\n    block: BlockNumber,\n    lazy: Lazy<bool>,\n}\n")),(0,r.kt)("p",null,"El storage se ver\xe1 reflejado dentro de la metadata de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"root": {\n  "layout": {\n    "struct": {\n      "fields": [\n        {\n          "layout": {\n            "leaf": {\n              "key": "0x00000000",\n              "ty": 0\n            }\n          },\n          "name": "balance"\n        },\n        {\n          "layout": {\n            "leaf": {\n              "key": "0x00000000",\n              "ty": 1\n            }\n          },\n          "name": "block"\n        },\n        {\n          "layout": {\n            "root": {\n              "layout": {\n                "leaf": {\n                  "key": "0xb1f4904e",\n                  "ty": 2\n                }\n              },\n              "root_key": "0xb1f4904e"\n            }\n          },\n          "name": "lazy"\n        }\n      ],\n      "name": "MyContract"\n    }\n  },\n  "root_key": "0x00000000"\n}\n')),(0,r.kt)("p",null,"Observamos que la estructura del storage se representa con un \xe1rbol, en el cual los valores tangibles de storage terminan dentro de una ",(0,r.kt)("inlineCode",{parentName:"p"},"leaf"),". A causa de la codificaci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Packed")),", las hojas pueden compartir la misma key del storage, y para acceder a ellas es necesario buscar y decodificar toda la celda que corresponde a esa key."),(0,r.kt)("p",null,"Una ",(0,r.kt)("inlineCode",{parentName:"p"},"root_key")," est\xe1 destinada ya sea a ser utilizada para acceder directamente a un campo de storage ",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," o para servir como la key base para calcular las keys reales necesarias para acceder a los valores de los campos non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," (por ejemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"s)"),(0,r.kt)("h2",{id:"c\xe1lculo-de-la-key-del-storage-para-valores-de-un-ink-mapping"},"C\xe1lculo de la key del storage para valores de un ink! ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mapping")),(0,r.kt)("p",null,"Las keys base del storage siempre tienen un tama\xf1o de 4 bytes. Sin embargo, la API de storage del pallet ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," soporta keys de longitudes arbitrarias. Para acceder a un valor de un mapping, la key del storage de dicho valor se calcula en tiempo de ejecuci\xf3n."),(0,r.kt)("p",null,"La f\xf3rmula para calcular la key base de un storage ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," utilizada para acceder a un valor de mapping que corresponde a la key ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," para un mapping con una key base ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," puede expresarse de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"S = scale::encode(B) + scale::encode(K)\n")),(0,r.kt)("p",null,"En donde la key base ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," es la ",(0,r.kt)("inlineCode",{parentName:"p"},"root_key")," (de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),") encontrada en la metadata del contrato."),(0,r.kt)("p",null,"En otras palabras, codificar con SCALE la key base (root) del mapping y concatenarla con la key codificada con SCALE del valor de mapping para obtener la key del storage real utilizada para acceder al valor mapeado."),(0,r.kt)("p",null,"Dado el siguiente storage de un contrato, que mapea cuentas a un balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Contract {\n    roles: Mapping<AccountId, Balance, ManualKey<0x12345678>>,\n}\n")),(0,r.kt)("p",null,"Ahora supongamos que estamos interesados en encontrar el balance para la cuenta ",(0,r.kt)("inlineCode",{parentName:"p"},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"),". La key del storage se calcula as\xed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Codificar en SCALE la key base del mapping (",(0,r.kt)("inlineCode",{parentName:"li"},"0x12345678u32"),"), da como resultado ",(0,r.kt)("inlineCode",{parentName:"li"},"0x78563412")),(0,r.kt)("li",{parentName:"ol"},"Codificar en SCALE la ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId"),", que ser\xe1\n",(0,r.kt)("inlineCode",{parentName:"li"},"0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),".\nTener en cuenta que primero ser\xe1 necesario convertir el SS58 en una ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId32"),"."),(0,r.kt)("li",{parentName:"ol"},"Concatenar estas dos dar\xe1 como resultado la key\n",(0,r.kt)("inlineCode",{parentName:"li"},"0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let account_id = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";\nlet account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();\nlet storage_key = &(0x12345678u32, account).encode();\nprintln!("0x{}", hex::encode(storage_key));\n// 0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d\n')),(0,r.kt)("h2",{id:"accediendo-a-elementos-del-storage-con-la-llamada-de-runtime-contractsapi"},"Accediendo a elementos del storage con la llamada de runtime ",(0,r.kt)("inlineCode",{parentName:"h2"},"contractsApi")),(0,r.kt)("p",null,"Hay dos maneras de consultar los campos del storage de los smart contracts desde afuera de un contrato. Ambos m\xe9todos son accesibles a trav\xe9s de la UI web de ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js")),"."),(0,r.kt)("p",null,"La manera directa de consultar el storage de contratos es a trav\xe9s de una llamada ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/runtime"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime API")),", utilizando el endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"contractsApi")," provisto por el contracts pallet. El endpoint provee un m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"getStorage"),", que s\xf3lo espera una direcci\xf3n de contrato y una key del storage como argumentos."),(0,r.kt)("p",null,"Por ejemplo, para acceder al struct del root storage correspondiente a la key ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00000000")," de un contrato, s\xf3lo especifique la direcci\xf3n el contrato y la key del storage ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00000000"),". La llamada a la API devolver\xe1 el struct del root del contrato codificado en SCALE."),(0,r.kt)("h2",{id:"accediendo-a-elementos-del-storage-con-la-llamada-rpc-childstate"},"Accediendo a elementos del storage con la llamada RPC ",(0,r.kt)("inlineCode",{parentName:"h2"},"childState")),(0,r.kt)("p",null,"Por detr\xe1s, cada contrato tiene su propio ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/child/index.html"},"child trie"),", donde los elementos del storage son almacenados."),(0,r.kt)("p",null,"Adem\xe1s, el pallet ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," usa ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/struct.Blake2_128Concat.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Blake2 128 Concat"))," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/build/runtime-storage/#transparent-hashing-algorithms"},(0,r.kt)("inlineCode",{parentName:"a"},"Algoritmo de hashing transparente"))," para calcular las keys de storage para cada item almacenado dentro del child trie. Deber\xe1 tener eso en cuenta."),(0,r.kt)("p",null,"Con eso en mente, para acceder directamente a lo items de storage de cualquier contrato on-chain usando una ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"llamada RPC"))," childState, necesitar\xe1 lo siguiente:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El ID del child trie del contrato, representado como una ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/sp-storage/10.0.0/sp_storage/struct.PrefixedStorageKey.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PrefixedStorageKey"))),(0,r.kt)("li",{parentName:"ul"},"La key hasheada del campo del storage")),(0,r.kt)("h3",{id:"encontrando-el-id-del-child-trie-de-los-contratos"},"Encontrando el ID del child trie de los contratos"),(0,r.kt)("p",null,"El ID del child trie es el hash ",(0,r.kt)("inlineCode",{parentName:"p"},"Blake2_256")," del nonce de instanciaci\xf3n del contrato concatenado a su ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),". Puede encontrarlo en ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js chainstate query interface")),", donde debe ejecutar la query de estado ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts_contractInfoOf"),"."),(0,r.kt)("p",null,"Tambi\xe9n puede ser calculado manualmente de acuerdo al siguiente snippet de c\xf3digo. El nonce de instanciaci\xf3n del contrato debe ser conocido. Puede obtenerlo usando la query de estado ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts_nonce")," en la UI de polkadot-js."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sp_core::crypto::Ss58Codec;\nuse parity_scale_codec::Encode;\n\n// Dado que nuestro contract ID es 5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4\nlet account: AccountId32 =\n    Ss58Codec::from_string("5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4").unwrap();\n// Dado que nuestro nonce de instanciaci\xf3n fue 1\nlet nonce: u64 = 1;\n\n// El ID del child trie puede ser calculado as\xed:\nlet trie_id = (&account, nonce).using_encoded(Blake2_256::hash);\n')),(0,r.kt)("h3",{id:"calcular-el-prefixedstoragekey-del-id-del-child-trie"},"Calcular el ",(0,r.kt)("inlineCode",{parentName:"h3"},"PrefixedStorageKey")," del ID del child trie"),(0,r.kt)("p",null,"Una ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefixedStorageKey")," basada en el ID del child trie puede ser construida usando la primitiva ",(0,r.kt)("inlineCode",{parentName:"p"},"ChildInfo")," as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sp_core::storage::ChildInfo;\nlet prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();\n")),(0,r.kt)("h3",{id:"calcular-la-key-del-storage-usando-hasheo-transparente"},"Calcular la key del storage usando hasheo transparente"),(0,r.kt)("p",null,"Finalmente, calculamos la key del storage hasheada del item de storage al que queremos acceder. El algoritmo es simple: Hashear la storage con ",(0,r.kt)("inlineCode",{parentName:"p"},"Blake2_128")," y luego concatenarla con la key sin hashear. Dado que quiera acceder al item de storage correspondiente a ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00000000"),", el c\xf3digo se ver\xe1 as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use frame_support::Blake2_128Concat;\n\n// La key base es 0x00000000\nlet storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);\n")),(0,r.kt)("h3",{id:"ejemplo-completo"},"Ejemplo completo"),(0,r.kt)("p",null,"Repasemos los \xfaltimos p\xe1rrafos a trav\xe9s de un ejemplo completo. Dado:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un contrato en la direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4")),(0,r.kt)("li",{parentName:"ul"},"Con un nonce de instanciaci\xf3n de ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ul"},"La struct del root storage ser\xe1 encontrado en la key base ",(0,r.kt)("inlineCode",{parentName:"li"},"0x00000000"))),(0,r.kt)("p",null,"El siguiente programa Rust demuestra como calcular la ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefixedStorageKey")," del child trie del contrato, as\xed como tambi\xe9n la key hasheada del struct del storage, la cual puede ser usada con la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"getStorage")," del endpoint RPC ",(0,r.kt)("inlineCode",{parentName:"p"},"childstate")," en polkadot-js para recibir el struct del storage root del contrato: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use frame_support::{sp_runtime::AccountId32, Blake2_128Concat, Blake2_256, StorageHasher};\nuse parity_scale_codec::Encode;\nuse sp_core::{crypto::Ss58Codec, storage::ChildInfo};\nuse std::ops::Deref;\n\nfn main() {\n    // Encontrar el ID trie del storage hijo\n    let account_id = "5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4";\n    let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();\n    let instantiation_nonce = 1u64;\n    let trie_id = (account, instantiation_nonce).using_encoded(Blake2_256::hash);\n    assert_eq!(\n        hex::encode(trie_id),\n        "2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b"\n    );\n\n    // Calcular la PrefixedStorageKey basada en el trie ID\n    let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();\n    println!("0x{}", hex::encode(prefixed_storage_key.deref()));\n    // 0x3a6368696c645f73746f726167653a64656661756c743a2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b\n\n    // Calcular la key del storage usando hashing transparente\n    let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);\n    println!("0x{}", hex::encode(&storage_key));\n    // 0x11d2df4e979aa105cf552e9544ebd2b500000000\n}\n')))}u.isMDXComponent=!0}}]);