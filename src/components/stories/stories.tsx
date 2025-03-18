import React from 'react'
import { Story } from './story-list'

export const stories: Story[] = [
  {
    logo: 'img/stories/azero.id-logo.avif',
    image: 'img/stories/azero.id.avif',
    name: 'azero.id',
    backstory: (
      <>
        <a href="http://azero.id/">AZERO.ID</a> is an on-chain identity/domain service in the Aleph Zero ecosystem,
        built with ink!. They currently manage ~4k domains from ~1.7k unique holders. The contracts are written ink!,
        the dApp was built using React with the <code>use-inkathon</code> hooks. You can check out the ink! domain in
        the dApp at <a href="https://azero.id/ink.azero">azero.id/ink.azero</a>
      </>
    ),
  },
  {
    logo: 'img/stories/artzero-logo.svg',
    image: 'img/stories/artzero.avif',
    name: 'artzero',
    backstory: (
      <>
        ArtZero is a non-fungible token (NFT) marketplace built with ink! on the Aleph Zero & Astar blockchains. It
        provides a novel NFT staking mechanism. Owners are able to benefit from trade discount rates, plus a share of
        the marketplace trade fee. 3.2k NFTs are currently staked on the platform. Check out{' '}
        <a href="https://artzero.io">artzero.io</a> for more info.
      </>
    ),
  },
]
