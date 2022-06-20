import { Meta, Story } from "@storybook/react"
import { UpcomingEvents, UpcomingEventsProps } from "."

export default {
  component: UpcomingEvents,
  title: "Components/UpcomingEvents",
} as Meta

const Template: Story<UpcomingEventsProps> = (args) => (
  <div className="bg-primary-gray-50 dark:bg-black" style={{ padding: "14px" }}>
    <UpcomingEvents {...args} />
  </div>
)

const DefaultArgs = {
  officeHours: <p>[office hours placeholder]</p>,
  workingHours: <p>[working hours placeholder]</p>,
  goToCommunityHref: "#todo",
  submitEventHref: "#todo",
  primaryEvents: [
    {
      ctaText: "Learn More",
      description:
        "Come visit the Flow Booth at NFT NYC to learn more about what builders and teams have been working on!",
      eventDate: "June 20-23",
      href: "https://share.onflow.org/nft-nyc-2022",
      imageSrc:
        "https://510411.fs1.hubspotusercontent-na1.net/hubfs/510411/nftnyc2021-eventbrite-header.png",
      location: "New York",
      tags: ["Conference", "Sponsor", "NFT_NYC"],
      title: "NFT NYC",
    },
    {
      ctaText: "More Info",
      description: `Network and learn from "the world's best speakers", including Dapper Labs CEO Roham Gharegozlou, at the Collision Toronto tech conference`,
      eventDate: "June 20-23",
      href: "https://collisionconf.com/",
      imageSrc:
        "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/187273412_1595714430632959_188138787470379979_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vXibBwZGxWAAX9_Iv7Y&_nc_ht=scontent-yyz1-1.xx&oh=00_AT8jXVugKzGRdVlwzW0kO1ZwyTCGjDmCpyBhBengY6WIGw&oe=62D5C74A",
      location: "Enercare Centre, Toronto",
      tags: ["Conference"],
      title: "Collision",
    },
    {
      ctaText: "Learn More",
      description:
        "Join us this week at Discord office hours to learn more about Flow Tokenomics",
      eventDate: "June 30th",
      href: "https://www.onflow.org/token-distribution",
      imageSrc: "https://wallpaperaccess.com/full/5578398.jpg",
      location: "Online",
      tags: ["Flow", "Community", "Discord"],
      title: "Office Hours",
    },
  ],
  secondaryEvents: [
    {
      href: "https://share.onflow.org/nft-nyc-2022#:~:text=Andbox%20and%20more.-,Blocto,-(3%2D6pm%20ET",
      eventType: "New York",
      imageSrc:
        "https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61410bc0c8d0522eea319058_Hack-blog_Flow.png",
      tags: ["NFT_NYC", "Flow Booth"],
      title: "Blockto @ NFT NYC",
      when: "June 21, 3:00pm - 6:00pm ET",
    },
    {
      href: "https://share.onflow.org/nft-nyc-2022#:~:text=Building%20the%20NFT%20Marketplace%20of%20the%20Future",
      eventType: "New York",
      imageSrc:
        "https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61410bc0c8d0522eea319058_Hack-blog_Flow.png",
      tags: ["Flow", "NFT_NYC", "Panel"],
      title: "Building the NFT Marketplace of the Future",
      when: "June 22, 2:00pm ET",
    },
    {
      href: "https://share.onflow.org/nft-nyc-2022#:~:text=Fireside%20Chat%20with%20Roham",
      eventType: "New York",
      imageSrc:
        "https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61410bc0c8d0522eea319058_Hack-blog_Flow.png",
      tags: ["Flow", "NFT_NYC", "Panel"],
      title: "Fireside Chat with Roham",
      when: "June 23, 10:00am ET",
    },
    {
      href: "https://nftnycmpc.rsvpify.com/",
      eventType: "New York",
      imageSrc:
        "https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61410bc0c8d0522eea319058_Hack-blog_Flow.png",
      tags: ["NFT_NYC", "Partner"],
      title: "NFT NYC x Meta Panda Club",
      when: "June 22, 11:30am ET",
    },
    {
      href: "https://upstreamapp.com/home/zU994MU3D5/events/S_muix6MdF",
      eventType: "New York",
      imageSrc:
        "https://assets.website-files.com/5f6294c0c7a8cdf432b1c827/61410bc0c8d0522eea319058_Hack-blog_Flow.png",
      tags: ["Cryptoys", "NFT_NYC"],
      title: "Cryptoys: Web3 Party",
      when: "June 22, 5:00pm ET",
    },
  ],
}

export const Default = Template.bind({})
Default.args = DefaultArgs

export const SingleEvent = Template.bind({})
SingleEvent.args = {
  ...Default.args,
  primaryEvents: DefaultArgs.primaryEvents.slice(0, 1),
}
