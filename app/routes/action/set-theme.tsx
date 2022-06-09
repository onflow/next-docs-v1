import type { ActionFunction, LoaderFunction } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import { getThemeSession } from "../../theme.server"
import { isTheme } from "~/cms/utils/theme.provider"

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)
  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const theme = form.get("theme")

  if (!isTheme(theme)) {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    })
  }

  themeSession.setTheme(theme)
  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  )
}

export const loader: LoaderFunction = () => redirect("/", { status: 404 })