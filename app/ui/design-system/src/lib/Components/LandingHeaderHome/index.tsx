import LandingImage from "../../../../images/misc/landing-home.png"
import LandingImage2x from "../../../../images/misc/landing-home@2x.png"
import { LandingPageLinks } from "../LandingPageLinks"

export type LandingHeaderHomeProps = {
  description: string

  /**
   * The URL to the page on github that allows editing this page's content
   */
  editPageUrl?: string

  tag: string
  title: string
}

export function LandingHeaderHome({
  description,
  editPageUrl,
  tag,
  title,
}: LandingHeaderHomeProps) {
  return (
    <div className="container flex flex-col items-center pt-4 pb-10 md:flex-row md:pb-20">
      <div className="mt-8 flex max-w-full flex-1 basis-1/2 flex-col items-start pb-4 pr-4">
        <p className="mb-4 font-display text-2xl font-bold text-primary-gray-300 dark:text-primary-gray-200">
          #{tag}
        </p>
        <h1 className="text-h1 mb-6 max-w-full overflow-hidden text-ellipsis !text-4xl md:!text-7xl ">
          {title}
        </h1>
        <div className="max-w-[400px] text-xl font-semibold text-primary-gray-400 dark:text-primary-gray-50">
          {description}
        </div>
      </div>
      <div className="order-first flex-1 basis-1/2 md:order-last">
        <img
          src={LandingImage}
          srcSet={`${LandingImage}, ${LandingImage2x} 2x`}
          alt=""
          className="max-h-[195px] object-cover md:max-h-[540px]"
        />
      </div>
      <div className="fixed right-14 top-1/4 hidden lg:block">
        <LandingPageLinks editPageUrl={editPageUrl} />
      </div>
    </div>
  )
}
