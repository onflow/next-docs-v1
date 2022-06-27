import clsx from "clsx"
import { forwardRef } from "react"
import { ReactComponent as CalendarIcon } from "../../../../images/action/date-calendar"
import { ReactComponent as UserIcon } from "../../../../images/arrows/user"
import { ReactComponent as TutorialIcon } from "../../../../images/content/drafting-tools"
import { User } from "../../interfaces"
import Tag from "../Tag"

export type TutorialCardProps = {
  className?: string
  heading: string
  tags: string[]
  description: string
  lastUpdated?: string
  level?: string
  imageUri?: string
  link: string
  author?: User
}

const TutorialCard = forwardRef<HTMLAnchorElement, TutorialCardProps>(
  (
    {
      className,
      heading,
      tags,
      description,
      lastUpdated,
      level,
      imageUri,
      link,
      author,
    },
    ref
  ) => {
    const contentClasses = clsx('flex flex-col justify-between h-full"', {
      "pt-8 px-4 pb-4 ": !imageUri,
      "p-4": imageUri,
    })
    return (
      <a
        ref={ref}
        href={link}
        className={clsx(
          "flex flex-col overflow-hidden rounded-lg bg-white hover:shadow-2xl dark:bg-primary-gray-dark dark:hover:shadow-2xl-dark",
          className
        )}
      >
        {imageUri && (
          <img
            src={imageUri}
            alt={heading}
            className="object-cov er h-[110px]"
          />
        )}
        <div className={contentClasses}>
          <div>
            <div className="text-lg font-bold md:text-xl">{heading}</div>
            <div className="my-1 inline-flex flex-wrap">
              {tags.map((tag) => (
                <span className="my-1" key={tag}>
                  <Tag name={tag} />
                </span>
              ))}
            </div>
            <div className={imageUri ? "line-clamp-6" : "line-clamp-8"}>
              {description}
            </div>
          </div>
          <div className="mt-6 flex justify-between text-xs text-primary-gray-300 dark:text-primary-gray-200">
            {lastUpdated && (
              <div className="flex items-center">
                <CalendarIcon
                  className="mr-1 scale-75"
                  width="36"
                  height="36"
                />
                {lastUpdated}
              </div>
            )}
            {level && (
              <div className="flex items-center">
                <TutorialIcon className="mr-1" />
                {level}
              </div>
            )}
          </div>
          <div className="text-xs text-primary-gray-300 dark:text-primary-gray-200">
            {author && (
              <div className="flex items-center">
                <UserIcon className="mr-1 scale-75" />
                {author.name}
              </div>
            )}
          </div>
        </div>
      </a>
    )
  }
)

TutorialCard.displayName = "TutorialCard"

export default TutorialCard
