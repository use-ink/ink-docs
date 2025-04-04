"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,9646],{46523:(e,t,a)=>{a.d(t,{J:()=>l});var n=a(56289),s=(a(96540),a(46792)),r=a(93529),i=a(74848);function l(e){let{text:t,btnText:a,btnLink:l,btnVariant:o="secondary",className:c}=e;return(0,i.jsxs)("div",{className:(0,r.cn)("flex flex-col items-center justify-center gap-4 my-8 md:flex-row",c),children:[(0,i.jsx)("p",{className:"m-0",children:t}),(0,i.jsx)(n.A,{href:l,className:"text-blue-500",children:(0,i.jsx)(s.$,{size:"lg",variant:o,children:a})})]})}},88704:(e,t,a)=>{a.d(t,{V:()=>i});a(96540);var n=a(46942),s=a.n(n),r=a(74848);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("div",{className:s()("flex items-center justify-center max-w-[300px] w-full h-auto rounded-[12px] border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] p-4",a),children:t})}},30309:(e,t,a)=>{a.d(t,{F:()=>A});var n=a(96540),s=a(26361),r=a(86297),i=a(73333),l=a(86669),o=a(56289),c=a(29030),d=a(2284),x=a(93529),m=a(48324),p=a(46792),h=a(66950),u=a(2767),g=a(31144),b=a(40965),f=a(29497),j=a(27344),v=a(25519),y=a(42161),k=a(74848);const _=[{title:"Build",links:[{label:"Docs",href:"/docs",icon:(0,k.jsx)(h.i,{size:20,weight:"fill"})},{label:"Tutorials",href:"/tutorials",icon:(0,k.jsx)(u.D,{size:20,weight:"fill"})},{label:"Chains",href:"/chains",icon:(0,k.jsx)(g.N,{size:20})},{label:"Projects",href:"/projects",icon:(0,k.jsx)(b.p,{size:20,weight:"fill"})}]},{title:"Community",links:[{label:"About",href:"/about",icon:(0,k.jsx)(f.R,{size:20,weight:"fill"})},{label:"Bounties",href:"/bounties",icon:(0,k.jsx)(j.W,{size:20,weight:"fill"})},{label:"Stories",href:"/stories",icon:(0,k.jsx)(v.G,{size:20,weight:"fill"})},{label:"YouTube",href:"https://www.youtube.com/@ink-lang",icon:(0,k.jsx)(y.b,{size:20,weight:"fill"})}]},{title:"ink!ubator",href:"/inkubator"}];var w=a(77773),N=a(80279);function A(e){let{className:t,cta:a="Start Building",ctaLink:h="",children:u,childrenRight:g}=e;const b=(0,N.F)(),[f,j]=(0,n.useState)(!1),v=h.includes("http")?h:(0,c.Ay)(`docs/${b?.label??"v5"}${h}`),y=(0,c.Ay)("/img/text-white.svg"),A=_.map((e=>({...e,links:e.links?.map((e=>({...e,href:e.href?.replace("/docs",`/docs/${b?.label??"v5"}`)})))}))),z=[..._.filter((e=>"ink!ubator"!==e.title)),{title:"Funding",links:[{label:"ink!ubator",href:"/inkubator",icon:(0,k.jsx)(i.T,{size:20,weight:"fill"})}]}];(0,n.useEffect)((()=>{document.body.style.overflow=f?"hidden":""}),[f]);const F=(0,c.Ay)("/").slice(0,-1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(s.P.header,{className:(0,x.cn)("nav-top fixed w-full z-40",t),initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,k.jsx)("div",{className:"absolute inset-0 z-0 mask"}),(0,k.jsx)("div",{className:"mx-auto",children:(0,k.jsxs)("div",{className:"ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start",children:[(0,k.jsxs)("div",{className:"flex flex-row items-center",children:[(0,k.jsx)("div",{className:"flex items-center mr-4",children:(0,k.jsx)(o.A,{href:"/",className:"z-10 font-bold",children:(0,k.jsx)("img",{src:y,alt:"ink!",className:"w-20 h-20"})})}),(0,k.jsxs)(s.P.div,{className:"z-10 flex-row items-center gap-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut",delay:.2},children:[(0,k.jsx)("span",{className:"block text-xs",children:"Powered by"}),(0,k.jsx)(d.A,{className:"w-auto h-[20px]"})]})]}),(0,k.jsx)("nav",{className:"z-10 items-center flex-1 hidden navbar md:flex !bg-none !backdrop-filter-none",children:(0,k.jsx)("div",{className:"flex gap-6 mx-auto",children:A.map((e=>(0,k.jsx)(m.j,{item:e},e.title)))})}),(0,k.jsx)("div",{className:"z-10 md:hidden",children:(0,k.jsx)(l.F,{toggled:f,toggle:j,color:"#BD82FD",size:22,distance:"lg",rounded:!0,label:"Open menu"})}),g||(0,k.jsx)("div",{className:"hidden md:block",children:(0,k.jsx)(o.A,{href:v,children:(0,k.jsx)(p.$,{variant:"base",className:"transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform",children:a})})})]})})]}),(0,k.jsx)(r.N,{children:f&&(0,k.jsx)(s.P.div,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.25,ease:"easeInOut"},className:"fixed z-30 flex flex-col w-full h-screen bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid",children:(0,k.jsx)("nav",{className:"flex flex-col gap-4 mt-[60px] overflow-y-auto p-6",children:z.map((e=>(0,k.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,k.jsx)("span",{className:"font-semibold text-[#BD82FD] text-[14px] uppercase",children:e.title}),(0,k.jsx)("div",{className:"flex flex-col gap-2 text-center",children:e.links.map((e=>{let t=e.href;return t=e.href.includes("http")?e.href:F+e.href,(0,k.jsx)(w.c,{href:t,icon:e.icon,children:e.label},e.label)}))})]},e.title)))})})})]})}},46792:(e,t,a)=>{a.d(t,{$:()=>o});a(96540);var n=a(47859),s=a(22732),r=a(93529),i=a(74848);const l=(0,s.F)("inline-flex font-montserrat items-center !border-transparent !border-solid !border-[1px] justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-[700] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive !transition-all !duration-200 hover:scale-[103%] hover:lg:scale-105 hover:-rotate-[0.25deg] hover:lg:-rotate-[0.5deg] text-[16px] will-change-transform",{variants:{variant:{base:"bg-primary text-white shadow-xs hover:bg-primary/90 bg-white text-black border-none",default:"rounded-lg !text-white opacity-100 bg-gradient-to-br from-[rgba(134,71,203,0.6)] to-[rgba(140,124,247,0.66)] hover:from-[rgba(134,71,203)] hover:to-[rgba(140,124,247,0.83)] shadow-[inset_5px_5px_12px_rgba(222,191,255,0.13),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33)] hover:shadow-[inset_5px_5px_12px_rgba(222,191,255,0.25),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33),0px_0px_10px_0px_rgba(189,130,253,0.5)]",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:(0,r.cn)("bg-gradient-to-br from-[rgba(189,130,253,0.05)] to-[rgba(189,130,253,0.05)]","hover:from-[rgba(189,130,253,0.15)] hover:to-[rgba(189,130,253,0.15)]","text-white hover:!border-[#BD82FD] hover:text-white","shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset]","hover:shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset,#bd82fdaa_0_0_10px]","hover:bg-[#bd82fd0d]"),ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-min-content px-[15px] py-[10px] has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-min-content rounded-[12px] px-[36px] py-[18px] has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:t,variant:a,size:s,asChild:o=!1,...c}=e;const d=o?n.DX:"button";return(0,i.jsx)(d,{"data-slot":"button",className:(0,r.cn)(l({variant:a,size:s,className:t})),...c})}},12689:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var n=a(26361),s=a(96305),r=a(88704),i=a(46792),l=a(56289),o=a(74848);function c(e){let{bounty:t}=e;return(0,o.jsxs)(r.V,{className:"!w-full !max-w-full p-8 rounded-xl flex flex-col gap-8 !items-start divide-dotted",children:[(0,o.jsx)("h3",{className:"m-0 text-lg font-bold font-montserrat",children:t.title}),(0,o.jsxs)("div",{className:"pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)]",children:[(0,o.jsx)("h4",{className:"text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600]  text-[12px] mb-4",children:"Objective"}),(0,o.jsx)("p",{className:"m-0",children:t.objective})]}),(0,o.jsxs)("div",{className:"pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)] w-full",children:[(0,o.jsx)("h4",{className:"text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600]  text-[12px] mb-4",children:"Status"}),(0,o.jsx)("p",{className:"m-0",children:t.status})]}),(e=>void 0!==e.team)(t)&&t.team&&t.team.length>0&&(0,o.jsx)("div",{className:"pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)] w-full flex flex-row gap-4",children:(0,o.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,o.jsx)("h4",{className:"text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600]  text-[12px] mb-4",children:"SELected Bounty TEam Members"}),(0,o.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:t.team.map((e=>(0,o.jsxs)("div",{className:"bg-[#8c7cf726] flex flex-col gap-[5px] p-[18px] rounded-[12px]",children:[(0,o.jsx)("span",{className:"text-[14px] font-bold",children:e.title}),(0,o.jsx)("a",{href:e.linkHref,className:"text-[12px] text-[#8c7cf7]",children:e.linkText}),(0,o.jsx)("p",{className:"text-[12px]",children:e.description})]},e.title)))})]})}),(0,o.jsxs)("div",{className:"pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)] w-full flex flex-row gap-4",children:[t.applyLink&&(0,o.jsx)(l.A,{href:t.applyLink,children:(0,o.jsx)(i.$,{size:"lg",variant:"secondary",children:"Apply Now"})}),t.announcementLink&&(0,o.jsx)(l.A,{href:t.announcementLink,children:(0,o.jsx)(i.$,{size:"lg",variant:"secondary",children:"Read Full Announcement"})})]})]})}var d=a(46523);const x=[],m=[{title:"ink! Documentation Website Upgrade",announcementLink:"https://github.com/use-ink/ink-alliance/blob/main/bounties/001-website_upgrade.md",objective:(0,o.jsxs)(o.Fragment,{children:["The current ink! documentation website (",(0,o.jsx)("a",{href:"https://use.ink/",children:"https://use.ink"}),") is an extensive developer documentation. We want to move this content under ",(0,o.jsx)("a",{href:"https://use.ink/docs",children:"use.ink/docs"})," and have an engaging website in its place that provides a less overwhelming entry point to ink!."]}),status:"Work was successfully completed on schedule by selected team. Bounty is now closed.",team:[{title:"Flez \u2014 Designer",linkText:"@iamflez",linkHref:"https://x.com/iamflez",description:"Flez is an Entrepreneur, Web/UI Designer @ flez.xyz, Polkadot UX Bounty Curator, Permanence DAO Core Member, and Project Manager @ Polkadot.Cloud."},{title:"Niftesty \u2014 Developer",linkText:"@niftesty",linkHref:"https://x.com/niftesty",description:"Niftesty is a full-stack developer based in the Berlin. He is developing several projects in the Polkadot ecosystem."}]}];function p(){return(0,o.jsxs)(o.Fragment,{children:[x.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("h2",{children:["Active Bounties"," ",(0,o.jsxs)("span",{className:"text-[36px] font-[600] text-[rgb(140,124,247))]",children:["(",x.length,")"]})]}),(0,o.jsx)("div",{className:"flex flex-col items-start justify-start gap-4",children:x.map((e=>(0,o.jsx)(c,{bounty:e},e.title)))}),(0,o.jsx)("hr",{className:"my-16"}),(0,o.jsx)(d.J,{text:"Not seeing a bounty you wish was available?",btnText:"Request a new bounty",btnLink:"https://t.me/inkathon"}),(0,o.jsx)("hr",{className:"my-16"})]}),(0,o.jsxs)("h2",{children:["Past Bounties ",(0,o.jsxs)("span",{className:"text-[36px] font-[600] text-[rgb(140,124,247)]",children:["(",m.length,")"]})]}),(0,o.jsx)("div",{className:"flex flex-col items-start justify-start gap-4",children:m.map((e=>(0,o.jsx)(c,{bounty:e},e.title)))}),0===x.length&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d.J,{text:"Wish a new bounty was here?",btnText:"Request bounty",btnLink:"https://t.me/inkathon",btnVariant:"default",className:"mt-16"})})]})}var h=a(55982),u=a(16957),g=a(29030);const b=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:"Bounties | ink!"}),(0,o.jsx)("meta",{name:"description",content:"Discover available bounties and contribute to the ink! ecosystem."}),(0,o.jsx)("meta",{name:"keywords",content:"Grant, Funding, Bounties, Contribute"}),(0,o.jsx)("meta",{name:"author",content:"ink! Alliance"}),(0,o.jsx)("meta",{property:"og:title",content:"Bounties | ink!"}),(0,o.jsx)("meta",{property:"og:description",content:"Discover available bounties and contribute to the ink! ecosystem."}),(0,o.jsx)("meta",{property:"og:image",content:"https://use.ink/img/opengraph/bounties.png"}),(0,o.jsx)("meta",{property:"og:url",content:"https://use-ink.com"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,o.jsx)("meta",{property:"og:image:height",content:"630"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function f(){const{RiveComponent:e}=(0,u.useRive)({src:(0,g.Ay)("animations/Bounties.riv"),autoplay:!0,animations:["floating","eye","fan","bubbles"]});return(0,o.jsxs)(s.default,{className:"relative -mt-[80px]",head:b,children:[(0,o.jsx)("div",{className:"w-[100vw] h-[33.5vw] relative",children:(0,o.jsx)(e,{className:"w-full h-full"})}),(0,o.jsxs)("section",{className:"container flex flex-col mt-16 mb-8 text-center lg:mt-8",children:[(0,o.jsx)(n.P.h1,{className:"text-center",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut"},children:"ink! Bounties"}),(0,o.jsx)(n.P.p,{className:"mx-auto text-[18px] font-[600] text-[rgb(220,215,224)] max-w-[300px] lg:max-w-lg",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut",delay:.2},children:"Explore active and past ink! bounties. Got skills and want to contribute? Join in \u2014 and earn for your efforts!"}),(0,o.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},className:"mt-12",children:(0,o.jsx)("a",{href:"#bounties",className:"scroll-m-60",children:(0,o.jsx)(h.K,{size:32,weight:"duotone",fill:"rgb(140, 124, 247)"})})})]}),(0,o.jsx)("section",{id:"bounties",className:"pt-16 container max-w-4xl mx-auto mt-16 text-[17px] font-[500]",children:(0,o.jsx)(p,{})})]})}},96305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(96540);var n=a(30309),s=a(66165),r=a(27143),i=a(46942),l=a.n(i),o=a(74848);const c=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,o.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,o.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,o.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,o.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,o.jsx)("meta",{property:"og:image",content:"https://use.ink/img/opengraph/home.png"}),(0,o.jsx)("meta",{property:"og:url",content:"https://use.ink/"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,o.jsx)("meta",{property:"og:image:height",content:"630"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function d(e){let{children:t,head:a,className:i,ref:d,hasBackground:x=!0}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{children:a||c}),(0,o.jsx)(n.F,{}),(0,o.jsx)("main",{className:l()("page flex flex-col min-h-screen pt-[80px] z-10",i),ref:d,children:t}),(0,o.jsx)(s.w,{}),x&&(0,o.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}},55982:(e,t,a)=>{a.d(t,{K:()=>p});var n=a(96540),s=a(79995),r=a(16646),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const p=(0,n.forwardRef)(((e,t)=>n.createElement(s.A,((e,t)=>l(e,o(t)))(((e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))x.call(t,a)&&m(e,a,t[a]);return e})({ref:t},e),{weights:r.A}))));p.displayName="ArrowCircleDown"},16646:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540);const s=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm40.49-84.49a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L116,139V88a12,12,0,0,1,24,0v51l11.51-11.52A12,12,0,0,1,168.49,127.51Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),n.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,117.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm36.24-86.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,153.51V88a6,6,0,0,1,12,0v65.51l21.76-21.75A6,6,0,0,1,164.24,131.76Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"}))]])}}]);