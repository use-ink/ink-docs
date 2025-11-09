module.exports = {
  tutorials: [
    'overview',
    {
      type: 'category',
      label: 'Frontend Development',
      items: [
        'frontend-development/inkathon-erc20',
        'frontend-development/typink-erc20',
      ],
    },
    {
      type: 'category',
      label: 'Ethereum Compatibility',
      items: [
        'ethereum-compatibility/overview',
        'ethereum-compatibility/setup-solidity-abi',
        'ethereum-compatibility/metamask-setup',
        'ethereum-compatibility/hardhat-deployment',
        'ethereum-compatibility/wagmi-integration',
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'guide',
        'ideas',
        'template',
      ],
    },
  ],
} 