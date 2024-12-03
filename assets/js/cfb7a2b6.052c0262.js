"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6819],{29790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"third-party-tools/swanky/cli","title":"Swanky CLI","description":"Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, cargo contract, and other Wasm developer tools.","source":"@site/docs/third-party-tools/swanky/cli.md","sourceDirName":"third-party-tools/swanky","slug":"/getting-started/swanky/cli","permalink":"/getting-started/swanky/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/third-party-tools/swanky/cli.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"toc_min_heading_level":2,"toc_max_heading_level":4,"slug":"/getting-started/swanky/cli"},"sidebar":"reference","previous":{"title":"Swanky Suite","permalink":"/getting-started/swanky"},"next":{"title":"Swanky Node","permalink":"/getting-started/swanky/node"}}');var a=t(74848),r=t(28453),c=t(13547),i=t(11470),o=t(19365);const l={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,slug:"/getting-started/swanky/cli"},d="Swanky CLI",h={},u=[{value:"Installing",id:"installing",level:2},{value:"Dev container (Recommended)",id:"dev-container-recommended",level:3},{value:"Download the precompiled binaries",id:"download-the-precompiled-binaries",level:3},{value:"Globally with npm",id:"globally-with-npm",level:3},{value:"Using swanky-cli",id:"using-swanky-cli",level:2},{value:"Bootstrap a new project",id:"bootstrap-a-new-project",level:3},{value:"Check dependencies and compatibility",id:"check-dependencies-and-compatibility",level:3},{value:"Manage accounts",id:"manage-accounts",level:3},{value:"Interact with contracts",id:"interact-with-contracts",level:3},{value:"Compile",id:"compile",level:4},{value:"Get detailed contract description",id:"get-detailed-contract-description",level:4},{value:"Run E2E tests",id:"run-e2e-tests",level:4},{value:"Deploy your contract",id:"deploy-your-contract",level:4},{value:"Run queries and transactions",id:"run-queries-and-transactions",level:4},{value:"Add a new contract from template",id:"add-a-new-contract-from-template",level:4},{value:"Interact with a local node",id:"interact-with-a-local-node",level:3},{value:"Using plugins",id:"using-plugins",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"swanky-cli",children:"Swanky CLI"})}),"\n",(0,a.jsxs)(n.p,{children:["Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, ",(0,a.jsx)(n.code,{children:"cargo contract"}),", and other Wasm developer tools.\nIt aims to ease development of and interaction with Wasm smart contracts and provides simple tools to bootstrap contract environment (project) with contract and integration tests templates, manage local node and accounts, language agnostic compile, deploy contracts to both local and remote networks, compatibility checks between the contract pallet and compiler..."]}),"\n",(0,a.jsx)(n.p,{children:"With all of the features mentioned above, even more is in active or planned development. The whole project is public, and everyone is welcome to contribute or suggest features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli",children:"Swanky CLI repo"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/orgs/AstarNetwork/projects/3",children:"Swanky CLI project"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Templates provided in the current version of swanky-cli, as well as environment and supported tools target ink! v4, and use ",(0,a.jsx)(n.code,{children:"cargo contract"})," v2"]})}),"\n",(0,a.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,a.jsx)(n.p,{children:"The CLI can be installed and used in different ways:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"using a preconfigured environment of a dev-container"}),"\n",(0,a.jsx)(n.li,{children:"downloading a precompiled binary"}),"\n",(0,a.jsx)(n.li,{children:"as an npm package"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Note that using the precompiled binaries, NPM, or compiling it yourself requires you to have the ",(0,a.jsx)(n.a,{href:"https://docs.astar.network/docs/build/environment/ink_environment",children:"local environment set up"})," correctly"]})}),"\n",(0,a.jsx)(n.h3,{id:"dev-container-recommended",children:"Dev container (Recommended)"}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.a,{href:"https://docs.astar.network/docs/build/environment/dev-container",children:"dev container"})," is the recommended method to use ",(0,a.jsx)(n.code,{children:"swanky-cli"}),", it includes all the environment setup and will support auto-updates in the future."]}),"\n",(0,a.jsxs)(n.p,{children:["To run your project in the dev container follow the steps on ",(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-dev-container",children:"swanky-dev-container Github"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"download-the-precompiled-binaries",children:"Download the precompiled binaries"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download the correct archive for your platform from the ",(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/releases",children:"releases section of swanky-cli github page"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Extract the archive to the appropriate location, for example the ",(0,a.jsx)(n.code,{children:"software"})," directory."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add the ",(0,a.jsx)(n.code,{children:"swanky"})," executable to your path variable by creating a symbolic link to it from a common ",(0,a.jsx)(n.code,{children:"bin"})," directory or somewhere similar."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"MacOS",label:"MacOS",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"ln -s /Users/my_name/software/swanky-cli/bin/swanky /usr/local/bin\n"})})}),(0,a.jsx)(o.A,{value:"Debian/Ubuntu",label:"Debian/Ubuntu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"ln -s /home/my_name/swanky-cli/bin/swanky /usr/local/bin\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"globally-with-npm",children:"Globally with npm"}),"\n",(0,a.jsxs)(n.p,{children:["This approach may seem simpler, but due to the nature of ",(0,a.jsx)(n.code,{children:"Node.js"})," dependency management, may result in version inconsistency or other errors."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh-session",children:"$ npm install -g @astar-network/swanky-cli\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh-session",children:"$ npx @astar-network/swanky-cli [command]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"using-swanky-cli",children:"Using swanky-cli"}),"\n",(0,a.jsxs)(n.p,{children:["If you're using a dev container, or have followed the installation instructions, you should have ",(0,a.jsx)(n.code,{children:"swanky"})," command available in your terminal."]}),"\n",(0,a.jsxs)(n.p,{children:["Running it without any arguments (or with ",(0,a.jsx)(n.code,{children:"-h"}),"/",(0,a.jsx)(n.code,{children:"--help"}),") will provide you with a list of top-level commands and the app version."]}),"\n",(0,a.jsxs)(n.p,{children:["Passing ",(0,a.jsx)(n.code,{children:"help"})," as an argument and providing it ",(0,a.jsx)(n.code,{children:"-n"}),"/",(0,a.jsx)(n.code,{children:"--nested-commands"})," flag will show full list of commands, including nested ones:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"swanky help --nested-commands\n"})}),"\n",(0,a.jsx)(c.A,{caption:"Full list of commands",src:t(74361).A,width:"65%"}),"\n",(0,a.jsxs)(n.p,{children:["Note that every command and subcommand also supports ",(0,a.jsx)(n.code,{children:"-h"}),"/",(0,a.jsx)(n.code,{children:"--help"})," flags to display their usage instructions."]}),"\n",(0,a.jsxs)(n.p,{children:["Likewise, most of the commands support ",(0,a.jsx)(n.code,{children:"-v"})," /",(0,a.jsx)(n.code,{children:"--verbose"})," flag, which you can use to get more detailed output (useful for debugging and reporting errors)."]}),"\n",(0,a.jsx)(n.h3,{id:"bootstrap-a-new-project",children:"Bootstrap a new project"}),"\n",(0,a.jsxs)(n.p,{children:["Using the ",(0,a.jsx)(n.code,{children:"swanky init"})," command, you'll be prompted for a series of answers to define your project and the first smart contract within it."]}),"\n",(0,a.jsx)(n.p,{children:"After gathering all the required information, the app will proceed to check your environment, scaffold the project, download and install (optionally) swanky node and the project dependencies."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"swanky init PROJECT_NAME\n"})}),"\n",(0,a.jsx)(c.A,{caption:"Init process",src:t(56606).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:"The resulting folder structure should look something like this:"}),"\n",(0,a.jsx)(c.A,{caption:"Folder structure",src:t(47032).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#quick-start",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky init"})," command usage manual"]})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master/src/templates",children:(0,a.jsx)(n.em,{children:"available templates"})})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"check-dependencies-and-compatibility",children:"Check dependencies and compatibility"}),"\n",(0,a.jsxs)(n.p,{children:["You can quickly check the presence and versions of required dependencies by running ",(0,a.jsx)(n.code,{children:"swanky check"})," command."]}),"\n",(0,a.jsx)(c.A,{caption:"Verify dependencies",src:t(40146).A,width:"65%"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"For now, you will need to be be in a project folder to run this command."}),(0,a.jsx)(n.p,{children:"This command will be updated to fix that, and provide more useful information."})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky check"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"manage-accounts",children:"Manage accounts"}),"\n",(0,a.jsx)(n.p,{children:"Create and list accounts used for contract interaction."}),"\n",(0,a.jsxs)(n.p,{children:["These are the accounts stored inside your ",(0,a.jsx)(n.code,{children:"swanky.config.json"}),", so the command needs to be ran from within the project directory."]}),"\n",(0,a.jsxs)(n.p,{children:["During account creation you'll have an option of passing your own mnemonic, or have Swanky generate one for you by passing ",(0,a.jsx)(n.code,{children:"-g"})," flag."]}),"\n",(0,a.jsx)(n.p,{children:'You can also mark the account as "production" which will require you to set a password and encrypt the mnemonic.'}),"\n",(0,a.jsx)(n.p,{children:"Be careful not to use a dev account on live networks, as their mnemonic is stored in plain text in the config!"}),"\n",(0,a.jsx)(c.A,{caption:"Creating and listing accounts",src:t(32128).A,width:"65%"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Newly generated accounts that are not the preconfigured dev accounts (Alice, Bob, Charlie...) will have no funds initially, so you'll have to transfer some manually."})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli#swanky-account-create",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky account"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"interact-with-contracts",children:"Interact with contracts"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"swanky contract"})," command offers several subcommands for different interactions with your contracts."]}),"\n",(0,a.jsx)(c.A,{caption:"Different `contract` subcommands",src:t(33663).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:"The command names are self explanatory, and to get more detailed information on using a specific command, you can use the help flag with it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"swanky contract SUB_COMMAND --help\n"})}),"\n",(0,a.jsx)(n.h4,{id:"compile",children:"Compile"}),"\n",(0,a.jsxs)(n.p,{children:["Depending on the contracts definition in ",(0,a.jsx)(n.code,{children:"swanky.config.json"}),", calling ",(0,a.jsx)(n.code,{children:"swanky contract compile CONTRACT_NAME"})," will run either cargo-contract or ask! compiler (via npm script)."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have multiple contracts and wish to compile them all at once, you can pass the ",(0,a.jsx)(n.code,{children:"--all"})," flag instead of the contract name."]}),"\n",(0,a.jsxs)(n.p,{children:["Likewise, if you're compiling for production, you need to pass the ",(0,a.jsx)(n.code,{children:"--prod"})," flag."]}),"\n",(0,a.jsx)(c.A,{caption:"Compile all contracts",src:t(9213).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky account"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"get-detailed-contract-description",children:"Get detailed contract description"}),"\n",(0,a.jsx)(n.p,{children:"Compiling the contract will generate it's metadata too."}),"\n",(0,a.jsxs)(n.p,{children:["Swanky provides ",(0,a.jsx)(n.code,{children:"contract explain CONTRACT_NAME"})," command to get a more human friendly version of that metadata:"]}),"\n",(0,a.jsx)(c.A,{caption:"Getting contract metadata information",src:t(94812).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"contract compile"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"run-e2e-tests",children:"Run E2E tests"}),"\n",(0,a.jsxs)(n.p,{children:["You can test your contracts using ",(0,a.jsx)(n.a,{href:"https://mochajs.org/",children:"Mocha"})," framework and ",(0,a.jsx)(n.a,{href:"https://www.chaijs.com/",children:"Chai"})," assertions."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Please note these tests are not ink! E2E tests, but are written in TypeScript, and require a local node to be running."}),(0,a.jsxs)(n.p,{children:["You can get more information on ink! E2E test framework in the ",(0,a.jsx)(n.a,{href:"/basics/contract-testing/end-to-end-e2e-testing",children:"ink! documentation"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["A contract template will provide you with a simple test as well, which you can use as a starting point.\nThe tests utilize ",(0,a.jsx)(n.a,{href:"https://polkadot.js.org/docs/api/",children:"@polkadot/api"})," library, and contract types generated by ",(0,a.jsx)(n.a,{href:"https://github.com/727-Ventures/typechain-polkadot",children:"typechain-polkadot"}),".\nThe types are generated during the compile step and copied to ",(0,a.jsx)(n.code,{children:"test/*/typedContract/"})," directory, along with the contract artifacts in the ",(0,a.jsx)(n.code,{children:"test/*/artifacts/"})," directory. If you need only the types generated\n(if you for example deleted or edited them), you can do that without going through the whole compilation step by using ",(0,a.jsx)(n.code,{children:"swanky contract typegen"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:["Running ",(0,a.jsx)(n.code,{children:"swanky contract test CONTRACT_NAME"})," will detect all ",(0,a.jsx)(n.code,{children:"*.test.ts"})," files in the ",(0,a.jsx)(n.code,{children:"test/contract_name/"})," directory, and run them sequentially, or in all directories inside ",(0,a.jsx)(n.code,{children:"test/"})," if you pass the ",(0,a.jsx)(n.code,{children:"-a"}),"/",(0,a.jsx)(n.code,{children:"--all"})," flag."]}),"\n",(0,a.jsx)(c.A,{caption:"Run tests for a contract",src:t(6936).A,width:"65%"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Running the tests programmatically may throw warnings about duplicate dependencies on ",(0,a.jsx)(n.code,{children:"@polkadot/*"})," libraries.\nThis occurs because those libraries are included in swanky app itself, as well as in the test files.\nApart from the warning text spamming, no negative consequence of this has been observed."]}),(0,a.jsx)(n.p,{children:"If you want to avoid the warnings anyway, you can run tests as a yarn/npm command:"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"yarn test"})," or"]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"npm run test"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Web based report will be generated and stored in ",(0,a.jsx)(n.code,{children:"artifacts/"})," directory. You can copy the path of the reports and use the ",(0,a.jsx)(n.code,{children:"serve"})," app to view them in browser. (",(0,a.jsx)(n.code,{children:"serve"})," is included in swanky-dev-container)"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"serve PATH_TO_REPORTS\n"})}),"\n",(0,a.jsx)(c.A,{caption:"Web based test report",src:t(64161).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-test-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky contract test"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"deploy-your-contract",children:"Deploy your contract"}),"\n",(0,a.jsx)(n.p,{children:"When your contract is compiled and tested, you can deploy it to a local node or a remote network."}),"\n",(0,a.jsxs)(n.p,{children:["You will need to supply account you wish to deploy the contract from (",(0,a.jsx)(n.code,{children:"-account"}),"), max amount of gas to be used (",(0,a.jsx)(n.code,{children:"-g"}),"), and any arguments required by your contract's constructor (",(0,a.jsx)(n.code,{children:"-a"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, your contract will be deployed to a local node, but you can pass a custom network via ",(0,a.jsx)(n.code,{children:"-n"}),"/",(0,a.jsx)(n.code,{children:"--network"})," flag. Available networks are configured in ",(0,a.jsx)(n.code,{children:"swanky.config.json"})," file."]}),"\n",(0,a.jsx)(c.A,{caption:"Deploying the contract",src:t(38461).A,width:"65%"}),"\n",(0,a.jsxs)(n.p,{children:["Successfully running the ",(0,a.jsx)(n.code,{children:"deploy"})," command will print out the address your contract is deployed to, as well as save it into ",(0,a.jsx)(n.code,{children:"swanky.config.json"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-deploy-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky contract deploy"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"run-queries-and-transactions",children:"Run queries and transactions"}),"\n",(0,a.jsxs)(n.p,{children:["Once your contract is deployed, you can call it from the CLI using ",(0,a.jsx)(n.code,{children:"query"})," or ",(0,a.jsx)(n.code,{children:"tx"})," commands."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"query"})," for read-only calls, and ",(0,a.jsx)(n.code,{children:"tx"})," for the calls that change the chain state and require signing (and a gas fee)."]}),"\n",(0,a.jsxs)(n.p,{children:["Both commands require ",(0,a.jsx)(n.code,{children:"CONTRACT_NAME"})," and ",(0,a.jsx)(n.code,{children:"MESSAGE_NAME"})," parameters, and for ",(0,a.jsx)(n.code,{children:"tx"})," a caller account needs to be provided too. (",(0,a.jsx)(n.code,{children:"-a"}),"/",(0,a.jsx)(n.code,{children:"--account"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["If the message you're calling requires arguments to be passed, you can do that using ",(0,a.jsx)(n.code,{children:"-p"}),"/",(0,a.jsx)(n.code,{children:"--param"})," flag."]}),"\n",(0,a.jsx)(c.A,{caption:"Calling a query on a contract",src:t(96117).A,width:"65%"}),"\n",(0,a.jsx)(c.A,{caption:"Calling a transaction on a contract",src:t(38133).A,width:"65%"}),"\n",(0,a.jsxs)(n.p,{children:["Result of a ",(0,a.jsx)(n.code,{children:"query"})," is straight forward, ",(0,a.jsx)(n.code,{children:"OK"})," followed by what ever the response is."]}),"\n",(0,a.jsxs)(n.p,{children:["The transaction (",(0,a.jsx)(n.code,{children:"tx"}),") is a bit more raw though. Important to note are the ",(0,a.jsx)(n.code,{children:"dispatchError"})," and ",(0,a.jsx)(n.code,{children:"internalError"})," fields, plus the ",(0,a.jsx)(n.code,{children:"status"})," field.\nIf the errors are ",(0,a.jsx)(n.code,{children:"undefined"}),", and the status ",(0,a.jsx)(n.code,{children:"finalized"}),", your transaction has been successful."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Gas fee for ",(0,a.jsx)(n.code,{children:"tx"})," is calculated and applied automatically, but you can provide a gas limit manually by using the ",(0,a.jsx)(n.code,{children:"-g"}),"/",(0,a.jsx)(n.code,{children:"--gas"})," flag."]}),(0,a.jsx)(n.p,{children:"Keep in mind that the transaction will fail if you provide too low a value."})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-query-contractname-messagename",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky contract query"})," command usage manual"]})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-tx-contractname-messagename",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky contract tx"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"add-a-new-contract-from-template",children:"Add a new contract from template"}),"\n",(0,a.jsxs)(n.p,{children:["You can create additional contracts in the same project, using the ",(0,a.jsx)(n.code,{children:"contract new"})," command and selecting from predefined templates."]}),"\n",(0,a.jsxs)(n.p,{children:["The contract will be referred by ",(0,a.jsx)(n.code,{children:"name"})," when using the relevant contract commands, and you can check the details in ",(0,a.jsx)(n.code,{children:"swanky.config.json"})]}),"\n",(0,a.jsx)(c.A,{caption:"Adding a new contract",src:t(12683).A,width:"65%"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-new-contractname",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky contract new"})," command usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"interact-with-a-local-node",children:"Interact with a local node"}),"\n",(0,a.jsxs)(n.p,{children:["If you have chosen to download and use the Swanky Node during init step, you can use ",(0,a.jsx)(n.code,{children:"swanky node"})," commands to start and manage it."]}),"\n",(0,a.jsxs)(n.p,{children:["Simply running ",(0,a.jsx)(n.code,{children:"swanky node start"})," will start the node, and the node will preserve the state across restarts."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to reset the node state, use the ",(0,a.jsx)(n.code,{children:"swanky node purge"})," command."]}),"\n",(0,a.jsx)(c.A,{caption:"Starting the swanky node",src:t(45395).A,width:"65%"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Note that node needs to be running if you are using a default local network with ",(0,a.jsx)(n.code,{children:"deploy"}),", ",(0,a.jsx)(n.code,{children:"query"})," and ",(0,a.jsx)(n.code,{children:"tx"})," commands."]})}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"If you want to use an external UI to interact with the node, you might run into some CORS issues."}),(0,a.jsxs)(n.p,{children:["This can be solved by passing a custom array of whitelisted urls using the ",(0,a.jsx)(n.code,{children:"--rpcCors"})," flag."]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-node-purge",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky node"})," commands usage manual"]})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"using-plugins",children:"Using plugins"}),"\n",(0,a.jsx)(n.p,{children:"Swanky CLI's functionality can be extended by the use of plugins, and it's a way to add new, case specific commands without modifying the core codebase."}),"\n",(0,a.jsxs)(n.p,{children:["One WIP example is the ",(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-plugin-phala",children:"Phala plugin"})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you are interested in developing a plugin, you can refer to the Phala example, and the ",(0,a.jsx)(n.a,{href:"https://oclif.io/docs/plugins",children:"Oclif plugin documentation"}),", or you can post a request in ",(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/issues",children:"swanky-cli repo"}),"'s issues."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-plugins",children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"swanky plugin"})," commands usage manual"]})})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},13547:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(74848);const a=e=>{let{src:n,caption:t,width:a="460px"}=e;return(0,s.jsx)("center",{children:(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:n,alt:t,width:a}),(0,s.jsx)("figcaption",{children:t})]})})}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var s=t(96540),a=t(34164),r=t(23104),c=t(56347),i=t(205),o=t(57485),l=t(31682),d=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[c,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,h]=m({queryString:t,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),y=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{y&&o(y)}),[y]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function w(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==s&&(l(n),c(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(w,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},32128:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/acc-create-b1d64dae10e8beb93d3de2d42c25dbee.png"},40146:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/check-6e0142844f6d056c08461bff990de9dd.png"},9213:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/compile-9421de01d96c2ec3ee7ad750384ce081.png"},33663:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/contract-commands-96e45b4acbecce82d020d0dac7f9d626.png"},94812:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/contract-explain-acb4f6438394dc98cecb46b2ad07c9e9.png"},12683:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/contract-new-92235c01e5634419801358cafd4a6580.png"},96117:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/contract-query-79a68c5c476702c83699f709e53096af.png"},38133:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/contract-tx-96aa5e18952ecd4a89229f5e35a205db.png"},38461:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deploy-e8df84a0145815a37a928347c018e15c.png"},47032:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/folder-structure-b5d966f0d49689459cf49632f5f1e9aa.png"},74361:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/help-f114702279d70809522d9216889a6b8d.png"},56606:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/init-94089ca6c093bd53855642a08bcdd244.png"},45395:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/node-start-691dacb8b068ae1f3fd5a35a76578af7.png"},64161:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/test-report-31f35653b8e9fb0e69456fede0360650.png"},6936:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/test-e1b2f006f0f9478bbdd414870268c15e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);