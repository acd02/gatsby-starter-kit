import * as path from 'path'
import { fromNullable } from 'fp-ts/lib/Option'

import { CreateNode, Node } from './typings'
import { MarkdownRemark } from '../src/typings/graphqlTypes'

export const onCreateNode: CreateNode = async ({ node, actions }) => {
  const { internal } = node
  const type = internal.type
  const { createNodeField } = actions

  if (type === 'MarkdownRemark') {
    const markdownNode = (node as unknown) as MarkdownRemark
    const slug = path.basename(
      fromNullable(markdownNode.fileAbsolutePath).getOrElse(''),
      '.md'
    )

    createNodeField({
      node: (markdownNode as unknown) as Node,
      name: 'slug',
      value: slug
    })
  }
}
