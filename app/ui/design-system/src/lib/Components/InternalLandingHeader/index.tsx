import clsx from "clsx"
import { SwitchContentName, switchContents } from "../Internal/switchContent"
import {
  InternalLandingHeaderCard,
  InternalLandingHeaderCardProps,
} from "./InternalLandingHeaderCard"

const TOOL_GRADIENT_CLASSES = {
  cadence: "tool-gradient-cadence",
  "fcl-js": "tool-gradient-fcl",
}

export type InternalLandingHeaderProps = {
  toolName: SwitchContentName
  description: string
  headerCards: InternalLandingHeaderCardProps[]
}

export function InternalLandingHeader({
  toolName,
  description,
  headerCards,
}: InternalLandingHeaderProps) {
  const tool = switchContents[toolName]!
  const Icon = tool.iconLanding

  return (
    <div
      className={clsx(
        "flex min-h-[715px] flex-col items-center py-10 text-white",
        // @ts-expect-error please fix
        TOOL_GRADIENT_CLASSES[toolName]
      )}
    >
      <div className="mb-14 flex max-w-[42rem] flex-col px-10 md:mb-4 md:items-center md:justify-center md:text-center">
        <div className="h-28 w-28 md:h-40 md:w-40">
          <Icon />
        </div>
        <h1 className="text-h2 mt-2 mb-4 text-white md:mt-10">{tool.name}</h1>
        {description}
      </div>

      <div className="w-full">
        <div className="mx-auto max-w-[1220px] px-4 md:px-8">
          <div className="mb-4 hidden text-2xl font-bold md:block">
            Getting Started
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            {headerCards.map((headerCard, index) => (
              <InternalLandingHeaderCard key={index} {...headerCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
