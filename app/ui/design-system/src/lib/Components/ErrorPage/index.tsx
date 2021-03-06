import { ReactNode } from "react"

export const ErrorPage = (props: {
  title: string
  subtitle: string | ReactNode
  /** e.g. a link to go back to a working state */
  actions: ReactNode
}) => {
  return (
    <div className="flex flex-1 flex-col p-12 py-80">
      <div className="pxauto flex max-w-3xl flex-col overflow-auto ">
        <div className="grid gap-2">
          <div className="font-extrabold">{props.title}</div>
          <div>{props.subtitle}</div>
          <div>{props.actions}</div>
        </div>
      </div>
    </div>
  )
}
