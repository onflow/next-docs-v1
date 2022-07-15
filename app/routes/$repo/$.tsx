import { json, LoaderFunction, MetaFunction } from "@remix-run/node"
import { useCatch, useLoaderData, useLocation } from "@remix-run/react"
import invariant from "tiny-invariant"
import { getMdxPage, useMdxComponent } from "~/cms/utils/mdx"
import { ContentSpec, getContentSpec } from "~/constants/repos"
import { ErrorPage } from "~/ui/design-system/src/lib/Components/ErrorPage"
import { getSocialMetas } from "~/utils/seo"
import { MdxPage } from "../../cms"
import { InternalPage } from "../../ui/design-system/src/lib/Pages/InternalPage"
import AppLink from "~/ui/design-system/src/lib/Components/AppLink"

export { InternalErrorBoundary as ErrorBoundary } from "~/errors/error-boundaries"

export const meta: MetaFunction = ({ data, location }) => {
  const typedData = data as LoaderData
  if (typedData && typedData.page) {
    return getSocialMetas({
      title: typedData.page.frontmatter?.title,
      description: typedData.page.frontmatter?.description,
      url: location.toString(),
    })
  }

  return {}
}

type LoaderData = {
  content: ContentSpec
  path: string
  page: MdxPage
}

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.repo)

  const path = params["*"]
  const spec = getContentSpec(params.repo, path)

  if (!spec) {
    return new Response()
  }

  let page: MdxPage | null

  try {
    page = await getMdxPage(
      {
        owner: spec.owner,
        repo: spec.repoName,
        branch: spec.branch,
        fileOrDirPath: [spec.basePath, path].join("/"),
        isTrusted: spec.isTrusted,
      },
      { request, forceFresh: process.env.FORCE_REFRESH === "true" }
    )
  } catch (e) {
    throw json({ status: "mdxError", error: e }, { status: 500 })
  }

  if (!page) {
    throw json({ status: "noPage" }, { status: 404 })
  }

  return { content: spec, path, page }
}

export default function RepoDocument() {
  const { content, path, page } = useLoaderData<LoaderData>()
  const MDXContent = useMdxComponent(page)

  return (
    <InternalPage
      activePath={path}
      content={content}
      githubUrl={page.editLink}
      toc={page.toc}
    >
      <MDXContent />
    </InternalPage>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const location = useLocation()

  console.error("CatchBoundary $.tsx", caught)

  switch (caught.data.status) {
    case "noPage":
      return (
        <ErrorPage
          title={"404 – Page not found"}
          subtitle={`there is no page at "${location.pathname}"`}
          actions={
            <AppLink className="underline" to="/">
              Go home
            </AppLink>
          }
        />
      )
    case "mdxError":
      return (
        <ErrorPage
          title={"🙉 Something went wrong."}
          subtitle={`The site is being repaired. Please check back later.`}
          actions={
            <AppLink className="underline" to="/">
              Go home
            </AppLink>
          }
        />
      )
    case "noRepo":
      return (
        <ErrorPage
          title={"404 – Repo not found"}
          subtitle={`This repo is not available or does not exist`}
          actions={
            <AppLink className="underline" to="/">
              Go home
            </AppLink>
          }
        />
      )
  }

  throw new Error(`Unhandled error: ${caught.status}`)
}
