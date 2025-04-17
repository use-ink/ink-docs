"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2042],{13283:(M,L,j)=>{j.r(L),j.d(L,{assets:()=>e,contentTitle:()=>s,default:()=>n,frontMatter:()=>N,metadata:()=>t,toc:()=>C});const t=JSON.parse('{"id":"macros-attributes/implementation","title":"#[ink(impl)]","description":"Text/impl Title Picture","source":"@site/docs/macros-attributes/implementation.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/impl","permalink":"/docs/v5/macros-attributes/impl","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/macros-attributes/implementation.md","tags":[],"version":"current","frontMatter":{"title":"#[ink(impl)]","slug":"/macros-attributes/impl","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink::event]","permalink":"/docs/v5/macros-attributes/event"},"next":{"title":"#[ink(message)]","permalink":"/docs/v5/macros-attributes/message"}}');var i=j(74848),u=j(28453);const N={title:"#[ink(impl)]",slug:"/macros-attributes/impl",hide_title:!0},s=void 0,e={},C=[{value:"Example",id:"example",level:2}];function T(M){const L={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,u.R)(),...M.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.p,{children:(0,i.jsx)(L.img,{alt:"Text/impl Title Picture",src:j(65181).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(L.p,{children:"This attribute supports a niche case that is rarely needed."}),"\n",(0,i.jsxs)(L.p,{children:["Can be applied on ink! implementation blocks in order to make ink! aware\nof them. This is useful if such an implementation block doesn't contain\nany other ink! attributes, so it would be flagged by ink! as a Rust item.\nAdding ",(0,i.jsx)(L.code,{children:"#[ink(impl)]"})," on such implementation blocks makes them treated\nas ink! implementation blocks thus allowing to access the environment\netc."]}),"\n",(0,i.jsx)(L.p,{children:"Note that ink! messages and constructors still need to be explicitly\nflagged as such."}),"\n",(0,i.jsx)(L.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(L.p,{children:["An implementation block can be defined as a trait implementation\nfor the ink! storage struct using the ",(0,i.jsx)(L.code,{children:"#[ink(impl)]"})," annotation \u2012 even\nif none of its interior items have any ink! specific attributes on them:"]}),"\n",(0,i.jsx)(L.pre,{children:(0,i.jsx)(L.code,{className:"language-rust",children:"use core::convert::TryFrom;\n\n#[ink::contract]\nmod my_module {\n    #[ink(storage)]\n    pub struct MyStorage {\n        /* storage fields */\n    }\n\n    #[ink(impl)]\n    impl MyStorage {\n        fn my_method(&self) -> i32 {\n            /* method implementation */\n        }\n    }\n\n    impl MyStorage {\n      #[ink(constructor)]\n      pub fn my_constructor() -> Self {\n          /* constructor implementation */\n      }\n\n      #[ink(message)]\n      pub fn my_message(&self) {\n          /* message implementation */\n      }\n    }\n}\n"})})]})}function n(M={}){const{wrapper:L}={...(0,u.R)(),...M.components};return L?(0,i.jsx)(L,{...M,children:(0,i.jsx)(T,{...M})}):T(M)}},28453:(M,L,j)=>{j.d(L,{R:()=>N,x:()=>s});var t=j(96540);const i={},u=t.createContext(i);function N(M){const L=t.useContext(u);return t.useMemo((function(){return"function"==typeof M?M(L):{...L,...M}}),[L,M])}function s(M){let L;return L=M.disableParentContext?"function"==typeof M.components?M.components(i):M.components||i:N(M.components),t.createElement(u.Provider,{value:L},M.children)}},65181:(M,L,j)=>{j.d(L,{A:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwMCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMCwyNC44djQyOC41YzAsOC4zLTQuMSwxNS43LTEwLjMsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQkJCWMtOS41LDAtMTgsMi45LTIzLjksNy42Yy0xLjksMS41LTQuNiwxLjMtNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCQkJCWMtMS44LDEuNy00LjcsMS41LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQkJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMjQuOEMwLDExLjEsMTEuMSwwLDI0LjgsMGgxNTUwLjNDMTU4OC45LDAsMTYwMCwxMS4xLDE2MDAsMjQuOHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMCwzOTUuNXY1Ny44YzAsOC4zLTQuMSwxNS43LTEwLjQsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCWMtOS41LDAtMTgsMi45LTIzLjksNy41Yy0xLjksMS41LTQuNiwxLjItNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCWMtMS44LDEuNy00LjcsMS42LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMzA2LjRjMCwwLDI4Mi43LDg5LDQ2NS41LDg4LjlDNzU1LDM5NS4yLDExODAuNiwyNjguNywxNjAwLDM5NS41eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM2wwLDU4LjZDNTI2LjgsMzEsODY0LjMsMjE3LjksMTYwMCw3NlYyMS4zYzAtMTEuOC0xMS4xLTIxLjMtMjQuOC0yMS4zTDI0LjgsMEMxMS4xLDAsMCw5LjUsMCwyMS4zeiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMDk4LjcsMzIxLjlINTAxLjNjLTE1LjksMC0yOC44LTEyLjktMjguOC0yOC44VjE4MS45YzAtMTUuOSwxMi45LTI4LjgsMjguOC0yOC44aDU5Ny41CgkJCQljMTUuOSwwLDI4LjgsMTIuOSwyOC44LDI4Ljh2MTExLjJDMTEyNy41LDMwOSwxMTE0LjYsMzIxLjksMTA5OC43LDMyMS45eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTU0NC4xLDI2NS40bDEuOS0xNS4xSDU0MHYtNC4yaDYuNGwxLjMtMTFoLTYuM3YtNC4zaDYuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDkuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDUuOXY0LjMKCQkJCWgtNi40bC0xLjMsMTFoNi4zdjQuMmgtNi44bC0xLjksMTUuMWgtNGwxLjgtMTUuMUg1NTBsLTEuOCwxNS4xSDU0NC4xeiBNNTUwLjUsMjQ2LjFoOS44bDEuMy0xMWgtOS44TDU1MC41LDI0Ni4xeiIvPgoJCQk8cGF0aCBkPSJNNTk0LjcsMjc2LjZWMjEzaDIwLjV2My41aC0xNS42djU2LjdoMTUuNnYzLjVINTk0Ljd6Ii8+CgkJCTxwYXRoIGQ9Ik02NDUuOCwyNjUuNHYtMzFoLTE2Ljd2LTVoMjIuOHYzNkg2NDUuOHogTTY0OC4yLDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzY1MC43LDIyMS41LDY0OS41LDIyMS45LDY0OC4yLDIyMS45eiIvPgoJCQk8cGF0aCBkPSJNNjczLjcsMjY1LjR2LTM2aDVsMC41LDYuMWgwLjNjMS45LTIsMy45LTMuNyw2LjEtNWMyLjItMS4zLDQuNy0yLDcuNS0yYzQuMiwwLDcuNCwxLjIsOS40LDMuN2MyLDIuNSwzLDYuMSwzLDEwLjh2MjIuMwoJCQkJaC02LjF2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg2NzMuN3oiLz4KCQkJPHBhdGggZD0iTTcxOSwyNjUuNHYtNTIuN2g2LjF2MzUuN2gwLjNsMTkuNC0xOC45aDdsLTE0LjQsMTQuMWwxNi4zLDIxLjhoLTYuOGwtMTMuMi0xOC4xbC04LjUsOC40djkuOEg3MTl6Ii8+CgkJCTxwYXRoIGQ9Ik03ODcuNiwyNzguNGMtNS4xLTQtOS4yLTguOC0xMi4yLTE0LjRjLTMtNS42LTQuNS0xMi00LjUtMTkuMmMwLTcuMiwxLjUtMTMuNSw0LjUtMTkuMmMzLTUuNiw3LTEwLjQsMTIuMi0xNC40bDMuMywzLjEKCQkJCWMtNC45LDQuMi04LjYsOC44LTExLDEzLjdzLTMuNiwxMC41LTMuNiwxNi44czEuMiwxMS44LDMuNiwxNi44czYsOS41LDExLDEzLjdMNzg3LjYsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik04MjMuNCwyNjUuNHYtMzFoLTE2Ljd2LTVoMjIuOHYzNkg4MjMuNHogTTgyNS44LDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzgyOC4zLDIyMS41LDgyNy4xLDIyMS45LDgyNS44LDIyMS45eiIvPgoJCQk8cGF0aCBkPSJNODQ4LjcsMjY1LjR2LTM2aDQuOWwwLjUsNC43aDAuMWMwLjktMS43LDItMywzLjMtNC4xYzEuMi0xLDIuOS0xLjYsNS0xLjZjMy41LDAsNS44LDIuMSw2LjgsNi4yYzEtMS45LDIuMi0zLjQsMy40LTQuNgoJCQkJYzEuMy0xLjEsMi45LTEuNyw1LTEuN2MyLjUsMCw0LjUsMSw1LjksMi44YzEuNCwxLjksMi4xLDQuNywyLjEsOC4zdjI1LjhoLTYuMXYtMjUuM2MwLTQuMi0xLjMtNi4zLTMuOC02LjMKCQkJCWMtMS4yLDAtMi4zLDAuNS0zLjEsMS40Yy0wLjgsMC45LTEuNywyLjMtMi43LDQuMnYyNmgtNS42di0yNS4zYzAtMi4xLTAuMy0zLjYtMC45LTQuN2MtMC42LTEuMS0xLjUtMS42LTIuOC0xLjYKCQkJCWMtMS4yLDAtMi4zLDAuNS0zLjIsMS40Yy0wLjksMC45LTEuOCwyLjMtMi43LDQuMnYyNkg4NDguN3oiLz4KCQkJPHBhdGggZD0iTTg5NS43LDI4MC42di01MS4xaDVsMC41LDQuNmgwLjJjMS43LTEuNiwzLjYtMi45LDUuOC0zLjljMi4yLTEsNC40LTEuNiw2LjYtMS42YzQuOCwwLDguNSwxLjcsMTEuMSw1CgkJCQljMi41LDMuMywzLjgsNy44LDMuOCwxMy40YzAsNC0wLjgsNy41LTIuMywxMC40Yy0xLjUsMi45LTMuNSw1LjEtNiw2LjdjLTIuNSwxLjUtNS4yLDIuMy04LjEsMi4zYy0xLjcsMC0zLjUtMC40LTUuNC0xLjIKCQkJCWMtMS45LTAuOC0zLjctMi01LjMtMy40aC0wLjJsMC4zLDYuOHYxMi4xSDg5NS43eiBNOTExLjQsMjYxLjJjMy4yLDAsNS45LTEuMyw4LTMuOGMyLjEtMi41LDMuMS02LDMuMS0xMC41CgkJCQljMC0zLjktMC44LTcuMS0yLjQtOS42Yy0xLjYtMi40LTQuMi0zLjctNy44LTMuN2MtMS42LDAtMy4zLDAuNC01LjEsMS4zYy0xLjgsMC45LTMuNiwyLjItNS41LDQuMVYyNTdjMS43LDEuNSwzLjUsMi42LDUuMiwzLjMKCQkJCUM5MDguNywyNjAuOSw5MTAuMSwyNjEuMiw5MTEuNCwyNjEuMnoiLz4KCQkJPHBhdGggZD0iTTk2My4zLDI2Ni4zYy0zLjgsMC02LjctMS4xLTguOC0zLjNzLTMuMS01LjQtMy4xLTkuN3YtMzUuN2gtMTIuOHYtNWgxOC45djQxLjFjMCwyLjYsMC43LDQuNSwyLDUuNwoJCQkJYzEuMywxLjIsMywxLjgsNS4xLDEuOGMyLjEsMCw0LjQtMC41LDYuNy0xLjZsMS42LDQuNWMtMS43LDAuNy0zLjIsMS4yLTQuNiwxLjZDOTY3LDI2Ni4xLDk2NS4zLDI2Ni4zLDk2My4zLDI2Ni4zeiIvPgoJCQk8cGF0aCBkPSJNOTkwLDI3OC40bC0zLjMtMy4xYzUtNC4yLDguNi04LjgsMTEtMTMuN2MyLjMtNSwzLjUtMTAuNSwzLjUtMTYuOHMtMS4yLTExLjgtMy41LTE2LjhjLTIuMy01LTYtOS41LTExLTEzLjdsMy4zLTMuMQoJCQkJYzUuMSw0LDkuMiw4LjgsMTIuMiwxNC40YzMsNS42LDQuNSwxMiw0LjUsMTkuMmMwLDcuMi0xLjUsMTMuNS00LjUsMTkuMkM5OTkuMSwyNjkuNiw5OTUuMSwyNzQuNCw5OTAsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDI5LjMsMjc2LjZ2LTMuNWgxNS42di01Ni43aC0xNS42VjIxM2gyMC41djYzLjZIMTAyOS4zeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0ODMuOCIgY3k9IjQ3OC43IiByeD0iMjcuOSIgcnk9IjE3LjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTU1Mi40IiBjeT0iNDc5IiByeD0iMTguNiIgcnk9IjExLjUiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);