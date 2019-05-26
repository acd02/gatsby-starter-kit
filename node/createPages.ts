import * as path from 'path'
import { fromNullable } from 'fp-ts/lib/Option'

import { CreatePages } from './typings'
import { MarkdownRemarkConnection } from '../src/typings/graphqlTypes'

type Query = {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection
  }
}

export const createPages: CreatePages<Query> = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplatePath = path.resolve(__dirname, '../src/templates/blogPost.tsx')
  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  query.data.allMarkdownRemark.edges.forEach(e => {
    const slug = fromNullable(e.node.fields)
      .mapNullable(f => f.slug)
      .getOrElse('')

    createPage({
      component: blogTemplatePath,
      path: `/${slug}`,
      // the slug value we pass to the context will be passed
      // as the $slug argument for the graphql query inside 'templates/blogPost'
      context: {
        slug
      }
    })
  })
}
