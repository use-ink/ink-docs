"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9176],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(b,s(s({ref:a},p),{},{components:t})):r.createElement(b,s({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6238:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const o={title:"Por qu\xe9 WebAssembly para Smart Contracts?",slug:"/por-que-webassembly-para-smart-contracts",hide_title:!0},s=void 0,i={unversionedId:"intro/why-webassembly",id:"intro/why-webassembly",title:"Por qu\xe9 WebAssembly para Smart Contracts?",description:"Tomamos la decisi\xf3n de utilizar WebAssembly como nuestra arquitectura para ink!.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/why-webassembly.md",sourceDirName:"intro",slug:"/por-que-webassembly-para-smart-contracts",permalink:"/es/por-que-webassembly-para-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/why-webassembly.md",tags:[],version:"current",frontMatter:{title:"Por qu\xe9 WebAssembly para Smart Contracts?",slug:"/por-que-webassembly-para-smart-contracts",hide_title:!0},sidebar:"reference",previous:{title:"Por qu\xe9 Rust para Smart Contracts?",permalink:"/es/por-que-rust-para-smart-contracts"},next:{title:"C\xf3mo funciona \u2012 Substrate",permalink:"/es/como-funciona"}},l={},c=[],p={toc:c};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/title/wasm.svg",className:"titlePic"}),(0,n.kt)("h1",{id:"por-qu\xe9-webassembly-para-smart-contracts"},"Por qu\xe9 WebAssembly para Smart Contracts?"),(0,n.kt)("p",null,"Tomamos la decisi\xf3n de utilizar WebAssembly como nuestra arquitectura para ink!.\nEstas fueron las razones por las que tomamos dicha decisi\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Alta performance: "),"Wasm es de alta performance \u2014 est\xe1 desarrollados para estar lo m\xe1s pr\xf3ximo posible al c\xf3digo nativo de la computadora, a\xfan manteniendo una plataforma independiente."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Tama\xf1o compacto: "),"Facilita un binario compacto que puede enviarse a trav\xe9s de internet a dispositivos con, potencialmente, conexiones lentas. Esto lo hace ideal para sistemas con restricciones de espacio, como los Blockchains."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"M\xe1quina Virtual (VM) General & bytecode: "),"Fue desarrollado para que el c\xf3digo pueda ser deployado en cualquier browser con el mismo resultado. Contrario a EVM que no fue desarrollado para un caso particular, Wasm tiene el befecio de contar con una gran cantidad de herramientas disponibles y de una gran canditat de compa\xf1\xedas que dedican recursos en el desarrollo futuro de Wasm."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Eficiente ejecuci\xf3n JIT: "),"Sporte de operaci\xf3nes de n\xfameros enteros de 64 and 32-bit mapeados 1-1 con instrucciones de CPU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Minimal\xedstico: ")," Especificaci\xf3nes formales que entran en una \xfanica p\xe1gina."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Ejecuci\xf3n determin\xedstica: "),"Wasm se vuelve f\xe1cilmente deterministico removiendo operaciones con floating points, que son necesarios para algor\xedtmos de consenso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Open Standards > Soluciones Customizadas: "),"Wasm es un est\xe1ndard para navegadores Web desarrollado por el grupo W3C, con compa\xf1\xedas de la talla de Google, Mozilla y otros. Han habido varios a\xf1os de desarrollo puestos en Wasm, tanto para el compilador como para la estandarizaci\xf3n."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Muchos lenguajes Disponibles: ")," Wasm expande la familia de lenguajes disponibles para desarrolladores de smart contracts, incluyendo Rust, C/C++, C#, Typescript, Haxe, y Kotlin. Esto significa que se pueden escribir smart contracts con cualquier lenguaje que te sea familiar. De todas formas, la recomendaci\xf3n parcial es usar Rust, dado que tiene menos complejidad en su runtime, y goza de propiedades que lo hacen extremadamente seguro."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"De memoria-segura, encapsulado (sandboxed), y de plataforma independiente.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Sporte LLVM: "),"Sportado por el projecto de infrastructura del compilador LLVM, lo que significa que Wasm se beneficia de m\xe1s de una d\xe9cada de optimizaci\xf3n en el compilador LLVM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Compa\xf1\xedas l\xedderes involucradas: ")," Continuamente desarrollado por compa\xf1\xedas como Google, Apple, Microsoft, Mozilla, y Facebook.")))}u.isMDXComponent=!0}}]);