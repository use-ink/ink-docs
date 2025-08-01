module.exports = {
  reference: {
    "Welcome!": [
      "intro/intro",
      "intro/overview",
      {
        "type": "category",
        "label": "Getting started",
        "items": [
          "getting-started/setup",
          "getting-started/creating",
          "getting-started/compiling",
          "getting-started/deploying",
          "getting-started/calling"
        ]
      },
      "intro/tutorials-examples",
      "intro/where-to-deploy"
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
      "testing/sandbox",
      "testing/e2e",
      // "testing/testing-with-live-state"
    ],
    "Debugging": [
      "debugging/overview",
      "debugging/events",
      "debugging/return_value",
      "debugging/tracing",
      "debugging/sandbox",
      "debugging/decoding",
      // "debugging/replays",
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
      // "macros-attributes/chain-extension"
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
    "Integration & SDKs": [
      "integrations-and-sdks/overview",
      {
        "type": "category",
        "label": "JavaScript/TypeScript",
        "items": [
          "integrations-and-sdks/javascript-typescript/core-libraries",
          "integrations-and-sdks/javascript-typescript/react"
        ]
      },
      "integrations-and-sdks/other-languages",
      {
        "type": "category",
        "label": "Ethereum Compatibility",
        "items": [
          "integrations-and-sdks/ethereum-compatibility/overview",
        ]
      }
    ],
    "Technical Background": [
      "background/polkadot-sdk",
      "background/why-rust",
      "background/why-riscv",
      "background/solidity-metamask-compat",
      "background/ink-vs-solidity",
      "background/ink-vs-cosmwasm",
      "background/contracts-vs-parachains",
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
