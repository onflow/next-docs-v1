import { LandingHeader } from "../../Components/LandingHeader"
import { SDKCardProps } from "../../Components/SDKCard"
import { SDKCards } from "../../Components/SDKCards"
import PageBackground from "../shared/PageBackground"
import PageSection from "../shared/PageSection"
import PageSections from "../shared/PageSections"
import {
  ContentNavigationList,
  ContentNavigationListProps,
} from "../../Components/ContentNavigationList"
import ToolsImage from "../../../../images/page/tools.png"
import { LandingPageSecondaryNav } from "../../Components/LandingPageSecondaryNav"
import { toolsSections } from "~/constants/landingPages/toolsSections"

export type ToolsPageProps = {
  editPageUrl?: string
  tools: SDKCardProps[]
  sdks: SDKCardProps[]
  explorers: SDKCardProps[]
  apisAndServices: SDKCardProps[]
  contentNavigationListItems: ContentNavigationListProps
}

const ToolsPage = ({
  editPageUrl,
  tools,
  sdks,
  explorers,
  apisAndServices,
  contentNavigationListItems,
}: ToolsPageProps) => {
  return (
    <PageBackground gradient="tools">
      <LandingPageSecondaryNav sections={toolsSections} />
      <PageSections>
        <PageSection className="pt-0 pb-0">
          <LandingHeader
            buttonText="View guide"
            buttonUrl="/flow/dapp-development/DappArchitectures/"
            callout="Flow Dapp Architecture Guide"
            description="Wondering what tools you need? See our dapp architectures guide to help you out."
            editPageUrl={editPageUrl}
            title="Tools"
            imageSrc={ToolsImage}
          />
        </PageSection>
        <PageSection sectionId="development-tools">
          <SDKCards
            header="Development Tools"
            headerLink="development-tools"
            cards={tools}
            description="These essential tools will help you build, test, and debug your dapp on Flow."
          />
        </PageSection>
        <PageSection sectionId="sdks">
          <SDKCards
            headerLink="sdks"
            header="SDKs"
            cards={sdks}
            description="Libraries that make it easy to connect to Flow in multiple languages and frameworks."
          />
        </PageSection>
        <PageSection sectionId="apis-and-services">
          <SDKCards
            headerLink="apis-and-services"
            header="APIs & Services"
            cards={apisAndServices}
            description="Hosted and open source services that abstract some of the most difficult parts of building on the blockchain."
          />
        </PageSection>
        <PageSection sectionId="flow-blockchain-explorers">
          <SDKCards
            header="Flow Blockchain Explorers"
            headerLink="flow-blockchain-explorers"
            cards={explorers}
            description="Different ways of looking up on-chain metrics, events, transactions, accounts, and more."
          />
        </PageSection>
        <PageSection sectionId="explore-more-content">
          <ContentNavigationList
            headerLink="explore-more-content"
            header={contentNavigationListItems.header}
            contentNavigationItems={
              contentNavigationListItems.contentNavigationItems
            }
          />
        </PageSection>
      </PageSections>
    </PageBackground>
  )
}

export default ToolsPage
