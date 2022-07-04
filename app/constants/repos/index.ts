import { capitalCase } from "change-case"
import { InternalLandingHeaderProps } from "../../ui/design-system/src/lib/Components/InternalLandingHeader"
import cadence from "./repo-presets/cadence.json"
import dappDevelopment from "./repo-presets/dapp-development.json"
import fclJs from "./repo-presets/fcl-js.json"
import flowCli from "./repo-presets/flow-cli.json"
import kittyItems from "./repo-presets/kitty-items.json"
import vscodeExtension from "./repo-presets/vscode-extension.json"
import flowGoSdk from "./repo-presets/flow-go-sdk.json"
import flowJsTesting from "./repo-presets/flow-js-testing.json"
import flowNFT from "./repo-presets/flow-nft.json"
import flowFT from "./repo-presets/flow-ft.json"
import nftStorefront from "./repo-presets/nft-storefront.json"
import flowEmulator from "./repo-presets/flow-emulator.json"
import flow from "./section-presets/flow.json"
import learn from "./section-presets/learn.json"
import { RepoSchema } from "./repo-schema"
import { ToolName } from "../../ui/design-system/src/lib/Components/Internal/tools"
import {
  ContentName,
  FlowContentName,
  flowContentNames,
  flowSectionNames,
  RepoName,
  repositoryNames,
} from "./contents-structure"
import { landingHeaders } from "./custom-headers"

export const DEFAULT_REPO_OWNER = "onflow"
export const DEFAULT_CONTENT_PATH = "docs"

/* Sidebar presets for all repositories and content names */
export const schemas: Partial<Record<ContentName, RepoSchema>> = {
  // Individual repository
  cadence: cadence as RepoSchema,
  "flow-cli": flowCli as RepoSchema,
  "fcl-js": fclJs as RepoSchema,
  "flow-go-sdk": flowGoSdk as RepoSchema,
  "flow-js-testing": flowJsTesting as RepoSchema,
  "flow-nft": flowNFT as RepoSchema,
  "flow-ft": flowFT as RepoSchema,
  "nft-storefront": nftStorefront as RepoSchema,
  "flow-emulator": flowEmulator as RepoSchema,

  // Flow: lower lever internal contents
  "kitty-items": kittyItems as RepoSchema,
  "vscode-extension": vscodeExtension as RepoSchema,
  "dapp-development": dappDevelopment as RepoSchema,

  // Flow: higher lever section schemas
  flow: flow as RepoSchema,
  learn: learn as RepoSchema,
}

/* Overriden display names (defaults to dashes converted to spaces then capitalized) */
export const displayNames: Partial<Record<ContentName, string>> = {
  "flow-cli": "Flow CLI",
  "flow-js-testing": "Flow JS Testing",
  "flow-go-sdk": "Flow Go SDK",
  "fcl-js": "Flow Content Library JS",
  "vscode-extension": "VS Code Extension",
  "dapp-development": "DApp Development",
}

export const contentTools: Partial<Record<ContentName, ToolName>> = {
  cadence: "cadence",
  "flow-cli": "cli",
  "flow-emulator": "emulator",
  "fcl-js": "fcl",
  "flow-js-testing": "testing",
  "vscode-extension": "vscode",
}

export type ContentSpec = {
  /**
   * The name of the github owner of the repo.
   */
  owner: string

  /**
   * The name of the repo itself that contains the content data.
   */
  repoName: string

  /**
   * The branch to pull data from.
   */
  branch: string

  /**
   * The path within the repo where the  underlying content can be found
   * (typically "/docs", but may differ in some cases)
   */
  basePath: string

  contentName: ContentName

  displayName: string
  schema?: RepoSchema
  landingHeader?: InternalLandingHeaderProps
}

function getBasePath(name: string) {
  if (isFlowContent(name)) {
    return `docs/content/${name}`
  }
  if (isFlowSection(name)) {
    return `docs/content`
  }
  return DEFAULT_CONTENT_PATH
}

export const contentSpecMap = [...repositoryNames, ...flowContentNames].reduce(
  (accum, name) => ({
    ...accum,
    [name]: {
      owner: DEFAULT_REPO_OWNER,
      repoName: isFlowContent(name) ? "flow" : name,
      branch: "master",
      basePath: getBasePath(name),
      contentName: name,
      displayName: displayNames[name] || capitalCase(name),
      schema: schemas[name],
      landingHeader: landingHeaders[name],
    },
  }),
  {} as Record<ContentName, ContentSpec>
)

export function isRepo(name: string): name is RepoName {
  return repositoryNames.includes(name as RepoName)
}

export function isFlowContent(name: string): name is FlowContentName {
  return flowContentNames.includes(name as FlowContentName)
}

export function isFlowSection(name: string): name is FlowContentName {
  return flowSectionNames.includes(name as FlowContentName)
}

export function isValidFirstRoute(
  firstRoute: string
): firstRoute is ContentName {
  return (
    isRepo(firstRoute) || isFlowSection(firstRoute) || isFlowContent(firstRoute)
  )
}

export const getContentSpec = (firstRoute: string) => {
  console.log("getContentSpec", firstRoute)
  if (isValidFirstRoute(firstRoute)) {
    console.log("Valid First Route", firstRoute, contentSpecMap[firstRoute])
    return contentSpecMap[firstRoute]
  }
}
