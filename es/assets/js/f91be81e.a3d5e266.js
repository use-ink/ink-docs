"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Contract Verification",slug:"/basics/verification/contract-verification",hide_title:!0},o=void 0,c={unversionedId:"basics/verification/contract-verification",id:"basics/verification/contract-verification",title:"Contract Verification",description:"Contract verification is the process of matching a deployed ink! contract",source:"@site/docs/basics/verification/contract-verification.md",sourceDirName:"basics/verification",slug:"/basics/verification/contract-verification",permalink:"/es/basics/verification/contract-verification",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/verification/contract-verification.md",tags:[],version:"current",frontMatter:{title:"Contract Verification",slug:"/basics/verification/contract-verification",hide_title:!0},sidebar:"reference",previous:{title:"Contract Debugging",permalink:"/es/basics/contract-debugging"},next:{title:"Sirato",permalink:"/es/basics/verification/sirato"}},l={},s=[{value:"Verifiable build",id:"verifiable-build",level:2},{value:"Verifying contract",id:"verifying-contract",level:2},{value:"Advanced usage",id:"advanced-usage",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/magnifying-glass.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"contract-verification"},"Contract Verification"),(0,r.kt)("p",null,"Contract verification is the process of matching a deployed ink! contract\nwith the source code and metadata generated when it was built. "),(0,r.kt)("p",null,"The verification process for Rust-based smart contract languages is more\ncomplex than EVM-based languages such as Solidity due to the Rust\ncompiler not providing deterministic builds of contracts. "),(0,r.kt)("p",null,"In order to verify an ink! smart contract, the verification\nprocess must recompile the contract in an identical host environment to\nwhich it was originally built. The simplest way to do this is using a Docker\ncontainer."),(0,r.kt)("p",null,"Since ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," provides the necessary tools to produce\na verifiable build and verify a binary against the reference contract."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Contract verification tools are currently available in ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"\nversion ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.0-alpha"),". To install it, run"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"cargo install cargo-contract --locked --version 4.0.0-alpha\n"))),(0,r.kt)("h2",{id:"verifiable-build"},"Verifiable build"),(0,r.kt)("p",null,"As mentioned earlier, due to the non-deterministic nature of Rust compilation,\nsmart contract developers are advised to build their project inside\na Docker container we provide. Luckily, ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract build"),"\nprovides the ",(0,r.kt)("inlineCode",{parentName:"p"},"--verifiable")," flag for this purpose."),(0,r.kt)("p",null,"The steps for the verifiable build production are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine")),(0,r.kt)("li",{parentName:"ol"},"(Linux users) Make sure you complete the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"post-installation step"),".\nThis is required for the correct operation of the command."),(0,r.kt)("li",{parentName:"ol"},"Ensure Docker Engine is up and running, and the socket is accessible."),(0,r.kt)("li",{parentName:"ol"},"Simply run ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo contract build --verifiable"),".")),(0,r.kt)("p",null,"This will pull the image with the version that corresponds to your ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," crate version,\nperform a build, and write artifacts in the standard output directory."),(0,r.kt)("p",null,"If everything is correct, you can verify the image version in the metadata file.\nIt should contain a key-value ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," after the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "contract": {\n    "name": "flipper",\n    "version": "4.3.0",\n    "authors": [\n      "Parity Technologies <admin@parity.io>"\n    ]\n  },\n  "image": "paritytech/contracts-verifiable:4.0.0-alpha",\n')),(0,r.kt)("p",null,"You are now ready to deploy your contract to a production chain."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The image is ",(0,r.kt)("inlineCode",{parentName:"p"},"amd64")," based. Therefore, the build times can be significantly slower\non Apple Silicon machines. To overcome the issue enable ",(0,r.kt)("em",{parentName:"p"},"Rosetta for x86/amd64 emulation"),"\nin ",(0,r.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Features in development")," tab in Docker Desktop App.")),(0,r.kt)("h2",{id:"verifying-contract"},"Verifying contract"),(0,r.kt)("p",null,"Similarly to etherscan, you want to ensure that the given contract bundle\nis indeed a copy of some well-known contract code."),(0,r.kt)("p",null,"There are two options when it comes to verification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local bare-bones verification using ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo contract verify")),(0,r.kt)("li",{parentName:"ul"},"A third-party service ",(0,r.kt)("a",{parentName:"li",href:"/basics/verification/sirato"},"Sirato"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract verify")," allows you to verify the given cargo project\nagainst a reference contract bundle. "),(0,r.kt)("p",null,"Simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract verify --contract <path>"),"\nin the cargo project directory. "),(0,r.kt)("p",null,"If the reference contract was not build inside a docker container, the command\nwill compare the build info from the reference contract with the current environment\nto ensure a match in environment."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are not using standardized verifiable builds. It is your responsibility\nto ensure deterministic environment both for build and verification of\nsmart contracts.")),(0,r.kt)("p",null,"If the build info from the ",(0,r.kt)("inlineCode",{parentName:"p"},".contract")," file matches the environment and a\ndocker ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," is present in metadata, ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract")," will build the\nproject inside the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," docker container.\nOtherwise, a local build is carried out."),(0,r.kt)("p",null,"Upon completion, the built contract bundle is compared to the reference one\nand the result is returned."),(0,r.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,r.kt)("p",null,"If you would like to carry out other operations inside a deterministic environment\nyou can use our docker image. It is availble on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/paritytech/contracts-verifiable/general"},"Docker Hub"),".\nThe entry point is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract")," allowing you to specify other commands to be\nexecuted."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are building a multi-contract project,\nmake sure you are executing the build in the parent directory in order to mount the directory\nof all contracts to be visible. Specify a relative manifest path to the root contract: "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract build --verifiable --release --manifest-path ink-project-a/Cargo.toml"))),(0,r.kt)("p",null,"You can find a Dockefile and further documentation on image usage\nin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/tree/master/build-image"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"cargo-contract")," repository")))}u.isMDXComponent=!0}}]);