module.exports = {
  "reference": {
    "Overview": [
      "intro/intro",
      "intro/why-rust",
      "intro/why-webassembly",
      "intro/where-to-deploy",
      "intro/polkadot",
      "intro/how-it-works",
      "intro/ink-vs-solidity",
      "intro/ink-vs-cosmwasm",
      "intro/migrate-to-parachain"
    ],
    "Getting started": [
      "getting-started/setup",
      "getting-started/creating",
      "getting-started/compiling",
      "getting-started/running",
      "getting-started/deploying",
      "getting-started/calling",
      "getting-started/troubleshooting"
    ],
    "Basics": [
      "basics/contract-template",
      "basics/storing-values",
      "basics/reading-values",
      "basics/mutating-values",
      "basics/events",
      "basics/selectors",
      "basics/trait-definitions",
      "basics/gas",
      "basics/cross-contract-calling",
      "basics/upgradeability",
      "basics/env-functions",
      "basics/environment",
      "basics/metadata",
      {
        "type": "category",
        "label": "Verification",
        "items": [
          "basics/verification/contract-verification",
          "basics/verification/sirato"
        ]
      }
    ],
    "Testing & Debugging": [
      "testing/overview",
      "testing/off-chain",
      "testing/drink",
      "testing/e2e",
      "testing/testing-with-live-state",
      {
        "type": "category",
        "label": "Testnet",
        "items": [
          "testing/testnet/overview",
          "testing/testnet/faucet",
        ],
        "link": {
          "type": "doc",
          "id": "testing/testnet/overview"
        }
      }
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
      "macros-attributes/chain-extension"
    ],
    "Storage & Data Structures": [
      "datastructures/overview",
      "datastructures/storagevec",
      "datastructures/mapping",
      "datastructures/storage-layout",
      "datastructures/custom",
      "datastructures/storage-in-metadata"
    ],
    "Linter": [
      "linter/overview",
      {
        "type": "category",
        "label": "Linting rules",
        "items": [
          "linter/rules/no_main",
          "linter/rules/primitive_topic",
          "linter/rules/storage_never_freed",
          "linter/rules/strict_balance_equality",
          "linter/rules/non_fallible_api"
        ]
      }
    ],
    "Frontend Development": [
      "frontend/overview"
    ],
    "Examples": [
      "examples/contracts",
      "examples/dapps"
    ],
    "Standards": [
      "standards/overview"
    ],
    "Funding Programs": [
      "funding-programs/overview"
    ],
    "Third Party Tools & Libraries": [
      "third-party-tools/inkathon",
      {
        "type": "category",
        "label": "Swanky Suite",
        "items": [
          "third-party-tools/swanky/cli",
          "third-party-tools/swanky/node"
        ],
        "link": {
          "type": "doc",
          "id": "third-party-tools/swanky/index"
        }
      },
      "third-party-tools/ink-analyzer",
      "third-party-tools/subwallet"
    ],
    "FAQ": [
      "faq/faq",
      "faq/migrating-from-ink-4-to-5",
      "faq/migrating-from-ink-3-to-4"
    ],
    "Brand Assets": [
      "brand-assets/ink",
      "brand-assets/community-badges",
      "brand-assets/cargo-contract",
      "brand-assets/stickers"
    ]
  }
};
