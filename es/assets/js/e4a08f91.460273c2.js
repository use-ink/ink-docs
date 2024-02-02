"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8108],{13620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(17624),s=t(4552);const r={title:"useTokenSymbol",description:"A React hook for fetching a chain's token symbol if it is configured in the runtime."},i="useTokenSymbol",c={id:"frontend/react/hooks/substrate/use-token-symbol",title:"useTokenSymbol",description:"A React hook for fetching a chain's token symbol if it is configured in the runtime.",source:"@site/docs/frontend/react/hooks/substrate/use-token-symbol.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-token-symbol",permalink:"/es/frontend/react/hooks/substrate/use-token-symbol",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-token-symbol.md",tags:[],version:"current",frontMatter:{title:"useTokenSymbol",description:"A React hook for fetching a chain's token symbol if it is configured in the runtime."}},u={},a=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usetokensymbol",children:"useTokenSymbol"}),"\n",(0,o.jsx)(n.p,{children:"A React hook for fetching a chain's token symbol if it is configured in the runtime."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useTokenSymbol } from 'useink'\n\nfunction App() {\n  const symbol = useTokenSymbol('shibuya-testnet');\n\n  // e.g. \"Shibuya token symbol: SBY\"\n  return <p>Shibuya token symbol: {symbol || --}</p>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"string | undefined // Many chains have configured the chain symbol, but some have not.\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var o=t(11504);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);