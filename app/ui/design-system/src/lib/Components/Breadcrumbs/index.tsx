import clsx from "clsx"
import { Fragment } from "react"

export type BreadcrumbLinkProps = {
  name: string
  href?: string
  isCurrent?: boolean
}

export type BreadcrumbsProps = {
  items: BreadcrumbLinkProps[]
  className?: string
}

function Separator() {
  return (
    <span className="mx-3 font-semibold text-primary-gray-200 dark:text-primary-gray-300">
      /
    </span>
  )
}

function BreadcrumbLink({
  name,
  href,
  isCurrent = false,
}: BreadcrumbLinkProps) {
  const className = clsx(
    isCurrent && "CURRENT text-primary-gray-400 dark:text-primary-gray-100",
    !isCurrent && "NOT_CURRENT text-primary-gray-300 dark:text-primary-gray-200"
  )

  if (!href) {
    return <span className={className}>{name}</span>
  }

  return (
    <a
      href={href}
      className={clsx(
        className,
        "hover:text-primary-gray-400 dark:hover:text-primary-gray-100"
      )}
    >
      {name}
    </a>
  )
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  return (
    <div className={clsx("flex flex-wrap items-center text-sm", className)}>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <Separator />}
          <BreadcrumbLink {...item} isCurrent={index === items.length - 1} />
        </Fragment>
      ))}
    </div>
  )
}
