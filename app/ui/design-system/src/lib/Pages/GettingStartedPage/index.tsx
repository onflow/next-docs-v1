import { SocialLinksSignup } from "../../Components"
import { ButtonLink } from "../../Components/Button"
import { Carousel } from "../../Components/Carousel"
import {
  ContentNavigationList,
  ContentNavigationListProps,
} from "../../Components/ContentNavigationList"
import FeaturedArticleCard, {
  FeaturedArticleCardProps,
} from "../../Components/FeaturedArticleCard"
import { HeaderWithLink } from "../../Components/HeaderWithLink"
import {
  LandingHeader,
  LandingHeaderProps,
} from "../../Components/LandingHeader"
import {
  LinkCard2Column,
  LinkCard2ColumnProps,
} from "../../Components/LinkCard2Column"
import {
  LinkCard3Column,
  LinkCard3ColumnProps,
} from "../../Components/LinkCard3Column"
import { SDKCardProps } from "../../Components/SDKCard"
import { SDKCards } from "../../Components/SDKCards"
import { ToolCard, ToolCardProps } from "../../Components/ToolCard"
import PageBackground from "../shared/PageBackground"
import PageSection from "../shared/PageSection"
import PageSections from "../shared/PageSections"

export interface GettingStartedPageProps {
  editPageUrl?: string
  landingHeaderItems: LandingHeaderProps
  linkCard3ColumnItems: LinkCard3ColumnProps
  linkCard2ColumnItems: LinkCard2ColumnProps
  sdkCardItems: [
    SDKCardProps,
    SDKCardProps,
    SDKCardProps,
    SDKCardProps,
    SDKCardProps,
    SDKCardProps
  ]
  recentArticleItems: FeaturedArticleCardProps[]
  recentToolItems: [ToolCardProps, ToolCardProps, ToolCardProps]
  contentNavigationListItems: ContentNavigationListProps
}

export function GettingStartedPage({
  editPageUrl,
  landingHeaderItems,
  linkCard3ColumnItems,
  linkCard2ColumnItems,
  sdkCardItems,
  recentArticleItems,
  recentToolItems,
  contentNavigationListItems,
}: GettingStartedPageProps) {
  return (
    <PageBackground gradient="getting-started">
      <PageSections>
        <PageSection className="pt-0 pb-0">
          <LandingHeader
            buttonText={landingHeaderItems.buttonText}
            buttonUrl={landingHeaderItems.buttonUrl}
            callout={landingHeaderItems.callout}
            description={landingHeaderItems.description}
            editPageUrl={editPageUrl}
            title={landingHeaderItems.title}
            imageSrc={landingHeaderItems.imageSrc}
          />
        </PageSection>
        <PageSection sectionId="first-steps">
          <div className="container">
            <HeaderWithLink
              className="text-h2 hidden pb-14 md:block"
              headerLink="first-steps"
            >
              First Steps
            </HeaderWithLink>
            <LinkCard3Column items={linkCard3ColumnItems.items} />
          </div>
        </PageSection>
        <PageSection sectionId="core-concepts">
          <LinkCard2Column
            buttonText={linkCard2ColumnItems.buttonText}
            buttonUrl={linkCard2ColumnItems.buttonUrl}
            description={linkCard2ColumnItems.description}
            title={linkCard2ColumnItems.title}
            tags={linkCard2ColumnItems.tags}
            items={linkCard2ColumnItems.items}
          />
        </PageSection>
        <PageSection sectionId="sdks">
          <SDKCards cards={sdkCardItems} headerLink="sdks" />
        </PageSection>
        <PageSection sectionId="recent-tools-and-articles">
          <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-4 align-middle md:grid-cols-2">
            <div className="hidden items-center md:flex">
              <HeaderWithLink
                className="text-h4"
                headerLink="recent-tools-and-articles"
              >
                Recent Articles
              </HeaderWithLink>
            </div>
            <div className="flex items-end justify-between md:items-center ">
              <HeaderWithLink
                headerLink="recent-tools-and-articles"
                className="text-h4"
              >
                Recent Tools
              </HeaderWithLink>
              <ButtonLink
                rightIcon="right"
                variant="secondary"
                className="hidden md:inline-flex"
                href="/tools"
              >
                View All Tools
              </ButtonLink>
            </div>
            <div className="hidden md:block">
              <Carousel
                breakpoint="none"
                carouselItemWidth="w-full"
                className="justify-stretch h-full"
              >
                {recentArticleItems.map((recentArticleItem, index) => (
                  <FeaturedArticleCard
                    bg="page-bg-gradient-getting-started bg-bottom border-primary-gray-100 border dark:border-primary-gray-400 h-full"
                    key={index}
                    {...recentArticleItem}
                  />
                ))}
              </Carousel>
            </div>
            <div className="flex grow flex-col justify-between gap-4">
              {recentToolItems.map((toolProps, i) => (
                <ToolCard key={i} {...toolProps} />
              ))}
              <ButtonLink
                variant="secondary"
                rightIcon="right"
                className="inline-flex md:hidden"
                href="/tools"
              >
                View All Tools
              </ButtonLink>
            </div>
          </div>
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
      <SocialLinksSignup />
    </PageBackground>
  )
}
