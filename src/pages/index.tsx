import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

import { Link } from '/components/atoms/link'
import { MainLayout } from '/layouts/main'
import {
  MarkdownRemarkConnection,
  MarkdownRemarkFrontmatter
} from '/typings/graphqlTypes'

type Query = {
  allMarkdownRemark: MarkdownRemarkConnection
}

type PostContent = {
  id: string
  date: string
  title: string
  slug: string
}

/* eslint-disable-next-line max-lines-per-function */
export default function Home() {
  const postsQuery: Query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(fromNow: true)
            }
          }
        }
      }
    }
  `)

  const posts: PostContent[] = postsQuery.allMarkdownRemark.edges.map(e => {
    const { frontmatter: _frontmatter, id, fields } = e.node
    const frontmatter = _frontmatter as MarkdownRemarkFrontmatter

    const slug = fields?.slug ?? ''
    const title = frontmatter.title ?? ''
    const date: string = frontmatter.date ?? ''

    return {
      id,
      date,
      title,
      slug
    }
  })

  return (
    <MainLayout title="home">
      <h1>Home</h1>
      <h3 className="mb-4 text-3xl">Posts:</h3>
      <ul>{posts.map(renderPostLink)}</ul>
    </MainLayout>
  )
}

// utils

function renderPostLink(post: PostContent) {
  const { title, slug, id, date } = post

  const dateLabel = date ? `published ${date}` : 'unknown date publication'

  return (
    <li className="mb-2" key={id}>
      <Link className="mr-2 text-lg" to={`/${slug}`} label={title || 'no title'} />
      <span>{dateLabel}</span>
    </li>
  )
}
