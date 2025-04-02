"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2018],{91059:(L,M,j)=>{j.r(M),j.d(M,{assets:()=>s,contentTitle:()=>t,default:()=>i,frontMatter:()=>y,metadata:()=>u,toc:()=>w});const u=JSON.parse('{"id":"macros-attributes/namespace","title":"#[ink(namespace = \\"\u2026\\")]","description":"Text/namespace Title Picture","source":"@site/versioned_docs/version-v4/macros-attributes/namespace.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/namespace","permalink":"/docs/v4/macros-attributes/namespace","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/macros-attributes/namespace.md","tags":[],"version":"v4","frontMatter":{"title":"#[ink(namespace = \\"\u2026\\")]","slug":"/macros-attributes/namespace","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink(message)]","permalink":"/docs/v4/macros-attributes/message"},"next":{"title":"#[ink(payable)]","permalink":"/docs/v4/macros-attributes/payable"}}');var N=j(74848),C=j(28453);const y={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},t=void 0,s={},w=[{value:"Example",id:"example",level:2}];function T(L){const M={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,C.R)(),...L.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M.p,{children:(0,N.jsx)(M.img,{alt:"Text/namespace Title Picture",src:j(59832).A+"",width:"1600",height:"500"})}),"\n",(0,N.jsx)(M.p,{children:"Applicable to ink! trait implementation blocks."}),"\n",(0,N.jsx)(M.p,{children:"Applied on ink! trait implementation blocks to disambiguate other trait\nimplementation blocks with equal names."}),"\n",(0,N.jsx)(M.h2,{id:"example",children:"Example"}),"\n",(0,N.jsx)(M.pre,{children:(0,N.jsx)(M.code,{className:"language-rust",children:'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n'})}),"\n",(0,N.jsx)(M.p,{children:"This changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation.\nThus allowing disambiguation between trait implementations with overlapping message or constructor names."})]})}function i(L={}){const{wrapper:M}={...(0,C.R)(),...L.components};return M?(0,N.jsx)(M,{...L,children:(0,N.jsx)(T,{...L})}):T(L)}},59832:(L,M,j)=>{j.d(M,{A:()=>u});const u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwMCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMCwyNC44djQyOC41YzAsOC4zLTQuMSwxNS43LTEwLjMsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQkJCWMtOS41LDAtMTgsMi45LTIzLjksNy42Yy0xLjksMS41LTQuNiwxLjMtNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCQkJCWMtMS44LDEuNy00LjcsMS41LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQkJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMjQuOEMwLDExLjEsMTEuMSwwLDI0LjgsMGgxNTUwLjNDMTU4OC45LDAsMTYwMCwxMS4xLDE2MDAsMjQuOHoiLz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMCwzOTUuNXY1Ny44YzAsOC4zLTQuMSwxNS43LTEwLjQsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCWMtOS41LDAtMTgsMi45LTIzLjksNy41Yy0xLjksMS41LTQuNiwxLjItNi4yLTAuNmMtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41Yy0xMy45LDAtMjYuNCw0LjctMzQuMywxMgoJCWMtMS44LDEuNy00LjcsMS42LTYuNC0wLjNjLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjhjLTI3LjEsMC00OS4zLDEzLjktNTIuNCwzMS43Yy0wLjQsMi40LTIuNSw0LjEtNC45LDQuMWwtMTMxNy4yLDAKCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMzA2LjRjMCwwLDI4Mi43LDg5LDQ2NS41LDg4LjlDNzU1LDM5NS4yLDExODAuNiwyNjguNywxNjAwLDM5NS41eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM2wwLDU4LjZDNTI2LjgsMzEsODY0LjMsMjE3LjksMTYwMCw3NlYyMS4zYzAtMTEuOC0xMS4xLTIxLjMtMjQuOC0yMS4zTDI0LjgsMEMxMS4xLDAsMCw5LjUsMCwyMS4zeiIvPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMzI3LjgsMzIxLjlIMjcyLjJjLTIwLjksMC0zNy44LTE2LjktMzcuOC0zNy44VjE5MWMwLTIwLjksMTYuOS0zNy44LDM3LjgtMzcuOGgxMDU1LjUKCQkJCWMyMC45LDAsMzcuOCwxNi45LDM3LjgsMzcuOFYyODRDMTM2NS42LDMwNC45LDEzNDguNywzMjEuOSwxMzI3LjgsMzIxLjl6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjk5LjksMjY1LjRsMS45LTE1LjFoLTUuOXYtNC4yaDYuNGwxLjMtMTFoLTYuM3YtNC4zaDYuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDkuOGwxLjctMTMuNWgzLjlsLTEuNiwxMy41aDUuOXY0LjMKCQkJCWgtNi40bC0xLjMsMTFoNi4zdjQuMmgtNi44bC0xLjksMTUuMWgtNGwxLjgtMTUuMWgtOS44bC0xLjgsMTUuMUgyOTkuOXogTTMwNi4zLDI0Ni4xaDkuOGwxLjMtMTFoLTkuOEwzMDYuMywyNDYuMXoiLz4KCQkJPHBhdGggZD0iTTM1MC41LDI3Ni42VjIxM0gzNzF2My41aC0xNS42djU2LjdIMzcxdjMuNUgzNTAuNXoiLz4KCQkJPHBhdGggZD0iTTQwMS42LDI2NS40di0zMWgtMTYuN3YtNWgyMi44djM2SDQwMS42eiBNNDA0LDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzQwNi41LDIyMS41LDQwNS4zLDIyMS45LDQwNCwyMjEuOXoiLz4KCQkJPHBhdGggZD0iTTQyOS41LDI2NS40di0zNmg1bDAuNSw2LjFoMC4zYzEuOS0yLDMuOS0zLjcsNi4xLTVjMi4yLTEuMyw0LjctMiw3LjUtMmM0LjIsMCw3LjQsMS4yLDkuNCwzLjdjMiwyLjUsMyw2LjEsMywxMC44djIyLjMKCQkJCWgtNi4xdi0yMS41YzAtMy40LTAuNi01LjktMS45LTcuNmMtMS4zLTEuNy0zLjQtMi41LTYuNC0yLjVjLTIuMSwwLTQsMC41LTUuNywxLjZjLTEuNywxLjEtMy42LDIuNy01LjcsNC45djI1LjFINDI5LjV6Ii8+CgkJCTxwYXRoIGQ9Ik00NzQuOSwyNjUuNHYtNTIuN2g2LjF2MzUuN2gwLjNsMTkuNC0xOC45aDdsLTE0LjQsMTQuMWwxNi4zLDIxLjhoLTYuOGwtMTMuMi0xOC4xbC04LjUsOC40djkuOEg0NzQuOXoiLz4KCQkJPHBhdGggZD0iTTU0My40LDI3OC40Yy01LjEtNC05LjItOC44LTEyLjItMTQuNGMtMy01LjYtNC41LTEyLTQuNS0xOS4yYzAtNy4yLDEuNS0xMy41LDQuNS0xOS4yYzMtNS42LDctMTAuNCwxMi4yLTE0LjRsMy4zLDMuMQoJCQkJYy00LjksNC4yLTguNiw4LjgtMTEsMTMuN3MtMy42LDEwLjUtMy42LDE2LjhjMCw2LjIsMS4yLDExLjgsMy42LDE2LjhzNiw5LjUsMTEsMTMuN0w1NDMuNCwyNzguNHoiLz4KCQkJPHBhdGggZD0iTTU2Mi43LDI2NS40di0zNmg1bDAuNSw2LjFoMC4zYzEuOS0yLDMuOS0zLjcsNi4xLTVjMi4yLTEuMyw0LjctMiw3LjUtMmM0LjIsMCw3LjQsMS4yLDkuNCwzLjdjMiwyLjUsMyw2LjEsMywxMC44djIyLjMKCQkJCWgtNi4xdi0yMS41YzAtMy40LTAuNi01LjktMS45LTcuNmMtMS4zLTEuNy0zLjQtMi41LTYuNC0yLjVjLTIuMSwwLTQsMC41LTUuNywxLjZjLTEuNywxLjEtMy42LDIuNy01LjcsNC45djI1LjFINTYyLjd6Ii8+CgkJCTxwYXRoIGQ9Ik02MTguNCwyNjYuM2MtMi4yLDAtNC4zLTAuNC02LjEtMS4yYy0xLjgtMC44LTMuMy0yLTQuNC0zLjVjLTEuMS0xLjUtMS43LTMuNC0xLjctNS41YzAtMi43LDAuOS01LDIuNi02LjgKCQkJCWMxLjgtMS44LDQuNi0zLjIsOC40LTQuM2MzLjgtMS4xLDguOS0xLjksMTUtMi40YzAtMS42LTAuNC0zLjEtMS00LjVjLTAuNi0xLjQtMS42LTIuNS0zLTMuM2MtMS40LTAuOC0zLjItMS4zLTUuNS0xLjMKCQkJCWMtMi4zLDAtNC42LDAuNS02LjgsMS40Yy0yLjIsMC45LTQuMSwxLjktNS44LDIuOWwtMi40LTQuMWMxLjgtMS4yLDQuMi0yLjMsNy0zLjVjMi44LTEuMSw1LjgtMS43LDktMS43YzQuOSwwLDguNiwxLjMsMTEsNAoJCQkJYzIuNCwyLjcsMy42LDYuMywzLjYsMTAuOHYyMi4xaC01bC0wLjUtNC45aC0wLjJjLTIsMS41LTQuMiwyLjktNi43LDRDNjIzLjUsMjY1LjcsNjIxLDI2Ni4zLDYxOC40LDI2Ni4zeiBNNjIwLDI2MS40CgkJCQljMiwwLDQuMS0wLjUsNi4xLTEuNGMyLTAuOSw0LjEtMi4yLDYuMS0zLjl2LTkuNWMtNS4xLDAuNC05LjIsMS0xMi4xLDEuOGMtMi45LDAuOC01LDEuOC02LjIsM2MtMS4yLDEuMi0xLjgsMi42LTEuOCw0LjIKCQkJCWMwLDIsMC44LDMuNSwyLjQsNC40QzYxNi4xLDI2MC45LDYxOCwyNjEuNCw2MjAsMjYxLjR6Ii8+CgkJCTxwYXRoIGQ9Ik02NDguOSwyNjUuNHYtMzZoNC45bDAuNSw0LjdoMC4xYzAuOS0xLjcsMi0zLDMuMy00LjFjMS4yLTEsMi45LTEuNiw1LTEuNmMzLjUsMCw1LjgsMi4xLDYuOCw2LjJjMS0xLjksMi4yLTMuNCwzLjQtNC42CgkJCQljMS4zLTEuMSwyLjktMS43LDUtMS43YzIuNSwwLDQuNSwxLDUuOSwyLjhjMS40LDEuOSwyLjEsNC43LDIuMSw4LjN2MjUuOGgtNi4xdi0yNS4zYzAtNC4yLTEuMy02LjMtMy44LTYuMwoJCQkJYy0xLjIsMC0yLjMsMC41LTMuMSwxLjRjLTAuOCwwLjktMS43LDIuMy0yLjcsNC4ydjI2aC01LjZ2LTI1LjNjMC0yLjEtMC4zLTMuNi0wLjktNC43Yy0wLjYtMS4xLTEuNS0xLjYtMi44LTEuNgoJCQkJYy0xLjIsMC0yLjMsMC41LTMuMiwxLjRjLTAuOSwwLjktMS44LDIuMy0yLjcsNC4ydjI2SDY0OC45eiIvPgoJCQk8cGF0aCBkPSJNNzEzLjQsMjY2LjNjLTMuNiwwLTYuOS0wLjctOS44LTIuMmMtMi45LTEuNS01LjMtMy42LTctNi41Yy0xLjctMi44LTIuNi02LjMtMi42LTEwLjJjMC0zLjksMC45LTcuMywyLjYtMTAuMQoJCQkJYzEuNy0yLjgsNC01LDYuOC02LjVjMi44LTEuNSw1LjgtMi4zLDktMi4zYzUuMiwwLDkuMiwxLjUsMTIuMSw0LjZjMi45LDMuMSw0LjMsNy4yLDQuMywxMi4yYzAsMC43LDAsMS40LTAuMSwyCgkJCQljMCwwLjYtMC4xLDEuMi0wLjIsMS43aC0yOC4zYzAuNCw0LDEuOSw3LjEsNC41LDkuMmMyLjYsMi4xLDUuOCwzLjEsOS41LDMuMWMyLjIsMCw0LjEtMC4zLDUuOS0wLjljMS44LTAuNiwzLjQtMS40LDUuMS0yLjUKCQkJCWwyLjIsNGMtMS44LDEuMi0zLjgsMi4yLTYuMSwzQzcxOC45LDI2NS45LDcxNi4zLDI2Ni4zLDcxMy40LDI2Ni4zeiBNNzEyLjUsMjMzLjRjLTMsMC01LjYsMS03LjksMi44Yy0yLjMsMS45LTMuOCw0LjYtNC4zLDguMgoJCQkJaDIyLjljLTAuMi0zLjctMS4zLTYuNS0zLjMtOC4zQzcxOC4xLDIzNC4zLDcxNS42LDIzMy40LDcxMi41LDIzMy40eiIvPgoJCQk8cGF0aCBkPSJNNzU2LjMsMjY2LjNjLTMuNSwwLTYuOC0wLjYtOS44LTEuN2MtMy4xLTEuMS01LjctMi40LTcuOC00bDIuOC00YzIuMSwxLjUsNC40LDIuNyw2LjksMy42YzIuNSwwLjksNS40LDEuMyw4LjcsMS4zCgkJCQljMy4xLDAsNS4zLTAuNiw2LjgtMS43YzEuNS0xLjEsMi4zLTIuNCwyLjMtNGMwLTAuOS0wLjMtMS44LTAuOC0yLjVjLTAuNS0wLjctMS42LTEuNS0zLjItMi4xYy0xLjYtMC43LTQtMS40LTcuMy0yCgkJCQljLTQuNi0xLTguMS0yLjMtMTAuNS00Yy0yLjQtMS43LTMuNi0zLjgtMy42LTYuNWMwLTIuOSwxLjMtNS4zLDMuOC03LjNjMi41LTEuOSw2LjItMi45LDExLjItMi45YzIuOCwwLDUuNCwwLjUsOCwxLjQKCQkJCWMyLjYsMC45LDQuNywyLDYuNSwzLjJsLTMsMy45Yy0xLjctMS4xLTMuNS0yLTUuNS0yLjdjLTItMC43LTQuMi0xLTYuNS0xYy0zLjEsMC01LjIsMC41LTYuNCwxLjZjLTEuMiwxLTEuOCwyLjItMS44LDMuNgoJCQkJYzAsMS41LDAuOCwyLjcsMi41LDMuNmMxLjcsMC44LDQuMywxLjcsOCwyLjRjNCwwLjgsNy4xLDEuOCw5LjIsMi44YzIuMSwxLDMuNiwyLjIsNC40LDMuNmMwLjgsMS4zLDEuMiwyLjksMS4yLDQuNwoJCQkJYzAsMS45LTAuNiwzLjctMS44LDUuM2MtMS4yLDEuNi0zLDIuOS01LjQsMy45Qzc2Mi43LDI2NS44LDc1OS44LDI2Ni4zLDc1Ni4zLDI2Ni4zeiIvPgoJCQk8cGF0aCBkPSJNNzg0LjcsMjgwLjZ2LTUxLjFoNWwwLjUsNC42aDAuMmMxLjctMS42LDMuNi0yLjksNS44LTMuOWMyLjItMSw0LjQtMS42LDYuNi0xLjZjNC44LDAsOC41LDEuNywxMS4xLDUKCQkJCWMyLjUsMy4zLDMuOCw3LjgsMy44LDEzLjRjMCw0LTAuOCw3LjUtMi4zLDEwLjRjLTEuNSwyLjktMy41LDUuMS02LDYuN2MtMi41LDEuNS01LjIsMi4zLTguMSwyLjNjLTEuNywwLTMuNS0wLjQtNS40LTEuMgoJCQkJYy0xLjktMC44LTMuNy0yLTUuMy0zLjRoLTAuMmwwLjMsNi44djEyLjFINzg0Ljd6IE04MDAuNCwyNjEuMmMzLjIsMCw1LjktMS4zLDgtMy44YzIuMS0yLjUsMy4xLTYsMy4xLTEwLjUKCQkJCWMwLTMuOS0wLjgtNy4xLTIuNC05LjZjLTEuNi0yLjQtNC4yLTMuNy03LjgtMy43Yy0xLjYsMC0zLjMsMC40LTUuMSwxLjNjLTEuOCwwLjktMy42LDIuMi01LjUsNC4xVjI1N2MxLjcsMS41LDMuNSwyLjYsNS4yLDMuMwoJCQkJQzc5Ny43LDI2MC45LDc5OS4xLDI2MS4yLDgwMC40LDI2MS4yeiIvPgoJCQk8cGF0aCBkPSJNODQwLjQsMjY2LjNjLTIuMiwwLTQuMy0wLjQtNi4xLTEuMmMtMS44LTAuOC0zLjMtMi00LjQtMy41Yy0xLjEtMS41LTEuNy0zLjQtMS43LTUuNWMwLTIuNywwLjktNSwyLjYtNi44CgkJCQljMS44LTEuOCw0LjYtMy4yLDguNC00LjNjMy44LTEuMSw4LjktMS45LDE1LTIuNGMwLTEuNi0wLjQtMy4xLTEtNC41Yy0wLjYtMS40LTEuNi0yLjUtMy0zLjNjLTEuNC0wLjgtMy4yLTEuMy01LjUtMS4zCgkJCQljLTIuMywwLTQuNiwwLjUtNi44LDEuNGMtMi4yLDAuOS00LjEsMS45LTUuOCwyLjlsLTIuNC00LjFjMS44LTEuMiw0LjItMi4zLDctMy41YzIuOC0xLjEsNS44LTEuNyw5LTEuN2M0LjksMCw4LjYsMS4zLDExLDQKCQkJCWMyLjQsMi43LDMuNiw2LjMsMy42LDEwLjh2MjIuMWgtNWwtMC41LTQuOWgtMC4yYy0yLDEuNS00LjIsMi45LTYuNyw0Qzg0NS41LDI2NS43LDg0MywyNjYuMyw4NDAuNCwyNjYuM3ogTTg0MiwyNjEuNAoJCQkJYzIsMCw0LjEtMC41LDYuMS0xLjRjMi0wLjksNC4xLTIuMiw2LjEtMy45di05LjVjLTUuMSwwLjQtOS4yLDEtMTIuMSwxLjhjLTIuOSwwLjgtNSwxLjgtNi4yLDNjLTEuMiwxLjItMS44LDIuNi0xLjgsNC4yCgkJCQljMCwyLDAuOCwzLjUsMi40LDQuNEM4MzguMSwyNjAuOSw4NDAsMjYxLjQsODQyLDI2MS40eiIvPgoJCQk8cGF0aCBkPSJNODkyLjIsMjY2LjNjLTMuNywwLTcuMS0wLjctMTAuMS0yLjJjLTMtMS41LTUuMy0zLjYtNy02LjRjLTEuNy0yLjgtMi42LTYuMi0yLjYtMTAuMWMwLTQsMC45LTcuNSwyLjctMTAuMwoJCQkJYzEuOC0yLjgsNC4zLTUsNy4zLTYuNGMzLjEtMS41LDYuNC0yLjIsMTAtMi4yYzIuOSwwLDUuNSwwLjUsNy42LDEuNmMyLjIsMSw0LDIuMyw1LjUsMy43bC0zLDMuOWMtMS41LTEuMy0zLTIuMy00LjYtMwoJCQkJYy0xLjYtMC43LTMuMy0xLjEtNS4yLTEuMWMtMi44LDAtNS4yLDAuNi03LjMsMS43Yy0yLjEsMS4yLTMuNywyLjgtNC45LDQuOWMtMS4yLDIuMS0xLjgsNC41LTEuOCw3LjNjMCwyLjcsMC42LDUuMSwxLjcsNy4yCgkJCQljMS4yLDIuMSwyLjgsMy43LDQuOCw0LjhzNC41LDEuNyw3LjMsMS43YzIuMiwwLDQuMy0wLjQsNi4xLTEuM2MxLjgtMC45LDMuNS0xLjksNS0zLjJsMi43LDMuOWMtMiwxLjgtNC4yLDMuMi02LjYsNC4xCgkJCQlDODk3LjQsMjY1LjgsODk0LjksMjY2LjMsODkyLjIsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik05MzUuNCwyNjYuM2MtMy42LDAtNi45LTAuNy05LjgtMi4yYy0yLjktMS41LTUuMy0zLjYtNy02LjVjLTEuNy0yLjgtMi42LTYuMy0yLjYtMTAuMmMwLTMuOSwwLjktNy4zLDIuNi0xMC4xCgkJCQljMS43LTIuOCw0LTUsNi44LTYuNWMyLjgtMS41LDUuOC0yLjMsOS0yLjNjNS4yLDAsOS4yLDEuNSwxMi4xLDQuNmMyLjksMy4xLDQuMyw3LjIsNC4zLDEyLjJjMCwwLjcsMCwxLjQtMC4xLDIKCQkJCWMwLDAuNi0wLjEsMS4yLTAuMiwxLjdoLTI4LjNjMC40LDQsMS45LDcuMSw0LjUsOS4yYzIuNiwyLjEsNS44LDMuMSw5LjUsMy4xYzIuMiwwLDQuMS0wLjMsNS45LTAuOWMxLjgtMC42LDMuNC0xLjQsNS4xLTIuNQoJCQkJbDIuMiw0Yy0xLjgsMS4yLTMuOCwyLjItNi4xLDNDOTQwLjksMjY1LjksOTM4LjMsMjY2LjMsOTM1LjQsMjY2LjN6IE05MzQuNSwyMzMuNGMtMywwLTUuNiwxLTcuOSwyLjhjLTIuMywxLjktMy44LDQuNi00LjMsOC4yCgkJCQloMjIuOWMtMC4yLTMuNy0xLjMtNi41LTMuMy04LjNDOTQwLjEsMjM0LjMsOTM3LjYsMjMzLjQsOTM0LjUsMjMzLjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDA2LjEsMjM1LjR2LTQuNmgzMS44djQuNkgxMDA2LjF6IE0xMDA2LjEsMjUxLjJ2LTQuNmgzMS44djQuNkgxMDA2LjF6Ii8+CgkJCTxwYXRoIGQ9Ik0xMTAwLjIsMjM5LjRsLTEuOS0xNi43bC0wLjEtOC4xaDguMWwtMC4xLDguMWwtMS45LDE2LjdIMTEwMC4yeiBNMTExNy4yLDIzOS40bC0xLjgtMTYuN2wtMC4xLTguMWg4LjFsLTAuMSw4LjEKCQkJCWwtMS44LDE2LjdIMTExNy4yeiIvPgoJCQk8cGF0aCBkPSJNMTE0MC41LDI2Ni4zYy0xLjQsMC0yLjctMC41LTMuNy0xLjZjLTEtMS0xLjUtMi40LTEuNS00YzAtMS43LDAuNS0zLDEuNS00YzEtMSwyLjItMS41LDMuNy0xLjVjMS40LDAsMi42LDAuNSwzLjYsMS41CgkJCQljMSwxLDEuNSwyLjQsMS41LDRjMCwxLjYtMC41LDMtMS41LDRDMTE0My4yLDI2NS44LDExNDIsMjY2LjMsMTE0MC41LDI2Ni4zeiBNMTE1NS4yLDI2Ni4zYy0xLjQsMC0yLjctMC41LTMuNy0xLjYKCQkJCWMtMS0xLTEuNS0yLjQtMS41LTRjMC0xLjcsMC41LTMsMS41LTRjMS0xLDIuMi0xLjUsMy43LTEuNWMxLjQsMCwyLjcsMC41LDMuNywxLjVjMSwxLDEuNSwyLjQsMS41LDRjMCwxLjYtMC41LDMtMS41LDQKCQkJCUMxMTU3LjgsMjY1LjgsMTE1Ni42LDI2Ni4zLDExNTUuMiwyNjYuM3ogTTExNjkuOCwyNjYuM2MtMS40LDAtMi42LTAuNS0zLjYtMS42Yy0xLTEtMS41LTIuNC0xLjUtNGMwLTEuNywwLjUtMywxLjUtNAoJCQkJYzEtMSwyLjItMS41LDMuNi0xLjVjMS40LDAsMi43LDAuNSwzLjcsMS41YzEsMSwxLjUsMi40LDEuNSw0YzAsMS42LTAuNSwzLTEuNSw0QzExNzIuNSwyNjUuOCwxMTcxLjMsMjY2LjMsMTE2OS44LDI2Ni4zeiIvPgoJCQk8cGF0aCBkPSJNMTE4OSwyMzkuNGwtMS45LTE2LjdsLTAuMS04LjFoOC4xbC0wLjEsOC4xbC0xLjksMTYuN0gxMTg5eiBNMTIwNiwyMzkuNGwtMS44LTE2LjdsLTAuMS04LjFoOC4xbC0wLjEsOC4xbC0xLjgsMTYuNwoJCQkJSDEyMDZ6Ii8+CgkJCTxwYXRoIGQ9Ik0xMjM0LjIsMjc4LjRsLTMuMy0zLjFjNS00LjIsOC42LTguOCwxMS0xMy43YzIuMy01LDMuNS0xMC41LDMuNS0xNi44YzAtNi4yLTEuMi0xMS44LTMuNS0xNi44Yy0yLjMtNS02LTkuNS0xMS0xMy43CgkJCQlsMy4zLTMuMWM1LjEsNCw5LjIsOC44LDEyLjIsMTQuNGMzLDUuNiw0LjUsMTIsNC41LDE5LjJjMCw3LjItMS41LDEzLjUtNC41LDE5LjJDMTI0My4zLDI2OS42LDEyMzkuMywyNzQuNCwxMjM0LjIsMjc4LjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMjczLjQsMjc2LjZ2LTMuNWgxNS42di01Ni43aC0xNS42VjIxM2gyMC41djYzLjZIMTI3My40eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+Cgk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CjwvZz4KPC9zdmc+Cg=="},28453:(L,M,j)=>{j.d(M,{R:()=>y,x:()=>t});var u=j(96540);const N={},C=u.createContext(N);function y(L){const M=u.useContext(C);return u.useMemo((function(){return"function"==typeof L?L(M):{...M,...L}}),[M,L])}function t(L){let M;return M=L.disableParentContext?"function"==typeof L.components?L.components(N):L.components||N:y(L.components),u.createElement(C.Provider,{value:M},L.children)}}}]);