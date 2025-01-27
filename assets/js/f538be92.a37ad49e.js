"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6223],{88268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"intro/migrate-to-parachain","title":"Migrating an ink! contract to a Parachain Runtime","description":"Smart contracts written in ink! are a great starting point for developing applications in the Polkadot ecosystem. Developers can go from an idea to a fully functioning web3 application \\"in production\\" in a matter of hours or days. This allows faster feedback on ideas, to validate whether there is user demand in the first place, and to easily iterate and refine the implementation.","source":"@site/docs/intro/migrate-to-parachain.md","sourceDirName":"intro","slug":"/migrate-ink-contracts-to-polkadot-frame-parachain","permalink":"/migrate-ink-contracts-to-polkadot-frame-parachain","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/intro/migrate-to-parachain.md","tags":[],"version":"current","frontMatter":{"title":"Migrating an ink! contract to a Parachain Runtime","hide_title":true,"slug":"/migrate-ink-contracts-to-polkadot-frame-parachain"},"sidebar":"reference","previous":{"title":"ink! vs. CosmWasm","permalink":"/ink-vs-cosmwasm"},"next":{"title":"Setup","permalink":"/getting-started/setup"}}');var i=n(74848),s=n(28453);const r={title:"Migrating an ink! contract to a Parachain Runtime",hide_title:!0,slug:"/migrate-ink-contracts-to-polkadot-frame-parachain"},o="Migrating an ink! contract to a Parachain Runtime",c={},l=[{value:"Utilizing existing FRAME pallets",id:"utilizing-existing-frame-pallets",level:2},{value:"Similarities and differences between <code>ink!</code> and <code>FRAME</code>",id:"similarities-and-differences-between-ink-and-frame",level:2},{value:"Similar",id:"similar",level:3},{value:"Different",id:"different",level:3},{value:"Example Migration",id:"example-migration",level:2},{value:"Setup",id:"setup",level:3},{value:"Event Definitions",id:"event-definitions",level:3},{value:"Storage",id:"storage",level:3},{value:"Error Definition",id:"error-definition",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Messages",id:"messages",level:3},{value:"Mutable",id:"mutable",level:4},{value:"Weights",id:"weights",level:4},{value:"Immutable (read only) messages",id:"immutable-read-only-messages",level:4},{value:"Data Migration",id:"data-migration",level:3},{value:"Retrieving the data from the contract",id:"retrieving-the-data-from-the-contract",level:4},{value:"Initializing the pallet",id:"initializing-the-pallet",level:4},{value:"Adjusting UIs",id:"adjusting-uis",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/polkadot.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"migrating-an-ink-contract-to-a-parachain-runtime",children:"Migrating an ink! contract to a Parachain Runtime"})}),"\n",(0,i.jsxs)(t.p,{children:["Smart contracts written in ",(0,i.jsx)(t.code,{children:"ink!"}),' are a great starting point for developing applications in the Polkadot ecosystem. Developers can go from an idea to a fully functioning web3 application "in production" in a matter of hours or days. This allows faster feedback on ideas, to validate whether there is user demand in the first place, and to easily iterate and refine the implementation.']}),"\n",(0,i.jsx)(t.p,{children:"For many applications, smart contracts are good enough. However, they are exposed to the inherent limitations of the smart contract execution environment:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Sharing of blockspace with other smart contracts, volatile "gas" fees.'}),"\n",(0,i.jsx)(t.li,{children:"Default model enforces gas fees being paid by the end user."}),"\n",(0,i.jsx)(t.li,{children:"Relative poor performance of interpreted smart contract (untrusted) code compared to pre-compiled Parachain runtime (trusted) code."}),"\n",(0,i.jsx)(t.li,{children:"Limited access to the host chain environment and any special functionality provided by an extensive suite of customisable FRAME pallets."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['Once a web3 application has proven it can work, the team may consider "upgrading" to a Parachain to unlock the full power of a dedicated App Chain. Compared to developing and deploying a smart contract, this requires considerably more time and expertise, which is why we encourage to start with ',(0,i.jsx)(t.code,{children:"ink!"})," where possible, at least at the prototype stage."]}),"\n",(0,i.jsxs)(t.p,{children:['Much of the difficulty in launching a parachain comes in configuring a node implementation, bootstrapping and maintaining a collator network, deploying to testnets, managing infrastructure, acquiring "Coretime" (previously via a slot auction). All of which is time consuming and costly. This is important to note because this guide will focus on the migration of the code from ',(0,i.jsx)(t.code,{children:"ink!"})," to ",(0,i.jsx)(t.code,{children:"FRAME"}),", which might be a learning curve but overall a minor part of the overall migration, and a one-off cost."]}),"\n",(0,i.jsx)(t.h2,{id:"utilizing-existing-frame-pallets",children:"Utilizing existing FRAME pallets"}),"\n",(0,i.jsxs)(t.p,{children:["There is a rich library of FRAME pallets, which may provide a drop in replacement for some (or all) of your smart contract functionality. For example, for a ",(0,i.jsx)(t.a,{href:"/standards/overview",children:"PSP22"})," (similar to ERC20) fungible token contract, this could be replaced either by the native Parachain token itself via ",(0,i.jsx)(t.code,{children:"pallet_balances"})," or by an asset on ",(0,i.jsx)(t.code,{children:"pallet_assets"}),". Governance functions could be replaced by e.g. ",(0,i.jsx)(t.code,{children:"pallet_democracy"}),", and so on. See ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame",children:(0,i.jsx)(t.code,{children:"polkadot-sdk"})})," for a range of pre-built pallets which can be used to handle some common functions."]}),"\n",(0,i.jsxs)(t.h2,{id:"similarities-and-differences-between-ink-and-frame",children:["Similarities and differences between ",(0,i.jsx)(t.code,{children:"ink!"})," and ",(0,i.jsx)(t.code,{children:"FRAME"})]}),"\n",(0,i.jsx)(t.h3,{id:"similar",children:"Similar"}),"\n",(0,i.jsxs)(t.p,{children:["The biggest advantage we have when migrating from ",(0,i.jsx)(t.code,{children:"ink!"})," to ",(0,i.jsx)(t.code,{children:"FRAME"})," is that both are Rust based DSLs, in both cases actual Rust (or Rust-like)  code annotated with attributes expands into Rust code for handling all the boilerplate for integrating into their respective execution environments. Indeed the modern ",(0,i.jsx)(t.code,{children:"FRAME 2.0"})," was originally inspired by the ",(0,i.jsx)(t.code,{children:"ink!"})," approach of attribute macros annotating Rust code."]}),"\n",(0,i.jsxs)(t.p,{children:["So we can assume that the developer performing the migration is already familiar with Rust and its development environment, which is already a huge headstart for developing with ",(0,i.jsx)(t.code,{children:"FRAME"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Next we can assume some familiarity with the execution environment, after all a contract is running inside of ",(0,i.jsx)(t.code,{children:"pallet_contracts"})," and is invoked in a similar way via a pallet dispatchable, has access to storage (sandboxed to the contract), and can emit events."]}),"\n",(0,i.jsx)(t.h3,{id:"different",children:"Different"}),"\n",(0,i.jsx)(t.p,{children:"The biggest difference is that a contract is user uploaded and therefore untrusted code, so there are restrictions to what the contract is able to do and it will perform slower because it is interpreted. For example, a contract can only read and write from its own sandboxed storage."}),"\n",(0,i.jsxs)(t.p,{children:["Runtime code built using ",(0,i.jsx)(t.code,{children:"FRAME"})," is trusted, can be pre-compiled and therefore executes significantly faster (though that may change if/when contracts are able to target ",(0,i.jsx)(t.a,{href:"https://forum.polkadot.network/t/announcing-polkavm-a-new-risc-v-based-vm-for-smart-contracts-and-possibly-more/3811",children:"PolkaVM"}),"). Pallets have direct access to other pallets and have full access to the Parachain storage, and the permissioning can be configured as desired."]}),"\n",(0,i.jsxs)(t.p,{children:["Because ",(0,i.jsx)(t.code,{children:"ink!"}),' is executing in a more constrained environment, it is able to be much more opinionated and therefore a simpler language. Because execution is metered (pay as you go execution by the user), there is no need to worry about benchmarking for "weight" calculation. ',(0,i.jsx)(t.code,{children:"FRAME"})," is more powerful, but necessarily more complicated."]}),"\n",(0,i.jsx)(t.h2,{id:"example-migration",children:"Example Migration"}),"\n",(0,i.jsxs)(t.p,{children:["We'll use the ",(0,i.jsxs)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/dns/lib.rs",children:[(0,i.jsx)(t.code,{children:"DNS"})," example"]})," contract to demonstrate a migration."]}),"\n",(0,i.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Start by cloning the ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk-parachain-template",children:"Parachain Template"})," which contains a ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk-parachain-template/blob/master/pallets/template/src/lib.rs",children:"template pallet"})," which we can modify."]}),"\n",(0,i.jsx)(t.p,{children:"Now we will move down the contract from top to bottom and begin the migration of code."}),"\n",(0,i.jsx)(t.h3,{id:"event-definitions",children:"Event Definitions"}),"\n",(0,i.jsx)(t.p,{children:"First thing we encounter are events. E.g.:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink(event)]\npub struct Register {\n    #[ink(topic)]\n    name: Hash,\n    #[ink(topic)]\n    from: AccountId,\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Each of these structs annotated with ",(0,i.jsx)(t.code,{children:"#[ink(event)]"})," can be translated to a variant in the pallet ",(0,i.jsx)(t.code,{children:"Error"})," enum annotated with ",(0,i.jsx)(t.code,{children:"#[pallet::error]"}),". Any of the ",(0,i.jsx)(t.code,{children:"ink!"})," environment type aliases (both ",(0,i.jsx)(t.code,{children:"Hash"})," and ",(0,i.jsx)(t.code,{children:"AccountId"})," in the above example) must be translated to their equivalent associated type on the ",(0,i.jsx)(t.code,{children:"Config"})," trait e.g. ",(0,i.jsx)(t.code,{children:"AccountId"})," -> ",(0,i.jsx)(t.code,{children:"T::AccountId"}),". Also the ",(0,i.jsx)(t.code,{children:"#[ink(topic)]"})," annotations must be removed: topics must be calculated manually when the event is emitted, and will be covered later. Remove the ",(0,i.jsx)(t.code,{children:"#[pallet::generate_deposit(pub(super) fn deposit_event)]"})," and the final ",(0,i.jsx)(t.code,{children:"Event"})," type will look like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::event]\npub enum Event<T: Config> {\n    Register {\n        name: T::Hash,\n        from: T::AccountId,\n    },\n    SetAddress {\n        name: T::Hash,\n        from: T::AccountId,\n        old_address: Option<T::AccountId>,\n        new_address: T::AccountId,\n    },\n    Transfer {\n        name: T::Hash,\n        from: T::AccountId,\n        old_owner: Option<T::AccountId>,\n        new_owner: T::AccountId,\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(t.p,{children:"The storage layout of the contract is defined by the following struct:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[ink(storage)]\npub struct DomainNameService {\n    /// A hashmap to store all name to addresses mapping.\n    name_to_address: Mapping<Hash, AccountId>,\n    /// A hashmap to store all name to owners mapping.\n    name_to_owner: Mapping<Hash, AccountId>,\n    /// The default address.\n    default_address: AccountId,\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"ink!"}),", the layout of the contract storage is defined by this top level ",(0,i.jsx)(t.code,{children:"struct"}),". A brief recap of how this is used:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Constructors must return an initialized instance of this struct, which is then written to storage."}),"\n",(0,i.jsxs)(t.li,{children:["Non mutable messages e.g. ",(0,i.jsx)(t.code,{children:"#[ink(message)] fn message(&self, ..)"})," will load an instance of this struct and pass it as ",(0,i.jsx)(t.code,{children:"&self"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Mutable messages e.g. ",(0,i.jsx)(t.code,{children:"#[ink(message)] fn message(&mut self, ..)"}),", will load an instance of the struct and persist it if the message succeeds in executing."]}),"\n",(0,i.jsxs)(t.li,{children:["Fields of type ",(0,i.jsx)(t.code,{children:"Mapping"})," or ",(0,i.jsx)(t.code,{children:"Lazy"})," are not written directly into the same storage slot as the parent, but are wrappers around direct reads/writes to storage under many or a single key respectively."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"FRAME"}),', all storage operations happen eagerly via "type aliases" annotated with ',(0,i.jsx)(t.code,{children:"#[pallet::storage]"}),". So for each field in the ",(0,i.jsx)(t.code,{children:"#[ink(storage)]"})," struct, we require a corresponding pallet storage definition."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"default_address: AccountId"})," translates to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::storage]\npub type DefaultAddress<T: Config> = StorageValue<_, T::AccountId>;\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"name_to_address: Mapping<Hash, AccountId>,"})," translates to a ",(0,i.jsx)(t.code,{children:"StorageMap"})," like so:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::storage]\npub type NameToAddress<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"name_to_owner: Mapping<Hash, AccountId>,"})," also translates to a ",(0,i.jsx)(t.code,{children:"StorageMap"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::storage]\npub type NameToOwner<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Reading and writing these storage values must all be done explicitly, in contrast with ",(0,i.jsx)(t.code,{children:"ink!"}),' which can do so automatically for non "lazy" values. When it comes to migrating the messages, this will be demonstrated.']}),"\n",(0,i.jsx)(t.h3,{id:"error-definition",children:"Error Definition"}),"\n",(0,i.jsxs)(t.p,{children:["Simply copy across the variants of the ",(0,i.jsx)(t.code,{children:"enum Error"})," to the equivalent ",(0,i.jsx)(t.code,{children:"#[pallet::error]"})," definition. In our case we end up with:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::error]\npub enum Error<T> {\n    /// Returned if the name already exists upon registration.\n    NameAlreadyExists,\n    /// Returned if caller is not owner while required to.\n    CallerIsNotOwner,\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that the ",(0,i.jsx)(t.code,{children:"T"})," generic parameter is not used in this case, the ",(0,i.jsx)(t.code,{children:"error"})," macro handles the generation of ",(0,i.jsx)(t.code,{children:"PhantomData<T>"}),". If we use some environmental types we can use the ",(0,i.jsx)(t.code,{children:"T"})," similar to the event definition."]}),"\n",(0,i.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(t.p,{children:"In this example, the single constructor is simply initializing the storage to empty values."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:" #[ink(constructor)]\npub fn new() -> Self {\n    Default::default()\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"This code is executed when the contract instance was initialized."}),"\n",(0,i.jsxs)(t.p,{children:["Our use case is a migration, so we will assume that the existing data must be migrated from contract storage to the pallet storage. This will be covered in the ",(0,i.jsx)(t.a,{href:"#data-migration",children:"Data Migration"})," section."]}),"\n",(0,i.jsx)(t.p,{children:"No code migration is required then for this constructor."}),"\n",(0,i.jsx)(t.h3,{id:"messages",children:"Messages"}),"\n",(0,i.jsx)(t.h4,{id:"mutable",children:"Mutable"}),"\n",(0,i.jsxs)(t.p,{children:["There are 3 mutable messages (that can change the state of the contract): ",(0,i.jsx)(t.code,{children:"register"}),", ",(0,i.jsx)(t.code,{children:"set_address"})," and ",(0,i.jsx)(t.code,{children:"transfer"}),". This guide will demonstrate ",(0,i.jsx)(t.code,{children:"register"}),", and the other two can follow a similar pattern. The message is defined as so, with added numerical comments to show the translation to the equivalent ",(0,i.jsx)(t.code,{children:"FRAME"})," code."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[ink(message)]\npub fn register(&mut self, name: Hash) -> Result<()> {\n    // 1.\n    let caller = self.env().caller();\n    // 2.\n    if self.name_to_owner.contains(name) {\n        return Err(Error::NameAlreadyExists)\n    }\n    // 3.\n    self.name_to_owner.insert(name, &caller);\n    // 4.\n    self.env().emit_event(Register { name, from: caller });\n    // 5.\n    Ok(())\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Before proceeding, it is necessary to add a custom ",(0,i.jsx)(t.code,{children:"deposit_event"})," function for raising events which accepts topics:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"impl<T: Config> Pallet<T> {\n    fn deposit_event(topics: Vec<T::Hash>, event: Event<T>) {\n        <frame_system::Pallet<T>>::deposit_event_indexed(\n            &topics,\n            <T as Config>::RuntimeEvent::from(event).into()\n        )\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now we can translate the ",(0,i.jsx)(t.code,{children:"register"}),' message into a "Dispatchable":']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::call_index(0)]\n#[pallet::weight(Weight::from_parts(10_000, 0)\n    .saturating_add(T::DbWeight::get().reads(1))\n    .saturating_add(T::DbWeight::get().writes(1)))]\npub fn register(origin: OriginFor<T>, name: T::Hash) -> DispatchResultWithPostInfo {\n    // 1.\n    let caller = ensure_signed(origin)?;\n    // 2.\n    ensure!(!NameToOwner::<T>::contains_key(&name), Error::<T>::NameAlreadyExists);\n    // 3.\n    <NameToOwner<T>>::insert(name, &caller);\n    // 4.\n    Self::deposit_event(\n        &[name.clone(), T::Hashing::hash_of(&caller)],\n        Event::Register { name, from: caller }\n    );\n    // 5.\n    Ok(().into())\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Compare the numbered annotations from the ",(0,i.jsx)(t.code,{children:"ink!"})," contract message and the ",(0,i.jsx)(t.code,{children:"FRAME"})," dispatchable, and you can see they are very similar, just different APIs for interacting with the environment and with storage."]}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.code,{children:"4."}),", in ",(0,i.jsx)(t.code,{children:"FRAME"})," we need to generate the topic list manually which is done automatically in ",(0,i.jsx)(t.code,{children:"ink!"})," via the annotations."]}),"\n",(0,i.jsx)(t.h4,{id:"weights",children:"Weights"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"pallet::weight"})," attribute defines the ",(0,i.jsx)(t.code,{children:"weight"})," of the dispatchable i.e. the amount of onchain resources it is estimated to consume. Because we are now writing trusted code, we can define this up front (no runtime gas metering). The number in the ",(0,i.jsx)(t.code,{children:"weight"})," is typically generated via a benchmarking process. It is important to integrate this process and set a non-arbitrary value here before deploying to a production chain. Read more ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/build/tx-weights-fees/",children:"https://docs.substrate.io/build/tx-weights-fees/"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"immutable-read-only-messages",children:"Immutable (read only) messages"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ink!"}),' messages can return a value, which when executed as an RPC "dry-run" (not via a transaction), are used to read the state of contracts. Dispatchables in ',(0,i.jsx)(t.code,{children:"FRAME"})," cannot return values directly. There are two ways to read the state from a FRAME pallet:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Reading from ",(0,i.jsx)(t.code,{children:"#[pallet::storage]"})," items directly, client libraries will generate an API to do this from the runtime metadata. See e.g. ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/subxt/blob/master/subxt/examples/storage_fetch.rs",children:(0,i.jsx)(t.code,{children:"subxt"})})]}),"\n",(0,i.jsxs)(t.li,{children:["Via runtime APIs, RPC methods that can be wired up directly into query methods on a pallet. See ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/reference/runtime-apis/",children:"https://docs.substrate.io/reference/runtime-apis/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In our case, ",(0,i.jsx)(t.code,{children:"1."})," is good enough, so the following read only message:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[ink(message)]\npub fn get_address(&self, name: Hash) -> AccountId {\n    self.get_address_or_default(name)\n}\n\nfn get_address_or_default(&self, name: Hash) -> AccountId {\n    self.name_to_address\n        .get(name)\n        .unwrap_or(self.default_address)\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Can be queried ",(0,i.jsx)(t.em,{children:"without"})," any modifications to the ",(0,i.jsx)(t.code,{children:"NameToAddress"})," storage type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"#[pallet::storage]\npub type NameToAddress<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"subxt"})," would generate the following accessor for querying the storage:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust=",children:"let storage_query = my_custom_chain::storage().dns().name_to_address(&name);\n\n// Use that query to `fetch` a result. This returns an `Option<_>`, which will be\n// `None` if no value exists at the given address. You can also use `fetch_default`\n// where applicable, which will return the default value if none exists.\nlet result = api\n    .storage()\n    .at_latest()\n    .await?\n    .fetch(&storage_query)\n    .await?;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"data-migration",children:"Data Migration"}),"\n",(0,i.jsx)(t.p,{children:"Data migration can be done at either genesis time or once the custom parachain is up and running."}),"\n",(0,i.jsx)(t.h4,{id:"retrieving-the-data-from-the-contract",children:"Retrieving the data from the contract"}),"\n",(0,i.jsx)(t.p,{children:"In both cases the first steps are to first download the current state of the contract at a fixed point in time, and then ensuring that no changes can be made to the contract after that."}),"\n",(0,i.jsxs)(t.p,{children:["This could be done by using ",(0,i.jsx)(t.code,{children:"set_code_hash"})," to update the source code of the contract to a special contract which allows only querying and downloading the state of the current contract, and no mutating messages."]}),"\n",(0,i.jsx)(t.p,{children:'An alternative would be querying the contract storage directly, but currently there are no good tools for this, and it would require some key calculation for retrieving the data at all storage locations. Additionally the contract would still need to be "frozen" somehow to ensure no changes can be made to the contract state.'}),"\n",(0,i.jsx)(t.h4,{id:"initializing-the-pallet",children:"Initializing the pallet"}),"\n",(0,i.jsxs)(t.p,{children:["Once the data has been downloaded and serialized, it can be used to initialize the state of the custom parachain runtime. This can be hardcoded in a ",(0,i.jsx)(t.code,{children:"#[pallet::genesis_build]"})," impl block. See ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/reference/how-to-guides/basics/configure-genesis-state/",children:"https://docs.substrate.io/reference/how-to-guides/basics/configure-genesis-state/"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Alternatively the state could be initialized via dispatchable extrinsic(s) which initialize the storage."}),"\n",(0,i.jsx)(t.h3,{id:"adjusting-uis",children:"Adjusting UIs"}),"\n",(0,i.jsx)(t.p,{children:"User interfaces will need to be adjusted to interact with a pallet rather than a contract. This should be relatively straightforward since client libraries usually have first-class support for interacting with Substrate pallets, and the signing etc. should already be integrated."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);