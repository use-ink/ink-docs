"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5773],{83199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>i});var a=r(74848),c=r(28453);const s={title:"Llamadas Cross-Contract",slug:"/basics/cross-contract-calling",hide_title:!0},o="Llamadas Cross-Contract",t={id:"basics/cross-contract-calling",title:"Llamadas Cross-Contract",description:"En los contratos de ink! es posible llamar a mensajes y constructores de otros contratos on-chain.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/cross-contract-calling.md",sourceDirName:"basics",slug:"/basics/cross-contract-calling",permalink:"/es/basics/cross-contract-calling",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/cross-contract-calling.md",tags:[],version:"current",frontMatter:{title:"Llamadas Cross-Contract",slug:"/basics/cross-contract-calling",hide_title:!0},sidebar:"reference",previous:{title:"Definiciones Trait",permalink:"/es/basics/definiciones-trait"},next:{title:"Contratos Actualizables",permalink:"/es/basics/upgradeable-contracts"}},l={},i=[{value:"Referencias de Contrato",id:"referencias-de-contrato",level:2},{value:"Tutorial para <code>BasicContractRef</code>",id:"tutorial-para-basiccontractref",level:3},{value:"Preparaci\xf3n de <code>OtherContract</code>",id:"preparaci\xf3n-de-othercontract",level:4},{value:"Importando <code>OtherContract</code>",id:"importando-othercontract",level:4},{value:"Conectando <code>BasicContractRef</code>",id:"conectando-basiccontractref",level:4},{value:"Cargando <code>OtherContract</code>",id:"cargando-othercontract",level:4},{value:"Instanciando <code>OtherContract</code> a trav\xe9s de <code>BasicContractRef</code>",id:"instanciando-othercontract-a-trav\xe9s-de-basiccontractref",level:4},{value:"Llamando a <code>OtherContract</code> a trav\xe9s de <code>BasicContractRef</code>",id:"llamando-a-othercontract-a-trav\xe9s-de-basiccontractref",level:4},{value:"Builders",id:"builders",level:2},{value:"CreateBuilder",id:"createbuilder",level:3},{value:"CallBuilder",id:"callbuilder",level:3},{value:"CallBuilder: Call",id:"callbuilder-call",level:4},{value:"CallBuilder: DelegateCall",id:"callbuilder-delegatecall",level:4},{value:"Gesti\xf3n de errores del Builder",id:"gesti\xf3n-de-errores-del-builder",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/cross-contract.svg",className:"titlePic"}),"\n",(0,a.jsx)(n.h1,{id:"llamadas-cross-contract",children:"Llamadas Cross-Contract"}),"\n",(0,a.jsx)(n.p,{children:"En los contratos de ink! es posible llamar a mensajes y constructores de otros contratos on-chain."}),"\n",(0,a.jsx)(n.p,{children:"Existen varios enfoques para realizar estas llamadas Cross-Contract en ink!:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Referencias de Contrato (",(0,a.jsx)(n.code,{children:"ContractRef"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Builders (",(0,a.jsx)(n.code,{children:"CreateBuilder"})," y ",(0,a.jsx)(n.code,{children:"CallBuilder"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Las Referencias de Contrato s\xf3lo pueden utilizarse para llamadas Cross-Contract a otros contratos de ink!. Los Builders pueden utilizarse para realizar llamadas Cross-Contract a cualquier contrato Wasm, como los escritos en ink!, Solang o ask!."}),"\n",(0,a.jsx)(n.h2,{id:"referencias-de-contrato",children:"Referencias de Contrato"}),"\n",(0,a.jsx)(n.p,{children:"Las Referencias de Contrato se refieren a las structs generadas por el generador de c\xf3digo de ink! para las llamadas Cross-Contract."}),"\n",(0,a.jsx)(n.p,{children:"Proporcionan a los desarrolladores una forma segura de interactuar con un contrato."}),"\n",(0,a.jsx)(n.p,{children:"Una desventaja de su uso es que necesita importar el contrato al que desea llamar como una dependencia de su propio contrato."}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere interactuar con un contrato que ya est\xe1 on-chain, tendr\xe1s que utilizar el enfoque de los ",(0,a.jsx)(n.a,{href:"/basics/cross-contract-calling#builders",children:(0,a.jsx)(n.code,{children:"Builders"})}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"tutorial-para-basiccontractref",children:["Tutorial para ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.p,{children:["Recorreremos el ejemplo de ",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/tree/main/basic_contract_caller",children:(0,a.jsx)(n.code,{children:"basic_contract_ref"})})," para demostrar c\xf3mo funcionan las llamadas Cross-Contract utilizando Referencias de Contratos."]}),"\n",(0,a.jsx)(n.p,{children:"El flujo general de trabajo ser\xe1:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Preparar ",(0,a.jsx)(n.code,{children:"OtherContract"})," para ser importado en otros contratos"]}),"\n",(0,a.jsxs)(n.li,{children:["Importar ",(0,a.jsx)(n.code,{children:"OtherContract"})," en ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.li,{children:["Cargar ",(0,a.jsx)(n.code,{children:"OtherContract"})," on-chain"]}),"\n",(0,a.jsxs)(n.li,{children:["Instanciar ",(0,a.jsx)(n.code,{children:"OtherContract"})," usando ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.li,{children:["Llamar ",(0,a.jsx)(n.code,{children:"OtherContract"})," usando ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"preparaci\xf3n-de-othercontract",children:["Preparaci\xf3n de ",(0,a.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,a.jsxs)(n.p,{children:["Debemos asegurarnos de que la Referencia de Contrato generada por ink! para ",(0,a.jsx)(n.code,{children:"OtherContract"})," est\xe9 disponible para otras partes del c\xf3digo."]}),"\n",(0,a.jsx)(n.p,{children:"Para ello, re-exportaremos la Referencia de Contrato como se indica a continuaci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"pub use self::other_contract::OtherContractRef;\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"importando-othercontract",children:["Importando ",(0,a.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n, tenemos que importar ",(0,a.jsx)(n.code,{children:"OtherContract"})," a nuestro contrato ",(0,a.jsx)(n.code,{children:"BasicContractRef"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Primero, a\xf1adiremos las siguientes l\xedneas a nuestro archivo ",(0,a.jsx)(n.code,{children:"Cargo.toml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'# En `basic_contract_ref/Cargo.toml`\n\nother_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n\n# -- snip --\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    # -- snip --\n    "other_contract/std",\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Hay dos cosas a tener en cuenta:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Si no especificamos la caracter\xedstica ",(0,a.jsx)(n.code,{children:"ink-as-dependency"})," terminaremos con errores de vinculaci\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:["Si no habilitamos la caracter\xedstica ",(0,a.jsx)(n.code,{children:"std"})," para construcciones ",(0,a.jsx)(n.code,{children:"std"})," no podremos generar los metadatos de nuestro contrato."]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"conectando-basiccontractref",children:["Conectando ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.p,{children:["En primer lugar, importaremos la Referencia de Contrato de ",(0,a.jsx)(n.code,{children:"OtherContract"}),", y declararemos que la referencia forma parte de nuestra estructura de almacenamiento."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"// En `basic_contract_ref/lib.rs`\n\nuse other_contract::OtherContractRef;\n\n#[ink(storage)]\npub struct BasicContractRef {\n    other_contract: OtherContractRef,\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n, a\xf1adiremos una forma de instanciar ",(0,a.jsx)(n.code,{children:"OtherContract"}),". Lo haremos desde el constructor de nuestro contrato."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"// En `basic_contract_ref/lib.rs`\n\n#[ink(constructor)]\npub fn new(other_contract_code_hash: Hash) -> Self {\n    let other_contract = OtherContractRef::new(true)\n        .code_hash(other_contract_code_hash)\n        .endowment(0)\n        .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])\n        .instantiate();\n\n    Self { other_contract }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Tenga en cuenta que para instanciar un contrato se necesitar\xe1 acceder al ",(0,a.jsx)(n.code,{children:"code_hash"})," cargado on-chain. Se detallar\xe1 esto m\xe1s adelante."]}),"\n",(0,a.jsxs)(n.p,{children:["Una vez que se obtenga una referencia instanciada a ",(0,a.jsx)(n.code,{children:"OtherContract"}),", se puede llamar a sus mensajes como si fueran m\xe9todos normales de Rust."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"// En `basic_contract_ref/lib.rs`\n\n#[ink(message)]\npub fn flip_and_get(&mut self) -> bool {\n    self.other_contract.flip();\n    self.other_contract.get()\n}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"cargando-othercontract",children:["Cargando ",(0,a.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,a.jsxs)(n.p,{children:["Necesitaremos el ",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,a.jsx)(n.code,{children:"substrate-contracts-node"})}),"\nejecut\xe1ndose en segundo plano para los siguientes pasos."]}),"\n",(0,a.jsxs)(n.p,{children:["Se puede cargar ",(0,a.jsx)(n.code,{children:"OtherContract"})," usando ",(0,a.jsx)(n.code,{children:"cargo-contract"})," de la siguiente manera:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# En la carpeta `basic_contract_ref`\ncargo contract build --manifest-path other_contract/Cargo.toml\ncargo contract upload --manifest-path other_contract/Cargo.toml --suri //Alice\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Si tenemos \xe9xito, esto dar\xe1 como resultado un ",(0,a.jsx)(n.code,{children:"code_hash"})," similar a:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Code hash "0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Se puede utilizar este code ",(0,a.jsx)(n.code,{children:"code_hash"})," para instanciar nuestro contrato ",(0,a.jsx)(n.code,{children:"BasicContractRef"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"instanciando-othercontract-a-trav\xe9s-de-basiccontractref",children:["Instanciando ",(0,a.jsx)(n.code,{children:"OtherContract"})," a trav\xe9s de ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.p,{children:["Primero tendremos que instanciar ",(0,a.jsx)(n.code,{children:"BasicContractRef"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# En la carpeta `basic_contract_ref`\ncargo contract build\ncargo contract instantiate \\\n    --constructor new \\\n    --args 0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa \\\n    --suri //Alice --salt $(date +%s)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Si tenemos \xe9xito, esto dar\xe1 como resultado una direcci\xf3n de contrato para ",(0,a.jsx)(n.code,{children:"BasicContractRef"})," similar a:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"llamando-a-othercontract-a-trav\xe9s-de-basiccontractref",children:["Llamando a ",(0,a.jsx)(n.code,{children:"OtherContract"})," a trav\xe9s de ",(0,a.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,a.jsxs)(n.p,{children:["Por \xfaltimo, podemos llamar a los m\xe9todos de ",(0,a.jsx)(n.code,{children:"OtherContract"})," a trav\xe9s de ",(0,a.jsx)(n.code,{children:"BasicContractRef"})," de la siguiente manera:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cargo contract call --contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq \\\n    --message flip_and_get --suri //Alice --dry-run\n"})}),"\n",(0,a.jsx)(n.p,{children:"Lo que resultar\xe1 en algo similar a:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Result Success!\nReverted false\nData Ok(true)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"builders",children:"Builders"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html",children:(0,a.jsx)(n.code,{children:"CreateBuilder"})}),"\ny\n",(0,a.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html",children:(0,a.jsx)(n.code,{children:"CallBuilder"})}),"\nofrecen interfaces flexibles de bajo nivel para poder realizar llamadas entre contratos. El ",(0,a.jsx)(n.code,{children:"CreateBuilder"})," permite instanciar contratos ya cargados, y el\n",(0,a.jsx)(n.code,{children:"CallBuilder"})," permite llamar mensajes en contratos instanciados."]}),"\n",(0,a.jsx)(n.h3,{id:"createbuilder",children:"CreateBuilder"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CreateBuilder"})," ofrece una forma sencilla de ",(0,a.jsx)(n.strong,{children:"instanciar"})," un contrato. Tenga en cuenta que necesitar\xe1 que este contrato haya sido cargado previamente."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Para repasar la diferencia entre ",(0,a.jsx)(n.code,{children:"upload"})," e ",(0,a.jsx)(n.code,{children:"instantiate"})," ",(0,a.jsx)(n.a,{href:"/getting-started/deploy-your-contract",children:"dirigirse aqu\xed"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Para instanciar un contrato necesitaremos una referencia a un contrato, al igual que en\n",(0,a.jsx)(n.a,{href:"/basics/cross-contract-calling#referencias-de-contrato",children:"la secci\xf3n anterior"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n se muestra un ejemplo de c\xf3mo instanciar un contrato utilizando el ",(0,a.jsx)(n.code,{children:"CreateBuilder"}),". Vamos a:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["instanciar el contrato cargado con un ",(0,a.jsx)(n.code,{children:"code_hash"})," de ",(0,a.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,a.jsxs)(n.li,{children:["sin l\xedmite de gas especificado (",(0,a.jsx)(n.code,{children:"0"})," significa ilimitado)"]}),"\n",(0,a.jsxs)(n.li,{children:["enviando ",(0,a.jsx)(n.code,{children:"10"})," unidades de valor transferido a la instancia del contrato"]}),"\n",(0,a.jsxs)(n.li,{children:["instanciando con el constructor ",(0,a.jsx)(n.code,{children:"new"})]}),"\n",(0,a.jsxs)(n.li,{children:["con los siguientes argumentos","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"42"})]}),"\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"bool"})," con valor ",(0,a.jsx)(n.code,{children:"true"})]}),"\n",(0,a.jsxs)(n.li,{children:["un vector de 32 ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["generar la direcci\xf3n (",(0,a.jsx)(n.code,{children:"AccountId"}),") utilizando los ",(0,a.jsx)(n.code,{children:"salt_bytes"})," especificados"]}),"\n",(0,a.jsxs)(n.li,{children:["y esperar que devuelva un valor de tipo ",(0,a.jsx)(n.code,{children:"MyContractRef"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use contract::MyContractRef;\nlet my_contract: MyContractRef = build_create::<MyContractRef>()\n    .code_hash(Hash::from([0x42; 32]))\n    .gas_limit(0)\n    .endowment(10)\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("new")))\n            .push_arg(42)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])\n    .returns::<MyContractRef>()\n    .instantiate();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Dado que ",(0,a.jsx)(n.code,{children:"CreateBuilder::instantiate()"})," devuelve una referencia a un contrato, podemos utilizar esta referencia a un contrato para llamar a mensajes como en la\n",(0,a.jsx)(n.a,{href:"/basics/cross-contract-calling#referencias-de-contrato",children:"secci\xf3n anterior"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"callbuilder",children:"CallBuilder"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CallBuilder"})," te ofrece algunas maneras de llamar a mensajes desde otros contratos. Hay dos enfoques principales para esto: ",(0,a.jsx)(n.code,{children:"Call"}),"s y ",(0,a.jsx)(n.code,{children:"DelegateCall"}),"s. Cubriremos brevemente ambos aqu\xed."]}),"\n",(0,a.jsx)(n.h4,{id:"callbuilder-call",children:"CallBuilder: Call"}),"\n",(0,a.jsxs)(n.p,{children:["Al utilizar ",(0,a.jsx)(n.code,{children:"Call"}),"s, el ",(0,a.jsx)(n.code,{children:"CallBuilder"})," requiere un contrato ya instanciado."]}),"\n",(0,a.jsxs)(n.p,{children:["Vimos un ejemplo de c\xf3mo utilizar el ",(0,a.jsx)(n.code,{children:"CreateBuilder"})," para instanciar contratos en la\n",(0,a.jsx)(n.a,{href:"/basics/cross-contract-calling#referencias-de-contrato",children:"secci\xf3n anterior"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n, veremos un ejemplo de c\xf3mo llamar a un contrato utilizando el ",(0,a.jsx)(n.code,{children:"CallBuilder"}),". Vamos a:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["hacer una ",(0,a.jsx)(n.code,{children:"Call"})," normal"]}),"\n",(0,a.jsxs)(n.li,{children:["a un contrato en la direcci\xf3n ",(0,a.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,a.jsxs)(n.li,{children:["sin especificar l\xedmite de gas (",(0,a.jsx)(n.code,{children:"0"})," significa ilimitado)"]}),"\n",(0,a.jsxs)(n.li,{children:["enviar ",(0,a.jsx)(n.code,{children:"10"})," unidades de valor transferido a la instancia del contrato"]}),"\n",(0,a.jsxs)(n.li,{children:["llamar al mensaje ",(0,a.jsx)(n.code,{children:"flip"})]}),"\n",(0,a.jsxs)(n.li,{children:["con los siguientes argumentos","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"42"})]}),"\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"bool"})," con valor ",(0,a.jsx)(n.code,{children:"true"})]}),"\n",(0,a.jsxs)(n.li,{children:["un vector de 32 ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["y esperar que devuelva un valor de tipo ",(0,a.jsx)(n.code,{children:"bool"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'let my_return_value = build_call::<DefaultEnvironment>()\n    .call(AccountId::from([0x42; 32]))\n    .gas_limit(0)\n    .transferred_value(10)\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))\n            .push_arg(42u8)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .returns::<bool>()\n    .invoke();\n'})}),"\n",(0,a.jsx)(n.p,{children:"Nota:"}),"\n",(0,a.jsxs)(n.p,{children:["Los argumentos de los mensajes se codificar\xe1n en el orden en que se proporcionen al ",(0,a.jsx)(n.code,{children:"CallBuilder"}),".\nEsto significa que deben coincidir con el orden (y tipo) en que aparecen en la firma de la funci\xf3n."]}),"\n",(0,a.jsx)(n.p,{children:"No podr\xe1 obtener informaci\xf3n sobre esto en tiempo de compilaci\xf3n. S\xf3lo descubrir\xe1 que la llamada ha fallado en tiempo de ejecuci\xf3n."}),"\n",(0,a.jsx)(n.h4,{id:"callbuilder-delegatecall",children:"CallBuilder: DelegateCall"}),"\n",(0,a.jsxs)(n.p,{children:["Tambi\xe9n puedes utilizar el ",(0,a.jsx)(n.code,{children:"CallBuilder"})," para crear llamadas utilizando la mec\xe1nica ",(0,a.jsx)(n.code,{children:"DelegateCall"}),".\nSi necesitas un repaso de lo que son las llamadas a delegados,\n",(0,a.jsx)(n.a,{href:"https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c",children:"consulta este art\xedculo"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["En el caso de ",(0,a.jsx)(n.code,{children:"DelegateCall"}),", no necesitamos un contrato ya instanciado. S\xf3lo necesitamos el ",(0,a.jsx)(n.code,{children:"code_hash"})," de un contrato subido."]}),"\n",(0,a.jsxs)(n.p,{children:["A continuaci\xf3n se muestra un ejemplo de c\xf3mo realizar una llamada delegada a un contrato utilizando el ",(0,a.jsx)(n.code,{children:"CallBuilder"}),". Vamos a:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["hacer una ",(0,a.jsx)(n.code,{children:"DelegateCall"})]}),"\n",(0,a.jsxs)(n.li,{children:["a un contrato ",(0,a.jsx)(n.code,{children:"code_hash"})," (\xa1no una direcci\xf3n de contrato!) de ",(0,a.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,a.jsxs)(n.li,{children:["sin l\xedmite de gas especificado (",(0,a.jsx)(n.code,{children:"0"}),' significa "autom\xe1tico")']}),"\n",(0,a.jsxs)(n.li,{children:["enviar ",(0,a.jsx)(n.code,{children:"10"})," unidades de valor transferido a la instancia del contrato"]}),"\n",(0,a.jsxs)(n.li,{children:["llamar al mensaje ",(0,a.jsx)(n.code,{children:"flip"})]}),"\n",(0,a.jsxs)(n.li,{children:["con los siguientes argumentos","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"42"})]}),"\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.code,{children:"bool"})," con valor ",(0,a.jsx)(n.code,{children:"true"})]}),"\n",(0,a.jsxs)(n.li,{children:["un vector de 32 ",(0,a.jsx)(n.code,{children:"u8"})," con valor ",(0,a.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["y esperar que devuelva un ",(0,a.jsx)(n.code,{children:"i32"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'let my_return_value = build_call::<DefaultEnvironment>()\n    .delegate(ink::primitives::Hash::from([0x42; 32]))\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))\n            .push_arg(42u8)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .returns::<i32>()\n    .invoke();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"gesti\xf3n-de-errores-del-builder",children:"Gesti\xf3n de errores del Builder"}),"\n",(0,a.jsxs)(n.p,{children:["Tanto ",(0,a.jsx)(n.code,{children:"CreateBuilder"})," como el ",(0,a.jsx)(n.code,{children:"CallBuilder"})," ofrecen gesti\xf3n de errores con los m\xe9todos ",(0,a.jsx)(n.code,{children:"try_instantiate()"})," y ",(0,a.jsx)(n.code,{children:"try_invoke()"})," respectivamente."]}),"\n",(0,a.jsx)(n.p,{children:"Estos permiten a los desarrolladores de contratos gestionar dos tipos de errores:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Errores del entorno de ejecuci\xf3n subyacente (por ejemplo, el pallet ",(0,a.jsx)(n.code,{children:"Contracts"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Errores del lenguaje de programaci\xf3n (por ejemplo, ",(0,a.jsx)(n.code,{children:"LangError"}),"s)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Consulte la documentaci\xf3n de\n",(0,a.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html#method.try_instantiate",children:(0,a.jsx)(n.code,{children:"try_instantiate"})}),",\n",(0,a.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html#method.try_invoke-2",children:(0,a.jsx)(n.code,{children:"try_invoke"})}),",\n",(0,a.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/enum.Error.html",children:(0,a.jsx)(n.code,{children:"ink::env::Error"})}),"\ny\n",(0,a.jsx)(n.a,{href:"https://docs.rs/ink/latest/ink/enum.LangError.html",children:(0,a.jsx)(n.code,{children:"ink::LangError"})}),"\npara m\xe1s detalles sobre el manejo adecuado de errores."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Dado que el ",(0,a.jsx)(n.code,{children:"CallBuilder"})," s\xf3lo requiere el ",(0,a.jsx)(n.code,{children:"AccountId"})," de un contrato y el ",(0,a.jsx)(n.code,{children:"selector"})," de un mensaje, podemos llamar a contratos Solidity que est\xe9n compilados utilizando el compilador ",(0,a.jsx)(n.a,{href:"https://github.com/hyperledger/solang",children:"Solang"}),"\ny subidos a una chain que soporte ",(0,a.jsx)(n.code,{children:"pallet-contracts"}),".\nVea ",(0,a.jsx)(n.a,{href:"https://github.com/xermicus/call_solidity",children:"aqu\xed"})," un ejemplo de c\xf3mo hacerlo."]}),(0,a.jsxs)(n.p,{children:["Por otro lado, las llamadas desde Solidity a ink! ",(0,a.jsx)(n.strong,{children:"no"})," est\xe1n soportadas por Solang, pero hay planes para implementarlo en el futuro."]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var a=r(96540);const c={},s=a.createContext(c);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);