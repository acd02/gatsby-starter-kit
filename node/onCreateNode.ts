import { fromNullable, getOrElse } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as path from 'path'

import { MarkdownRemark } from '../src/typings/graphqlTypes'
import { CreateNode, Node } from './typings'

export const onCreateNode: CreateNode = async ({ node, actions }) => {
  const { internal } = node
  const type = internal.type
  const { createNodeField } = actions

  if (type === 'MarkdownRemark') {
    const markdownNode = (node as unknown) as MarkdownRemark
    const slug = path.basename(
      pipe(
        fromNullable(markdownNode.fileAbsolutePath),
        getOrElse(() => '')
      ),
      '.md'
    )

    createNodeField({
      node: (markdownNode as unknown) as Node,
      name: 'slug',
      value: slug
    })
  }
}
