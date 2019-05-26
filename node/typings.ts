export type Node = {
  id: string
  parent: string
  children: string[]
  internal: {
    mediaType: string
    type: string
    content: string
    contentDigest: string
    description: string
  }
}

type Actions = {
  deletePage: (page: Page) => void
  createPage: (page: Page) => void
  deleteNode: Function
  deleteNodes: Function
  createNode: Function
  touchNode: Function
  createNodeField: (arg: { node: Node; name: string; value: string }) => void
  createParentChildLink: Function
  createPageDependency: Function
  deleteComponentsDependencies: Function
  replaceComponentQuery: Function
  replaceStaticQuery: Function
  setWebpackConfig: Function
  replaceWebpackConfig: Function
  setBabelOptions: Function
  setBabelPlugin: Function
  setBabelPreset: Function
  createJob: Function
  setJob: Function
  endJob: Function
  setPluginStatus: Function
  createRedirect: (arg: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
  addThirdPartySchema: Function
  createTypes: Function
  queryExtracted: Function
  queryExtractionGraphQLError: Function
  queryExtractedBabelSuccess: Function
  queryExtractionBabelError: Function
  setProgramStatus: Function
  pageQueryRun: Function
}

type Page = {
  path: string
  component: string
  layout?: string
  context?: unknown
}

export type CreatePages<T> = (fns: {
  page: Page
  plugin?: unknown
  graphql: (arg: string) => Promise<T>
  actions: Actions
}) => void

export type CreateNode = (fns: { node: Node; plugin?: unknown; actions: Actions }) => void
