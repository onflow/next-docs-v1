import { startOfDay } from "date-fns"
import {
  AnnouncementCard,
  NetworkCard,
  NetworkDiscordCard,
  SocialLinksSignup,
} from "../../Components"
import { FeaturedArticle } from "../../Components/FeaturedArticleSlider"
import { Article, StatuspageApiResponse } from "../../interfaces"
import PageBackground from "../shared/PageBackground"
import PageSection from "../shared/PageSection"
import PageSections from "../shared/PageSections"

export type NetworkPageProps = {
  networkStatuses: StatuspageApiResponse[]
}

const NetworkPage = ({ networkStatuses }: NetworkPageProps) => {
  const article = {
    heading: "Node operator callout",
    description:
      "Everything you need to start building on Flow verything you need to start building on Flow everything you need to start building on Flow",
    ctaText: "Learn more",
    ctaLink: "https://flow.com",
    imageUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  } as Article

  return (
    <PageBackground gradient="network">
      <PageSections divided={false}>
        <PageSection>
          <div className="container">
            <h1 className="text-h1 pt-28 md:pt-[212px]">Network status</h1>
            <div className="mt-20 flex flex-col gap-4 md:gap-6">
              {networkStatuses.map(
                ({ name, status }: StatuspageApiResponse) => {
                  return (
                    <div key={name}>
                      <NetworkCard
                        networkName={name}
                        status={
                          status === "operational"
                            ? "Healthy"
                            : "Under Maintenance"
                        }
                        version="33"
                        lastSporkDate="April, 2022"
                        nextSporkDate="April, 2022"
                        link="https://google.com"
                      />
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="container">
            <h3 className="text-h3 mb-10">Live updates</h3>
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-8">
              {[1, 2, 3].map((index) => (
                <NetworkDiscordCard
                  message="Mainnet has been down for the past two hours"
                  timestamp={startOfDay(new Date())}
                  messageLink="https://google.com"
                  username="@john_flow"
                  key={index}
                />
              ))}
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="container">
            <h3 className="text-h3 mb-6">Announcements</h3>
            <div className="flex flex-col gap-4 md:gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index}>
                  <AnnouncementCard
                    sourceIcon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    sourceAltText="Github"
                    heading="Holy schnikes Github is down"
                    timestamp={startOfDay(new Date())}
                    link="https://google.com"
                  />
                </div>
              ))}
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="container">
            <FeaturedArticle {...article} />
          </div>
        </PageSection>
      </PageSections>
      <SocialLinksSignup />
    </PageBackground>
  )
}

export default NetworkPage
