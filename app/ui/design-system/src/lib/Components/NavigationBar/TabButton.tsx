import clsx from "clsx"
import { TabHeading } from "./TabHeading"

export type TabButtonProps = {
  description: string
  isSelected?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
}

export function TabButton({
  description,
  isSelected = false,
  onClick,
  title,
}: TabButtonProps) {
  return (
    <button
      className={clsx("flex items-stretch py-7 text-left hover:opacity-75", {
        "bg-primary-gray-50 dark:bg-black": isSelected,
        "bg-white dark:bg-primary-gray-dark": !isSelected,
      })}
      onClick={onClick}
      type="button"
    >
      <span
        className={clsx("block min-w-[9px] rounded-r-md", {
          "bg-primary-blue dark:bg-blue-dark": isSelected,
          "bg-transparent": !isSelected,
        })}
      />
      <TabHeading
        className="pl-10 pr-12"
        description={description}
        isSelected={isSelected}
        title={title}
      />
    </button>
  )
}
