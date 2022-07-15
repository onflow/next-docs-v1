import {
  AnnouncementCard,
  NetworkCard,
  NetworkDiscordCard,
  SocialLinksSignup,
} from "../../Components"
import { AnnouncementCardProps } from "../../Components/AnnouncementCard"
import { FeaturedArticle } from "../../Components/FeaturedArticleSlider"
import { HeaderWithLink } from "../../Components/HeaderWithLink"
import { NetworkDiscordCardProps } from "../../Components/NetworkDiscordCard"
import { Article, StatuspageApiResponse } from "../../interfaces"
import PageBackground from "../shared/PageBackground"
import PageSection from "../shared/PageSection"
import PageSections from "../shared/PageSections"

export type NetworkPageProps = {
  networkStatuses: StatuspageApiResponse[]
  announcementCards: AnnouncementCardProps[]
  discordNetworkCards: NetworkDiscordCardProps[]
  featuredArticle: Article
}

const NetworkPage = ({
  networkStatuses,
  featuredArticle,
  discordNetworkCards,
  announcementCards,
}: NetworkPageProps) => (
  <PageBackground gradient="network">
    <PageSections divided={false}>
      <PageSection>
        <div className="container">
          <h1 className="text-h1 pt-28 md:pt-[212px]">Network status</h1>
          <div className="mt-20 flex flex-col gap-4 md:gap-6">
            {networkStatuses.map(({ name, status }: StatuspageApiResponse) => {
              return (
                <div key={name}>
                  <NetworkCard
                    networkName={name}
                    status={
                      status === "operational" ? "Healthy" : "Under Maintenance"
                    }
                    version="33"
                    lastSporkDate="April, 2022"
                    nextSporkDate="April, 2022"
                    link={`/network/${name.toLowerCase().replace(" ", "-")}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </PageSection>
      <PageSection sectionId="live-updates">
        <div className="container">
          <HeaderWithLink headerLink="live-updates" className="text-h3 mb-10">
            Live updates
          </HeaderWithLink>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-8">
            {discordNetworkCards.map((discordNetworkCards) => (
              <div key={discordNetworkCards.messageLink}>
                <NetworkDiscordCard {...discordNetworkCards} />
              </div>
            ))}
          </div>
        </div>
      </PageSection>
      <PageSection sectionId="announcements">
        <div className="container">
          <HeaderWithLink headerLink="announcements" className="text-h3 mb-6">
            Announcements
          </HeaderWithLink>
          <div className="flex flex-col gap-4 md:gap-8">
            {announcementCards.map((announcementCardProps) => (
              <div key={announcementCardProps.link}>
                <AnnouncementCard {...announcementCardProps} />
              </div>
            ))}
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="container">
          <FeaturedArticle {...featuredArticle} />
        </div>
      </PageSection>
    </PageSections>
    <SocialLinksSignup />
  </PageBackground>
)

export default NetworkPage
