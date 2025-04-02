"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4124],{53830:(L,M,j)=>{j.r(M),j.d(M,{assets:()=>C,contentTitle:()=>y,default:()=>w,frontMatter:()=>i,metadata:()=>u,toc:()=>s});const u=JSON.parse('{"id":"macros-attributes/topic","title":"#[ink(topic)]","description":"Text/topic Title Picture","source":"@site/versioned_docs/version-v6/macros-attributes/topic.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/topic","permalink":"/docs/v6/macros-attributes/topic","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/macros-attributes/topic.md","tags":[],"version":"v6","frontMatter":{"title":"#[ink(topic)]","slug":"/macros-attributes/topic","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink(storage)]","permalink":"/docs/v6/macros-attributes/storage"},"next":{"title":"#[ink::chain_extension]","permalink":"/docs/v6/macros-attributes/chain-extension"}}');var N=j(74848),t=j(28453);const i={title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},y=void 0,C={},s=[{value:"Example",id:"example",level:2}];function T(L){const M={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...L.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M.p,{children:(0,N.jsx)(M.img,{alt:"Text/topic Title Picture",src:j(55932).A+"",width:"1600",height:"500"})}),"\n",(0,N.jsx)(M.p,{children:"Applied on fields of ink! event types to indicate that they are topics."}),"\n",(0,N.jsx)(M.p,{children:"Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field.\nThe semantics are similar to indexed event arguments in Solidity."}),"\n",(0,N.jsx)(M.h2,{id:"example",children:"Example"}),"\n",(0,N.jsx)(M.pre,{children:(0,N.jsx)(M.code,{className:"language-rust",children:"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n}\n"})})]})}function w(L={}){const{wrapper:M}={...(0,t.R)(),...L.components};return M?(0,N.jsx)(M,{...L,children:(0,N.jsx)(T,{...L})}):T(L)}},55932:(L,M,j)=>{j.d(M,{A:()=>u});const u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwMCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMCwyNC44djQyOC41YzAsOC4zLTQuMSwxNS43LTEwLjMsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQkJCWMtOS41LDAtMTgsMi45LTIzLjksNy42Yy0xLjksMS41LTQuNiwxLjMtNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCQkJCWMtMS44LDEuNy00LjcsMS41LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQkJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMjQuOEMwLDExLjEsMTEuMSwwLDI0LjgsMGgxNTUwLjNDMTU4OC45LDAsMTYwMCwxMS4xLDE2MDAsMjQuOHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMCwzOTUuNXY1Ny44YzAsOC4zLTQuMSwxNS43LTEwLjQsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCWMtOS41LDAtMTgsMi45LTIzLjksNy41Yy0xLjksMS41LTQuNiwxLjItNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCWMtMS44LDEuNy00LjcsMS42LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMzA2LjRjMCwwLDI4Mi43LDg5LDQ2NS41LDg4LjlDNzU1LDM5NS4yLDExODAuNiwyNjguNywxNjAwLDM5NS41eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM2wwLDU4LjZDNTI2LjgsMzEsODY0LjMsMjE3LjksMTYwMCw3NlYyMS4zYzAtMTEuOC0xMS4xLTIxLjMtMjQuOC0yMS4zTDI0LjgsMEMxMS4xLDAsMCw5LjUsMCwyMS4zeiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMTE0LjEsMzIxLjlINDg1LjljLTE2LjMsMC0yOS41LTEzLjItMjkuNS0yOS41VjE4Mi42YzAtMTYuMywxMy4yLTI5LjUsMjkuNS0yOS41aDYyOC4yCgkJCQljMTYuMywwLDI5LjUsMTMuMiwyOS41LDI5LjV2MTA5LjhDMTE0My42LDMwOC43LDExMzAuNCwzMjEuOSwxMTE0LjEsMzIxLjl6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBkPSJNNTIxLjksMjY1LjRsMS45LTE1LjFoLTUuOXYtNC4yaDYuNGwxLjMtMTFoLTYuM3YtNC4zaDYuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDkuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDUuOXY0LjMKCQkJCWgtNi40bC0xLjMsMTFoNi4zdjQuMmgtNi44bC0xLjksMTUuMWgtNGwxLjgtMTUuMWgtOS44bC0xLjgsMTUuMUg1MjEuOXogTTUyOC4zLDI0Ni4xaDkuOGwxLjMtMTFoLTkuOEw1MjguMywyNDYuMXoiLz4KCQkJPHBhdGggZD0iTTU3Mi41LDI3Ni42VjIxM0g1OTN2My41aC0xNS42djU2LjdINTkzdjMuNUg1NzIuNXoiLz4KCQkJPHBhdGggZD0iTTYyMy42LDI2NS40di0zMWgtMTYuN3YtNWgyMi44djM2SDYyMy42eiBNNjI2LDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzYyOC41LDIyMS41LDYyNy4zLDIyMS45LDYyNiwyMjEuOXoiLz4KCQkJPHBhdGggZD0iTTY1MS41LDI2NS40di0zNmg1bDAuNSw2LjFoMC4zYzEuOS0yLDMuOS0zLjcsNi4xLTVjMi4yLTEuMyw0LjctMiw3LjUtMmM0LjIsMCw3LjQsMS4yLDkuNCwzLjdjMiwyLjUsMyw2LjEsMywxMC44djIyLjMKCQkJCWgtNi4xdi0yMS41YzAtMy40LTAuNi01LjktMS45LTcuNmMtMS4zLTEuNy0zLjQtMi41LTYuNC0yLjVjLTIuMSwwLTQsMC41LTUuNywxLjZjLTEuNywxLjEtMy42LDIuNy01LjcsNC45djI1LjFINjUxLjV6Ii8+CgkJCTxwYXRoIGQ9Ik02OTYuOCwyNjUuNHYtNTIuN2g2LjF2MzUuN2gwLjNsMTkuNC0xOC45aDdsLTE0LjQsMTQuMWwxNi4zLDIxLjhoLTYuOGwtMTMuMi0xOC4xbC04LjUsOC40djkuOEg2OTYuOHoiLz4KCQkJPHBhdGggZD0iTTc2NS40LDI3OC40Yy01LjEtNC05LjItOC44LTEyLjItMTQuNGMtMy01LjYtNC41LTEyLTQuNS0xOS4yYzAtNy4yLDEuNS0xMy41LDQuNS0xOS4yYzMtNS42LDctMTAuNCwxMi4yLTE0LjRsMy4zLDMuMQoJCQkJYy00LjksNC4yLTguNiw4LjgtMTEsMTMuN3MtMy42LDEwLjUtMy42LDE2LjhjMCw2LjIsMS4yLDExLjgsMy42LDE2LjhzNiw5LjUsMTEsMTMuN0w3NjUuNCwyNzguNHoiLz4KCQkJPHBhdGggZD0iTTgwNywyNjYuM2MtMy41LDAtNi4zLTAuNi04LjMtMS45Yy0yLTEuMy0zLjUtMy00LjMtNS4yYy0wLjktMi4yLTEuMy00LjgtMS4zLTcuOHYtMTdoLTEwLjF2LTQuNmwxMC40LTAuNGwwLjgtMTEuNWg1CgkJCQl2MTEuNWgxNy43djVoLTE3Ljd2MTcuMWMwLDMuMiwwLjcsNS42LDIsNy4zYzEuMywxLjcsMy43LDIuNSw3LjEsMi41YzEuNywwLDMuMy0wLjEsNC43LTAuNGMxLjQtMC4zLDIuNy0wLjcsNC0xLjJsMS4zLDQuNAoJCQkJYy0xLjYsMC42LTMuMywxLjEtNS4xLDEuNVM4MDkuMiwyNjYuMyw4MDcsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik04NDQuNCwyNjYuM2MtMy4yLDAtNi4xLTAuNy04LjgtMi4yYy0yLjctMS41LTQuOS0zLjYtNi41LTYuNGMtMS43LTIuOC0yLjUtNi4yLTIuNS0xMC4xYzAtNCwwLjgtNy41LDIuNS0xMC4zCgkJCQljMS43LTIuOCwzLjgtNSw2LjUtNi40YzIuNy0xLjUsNS42LTIuMiw4LjgtMi4yYzMuMiwwLDYuMSwwLjcsOC44LDIuMmMyLjcsMS41LDQuOSwzLjYsNi41LDYuNGMxLjcsMi44LDIuNSw2LjIsMi41LDEwLjMKCQkJCWMwLDMuOS0wLjgsNy4zLTIuNSwxMC4xYy0xLjcsMi44LTMuOCw1LTYuNSw2LjRDODUwLjUsMjY1LjUsODQ3LjYsMjY2LjMsODQ0LjQsMjY2LjN6IE04NDQuNCwyNjEuM2MzLjUsMCw2LjItMS4zLDguMy0zLjgKCQkJCWMyLjEtMi41LDMuMS01LjksMy4xLTEwYzAtNC4xLTEtNy41LTMuMS0xMC4xYy0yLjEtMi42LTQuOS0zLjgtOC4zLTMuOGMtMy41LDAtNi4yLDEuMy04LjMsMy44Yy0yLjEsMi42LTMuMSw1LjktMy4xLDEwLjEKCQkJCWMwLDQuMSwxLDcuNCwzLjEsMTBDODM4LjIsMjYwLDg0MC45LDI2MS4zLDg0NC40LDI2MS4zeiIvPgoJCQk8cGF0aCBkPSJNODczLjUsMjgwLjZ2LTUxLjFoNWwwLjUsNC42aDAuMmMxLjctMS42LDMuNi0yLjksNS44LTMuOWMyLjItMSw0LjQtMS42LDYuNi0xLjZjNC44LDAsOC41LDEuNywxMS4xLDUKCQkJCWMyLjUsMy4zLDMuOCw3LjgsMy44LDEzLjRjMCw0LTAuOCw3LjUtMi4zLDEwLjRjLTEuNSwyLjktMy41LDUuMS02LDYuN2MtMi41LDEuNS01LjIsMi4zLTguMSwyLjNjLTEuNywwLTMuNS0wLjQtNS40LTEuMgoJCQkJYy0xLjktMC44LTMuNy0yLTUuMy0zLjRoLTAuMmwwLjMsNi44djEyLjFIODczLjV6IE04ODkuMiwyNjEuMmMzLjIsMCw1LjktMS4zLDgtMy44YzIuMS0yLjUsMy4xLTYsMy4xLTEwLjUKCQkJCWMwLTMuOS0wLjgtNy4xLTIuNC05LjZjLTEuNi0yLjQtNC4yLTMuNy03LjgtMy43Yy0xLjYsMC0zLjMsMC40LTUuMSwxLjNjLTEuOCwwLjktMy42LDIuMi01LjUsNC4xVjI1N2MxLjcsMS41LDMuNSwyLjYsNS4yLDMuMwoJCQkJQzg4Ni41LDI2MC45LDg4Ny45LDI2MS4yLDg4OS4yLDI2MS4yeiIvPgoJCQk8cGF0aCBkPSJNOTM0LjQsMjY1LjR2LTMxaC0xNi43di01aDIyLjh2MzZIOTM0LjR6IE05MzYuOCwyMjEuOWMtMS40LDAtMi41LTAuNC0zLjUtMS4zYy0wLjktMC45LTEuNC0yLTEuNC0zLjQKCQkJCWMwLTEuNCwwLjUtMi42LDEuNC0zLjRjMC45LTAuOSwyLjEtMS4zLDMuNS0xLjNjMS40LDAsMi41LDAuNCwzLjUsMS4zYzAuOSwwLjksMS40LDIsMS40LDMuNGMwLDEuNC0wLjUsMi42LTEuNCwzLjQKCQkJCUM5MzkuMywyMjEuNSw5MzguMSwyMjEuOSw5MzYuOCwyMjEuOXoiLz4KCQkJPHBhdGggZD0iTTk4MSwyNjYuM2MtMy43LDAtNy4xLTAuNy0xMC4xLTIuMmMtMy0xLjUtNS4zLTMuNi03LTYuNGMtMS43LTIuOC0yLjYtNi4yLTIuNi0xMC4xYzAtNCwwLjktNy41LDIuNy0xMC4zCgkJCQljMS44LTIuOCw0LjMtNSw3LjMtNi40YzMuMS0xLjUsNi40LTIuMiwxMC0yLjJjMi45LDAsNS41LDAuNSw3LjYsMS42YzIuMiwxLDQsMi4zLDUuNSwzLjdsLTMsMy45Yy0xLjUtMS4zLTMtMi4zLTQuNi0zCgkJCQljLTEuNi0wLjctMy4zLTEuMS01LjItMS4xYy0yLjgsMC01LjIsMC42LTcuMywxLjdjLTIuMSwxLjItMy43LDIuOC00LjksNC45Yy0xLjIsMi4xLTEuOCw0LjUtMS44LDcuM2MwLDIuNywwLjYsNS4xLDEuNyw3LjIKCQkJCWMxLjIsMi4xLDIuOCwzLjcsNC44LDQuOHM0LjUsMS43LDcuMywxLjdjMi4yLDAsNC4zLTAuNCw2LjEtMS4zYzEuOC0wLjksMy41LTEuOSw1LTMuMmwyLjcsMy45Yy0yLDEuOC00LjIsMy4yLTYuNiw0LjEKCQkJCUM5ODYuMiwyNjUuOCw5ODMuNywyNjYuMyw5ODEsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDEyLjIsMjc4LjRsLTMuMy0zLjFjNS00LjIsOC42LTguOCwxMS0xMy43YzIuMy01LDMuNS0xMC41LDMuNS0xNi44YzAtNi4yLTEuMi0xMS44LTMuNS0xNi44Yy0yLjMtNS02LTkuNS0xMS0xMy43CgkJCQlsMy4zLTMuMWM1LjEsNCw5LjIsOC44LDEyLjIsMTQuNGMzLDUuNiw0LjUsMTIsNC41LDE5LjJjMCw3LjItMS41LDEzLjUtNC41LDE5LjJDMTAyMS4zLDI2OS42LDEwMTcuMywyNzQuNCwxMDEyLjIsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDUxLjQsMjc2LjZ2LTMuNWgxNS42di01Ni43aC0xNS42VjIxM2gyMC41djYzLjZIMTA1MS40eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0ODMuOCIgY3k9IjQ3OC43IiByeD0iMjcuOSIgcnk9IjE3LjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTU1Mi40IiBjeT0iNDc5IiByeD0iMTguNiIgcnk9IjExLjUiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},28453:(L,M,j)=>{j.d(M,{R:()=>i,x:()=>y});var u=j(96540);const N={},t=u.createContext(N);function i(L){const M=u.useContext(t);return u.useMemo((function(){return"function"==typeof L?L(M):{...M,...L}}),[M,L])}function y(L){let M;return M=L.disableParentContext?"function"==typeof L.components?L.components(N):L.components||N:i(L.components),u.createElement(t.Provider,{value:M},L.children)}}}]);