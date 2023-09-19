"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},i=void 0,s={unversionedId:"macros-attributes/chain-extension",id:"macros-attributes/chain-extension",title:"#[ink::chain_extension]",description:"En la configuraci\xf3n por defecto del contracts-pallet un smart contract solo puede interactuar con el runtime",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/chain-extension.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/chain-extension",permalink:"/es/macros-attributes/chain-extension",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/chain-extension.md",tags:[],version:"current",frontMatter:{title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/es/macros-attributes/topic"},next:{title:"Introducci\xf3n",permalink:"/es/datastructures/overview"}},l={},d=[{value:"Estructura",id:"estructura",level:2},{value:"Uso",id:"uso",level:2},{value:"Atributos",id:"atributos",level:2},{value:"Detalles: <code>handle_status</code>",id:"detalles-handle_status",level:2},{value:"Uso: <code>handle_status</code> + tipo de retorno <code>Result&lt;T, E&gt;</code>",id:"uso-handle_status--tipo-de-retorno-resultt-e",level:2},{value:"Combinaciones",id:"combinaciones",level:2},{value:"C\xf3digo de Error",id:"c\xf3digo-de-error",level:2},{value:"Ejemplo: Definici\xf3n",id:"ejemplo-definici\xf3n",level:2},{value:"Ejemplo: Entorno",id:"ejemplo-entorno",level:2},{value:"Ejemplo: Uso",id:"ejemplo-uso",level:2},{value:"Limitaciones t\xe9cnicas",id:"limitaciones-t\xe9cnicas",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/text/chain-ext.svg",className:"titlePic"}),(0,r.kt)("p",null,"En la configuraci\xf3n por defecto del ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts-pallet")," un smart contract solo puede interactuar con el runtime\nvia su conjunto bien definido de la interface basica del smart contract. Este API ya permite una gran variedad de\ninteracci\xf3n entre el ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts-pallet")," y el smart contract ejecutado. Por ejemplo es posible llamar e instanciar\notros smart contracts en la misma cadena, emitiendo eventos, consultando informaci\xf3n del contexto o\ncorriendo built-in procedimientos de hashing criptogr\xe1ficos."),(0,r.kt)("p",null,"Si este conjunto b\xe1sico de features no es suficiente para una Blockchain particular construida con Substrate\nes posible extender facilmente su API utilizando la feature de extensi\xf3n de la cadena."),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/venn.png",width:"50%"})),(0,r.kt)("p",null,"Con las extensiones de cadena puede exponer partes de su l\xf3gica de runtime a los desarrolladores de contratos inteligentes."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"El repositorio ink! contiene ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},"el ejemplo ",(0,r.kt)("inlineCode",{parentName:"a"},"rand-extension")," "),".\nEste es un ejemplo completo de una extensi\xf3n de una cadea implementada con ambos ink! y Substrate.")),(0,r.kt)("h2",{id:"estructura"},"Estructura"),(0,r.kt)("p",null,"La interface consiste en un c\xf3digo de error que indica los errores ligeros\nasi como la definici\xf3n de algunos m\xe9todos de extensi\xf3n de cadena."),(0,r.kt)("p",null,"La estructura general sigue una simple definici\xf3n de un Rust trat.\nEl c\xf3digo de error es definido como la definici\xf3n de un tipo asociado de la definici\xf3n trait.\nLos m\xe9todos son definidos como m\xe9todos trait asociados sin implementaci\xf3n."),(0,r.kt)("p",null,"Los m\xe9todos de extensi\xf3n de cadena no deben tener un receptor ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self"),"\ny deben tener inputs y outputs que implementen el codec SCALE. Su valor de retorno sigue\nunas reglas espec\xedficas que pueden ser alteradas utilizando el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status")," y la\nalternancia entre los tipos ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," y Non-",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),", que se describen con m\xe1s detalle a continuaci\xf3n."),(0,r.kt)("h2",{id:"uso"},"Uso"),(0,r.kt)("p",null,"Normalmente la definici\xf3n de extensi\xf3n de cadena utilizando este proc. macro\nla provee el autor de la extensi\xf3n de cadena en un crate separado.\nLos smart contracts ink! utilizando esta extensi\xf3n de cadena simplemente dependen en\nde este crate y utilizan su definici\xf3n de entorno asociado para hacer uso\nde los m\xe9todos proporcionados por la extensi\xf3n de cadena."),(0,r.kt)("h2",{id:"atributos"},"Atributos"),(0,r.kt)("p",null,"Los m\xe9todos de extensi\xf3n de cadena pueden marcarse con dos atributos diferentes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Atributos"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Requerido"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Valor por Defecto"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ink(extension = N: u32)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Si"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Determina el ID \xfanico de la funci\xf3n del m\xe9todo de extensi\xf3n de cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ink(handle_status = flag: bool)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Opcional"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Asume que el c\xf3digo de estatus devuelto del m\xe9todo de extensi\xf3n de la cadena siempre indica exito y por lo tanto siempre carga y decodifica el output buffer de la llamada.")))),(0,r.kt)("p",null,"Como en todos los atributos ink! pueden aparecer multiples de ellos en una lista contigua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = i32;\n  \n    #[ink(extension = 5, handle_status = false)]\n    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),(0,r.kt)("p",null,"o como multiples atributos ink! independientes aplicados al mismo item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n  type ErrorCode = i32;\n  \n  #[ink(extension = 5)]\n  #[ink(handle_status = false)]\n  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),(0,r.kt)("h2",{id:"detalles-handle_status"},"Detalles: ",(0,r.kt)("inlineCode",{parentName:"h2"},"handle_status")),(0,r.kt)("p",null,"Valor por defecto: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Por defecto todos los m\xe9todos de extensi\xf3n de cadena deber\xedan retornar un ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," donde ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode>"),".\nEl ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::ErrorCode")," representa el c\xf3digo de error de la extensi\xf3n de cadena.\nEsto significa que un smart contract llamando a un m\xe9todo de extensi\xf3n de cadena primero consulta el\nc\xf3digo de estado devuelto por el m\xe9todo de extensi\xf3n de cadena y solo carga y decodifica el output si el\nc\xf3digo de estado devuelto indica que ha sido una llamada exitosa.\nSe dise\xf1o asi para ser m\xe1s eficiente cuando ning\xfan outputs sin contar con el c\xf3digo de error\nes requerido por la llamada de extensi\xf3n de cadena. Cuando dise\xf1es la extensi\xf3n de cadena intenta no utilizar el\nc\xf3digo de error para devolver errores y solo utiliza el buffer output para m\xe1s informaci\xf3n que no encja\nen un \xfanico valor ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),"."),(0,r.kt)("p",null,"Un m\xe9todo de extensi\xf3n de cadena que es marcado con ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = false")," asume que el c\xf3digo de error devuelto\nsiempre indicara \xe9xito. Por lo tanto siempre cargara y decodificara el buffer output y perdera el\nconstraint ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode")," de la llamada."),(0,r.kt)("p",null,"Tenga en cuenta que si un m\xe9todo de extensi\xf3n de cadena no retorna ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode>"),"\npero con ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = true"),", seguir\xe1 retornando un valor de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, Self::ErrorCode>"),"."),(0,r.kt)("h2",{id:"uso-handle_status--tipo-de-retorno-resultt-e"},"Uso: ",(0,r.kt)("inlineCode",{parentName:"h2"},"handle_status")," + tipo de retorno ",(0,r.kt)("inlineCode",{parentName:"h2"},"Result<T, E>")),(0,r.kt)("p",null,"Utiliza ambos ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = false")," y tipo de retorno non-",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," para el mismo m\xe9todo de extensi\xf3n de cadena\nsi una llamada nunca puede fallar y nunca devuelva un tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"."),(0,r.kt)("h2",{id:"combinaciones"},"Combinaciones"),(0,r.kt)("p",null,"Debido a la posibilidad de marcar un m\xe9todo de extensi\xf3n de cadena con ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status")," y (1) devolver ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," o\n(2) devolver s\xf3lo ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", hay 4 casos diferentes con sem\xe1ntica ligeramente variable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"handle_status")),(0,r.kt)("th",{parentName:"tr",align:"center"},"Retorna ",(0,r.kt)("inlineCode",{parentName:"th"},"Result<T, E>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Efectos"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El m\xe9todo de extensi\xf3n de cadena requiere devolver un valor de tipo ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, E>")," donde ",(0,r.kt)("inlineCode",{parentName:"td"},"E: From<Self::ErrorCode>"),". Una llamada siempre comprobar\xe1 si el c\xf3digo de estado devuelto indica exito y solo entonces cargara y decodificara el valor en el buffer output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El m\xe9todo de extensi\xf3n de cadena puede devolver cualquier tipo non-",(0,r.kt)("inlineCode",{parentName:"td"},"Result"),". Una llamada siempre comprobar\xe1 si el c\xf3digo de estado devuelto indica exito y solo entonces cargar\xe1 y decodificar\xe1 el valor en el buffer output. El tipo de retorno real del m\xe9todo de extensi\xf3n de la cadena sigue siendo ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, Self::ErrorCode>")," cuando el m\xe9todo de extensi\xf3n de cadena fue definido para devilver un valor de tipo ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El m\xe9todo de extensi\xf3n de cadena requiere devolver un valor de tipo ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, E>"),". Una llamada siempre asume que el c\xf3digo de estado devuelto indica exito por lo tanto siempre cargar\xe1 y decodificar\xe1 el buffer output directamente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"El m\xe9todo de extensi\xf3n de cadena puede devolver cualquier tipo non-",(0,r.kt)("inlineCode",{parentName:"td"},"Result"),". Una llamada siempre asume que el c\xf3digo de estado devuelto indica exito por lo tanto siempre cargar\xe1 y decodificar\xe1 el buffer output directamente.")))),(0,r.kt)("h2",{id:"c\xf3digo-de-error"},"C\xf3digo de Error"),(0,r.kt)("p",null,"Cada extensi\xf3n de cadena define exactamente un ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorCode")," utilizando la siguiente sintaxis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = MyErrorCode;\n\n    // m\xe1s definiciones ...\n}\n")),(0,r.kt)("p",null,"El definido ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorCode")," debe implementar ",(0,r.kt)("inlineCode",{parentName:"p"},"FromStatusCode")," que debe ser implementado como una\nconversi\xf3n m\xe1s o menos trivial del c\xf3digo de estado ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<(), Self::ErrorCode>"),".\nEl valor ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok(())")," indica que la llamada al m\xe9todo de extensi\xf3n de cadena fue un \xe9xito."),(0,r.kt)("p",null,"Por convenci\xf3n un c\xf3digo de error de ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," representa \xe9xito.\nSin embargo, los autores de extensi\xf3n de cadena pueden utilizar lo que se adapte a sus necesidades."),(0,r.kt)("h2",{id:"ejemplo-definici\xf3n"},"Ejemplo: Definici\xf3n"),(0,r.kt)("p",null,"En el ejemplo a continuaci\xf3n una extensi\xf3n de cadena se define que se permite a los usuarios\nleer y escribir en el storage del runtime utilizando privilegios de acceso:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Custom chain extension to read to and write from the runtime.\n#[ink::chain_extension]\npub trait RuntimeReadWrite {\n    type ErrorCode = ReadWriteErrorCode;\n\n    /// Reads from runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.\n    /// #[ink(extension = 1, returns_result = false)]\n    /// fn read(key: &[u8]) -> Vec<u8>;\n    ///\n    /// Reads from runtime storage.\n    ///\n    /// Returns the number of bytes read and up to 32 bytes of the\n    /// read value. Unused bytes in the output are set to 0.\n    ///\n    /// # Errors\n    ///\n    /// If the runtime storage cell stores a value that requires more than\n    /// 32 bytes.\n    ///\n    /// # Note\n    ///\n    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`\n    /// and may potentially return any `Self::ErrorCode` through its return value.\n    #[ink(extension = 2)]\n    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n\n    /// Writes into runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.\n    #[ink(extension = 3)]\n    fn write(key: &[u8], value: &[u8]);\n\n    /// Returns the access allowed for the key for the caller.\n    ///\n    /// # Note\n    ///\n    /// Assumes to never fail the call and therefore always returns `Option<Access>`.\n    #[ink(extension = 4, handle_status = false)]\n    fn access(key: &[u8]) -> Option<Access>;\n\n    /// Unlocks previously aquired permission to access key.\n    ///\n    /// # Errors\n    ///\n    /// If the permission was not granted.\n    ///\n    /// # Note\n    ///\n    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`\n    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.\n    #[ink(extension = 5, handle_status = false)]\n    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteErrorCode {\n  InvalidKey,\n  CannotWriteToKey,\n  CannotReadFromKey,\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteError {\n  ErrorCode(ReadWriteErrorCode),\n  BufferTooSmall { required_bytes: u32 },\n}\n\nimpl From<ReadWriteErrorCode> for ReadWriteError {\n  fn from(error_code: ReadWriteErrorCode) -> Self {\n    Self::ErrorCode(error_code)\n  }\n}\n\nimpl From<scale::Error> for ReadWriteError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub struct UnlockAccessError {\n  reason: String,\n}\n\nimpl From<scale::Error> for UnlockAccessError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum Access {\n  ReadWrite,\n  ReadOnly,\n  WriteOnly,\n}\n\nimpl ink_env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n  fn from_status_code(status_code: u32) -> Result<(), Self> {\n    match status_code {\n      0 => Ok(()),\n      1 => Err(Self::InvalidKey),\n      2 => Err(Self::CannotWriteToKey),\n      3 => Err(Self::CannotReadFromKey),\n      _ => panic!("encountered unknown status code"),\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Todos los tipos de error y otros tipos de utilizad utilizados en la definici\xf3n de extensi\xf3n de cadena de arriba\nson normalmente requeridos para implementar varios traits como los SCALE's ",(0,r.kt)("inlineCode",{parentName:"p"},"Encode")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Decode"),"\nasi como los traits ",(0,r.kt)("inlineCode",{parentName:"p"},"scale-info"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeInfo"),"."),(0,r.kt)("p",null,"Un ejemplo completo de la definici\xf3n de extensi\xf3n de cadena de arriba puede verse\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs"},"aqu\xed"),"."),(0,r.kt)("h2",{id:"ejemplo-entorno"},"Ejemplo: Entorno"),(0,r.kt)("p",null,"Para permitir a los ink! smart contracts utilizar la extensi\xf3n de cadena definida arriba se necesita\nintegrarla en una definici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," como se muestra a continuaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type RuntimeReadWrite = i32;\n\nuse ink::env::{Environment, DefaultEnvironment};\n\npub enum CustomEnvironment {}\n\nimpl Environment for CustomEnvironment {\n    const MAX_EVENT_TOPICS: usize =\n        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;\n\n    type AccountId = <DefaultEnvironment as Environment>::AccountId;\n    type Balance = <DefaultEnvironment as Environment>::Balance;\n    type Hash = <DefaultEnvironment as Environment>::Hash;\n    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;\n    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;\n\n    type ChainExtension = RuntimeReadWrite;\n}\n")),(0,r.kt)("p",null,"Arriba hemos definido el ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEnvironment")," que por defecto es el ink!'s ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEnvironment"),"\npara todas las constantes y tipos excepto el tipo",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtension")," que es asignado a nuestra nueva\ndefinici\xf3n de extensi\xf3n de cadena."),(0,r.kt)("h2",{id:"ejemplo-uso"},"Ejemplo: Uso"),(0,r.kt)("p",null,"Un ink! smart contract puede utilizar la cadena de extensi\xf3n definida arriba a trav\xe9s de la definici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment"),"\ndefinida en el ejemplo de la \xfaltima secci\xf3n utilizando el parametro de macro ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," como se muestra a continuaci\xf3n."),(0,r.kt)("p",null,"Nota que los m\xe9todos de extensi\xf3n de cadena son accesibles a trav\xe9s de ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::extension()")," o\n",(0,r.kt)("inlineCode",{parentName:"p"},"self.extension()"),". Por ejemplo en ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::extension().read(..)")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"self.extension().read(..)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink::contract(env = CustomEnvironment)]\nmod read_writer {\n    #[ink(storage)]\n    pub struct ReadWriter {}\n\n    impl ReadWriter {\n        #[ink(constructor)]\n        pub fn new() -> Self { Self {} }\n\n        #[ink(message)]\n        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .read(&key)\n        }\n\n        #[ink(message)]\n        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {\n            self.env()\n                .extension()\n                .read_small(&key)\n        }\n\n        #[ink(message)]\n        pub fn write(\n            &self,\n            key: Vec<u8>,\n            value: Vec<u8>,\n        ) -> Result<(), ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .write(&key, &value)\n        }\n\n        #[ink(message)]\n        pub fn access(&self, key: Vec<u8>) -> Option<Access> {\n            self.env()\n                .extension()\n                .access(&key)\n        }\n\n        #[ink(message)]\n        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {\n            self.env()\n                .extension()\n                .unlock_access(&key, access)\n        }\n    }\n    \n    /// Custom chain extension to read to and write from the runtime.\n    #[ink::chain_extension]\n    pub trait RuntimeReadWrite {\n          type ErrorCode = ReadWriteErrorCode;\n          #[ink(extension = 1)]\n          fn read(key: &[u8]) -> Vec<u8>;\n          #[ink(extension = 2)]\n          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n          #[ink(extension = 3)]\n          fn write(key: &[u8], value: &[u8]);\n          #[ink(extension = 4, handle_status = false)]\n          fn access(key: &[u8]) -> Option<Access>;\n          #[ink(extension = 5, handle_status = false)]\n          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteErrorCode {\n          InvalidKey,\n          CannotWriteToKey,\n          CannotReadFromKey,\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteError {\n          ErrorCode(ReadWriteErrorCode),\n          BufferTooSmall { required_bytes: u32 },\n    }\n    impl From<ReadWriteErrorCode> for ReadWriteError {\n         fn from(error_code: ReadWriteErrorCode) -> Self {\n             Self::ErrorCode(error_code)\n         }\n    }\n    impl From<scale::Error> for ReadWriteError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n  \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub struct UnlockAccessError {\n         reason: String,\n    }\n    impl From<scale::Error> for UnlockAccessError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum Access {\n         ReadWrite,\n         ReadOnly,\n         WriteOnly,\n    }\n    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n         fn from_status_code(status_code: u32) -> Result<(), Self> {\n             match status_code {\n                 0 => Ok(()),\n                 1 => Err(Self::InvalidKey),\n                 2 => Err(Self::CannotWriteToKey),\n                 3 => Err(Self::CannotReadFromKey),\n                 _ => panic!("encountered unknown status code"),\n             }\n         }\n    }\n    pub enum CustomEnvironment {}\n    impl ink::env::Environment for CustomEnvironment {\n         const MAX_EVENT_TOPICS: usize =\n             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;\n    \n         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;\n         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;\n         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;\n         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;\n         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;\n    \n         type ChainExtension = RuntimeReadWrite;\n    }\n}\n')),(0,r.kt)("h2",{id:"limitaciones-t\xe9cnicas"},"Limitaciones t\xe9cnicas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Por limitaciones t\xe9cnicas no es posible referirse al tipo asociado ",(0,r.kt)("inlineCode",{parentName:"li"},"ErrorCode")," utilizando\n",(0,r.kt)("inlineCode",{parentName:"li"},"Self::ErrorCode")," en cualquier lugar dentro de la extensi\xf3n de cadena y sus m\xe9todos definidos.\nEn su lugar los autores de la extensi\xf3n de cadena deben utilizar directamente el tipo de c\xf3digo de error cuando se requiera.\nEsta limitaci\xf3n podr\xeda eliminarse en versiones futuras deink!."),(0,r.kt)("li",{parentName:"ul"},"No es posible declarar otros traits de extensiones de cadenas como super traits o super\nextensiones de cadenas o otros.")))}p.isMDXComponent=!0}}]);