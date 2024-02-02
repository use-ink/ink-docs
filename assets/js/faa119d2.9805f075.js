"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9098],{46544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(17624),l=t(4552);const a={title:"useUninstalledWallets",description:"React Hook for getting a list of uninstalled wallet extensions"},o="useUninstalledWallets",r={id:"frontend/react/hooks/wallets/use-uninstalled-wallets",title:"useUninstalledWallets",description:"React Hook for getting a list of uninstalled wallet extensions",source:"@site/docs/frontend/react/hooks/wallets/use-uninstalled-wallets.md",sourceDirName:"frontend/react/hooks/wallets",slug:"/frontend/react/hooks/wallets/use-uninstalled-wallets",permalink:"/frontend/react/hooks/wallets/use-uninstalled-wallets",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/wallets/use-uninstalled-wallets.md",tags:[],version:"current",frontMatter:{title:"useUninstalledWallets",description:"React Hook for getting a list of uninstalled wallet extensions"},sidebar:"reference",previous:{title:"useInstalledWallets",permalink:"/frontend/react/hooks/wallets/use-installed-wallets"},next:{title:"useApi",permalink:"/frontend/react/hooks/substrate/use-api"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"useuninstalledwallets",children:"useUninstalledWallets"}),"\n",(0,s.jsx)(n.p,{children:"This hook returns a list of all supported wallet extensions that are not installed in the user's browser."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useUninstalledWallets } from 'useink'\n\nfunction PrintWallets() {\n  const wallets = useUninstalledWallets()\n  useEffect(() => console.log(wallets), [wallets])\n\n  return null;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-type",children:"Return Type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  extensionName: string;\n  title: string;\n  noExtensionMessage?: string;\n  installUrl: string;\n  logo: WalletLogoProps;\n  installed: boolean | undefined;\n  extension: any;\n  signer: any;\n  enable: (dappName: string) => unknown;\n  getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>;\n  subscribeAccounts: (callback: SubscriptionFn) => unknown;\n  sign?: (address: string, payload: string) => unknown;\n  transformError: (err: WalletError) => Error;\n}[]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var s=t(11504);const l={},a=s.createContext(l);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);