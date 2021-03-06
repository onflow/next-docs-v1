import { arrow, autoUpdate, flip, useFloating } from "@floating-ui/react-dom"
import { Popover, Portal } from "@headlessui/react"
import clsx from "clsx"
import { Fragment, useRef } from "react"
import { ReactComponent as Close } from "../../../../images/action/close"
import { ReactComponent as ChevronDown } from "../../../../images/arrows/chevron-down"
import AppLink from "../AppLink"
import { SwitchContentName, switchContents } from "../Internal/switchContent"
import DropdownArrow from "../shared/DropdownArrow"
import DropdownTransition from "../shared/DropdownTransition"

export type Version = {
  name: string
  href: string
}

type SectionGroup = { name: string; sections: SwitchContentName[] }

const SIDEBAR_SECTION_GROUPS: SectionGroup[] = [
  {
    name: "Tools",
    sections: [
      "flow-cli",
      "fcl-js",
      "flow-go-sdk",
      "http-api",
      "emulator",
      "vscode-extension",
      "tools",
    ],
  },
  {
    name: "Learn",
    sections: ["cadence", "kitty-items", "concepts", "learn"],
  },
  {
    name: "Nodes",
    sections: ["node-operation", "staking", "flow-port", "nodes"],
  },
]

function Group({
  group,
  onClick,
}: {
  group: SectionGroup
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <>
      {group.sections.map((section: SwitchContentName) => {
        const SelectedGroupSectionIcon = switchContents[section]!.icon
        const SelectedGroupSectionGradientIcon =
          switchContents[section]!.gradientIcon
        return (
          <div
            key={section}
            className="border-b border-b-primary-gray-100 last:border-none md:border-none md:p-2"
          >
            <AppLink
              to={switchContents[section]!.link}
              className={clsx(
                "group flex items-center px-1 py-2 text-center text-sm hover:bg-primary-gray-100/50 dark:bg-black hover:dark:bg-primary-gray-400/5 md:h-[7.5rem] md:w-[7rem] md:flex-col md:rounded-lg md:px-4 md:py-5 md:shadow-2xl dark:md:shadow-2xl-dark"
              )}
              onClick={onClick}
            >
              <div className="mr-2 h-12 w-12 md:mb-4 md:mr-0 md:-mt-2">
                <div className="group-hover:hidden">
                  <SelectedGroupSectionIcon />
                </div>
                <div className="hidden group-hover:block">
                  <SelectedGroupSectionGradientIcon />
                </div>
              </div>
              <div className="flex items-center justify-center font-bold text-primary-gray-400 dark:text-primary-gray-100 md:h-[2rem] md:text-sm md:font-normal">
                {switchContents[section]!.name}{" "}
              </div>
            </AppLink>
          </div>
        )
      })}
    </>
  )
}

export type InternalSidebarMenuProps = {
  selected: SwitchContentName
}

export function InternalSidebarMenu({
  selected: selectedTool,
}: InternalSidebarMenuProps) {
  const arrowRef = useRef(null)
  const {
    x,
    y,
    strategy,
    reference,
    floating,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    middleware: [arrow({ element: arrowRef }), flip()],
    placement: "bottom-start",

    // This is necessary because this menu may be hidden when it's first mounted
    // (in the case of crossing mobile/desktop breakpoints)
    whileElementsMounted: autoUpdate,
  })

  const SelectedIcon = switchContents[selectedTool]!.icon

  return (
    <div>
      <Popover>
        {({ open, close }) => (
          <div className="relative">
            <Popover.Button
              ref={reference}
              className="mb-4 flex min-w-[210px] items-center rounded-lg p-2 pr-3 text-sm shadow-2xl hover:text-primary-gray-300 dark:bg-black dark:text-primary-gray-200 dark:shadow-2xl-dark-strong dark:hover:text-primary-gray-100"
            >
              <div className="mr-2 h-8 w-8">
                <SelectedIcon />
              </div>
              <div className="text-small font-bold">
                {switchContents[selectedTool]?.name}
              </div>
              <div className="ml-auto pl-2">
                <ChevronDown />
              </div>
            </Popover.Button>
            <Portal>
              <div
                className="z-40 mt-8 w-screen px-4"
                ref={floating}
                style={{ top: y || 0, left: x || 0, position: strategy }}
              >
                <DropdownTransition>
                  <Popover.Panel
                    className="relative mr-2 inline-grid min-w-[210px] max-w-[34rem] grid-cols-1 overflow-auto overflow-y-auto rounded-lg bg-white px-4 py-2 shadow-2xl dark:bg-primary-gray-dark dark:shadow-2xl-dark dark:hover:shadow-2xl-dark dark:hover:shadow-2xl-dark md:grid-cols-4 md:px-6 md:py-4"
                    style={{
                      maxHeight: `calc(95vh - ${y || 0}px)`,
                    }}
                  >
                    {({ close }) => (
                      <>
                        <button
                          className="absolute top-2 right-2 h-6 w-6 hover:opacity-75 md:top-4 md:right-4 md:h-8 md:w-8"
                          onClick={() => close()}
                          aria-label="Close"
                        >
                          <Close />
                        </button>
                        {SIDEBAR_SECTION_GROUPS.map((group, index) => (
                          <Fragment key={index}>
                            <div className="my-2 flex items-center md:col-span-4">
                              <div className="mr-auto font-bold leading-none dark:text-primary-gray-100 md:text-xl md:font-semibold">
                                {group.name}
                              </div>
                            </div>
                            <Group group={group} onClick={() => close()} />
                          </Fragment>
                        ))}
                      </>
                    )}
                  </Popover.Panel>
                </DropdownTransition>
                <DropdownArrow
                  arrowRef={arrowRef}
                  x={arrowX}
                  y={arrowY}
                  open={open}
                />
              </div>
            </Portal>
          </div>
        )}
      </Popover>
    </div>
  )
}
