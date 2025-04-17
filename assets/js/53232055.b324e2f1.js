"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6982],{28453:(L,M,j)=>{j.d(M,{R:()=>i,x:()=>C});var u=j(96540);const N={},t=u.createContext(N);function i(L){const M=u.useContext(t);return u.useMemo((function(){return"function"==typeof L?L(M):{...M,...L}}),[M,L])}function C(L){let M;return M=L.disableParentContext?"function"==typeof L.components?L.components(N):L.components||N:i(L.components),u.createElement(t.Provider,{value:M},L.children)}},66678:(L,M,j)=>{j.r(M),j.d(M,{assets:()=>s,contentTitle:()=>C,default:()=>w,frontMatter:()=>i,metadata:()=>u,toc:()=>y});const u=JSON.parse('{"id":"macros-attributes/anonymous","title":"#[ink(anonymous)]","description":"Text/anon Title Picture","source":"@site/versioned_docs/version-v4/macros-attributes/anonymous.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/anonymous","permalink":"/docs/v4/macros-attributes/anonymous","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/macros-attributes/anonymous.md","tags":[],"version":"v4","frontMatter":{"title":"#[ink(anonymous)]","slug":"/macros-attributes/anonymous","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink::contract]","permalink":"/docs/v4/macros-attributes/contract"},"next":{"title":"#[ink(constructor)]","permalink":"/docs/v4/macros-attributes/constructor"}}');var N=j(74848),t=j(28453);const i={title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},C=void 0,s={},y=[{value:"Example",id:"example",level:2}];function T(L){const M={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...L.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M.p,{children:(0,N.jsx)(M.img,{alt:"Text/anon Title Picture",src:j(71973).A+"",width:"1600",height:"500"})}),"\n",(0,N.jsx)(M.p,{children:"Applicable to ink! events."}),"\n",(0,N.jsx)(M.p,{children:"Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity."}),"\n",(0,N.jsx)(M.p,{children:"Anonymous events have similar semantics as in Solidity in that their\nevent signature won't be included in their event topics serialization\nto reduce event emitting overhead. This is especially useful for user\ndefined events."}),"\n",(0,N.jsxs)(M.p,{children:["The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,N.jsx)(M.code,{children:"#[ink(anonymous)]"}),".\nThe attribute implies that it is not possible to filter for specific anonymous events by name."]}),"\n",(0,N.jsx)(M.h2,{id:"example",children:"Example"}),"\n",(0,N.jsx)(M.pre,{children:(0,N.jsx)(M.code,{className:"language-rust",children:"#[ink(event)]\n#[ink(anonymous)]\npub struct MyEvent {\n    #[ink(topic)]\n    field_1: i32,\n    field_2: bool,\n}\n"})})]})}function w(L={}){const{wrapper:M}={...(0,t.R)(),...L.components};return M?(0,N.jsx)(M,{...L,children:(0,N.jsx)(T,{...L})}):T(L)}},71973:(L,M,j)=>{j.d(M,{A:()=>u});const u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwMCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMCwyNC44djQyOC41YzAsOC4zLTQuMSwxNS43LTEwLjMsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQkJCWMtOS41LDAtMTgsMi45LTIzLjksNy42Yy0xLjksMS41LTQuNiwxLjMtNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCQkJCWMtMS44LDEuNy00LjcsMS41LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQkJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMjQuOEMwLDExLjEsMTEuMSwwLDI0LjgsMGgxNTUwLjNDMTU4OC45LDAsMTYwMCwxMS4xLDE2MDAsMjQuOHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMCwzOTUuNXY1Ny44YzAsOC4zLTQuMSwxNS43LTEwLjQsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCWMtOS41LDAtMTgsMi45LTIzLjksNy41Yy0xLjksMS41LTQuNiwxLjItNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCWMtMS44LDEuNy00LjcsMS42LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMzA2LjRjMCwwLDI4Mi43LDg5LDQ2NS41LDg4LjlDNzU1LDM5NS4yLDExODAuNiwyNjguNywxNjAwLDM5NS41eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM2wwLDU4LjZDNTI2LjgsMzEsODY0LjMsMjE3LjksMTYwMCw3NlYyMS4zYzAtMTEuOC0xMS4xLTIxLjMtMjQuOC0yMS4zTDI0LjgsMEMxMS4xLDAsMCw5LjUsMCwyMS4zeiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMTk4LjcsMzIxLjlINDAxLjNjLTE4LjMsMC0zMy4xLTE0LjgtMzMuMS0zMy4xVjE4Ni4yYzAtMTguMywxNC44LTMzLjEsMzMuMS0zMy4xaDc5Ny40CgkJCQljMTguMywwLDMzLjEsMTQuOCwzMy4xLDMzLjF2MTAyLjZDMTIzMS44LDMwNy4xLDEyMTcsMzIxLjksMTE5OC43LDMyMS45eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQzMy4xLDI2NS40bDEuOS0xNS4xSDQyOXYtNC4yaDYuNGwxLjMtMTFoLTYuM3YtNC4zaDYuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDkuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDUuOXY0LjMKCQkJCWgtNi40bC0xLjMsMTFoNi4zdjQuMmgtNi44bC0xLjksMTUuMWgtNGwxLjgtMTUuMUg0MzlsLTEuOCwxNS4xSDQzMy4xeiBNNDM5LjUsMjQ2LjFoOS44bDEuMy0xMWgtOS44TDQzOS41LDI0Ni4xeiIvPgoJCQk8cGF0aCBkPSJNNDgzLjcsMjc2LjZWMjEzaDIwLjV2My41aC0xNS42djU2LjdoMTUuNnYzLjVINDgzLjd6Ii8+CgkJCTxwYXRoIGQ9Ik01MzQuOCwyNjUuNHYtMzFoLTE2Ljd2LTVoMjIuOHYzNkg1MzQuOHogTTUzNy4yLDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzUzOS43LDIyMS41LDUzOC41LDIyMS45LDUzNy4yLDIyMS45eiIvPgoJCQk8cGF0aCBkPSJNNTYyLjcsMjY1LjR2LTM2aDVsMC41LDYuMWgwLjNjMS45LTIsMy45LTMuNyw2LjEtNWMyLjItMS4zLDQuNy0yLDcuNS0yYzQuMiwwLDcuNCwxLjIsOS40LDMuN2MyLDIuNSwzLDYuMSwzLDEwLjh2MjIuMwoJCQkJaC02LjF2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg1NjIuN3oiLz4KCQkJPHBhdGggZD0iTTYwOCwyNjUuNHYtNTIuN2g2LjF2MzUuN2gwLjNsMTkuNC0xOC45aDdsLTE0LjQsMTQuMWwxNi4zLDIxLjhoLTYuOGwtMTMuMi0xOC4xbC04LjUsOC40djkuOEg2MDh6Ii8+CgkJCTxwYXRoIGQ9Ik02NzYuNiwyNzguNGMtNS4xLTQtOS4yLTguOC0xMi4yLTE0LjRjLTMtNS42LTQuNS0xMi00LjUtMTkuMmMwLTcuMiwxLjUtMTMuNSw0LjUtMTkuMmMzLTUuNiw3LTEwLjQsMTIuMi0xNC40bDMuMywzLjEKCQkJCWMtNC45LDQuMi04LjYsOC44LTExLDEzLjdzLTMuNiwxMC41LTMuNiwxNi44YzAsNi4yLDEuMiwxMS44LDMuNiwxNi44czYsOS41LDExLDEzLjdMNjc2LjYsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik03MDcuMiwyNjYuM2MtMi4yLDAtNC4zLTAuNC02LjEtMS4yYy0xLjgtMC44LTMuMy0yLTQuNC0zLjVjLTEuMS0xLjUtMS43LTMuNC0xLjctNS41YzAtMi43LDAuOS01LDIuNi02LjgKCQkJCWMxLjgtMS44LDQuNi0zLjIsOC40LTQuM2MzLjgtMS4xLDguOS0xLjksMTUtMi40YzAtMS42LTAuNC0zLjEtMS00LjVjLTAuNi0xLjQtMS42LTIuNS0zLTMuM2MtMS40LTAuOC0zLjItMS4zLTUuNS0xLjMKCQkJCWMtMi4zLDAtNC42LDAuNS02LjgsMS40Yy0yLjIsMC45LTQuMSwxLjktNS44LDIuOWwtMi40LTQuMWMxLjgtMS4yLDQuMi0yLjMsNy0zLjVjMi44LTEuMSw1LjgtMS43LDktMS43YzQuOSwwLDguNiwxLjMsMTEsNAoJCQkJYzIuNCwyLjcsMy42LDYuMywzLjYsMTAuOHYyMi4xaC01bC0wLjUtNC45aC0wLjJjLTIsMS41LTQuMiwyLjktNi43LDRDNzEyLjMsMjY1LjcsNzA5LjgsMjY2LjMsNzA3LjIsMjY2LjN6IE03MDguOCwyNjEuNAoJCQkJYzIsMCw0LjEtMC41LDYuMS0xLjRjMi0wLjksNC4xLTIuMiw2LjEtMy45di05LjVjLTUuMSwwLjQtOS4yLDEtMTIuMSwxLjhjLTIuOSwwLjgtNSwxLjgtNi4yLDNjLTEuMiwxLjItMS44LDIuNi0xLjgsNC4yCgkJCQljMCwyLDAuOCwzLjUsMi40LDQuNEM3MDQuOSwyNjAuOSw3MDYuOCwyNjEuNCw3MDguOCwyNjEuNHoiLz4KCQkJPHBhdGggZD0iTTc0MC4zLDI2NS40di0zNmg1bDAuNSw2LjFoMC4zYzEuOS0yLDMuOS0zLjcsNi4xLTVjMi4yLTEuMyw0LjctMiw3LjUtMmM0LjIsMCw3LjQsMS4yLDkuNCwzLjdjMiwyLjUsMyw2LjEsMywxMC44djIyLjMKCQkJCUg3NjZ2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg3NDAuM3oiLz4KCQkJPHBhdGggZD0iTTgwMCwyNjYuM2MtMy4yLDAtNi4xLTAuNy04LjgtMi4yYy0yLjctMS41LTQuOS0zLjYtNi41LTYuNGMtMS43LTIuOC0yLjUtNi4yLTIuNS0xMC4xYzAtNCwwLjgtNy41LDIuNS0xMC4zCgkJCQljMS43LTIuOCwzLjgtNSw2LjUtNi40YzIuNy0xLjUsNS42LTIuMiw4LjgtMi4yYzMuMiwwLDYuMSwwLjcsOC44LDIuMmMyLjcsMS41LDQuOSwzLjYsNi41LDYuNGMxLjcsMi44LDIuNSw2LjIsMi41LDEwLjMKCQkJCWMwLDMuOS0wLjgsNy4zLTIuNSwxMC4xYy0xLjcsMi44LTMuOCw1LTYuNSw2LjRDODA2LjEsMjY1LjUsODAzLjIsMjY2LjMsODAwLDI2Ni4zeiBNODAwLDI2MS4zYzMuNSwwLDYuMi0xLjMsOC4zLTMuOAoJCQkJYzIuMS0yLjUsMy4xLTUuOSwzLjEtMTBjMC00LjEtMS03LjUtMy4xLTEwLjFjLTIuMS0yLjYtNC45LTMuOC04LjMtMy44Yy0zLjUsMC02LjIsMS4zLTguMywzLjhjLTIuMSwyLjYtMy4xLDUuOS0zLjEsMTAuMQoJCQkJYzAsNC4xLDEsNy40LDMuMSwxMEM3OTMuOCwyNjAsNzk2LjUsMjYxLjMsODAwLDI2MS4zeiIvPgoJCQk8cGF0aCBkPSJNODI5LjEsMjY1LjR2LTM2aDVsMC41LDYuMWgwLjNjMS45LTIsMy45LTMuNyw2LjEtNWMyLjItMS4zLDQuNy0yLDcuNS0yYzQuMiwwLDcuNCwxLjIsOS40LDMuN2MyLDIuNSwzLDYuMSwzLDEwLjh2MjIuMwoJCQkJaC02LjF2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg4MjkuMXoiLz4KCQkJPHBhdGggZD0iTTg3Ni4zLDI4MC45Yy0xLjgsMC0zLjQtMC4yLTQuNy0wLjdsMS4zLTQuOGMwLjUsMC4xLDEsMC4zLDEuNiwwLjRjMC42LDAuMSwxLjEsMC4xLDEuNywwLjFjMi41LDAsNC42LTAuNyw2LjEtMi4yCgkJCQljMS42LTEuNSwyLjgtMy4zLDMuNy01LjVsMS4xLTIuN2wtMTYuOC0zNmg2LjFsOC44LDE5LjljMC43LDEuNiwxLjQsMy4zLDIuMiw1LjFjMC44LDEuOCwxLjUsMy42LDIuMyw1LjNoMC4zCgkJCQljMC42LTEuNywxLjMtMy41LDItNS4zYzAuNy0xLjgsMS4zLTMuNSwxLjktNS4xbDcuOC0xOS45aDUuOGwtMTUuOCwzOC45Yy0wLjksMi40LTIsNC41LTMuMyw2LjRjLTEuMywxLjktMywzLjQtNC45LDQuNQoJCQkJQzg4MS4zLDI4MC4zLDg3OSwyODAuOSw4NzYuMywyODAuOXoiLz4KCQkJPHBhdGggZD0iTTkxNS4zLDI2NS40di0zNmg0LjlsMC41LDQuN2gwLjFjMC45LTEuNywyLTMsMy4zLTQuMWMxLjItMSwyLjktMS42LDUtMS42YzMuNSwwLDUuOCwyLjEsNi44LDYuMmMxLTEuOSwyLjItMy40LDMuNC00LjYKCQkJCWMxLjMtMS4xLDIuOS0xLjcsNS0xLjdjMi41LDAsNC41LDEsNS45LDIuOGMxLjQsMS45LDIuMSw0LjcsMi4xLDguM3YyNS44aC02LjF2LTI1LjNjMC00LjItMS4zLTYuMy0zLjgtNi4zCgkJCQljLTEuMiwwLTIuMywwLjUtMy4xLDEuNGMtMC44LDAuOS0xLjcsMi4zLTIuNyw0LjJ2MjZIOTMxdi0yNS4zYzAtMi4xLTAuMy0zLjYtMC45LTQuN2MtMC42LTEuMS0xLjUtMS42LTIuOC0xLjYKCQkJCWMtMS4yLDAtMi4zLDAuNS0zLjIsMS40Yy0wLjksMC45LTEuOCwyLjMtMi43LDQuMnYyNkg5MTUuM3oiLz4KCQkJPHBhdGggZD0iTTk3Ny42LDI2Ni4zYy0zLjIsMC02LjEtMC43LTguOC0yLjJjLTIuNy0xLjUtNC45LTMuNi02LjUtNi40Yy0xLjctMi44LTIuNS02LjItMi41LTEwLjFjMC00LDAuOC03LjUsMi41LTEwLjMKCQkJCWMxLjctMi44LDMuOC01LDYuNS02LjRjMi43LTEuNSw1LjYtMi4yLDguOC0yLjJjMy4yLDAsNi4xLDAuNyw4LjgsMi4yYzIuNywxLjUsNC45LDMuNiw2LjUsNi40YzEuNywyLjgsMi41LDYuMiwyLjUsMTAuMwoJCQkJYzAsMy45LTAuOCw3LjMtMi41LDEwLjFjLTEuNywyLjgtMy44LDUtNi41LDYuNEM5ODMuNywyNjUuNSw5ODAuOCwyNjYuMyw5NzcuNiwyNjYuM3ogTTk3Ny42LDI2MS4zYzMuNSwwLDYuMi0xLjMsOC4zLTMuOAoJCQkJYzIuMS0yLjUsMy4xLTUuOSwzLjEtMTBjMC00LjEtMS03LjUtMy4xLTEwLjFjLTIuMS0yLjYtNC45LTMuOC04LjMtMy44Yy0zLjUsMC02LjIsMS4zLTguMywzLjhjLTIuMSwyLjYtMy4xLDUuOS0zLjEsMTAuMQoJCQkJYzAsNC4xLDEsNy40LDMuMSwxMEM5NzEuNCwyNjAsOTc0LjEsMjYxLjMsOTc3LjYsMjYxLjN6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDE4LDI2Ni4zYy00LjMsMC03LjUtMS4yLTkuNS0zLjdjLTItMi41LTMtNi4xLTMtMTAuOHYtMjIuM2g2LjFWMjUxYzAsMy40LDAuNiw1LjksMS45LDcuNmMxLjMsMS43LDMuNCwyLjUsNi40LDIuNQoJCQkJYzIuMSwwLDQtMC41LDUuNy0xLjZjMS43LTEuMSwzLjUtMi43LDUuNS01LjF2LTI0LjloNi4xdjM2aC01bC0wLjUtNi4zaC0wLjNjLTEuOCwyLjEtMy44LDMuOC02LDUuMlMxMDIwLjgsMjY2LjMsMTAxOCwyNjYuM3oiCgkJCQkvPgoJCQk8cGF0aCBkPSJNMTA2Ny4xLDI2Ni4zYy0zLjUsMC02LjgtMC42LTkuOC0xLjdjLTMuMS0xLjEtNS43LTIuNC03LjgtNGwyLjgtNGMyLjEsMS41LDQuNCwyLjcsNi45LDMuNmMyLjUsMC45LDUuNCwxLjMsOC43LDEuMwoJCQkJYzMuMSwwLDUuMy0wLjYsNi44LTEuN2MxLjUtMS4xLDIuMy0yLjQsMi4zLTRjMC0wLjktMC4zLTEuOC0wLjgtMi41Yy0wLjUtMC43LTEuNi0xLjUtMy4yLTIuMWMtMS42LTAuNy00LTEuNC03LjMtMgoJCQkJYy00LjYtMS04LjEtMi4zLTEwLjUtNGMtMi40LTEuNy0zLjYtMy44LTMuNi02LjVjMC0yLjksMS4zLTUuMywzLjgtNy4zYzIuNS0xLjksNi4yLTIuOSwxMS4yLTIuOWMyLjgsMCw1LjQsMC41LDgsMS40CgkJCQljMi42LDAuOSw0LjcsMiw2LjUsMy4ybC0zLDMuOWMtMS43LTEuMS0zLjUtMi01LjUtMi43Yy0yLTAuNy00LjItMS02LjUtMWMtMy4xLDAtNS4yLDAuNS02LjQsMS42Yy0xLjIsMS0xLjgsMi4yLTEuOCwzLjYKCQkJCWMwLDEuNSwwLjgsMi43LDIuNSwzLjZjMS43LDAuOCw0LjMsMS43LDgsMi40YzQsMC44LDcuMSwxLjgsOS4yLDIuOGMyLjEsMSwzLjYsMi4yLDQuNCwzLjZjMC44LDEuMywxLjIsMi45LDEuMiw0LjcKCQkJCWMwLDEuOS0wLjYsMy43LTEuOCw1LjNjLTEuMiwxLjYtMywyLjktNS40LDMuOVMxMDcwLjYsMjY2LjMsMTA2Ny4xLDI2Ni4zeiIvPgoJCQk8cGF0aCBkPSJNMTEwMSwyNzguNGwtMy4zLTMuMWM1LTQuMiw4LjYtOC44LDExLTEzLjdjMi4zLTUsMy41LTEwLjUsMy41LTE2LjhjMC02LjItMS4yLTExLjgtMy41LTE2LjhjLTIuMy01LTYtOS41LTExLTEzLjcKCQkJCWwzLjMtMy4xYzUuMSw0LDkuMiw4LjgsMTIuMiwxNC40YzMsNS42LDQuNSwxMiw0LjUsMTkuMmMwLDcuMi0xLjUsMTMuNS00LjUsMTkuMkMxMTEwLjEsMjY5LjYsMTEwNi4xLDI3NC40LDExMDEsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMTQwLjIsMjc2LjZ2LTMuNWgxNS42di01Ni43aC0xNS42VjIxM2gyMC41djYzLjZIMTE0MC4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0ODMuOCIgY3k9IjQ3OC43IiByeD0iMjcuOSIgcnk9IjE3LjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTU1Mi40IiBjeT0iNDc5IiByeD0iMTguNiIgcnk9IjExLjUiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);