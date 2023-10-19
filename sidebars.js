module.exports = {
  reference: {
    Overview: [
      "intro/intro",
      "intro/why-rust",
      "intro/why-webassembly",
      "intro/polkadot",
      "intro/how-it-works",
      "intro/ink-vs-solidity",
      "intro/ink-vs-cosmwasm",
      "intro/migrate-to-parachain",
    ],
    "Getting started": [
      "getting-started/setup",
      "getting-started/creating",
      "getting-started/compiling",
      "getting-started/running",
      "getting-started/deploying",
      "getting-started/calling",
      "getting-started/troubleshooting",
    ],
    Basics: [
      "basics/contract-template",
      "basics/storing-values",
      "basics/reading-values",
      "basics/mutating-values",
      "basics/events",
      "basics/selectors",
      "basics/trait-definitions",
      "basics/cross-contract-calling",
      "basics/upgradeability",
      "basics/env-functions",
      "basics/environment",
      "basics/metadata",
      "basics/testing",
      "basics/debugging",
      "basics/verification",
    ],
    "Macros & Attributes": [
      "macros-attributes/overview",
      "macros-attributes/contract",
      "macros-attributes/anonymous",
      "macros-attributes/constructor",
      "macros-attributes/default",
      "macros-attributes/event",
      "macros-attributes/implementation",
      "macros-attributes/message",
      "macros-attributes/namespace",
      "macros-attributes/payable",
      "macros-attributes/selector",
      "macros-attributes/storage",
      "macros-attributes/topic",
      "macros-attributes/chain-extension",
    ],
    "Storage & Data Structures": [
      "datastructures/overview",
      "datastructures/mapping",
      "datastructures/storage-layout",
      "datastructures/custom",
      "datastructures/storage-in-metadata",
    ],
    "Frontend Development": [
      "frontend/overview",
      "frontend/getting-started",
      "frontend/connect-wallet",
      {
        type: "category",
        label: "🪝 Hooks",
        items: [
          "frontend/react/hooks/all-hooks",
          {
            type: "category",
            label: "Contracts",
            items: [
              "frontend/react/hooks/contracts/use-call",
              "frontend/react/hooks/contracts/use-call-subscription",
              "frontend/react/hooks/contracts/use-code-hash",
              "frontend/react/hooks/contracts/use-contract",
              "frontend/react/hooks/contracts/use-deployer",
              "frontend/react/hooks/contracts/use-dry-run",
              "frontend/react/hooks/contracts/use-event-subscription",
              "frontend/react/hooks/contracts/use-events",
              "frontend/react/hooks/contracts/use-tx-events",
              "frontend/react/hooks/contracts/use-metadata",
              "frontend/react/hooks/contracts/use-salter",
              "frontend/react/hooks/contracts/use-tx",
              "frontend/react/hooks/contracts/use-tx-payment-info",
            ]
          },
          {
            type: "category",
            label: "Wallets",
            items: [
              "frontend/react/hooks/wallets/use-wallet",
              "frontend/react/hooks/wallets/use-all-wallets",
              "frontend/react/hooks/wallets/use-installed-wallets",
              "frontend/react/hooks/wallets/use-uninstalled-wallets",
            ]
          },
          {
            type: "category",
            label: "Substrate",
            items: [
              "frontend/react/hooks/substrate/use-api",
              "frontend/react/hooks/substrate/use-balance",
              "frontend/react/hooks/substrate/use-transfer",
              "frontend/react/hooks/substrate/use-block-header",
              "frontend/react/hooks/substrate/use-timestamp-date",
              "frontend/react/hooks/substrate/use-timestamp-now",
              "frontend/react/hooks/substrate/use-timestamp-query",
            ]
          },
          {
            type: "category",
            label: "Helpers",
            items: [
              "frontend/react/hooks/helpers/use-unix-milli-to-date",
            ]
          }
        ],
      },
      "frontend/configuration",
      {
        type: "category",
        label: "useink / core",
        items: [
          "frontend/core/overview",
          {
            type: "category",
            label: "Contracts",
            items: [
              "frontend/core/contracts/call",
              "frontend/core/contracts/decode-call-result",
              "frontend/core/contracts/decode-error",
              "frontend/core/contracts/get-registry-error",
              "frontend/core/contracts/to-contract-abi-message",
              "frontend/core/contracts/tx-payment-info",
            ]
          },
          {
            type: "category",
            label: "Substrate",
            items: [
              "frontend/core/substrate/get-balance",
              "frontend/core/substrate/get-timestamp-query",
              "frontend/core/substrate/get-timestamp-now",
              "frontend/core/substrate/get-timestamp-date",
              "frontend/core/substrate/transfer",
              "frontend/core/substrate/chain-decimals",
              "frontend/core/substrate/chain-token-symbol",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "useink / chains",
        items: [
          "frontend/chains/getting-started",
          "frontend/chains/configurations",
          "frontend/chains/chain-id",
        ]
      },
      {
        type: "category",
        label: "useink / notifications",
        items: [
          "frontend/notifications/getting-started",
          "frontend/notifications/configuration",
          "frontend/notifications/useNotifications",
          "frontend/notifications/toNotificationLevel",
        ]
      },
      {
        type: "category",
        label: "useink / utils",
        items: [
          "frontend/utils/getting-started",
          "frontend/utils/pick",
          "frontend/utils/tx-utils",
          "frontend/utils/types",
          {
            type: "category",
            label: "Substrate",
            items: [
              "frontend/utils/substrate/bn-to-balance",
            ]
          },
          {
            type: "category",
            label: "Events",
            items: [
              "frontend/utils/events/format-event-name",
              { type: "category",
                label: "Contracts",
                items: [
                  "frontend/utils/events/contracts/instantiated",
                ]
              },
              { type: "category",
                label: "System",
                items: [
                  "frontend/utils/events/system/extrinsic-failed",
                ]
              },
            ]
          },
          {
            type: "category",
            label: "Helpers",
            items: [
              "frontend/utils/helpers/planck-to-decimal",
              "frontend/utils/helpers/planck-to-decimal-formatted",
              "frontend/utils/helpers/decimal-to-planck",
            ]
          },
        ]
      },
    ],
    Examples: ["examples/contracts", "examples/dapps"],
    "ink!ubator": ["inkubator/overview"],
    Testnet: ["testnet/overview", "testnet/faucet"],
    "Third Party Tools & Libraries": [
      "third-party-tools/openbrush",
      {
        type: "category",
        label: "Swanky suite",
        items: [
          "third-party-tools/swanky/cli",
          "third-party-tools/swanky/node",
        ],
        link: {
          type: "doc",
          id: "third-party-tools/swanky/index",
        },
      },
      // { "Swanky suite": ["third-party-tools/swanky/cli"] },
      "third-party-tools/ink-analyzer",
      "third-party-tools/inkathon",
      "third-party-tools/subwallet",
    ],
    FAQ: ["faq/faq", "faq/migrating-from-ink-3-to-4"],
    "Brand Assets": [
      "brand-assets/ink",
      "brand-assets/community-badges",
      "brand-assets/cargo-contract",
      "brand-assets/stickers",
    ],
  },
};
