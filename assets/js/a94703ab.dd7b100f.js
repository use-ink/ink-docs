"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9048],{6855:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96540),l=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const c=(0,n.forwardRef)(((e,t)=>{const a=e,{alt:l,color:c="currentColor",size:d="1em",weight:m="regular",mirrored:u=!1,children:b,weights:p}=a,h=((e,t)=>{var a={};for(var n in e)r.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a})(a,["alt","color","size","weight","mirrored","children","weights"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e})({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:c,viewBox:"0 0 256 256",transform:u?"scale(-1, 1)":void 0},h),!!l&&n.createElement("title",null,l),b,p.get(m))}));c.displayName="SSRBase";const d=c},24332:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540);const l=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L137,128ZM57,128l71.52-71.51a12,12,0,0,0-17-17l-80,80a12,12,0,0,0,0,17l80,80a12,12,0,0,0,17-17Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,48V208l-80-80Z",opacity:"0.2"}),n.createElement("path",{d:"M203.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,208,208V48A8,8,0,0,0,203.06,40.61ZM192,188.69,131.31,128,192,67.31Zm-66.34,13.65a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L51.31,128Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M204.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L128.49,128ZM48.49,128l75.75-75.76a6,6,0,0,0-8.48-8.48l-80,80a6,6,0,0,0,0,8.48l80,80a6,6,0,1,0,8.48-8.48Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M202.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L125.66,128ZM45.66,128l77.17-77.17a4,4,0,0,0-5.66-5.66l-80,80a4,4,0,0,0,0,5.66l80,80a4,4,0,1,0,5.66-5.66Z"}))]])},30645:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ye});var n=a(96540),l=a(34164),o=a(81769),r=a(204),i=a(93751),s=a(22306),c=a(50539),d=a(65627),m=a(77685);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=a(74848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,d.gk)();return(0,d.Mq)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(i(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,m.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.A)("clean-btn",r.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var h=a(84924),x=a(56347),f=a(86682),g=a(53115),j=a(8173);function v(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const A="collapseSidebarButton_PEFL",_="collapseSidebarButtonIcon_kv0_";function C(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.A)("button button--secondary button--outline",A),onClick:t,children:(0,b.jsx)(v,{className:_})})}var k=a(23380),S=a(26849);const y=Symbol("EmptyContext"),N=n.createContext(y);function w(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return(0,b.jsx)(N.Provider,{value:o,children:t})}var T=a(33535),E=a(30214),I=a(56289),M=a(9136);function L(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function B(e){let{item:t,onItemClick:a,activePath:o,level:s,index:c,...d}=e;const{items:m,label:u,collapsible:p,className:h,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,g.p)(),j=function(e){const t=(0,M.A)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,i.Nr)(e):void 0),[e,t])}(t),v=(0,i.w8)(t,o),A=(0,E.ys)(x,o),{collapsed:_,setCollapsed:C}=(0,T.u)({initialState:()=>!!p&&(!v&&t.collapsed)}),{expandedItem:k,setExpandedItem:w}=function(){const e=(0,n.useContext)(N);if(e===y)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!_),w(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,S.ZC)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:v,collapsed:_,updateCollapsed:B}),(0,n.useEffect)((()=>{p&&null!=k&&k!==c&&f&&C(!0)}),[p,k,c,C,f]),(0,b.jsxs)("li",{className:(0,l.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},"border border-solid border-[#8c7cf71a] rounded-[12px]",h),children:[(0,b.jsxs)("div",{className:(0,l.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,b.jsx)(I.A,{className:(0,l.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":v}),onClick:p?e=>{a?.(t),x?B(!1):(e.preventDefault(),B())}:()=>{a?.(t)},"aria-current":A?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!_:void 0,href:p?j??"#":j,...d,children:u}),x&&p&&(0,b.jsx)(L,{collapsed:_,categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})]}),(0,b.jsx)(T.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,b.jsx)(V,{items:m,tabIndex:_?-1:0,onItemClick:a,activePath:o,level:s+1})})]})}var P=a(22887),O=a(15891);const H="menuExternalLink_NnFM";function R(e){let{item:t,onItemClick:a,activePath:n,level:o,index:s,...c}=e;const{href:d,label:m,className:u,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,n),x=(0,P.A)(d);return(0,b.jsx)("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,b.jsxs)(I.A,{className:(0,l.A)("menu__link",!x&&H,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:d,...x&&{onClick:a?()=>a(t):void 0},...c,children:[m,!x&&(0,b.jsx)(O.A,{})]})},m)}const Z="menuHtmlItem_PEWV";function F(e){let{item:t,level:a,index:n}=e;const{value:o,defaultStyle:i,className:s}=t;return(0,b.jsx)("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(a),i&&[Z,"menu__list-item"],s),dangerouslySetInnerHTML:{__html:o}},n)}function G(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,b.jsx)(B,{item:t,...a});case"html":return(0,b.jsx)(F,{item:t,...a});default:return(0,b.jsx)(R,{item:t,...a})}}function W(e){let{items:t,...a}=e;const n=(0,i.Y)(t,a.activePath);return(0,b.jsx)(w,{children:n.map(((e,t)=>(0,b.jsx)(G,{item:e,index:t,...a},t)))})}const V=(0,n.memo)(W),D="menu_Y1UP",z="menuWithAnnouncementBar_fPny";var Y=a(29030),U=a(6855),q=a(24332),J=Object.defineProperty,K=Object.defineProperties,X=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const ae=(0,n.forwardRef)(((e,t)=>n.createElement(U.A,((e,t)=>K(e,X(t)))(((e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&te(e,a,t[a]);if($)for(var a of $(t))ee.call(t,a)&&te(e,a,t[a]);return e})({ref:t},e),{weights:q.A}))));function ne(e){let{path:t,sidebar:a,className:o}=e;const i=function(){const{isActive:e}=(0,k.M)(),[t,a]=(0,n.useState)(e);return(0,d.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,b.jsxs)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.A)("menu thin-scrollbar",D,i&&z,o),children:[(0,b.jsxs)(I.A,{to:(0,Y.Ay)("/"),className:"ml-0.5 pb-4 text-[13px] font-[500] text-[rgb(220,215,224)] flex items-center gap-2 hover:!text-white",children:[(0,b.jsx)(ae,{size:12,className:"text-[#797979]",weight:"bold"}),(0,b.jsx)("span",{children:"Back to use.ink website"})]}),(0,b.jsx)("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:a,activePath:t,level:1})})]})}ae.displayName="CaretDoubleLeft";const le="sidebar_mhZE",oe="sidebarWithHideableNavbar__6UL",re="sidebarHidden__LRd",ie="sidebarLogo_F_0z";function se(e){let{path:t,sidebar:a,onCollapse:n,isHidden:o}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,g.p)();return(0,b.jsxs)("div",{className:(0,l.A)(le,r&&oe,o&&re),children:[r&&(0,b.jsx)(j.A,{tabIndex:-1,className:ie}),(0,b.jsx)(ne,{path:t,sidebar:a}),i&&(0,b.jsx)(C,{onClick:n})]})}const ce=n.memo(se);var de=a(63065),me=a(5528);const ue=e=>{let{sidebar:t,path:a}=e;const n=(0,me.M)();return(0,b.jsx)("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function be(e){return(0,b.jsx)(de.GX,{component:ue,props:e})}const pe=n.memo(be);function he(e){const t=(0,f.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[a&&(0,b.jsx)(ce,{...e}),n&&(0,b.jsx)(pe,{...e})]})}const xe={expandButton:"expandButton_k9J9",expandButtonIcon:"expandButtonIcon_zpMS"};function fe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:xe.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(v,{className:xe.expandButtonIcon})})}const ge={docSidebarContainer:"docSidebarContainer_RSuS",docSidebarContainerHidden:"docSidebarContainerHidden_kI50",sidebarViewport:"sidebarViewport_pYEE"};function je(e){let{children:t}=e;const a=(0,s.t)();return(0,b.jsx)(n.Fragment,{children:t},a?.name??"noSidebar")}function ve(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,x.zy)(),[s,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{s&&c(!1),!s&&(0,h.O)()&&c(!0),o((e=>!e))}),[o,s]);return(0,b.jsx)("aside",{className:(0,l.A)(r.G.docs.docSidebarContainer,ge.docSidebarContainer,a&&ge.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ge.docSidebarContainer)&&a&&c(!0)},children:(0,b.jsx)(je,{children:(0,b.jsxs)("div",{className:(0,l.A)(ge.sidebarViewport,s&&ge.sidebarViewportHidden),children:[(0,b.jsx)(he,{sidebar:t,path:i,onCollapse:d,isHidden:s}),s&&(0,b.jsx)(fe,{toggleSidebar:d})]})})})}const Ae={docMainContainer:"docMainContainer_hjYf",docMainContainerEnhanced:"docMainContainerEnhanced_of6x",docItemWrapperEnhanced:"docItemWrapperEnhanced_s6pk"};function _e(e){let{hiddenSidebarContainer:t,children:a}=e;const n=(0,s.t)();return(0,b.jsx)("main",{className:(0,l.A)(Ae.docMainContainer,(t||!n)&&Ae.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,l.A)("container padding-top--md padding-bottom--lg",Ae.docItemWrapper,t&&Ae.docItemWrapperEnhanced),children:a})})}const Ce={docRoot:"docRoot_cWv0",docsWrapper:"docsWrapper_bSxm"};function ke(e){let{children:t}=e;const a=(0,s.t)(),[l,o]=(0,n.useState)(!1);return(0,b.jsxs)("div",{className:Ce.docsWrapper,children:[(0,b.jsx)(p,{}),(0,b.jsxs)("div",{className:Ce.docRoot,children:[a&&(0,b.jsx)(ve,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),(0,b.jsx)(_e,{hiddenSidebarContainer:l,children:t})]})]})}var Se=a(37138);function ye(e){const t=(0,i.B5)(e);if(!t)return(0,b.jsx)(Se.A,{});const{docElement:a,sidebarName:n,sidebarItems:c}=t;return(0,b.jsx)(o.e3,{className:(0,l.A)(r.G.page.docsDocPage),children:(0,b.jsx)(s.V,{name:n,items:c,children:(0,b.jsx)(ke,{children:a})})})}},37138:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var n=a(34164),l=a(50539),o=a(9303),r=a(29030),i=a(56289),s=a(74848);function c(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,n.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.A,{as:"h1",className:"mb-12 text-center hero__title",children:(0,s.jsx)(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("img",{alt:"not found",src:(0,r.Ay)("/img/404.svg"),className:"w-[500px] h-[500px]"})}),(0,s.jsx)("p",{className:"text-center",children:(0,s.jsx)(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsxs)("p",{className:"text-center",children:["Go back to the"," ",(0,s.jsx)(i.A,{to:(0,r.Ay)("/"),className:"text-blue-500",children:"ink! homepage"})," ","or the"," ",(0,s.jsx)(i.A,{to:(0,r.Ay)("/docs/"),className:"text-blue-500",children:"ink! documentation"}),"."]})]})})})}}}]);