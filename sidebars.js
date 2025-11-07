module.exports = {
  reference: [
    'intro/intro',
    'intro/sub0-hackathon',
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started/setup",
        "getting-started/creating",
        "getting-started/compiling",
        "getting-started/testing",
        "getting-started/deploying",
        "getting-started/calling"
      ]
    },
    {
      type: "category",
      label: "Basics",
      items: [
      "basics/contract-template",
      "basics/storing-values",
      "basics/reading-values",
      "basics/mutating-values",
      "basics/events",
      "basics/gas",
      "basics/cross-contract-calling"
      ]
    },
    {
      type: "category",
      label: "Advanced",
      items: [
      "advanced/selectors",
      "advanced/trait-definitions",
      "advanced/upgradeability",
      "advanced/env-functions",
      "advanced/environment",
      "advanced/xcm",
      "advanced/precompiles",
      {
        type: "category",
        label: "Data Structures",
        items: [
        "advanced/datastructures/overview",
        "advanced/datastructures/storagevec",
        "advanced/datastructures/mapping",
        "advanced/datastructures/storage-layout",
        "advanced/datastructures/custom",
        "advanced/datastructures/storage-in-metadata"
        ]
      }
      ]
    },
    {
      type: "category",
      label: "Development",
      items: [
      {
        type: "category",
        label: "Testing",
        items: [
        "development/testing/overview",
        "development/testing/unit-integration",
        "development/testing/sandbox",
        "development/testing/e2e",
        // "development/testing/testing-with-live-state"
        ]
      },
      // "development/deployment",
      {
        type: "category",
        label: "Debugging",
        items: [
        "development/debugging/overview",
        "development/debugging/events",
        "development/debugging/return_value",
        "development/debugging/tracing",
        "development/debugging/sandbox",
        "development/debugging/decoding",
        // "development/debugging/replays",
        "development/debugging/precompiles"
        ]
      },
      "development/contract-verification",
      {
        type: "category",
        label: "Linter",
        items: [
        "development/linter/overview",
        {
          "type": "category",
          "label": "Linting rules",
          "items": [
            "development/linter/rules/no_main",
            "development/linter/rules/primitive_topic",
            "development/linter/rules/storage_never_freed",
            "development/linter/rules/strict_balance_equality",
            "development/linter/rules/non_fallible_api"
          ]
        }
        ]
      }
      ]
    },
    "tutorials-examples",
    {
      type: "category",
      label: "Ink & Solidity",
      items: [
        "solidity-interop/use-ink-with-solidity-abi",
        "solidity-interop/calling-solidity-contracts",
        {
          type: "category",
          label: "Use Ethereum Tooling",
          items: [
            "solidity-interop/metamask-setup",
            "solidity-interop/hardhat-deployment",
            "solidity-interop/wagmi-integration"
          ]
        },
        "solidity-interop/type-reference"
      ]
    },
    {
      type: "category",
      label: "Reference",
      items: [
      {
        type: "category",
        label: "Macros & Attributes",
        items: [
        "reference/macros-attributes/overview",
        "reference/macros-attributes/contract",
        "reference/macros-attributes/contract_ref",
        "reference/macros-attributes/anonymous",
        "reference/macros-attributes/constructor",
        "reference/macros-attributes/default",
        "reference/macros-attributes/error",
        "reference/macros-attributes/event",
        "reference/macros-attributes/implementation",
        "reference/macros-attributes/message",
        "reference/macros-attributes/name",
        "reference/macros-attributes/namespace",
        "reference/macros-attributes/payable",
        "reference/macros-attributes/selector",
        "reference/macros-attributes/storage",
        "reference/macros-attributes/topic",
        "reference/macros-attributes/trait_definition"
        ]
      },
      {
        "type": "category",
        "label": "ABI",
        "items": [
          "reference/abi/overview",
          "reference/abi/ink",
          "reference/abi/solidity",
          "reference/abi/all"
        ]
      },
      {
        "type": "category",
        "label": "Metadata",
        "items": [
          "reference/metadata/overview",
          "reference/metadata/ink-format",
          "reference/metadata/solidity-format"
        ]
      }
      ]
    },
    {
      type: "category",
      label: "Integration & SDKs",
      items: [
      {
        "type": "category",
        "label": "JavaScript/TypeScript",
        "items": [
          "integrations-and-sdks/javascript-typescript/core-libraries",
          "integrations-and-sdks/javascript-typescript/react"
        ]
      },
      "integrations-and-sdks/other-languages"
      ]
    },
    {
      type: "category",
      label: "Technical Background",
      items: [
      "background/polkadot-sdk",
      "background/why-rust",
      "background/why-riscv",
      "background/ink-vs-solidity",
      "background/ink-vs-cosmwasm",
      "background/contracts-vs-parachains",
      "background/migrate-to-parachain"
      ]
    },
    {
      type: "category",
      label: "FAQ",
      items: [
      "faq/faq",
      "faq/migrating-from-ink-5-to-6",
      "faq/migrating-from-ink-4-to-5",
      "faq/migrating-from-ink-3-to-4"
      ]
    }
  ],
}
