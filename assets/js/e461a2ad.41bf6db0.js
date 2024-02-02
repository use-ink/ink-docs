"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7907],{73700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(17624),r=n(4552);const o={title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state."},a="useTx",i={id:"frontend/react/hooks/contracts/use-tx",title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state.",source:"@site/docs/frontend/react/hooks/contracts/use-tx.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-tx",permalink:"/frontend/react/hooks/contracts/use-tx",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-tx.md",tags:[],version:"current",frontMatter:{title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state."},sidebar:"reference",previous:{title:"useSalter",permalink:"/frontend/react/hooks/contracts/use-salter"},next:{title:"useTxPaymentInfo",permalink:"/frontend/react/hooks/contracts/use-tx-payment-info"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Transaction Statuses",id:"transaction-statuses",level:2},{value:"Want to Learn More?",id:"want-to-learn-more",level:2},{value:"Common Patterns With useTx",id:"common-patterns-with-usetx",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"usetx",children:"useTx"}),"\n",(0,s.jsxs)(e.p,{children:["A hook for sending a transaction for a contract and decoding successful responses or\nreceiving errors. This hook is used in combination with the result of\n",(0,s.jsx)(e.a,{href:"/frontend/react/hooks/contracts/use-contract",children:"useContract"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"/frontend/utils/pick",children:"useink/utils helpers"})," for compatible functions that work\nwell with this hook."]}),"\n",(0,s.jsx)(e.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useTx, useContract, shouldDisable } from 'useink'\nimport { pickDecoded } from 'useink/utils'\nimport metadata from './metadata.json'\n\ninterface Result {\n  color: string;\n}\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract('..address', metadata)\n  const setColor = useTx<Result>(contract, 'setColor')\n  const args = ['blue']\n\n  return (\n    <>\n      <button onClick={() => setColor.signAndSend(args)} disable={shouldDisable(setColor)}>\n        {shouldDisable(setColor) ? 'Changing Color...' : 'Change Color'}\n      </button>\n\n      <h2>Get the result the hard way: {setColor.result.ok ? setColor.result.value.decoded.color : '--'}</h2>\n      <h2>Or the easy way: {pickDecoded(get.result)?.color || '--'}</h2>\n    </>\n  )\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"export interface Tx<T> {\n  signAndSend: (\n    args?: unknown[],\n    options?: ContractOptions,\n    cb?: ContractSubmittableResultCallback,\n  ) => void;\n  status: Status;\n  result: ContractSubmittableResult | undefined;\n  resetState: () => void;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"transaction-statuses",children:"Transaction Statuses"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"useink"})," extends transaction statuses defined in the Substrate ",(0,s.jsx)(e.code,{children:"transaction-pool"}),"\npallet. These are used for pre-transaction senarios such as awaiting signature in a\nwallet, dry runs, or handling a JavaScript error."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"export type Status =\n  | 'None'             \n  | 'PendingSignature' // A user is prompted to sign a transaction in their wallet extension.\n  | 'DryRun'           // A pre-flight is being sent without any payments.\n  | 'Errored'          // A JavaScript error occured\n  | 'Future'           \n  | 'Ready'            \n  | 'Broadcast'        \n  | 'InBlock'          \n  | 'Retracted'        \n  | 'FinalityTimeout'  \n  | 'Finalized'        \n  | 'Usurped'          \n  | 'Dropped'          \n  | 'Invalid';          \n"})}),"\n",(0,s.jsx)(e.h2,{id:"want-to-learn-more",children:"Want to Learn More?"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Learn more about ",(0,s.jsx)(e.a,{href:"https://github.com/paritytech/substrate/blob/65e7ab604d109e316a69b8801c3b182a7fa46bcb/client/transaction-pool/api/src/lib.rs#L59",children:"the Substrate transaction-pool"})]}),"\n",(0,s.jsxs)(e.li,{children:["Read ",(0,s.jsx)(e.a,{href:"https://docs.substrate.io/learn/transaction-lifecycle/",children:"Substrate documentation"})]}),"\n",(0,s.jsxs)(e.li,{children:["Watch a ",(0,s.jsx)(e.a,{href:"https://www.youtube.com/watch?v=3pfM0GOp02c",children:"video on transaction lifecycles"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"common-patterns-with-usetx",children:"Common Patterns With useTx"}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"/frontend/utils/tx-utils#shoulddisable",children:"shouldDisable"})," and\n",(0,s.jsx)(e.a,{href:"/frontend/utils/tx-utils#shoulddisablestrict",children:"shouldDisableStrict"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,r.M)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>i,M:()=>a});var s=n(11504);const r={},o=s.createContext(r);function a(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);