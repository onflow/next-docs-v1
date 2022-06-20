import { ReactComponent as EcosystemIcon } from "~/ui/design-system/images/content/ecosystem"
import { ReactComponent as SDKIcon } from "~/ui/design-system/images/content/sdk"
import { ReactComponent as UseCaseIcon } from "~/ui/design-system/images/content/use-cases"
import {
  LinkCard2ColumnProps,
  LinkCard3ColumnItems,
} from "~/ui/design-system/src"

const homepageStartProjectData: LinkCard2ColumnProps = {
  buttonText: "Get started",
  buttonUrl: "/builders",
  description: `Building on Flow is easy. 
      Start building now on web3 with the power of resource-oriented programming, multi-node architecture, 
      and a host of other features and tooling to make your dapp development easy and efficient.`,
  title: "Start Your Project",
  tags: ["onflow"],
  items: [
    {
      title: "Kitty Items",
      description:
        "A full stack example NFT storefront and marketplace built with the latest standards and tooling on Flow. Get it up and running in a few minutes.",
      href: "https://docs.onflow.org/kitty-items/",
      icon: "https://kitty-items-flow-testnet-prod.herokuapp.com/images/kitty-items-logo.svg",
    },
    {
      title: "Mint NFTs on the Playground with Cadence",
      description:
        "A series of tutorials that explain how to build your first NFT (Non-Fungible Token).",
      icon: "https://avatars.githubusercontent.com/u/62387156?s=64&v=4",
      links: [
        {
          href: "https://docs.onflow.org/cadence/tutorial/02-hello-world/",
          title: "Hello, World!",
        },
        {
          href: "https://docs.onflow.org/cadence/tutorial/05-marketplace-setup/",
          title: "NFTs",
        },
        {
          href: "https://docs.onflow.org/cadence/tutorial/04-non-fungible-tokens/",
          title: "Marketplaces",
        },
      ],
    },
  ],
}

const homepageThreeColumnData: LinkCard3ColumnItems = [
  {
    title: "Quickstarts",
    description:
      "A quick way to familiarize yourself with the environments you can use to build on Flow.",
    icon: <UseCaseIcon />,
    links: [
      {
        title: "Get started locally",
        href: "https://github.com/emerald-dao/0-hello-world",
        tags: ["emulator"],
      },
      {
        title: "Get started on testnet",
        href: "https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/",
        tags: ["javascript"],
      },
      {
        title: "Get started on the playground",
        href: "https://docs.onflow.org/cadence/tutorial/02-hello-world/",
        tags: ["playground"],
      },
      {
        title: "View all tools and services",
        href: "/tools",
      },
    ],
  },
  {
    title: "Guides & Tutorials",
    description: "A more in-depth look at how dapp development works on Flow.",
    icon: <EcosystemIcon />,
    links: [
      {
        title: "NFT dapp development guide",
        href: "#tutorial1",
        tags: ["overview"],
      },
      {
        title: "Deploying your project",
        href: "https://docs.onflow.org/flow-cli/deploy-project-contracts/",
        tags: ["cli", "tutorial"],
      },
      {
        title: "Flow key concepts",
        href: "https://docs.onflow.org/concepts/accounts-and-keys/",
        tags: ["accounts", "signing"],
      },
      {
        title: "View more learning resources",
        href: "/learn",
      },
    ],
  },
  {
    title: "Smart Contracts",
    description: "Smart contracts description.",
    icon: <SDKIcon />,
    links: [
      {
        title: "Why Cadence?",
        href: "https://docs.onflow.org/cadence/tutorial/02-hello-world/",
        tags: ["cadence"],
      },
      {
        title: "Introduction to Cadence",
        href: "https://docs.onflow.org/core-contracts",
        tags: ["nft", "ft", "metadata"],
      },
      {
        title: "Core Contracts & Standards",
        href: "https://docs.onflow.org/core-contracts",
        tags: ["nft", "ft", "metadata"],
      },
      {
        title: "Cadence cookbook",
        href: "https://open-cadence.onflow.org/",
      },
    ],
  },
]

export { homepageThreeColumnData, homepageStartProjectData }