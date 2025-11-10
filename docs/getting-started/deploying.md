---
title: Deploy your contract
slug: /getting-started/deploy-your-contract
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

![Rocket Title Picture](/img/title/rocket.svg)

# Deploy Your Contract

Deploying a contract involves uploading your compiled contract code and creating an instance of it on a blockchain. In Polkadot, these are two separate steps: first upload the code, then instantiate it as many times as needed.

<Tabs>
  <TabItem value="pop" label="Pop" default>
  If not specified Pop CLI automatically launches a local node for you when deploying a contract.

  ```bash
  pop build --release
  pop up
  ```

  For more deployment options, see the [Pop CLI deployment guide](https://learn.onpop.io/contracts/guides/deploy).
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">

  To deploy your contract locally, you need a running blockchain node that supports ink! smart contracts. The recommended option is `ink-node`, a simple Polkadot blockchain configured with the `pallet-revive` for smart contracts ([learn more](../background/polkadot-sdk.md)).

  After [installing `ink-node`](./setup.md#ink-node), you can start a local development chain by running:

  ```bash
  ink-node
  ```

  **Note:** `ink-node` uses the `--dev` flag by default. You may need to specify the `--dev` flag when running a different chain binary.

  <img src={useBaseUrl('/img/ink-node.png')} className="titlePic titleSpace" title="Screenshot of terminal starting a local node" />

  Once your node is running, deploy your contract:

  ```bash
  cargo contract build --release
  cargo contract instantiate --suri //Alice --args true
  ```
  </TabItem>
  <TabItem value="contracts-ui" label="Contracts UI">
  To deploy your contract locally, you need a running blockchain node that supports ink! smart contracts. The recommended option is `ink-node`, a simple Polkadot blockchain configured with the `pallet-revive` for smart contracts ([learn more](../background/polkadot-sdk.md)).

  After [installing `ink-node`](./setup.md#ink-node), you can start a local development chain by running:

  ```bash
  ink-node
  ```

  **Note:** `ink-node` uses the `--dev` flag by default. You may need to specify the `--dev` flag when running a different chain binary.

  <img src={useBaseUrl('/img/ink-node.png')} className="titlePic titleSpace" title="Screenshot of terminal starting a local node" />

  You can interact with your node using the Contracts UI. Configure it to connect to the locally running node:

  - Click on the dropdown selector at the top left corner.
  - Choose "Local Node".

  ![Connect to local node](/img/contracts-ui-local-node.png)

  ### 1. Upload Contract Code

  Here we will upload the contract code and instantiate one copy of the contract on the blockchain (which is usually why we upload the contract code in the first place):

  - Go to https://ui.use.ink/
  - Make sure you have ink! v6 selected in the sidebar
  - Click the **Add New Contract** button in the sidebar.
  - Click the **Upload New Contract Code** button in the Add New Contract page.
  - Choose an **Instantiation account** (e.g. ALICE).
  - Give the contract a descriptive **Name** (e.g. Flipper Contract).
  - Drag the `flipper.contract` file that contains the bundled binary blob and metadata into the drag & drop area. You will see the UI parse the metadata and enabling the button that takes you to the next step.
  - Click the **Next** button

  ![Flipper Instantiate Contract 01](/img/contracts-ui-0.png)

  ### 2. Instantiate a Contract on the Blockchain

  Smart contracts exist as an extension of the account system on the blockchain. Thus creating an instance of this contract will create a new `AccountId` (ETH-compatible address) which will store any balance managed by the smart contract and allow us to interact with the contract.

  Now a screen displays the information that represents our smart contract. We are going to instantiate a copy of the smart contract:

  - Accept the default options for the contract **Deployment Constructor**.
  - Accept the default options **Max Gas Allowed** of `200000`.
  - Click on `Next`

  ![Flipper Instantiate Contract 02](/img/contracts-ui-1.png)

  The transaction is now queued, review your data and click **Upload and Instantiate** or go back and modify your inputs.

  ![Flipper Instantiate Contract 03](/img/contracts-ui-2.png)

  You will be redirected to a new page, where you can interact with the newly created contract instance.

  ![Flipper Instantiate Success](/img/contracts-ui-3.png)
  </TabItem>
</Tabs>

## Deploying to Passet Hub Testnet

To deploy your contract to a live testnet, you can use **Passet Hub**, Polkadot's testnet Asset Hub that supports ink! v6 smart contracts.

**Prerequisites:**
1. **Get PAS tokens**: Use the [Passet Hub Faucet](https://faucet.polkadot.io/?parachain=1111)
2. **Polkadot account**: Create one following this [guide](https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account)

<Tabs>
  <TabItem value="pop" label="Pop" default>
  Deploy your contract to Passet Hub using Pop CLI:

  ```bash
  pop up --url wss://testnet-passet-hub.polkadot.io
  ```

  Pop CLI will automatically handle the deployment to the testnet. Make sure you have PAS tokens in your account before deploying.

  For more deployment options, see the [Pop CLI deployment guide](https://learn.onpop.io/contracts/guides/deploy).
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  Connect to Passet Hub and deploy your contract:

  ```bash
  cargo contract instantiate \
    --suri "YOUR_SEED_PHRASE" \
    --url wss://testnet-passet-hub.polkadot.io \
    --args true
  ```

  Replace `YOUR_SEED_PHRASE` with your actual seed phrase and `--args true` with your constructor arguments.
  </TabItem>
  <TabItem value="contracts-ui" label="Contracts UI">
  Deploy to Passet Hub using the Contracts UI:

  1. Go to [Contracts UI](https://ui.use.ink/)
  2. Make sure you have ink! v6 selected in the sidebar
  3. Click the network selector and choose **"Passet Hub"** (or "Custom Node" and enter `wss://testnet-passet-hub.polkadot.io`)
  4. Follow the same upload and instantiate steps as described in the local deployment section above
  5. Make sure you have PAS tokens in your selected account

  You can also interact with your deployed contract using [Polkadot.js Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpasset-hub-paseo.ibp.network#/explorer).
  </TabItem>
</Tabs>

