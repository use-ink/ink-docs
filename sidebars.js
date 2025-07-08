module.exports = {
  reference: {
    "Overview": [
      "intro/intro",
      "intro/current-state",
      "faq/migrating-from-ink-5-to-6"
    ],
    "Getting started": [
      "getting-started/setup",
      "getting-started/creating",
      "getting-started/compiling",
      "getting-started/deploying",
      "getting-started/calling"
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
      {
        "type": "category",
        "label": "ABI",
        "items": [
          "basics/abi/overview",
          "basics/abi/ink",
          "basics/abi/solidity",
          "basics/abi/all"
        ]
      },
      {
        "type": "category",
        "label": "Metadata",
        "items": [
          "basics/metadata/overview",
          "basics/metadata/ink-format",
          "basics/metadata/solidity-format"
        ]
      },
      "basics/xcm",
      "basics/contract-verification"
    ],
    "Testing": [
      "testing/overview",
      "testing/unit-integration",
      "testing/e2e",
      "testing/sandbox",
      "testing/testing-with-live-state",
      {
        "type": "category",
        "label": "Testnet",
        "items": ["testing/testnet/overview", "testing/testnet/faucet"]
      }
    ],
    "Debugging": [
      "debugging/overview",
      "debugging/events",
      "debugging/return_value",
      "debugging/tracing",
      "debugging/sandbox",
      "debugging/decoding",
      "debugging/replays",
      "debugging/pre-compiles"
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
    "Frontend Development": ["frontend/overview"],
    "Standards": ["standards/overview"],
    "Technical Background": [
      "background/solidity-metamask-compat",
      "background/why-riscv",
      "background/why-rust",
      "background/contracts-vs-rollups",
      "background/polkadot-sdk",
      "background/ink-vs-solidity",
      "background/ink-vs-cosmwasm",
      "background/migrate-to-parachain"
    ],
    "FAQ": [
      "faq/faq",
      "faq/migrating-from-ink-5-to-6",
      "faq/migrating-from-ink-4-to-5",
      "faq/migrating-from-ink-3-to-4"
    ]
  },
}
