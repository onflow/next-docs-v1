import { AutocompleteApi, AutocompleteState } from "@algolia/autocomplete-core"
import clsx from "clsx"
import React from "react"
import { HitType } from "./Autocomplete"
import { Item } from "./Item"

function CenteredMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center opacity-70">
      {children}
    </div>
  )
}

export function Panel({
  autocomplete,
  autocompleteState,
}: {
  autocomplete: AutocompleteApi<
    HitType,
    Event,
    MouseEvent,
    globalThis.KeyboardEvent
  >
  autocompleteState?: AutocompleteState<HitType>
}) {
  if (!autocompleteState) return null

  const { query, collections } = autocompleteState
  const collection = collections[0]
  const items = collection?.items || []

  return (
    // @ts-expect-error
    <div
      className={clsx(
        "relative -top-1 flex h-full flex-1 overflow-y-auto rounded-b-md bg-white p-0 dark:bg-black md:p-6",
        {
          "opacity-50": autocompleteState.status === "stalled",
        }
      )}
      {...autocomplete.getPanelProps({})}
    >
      {query && query?.length > 0 ? (
        <>
          {items.length > 0 && (
            <ul
              className="grow divide-y divide-primary-gray-100 dark:divide-primary-gray-400"
              {...autocomplete.getListProps()}
            >
              {items.map((item: HitType, index: number) => {
                const itemProps = autocomplete.getItemProps({
                  item,
                  source: collection!.source, // defined because `items` is defined
                })
                const selected = itemProps["aria-selected"]
                return (
                  // @ts-expect-error: TODO: Short description of the error
                  <li
                    key={index}
                    className={clsx("divided-item-selectable", {
                      "divided-item-selected": selected,
                    })}
                    {...itemProps}
                  >
                    <Item item={item} selected={selected} />
                  </li>
                )
              })}
            </ul>
          )}
          {items.length === 0 && <CenteredMessage>0 results</CenteredMessage>}
        </>
      ) : (
        <CenteredMessage>Search the docs</CenteredMessage>
      )}
    </div>
  )
}
