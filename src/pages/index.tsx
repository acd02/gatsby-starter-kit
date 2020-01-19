import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

import { Link } from '/components/atoms/link'
import { MainLayout } from '/layouts/main'
import { Theme } from '/theme'
import {
  MarkdownRemarkConnection,
  MarkdownRemarkFrontmatter
} from '/typings/graphqlTypes'

type Query = {
  allMarkdownRemark: MarkdownRemarkConnection
}

type PostContent = {
  id: string
  date?: string
  title?: string
  slug: string
}

function renderPostLink(post: PostContent) {
  const { title, slug, id, date } = post

  const dateLabel = date ? `published ${date}` : 'unknown date publication'

  return (
    <li css={postStyles} key={id}>
      <Link to={`/${slug}`} label={title || 'no title'} />
      <span>{dateLabel}</span>
    </li>
  )
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
    const title = frontmatter.title?.length ? frontmatter.title : undefined
    const date: string | undefined = frontmatter.date || undefined

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
      <h3>Posts:</h3>
      <ul css={postsStyles}>{posts.map(renderPostLink)}</ul>
    </MainLayout>
  )
}

const postsStyles = (t: Theme) =>
  css({
    '> li': {
      marginBottom: t.spacings.sm
    }
  })

const postStyles = (t: Theme) =>
  css({
    a: {
      marginRight: t.spacings.sm,
      fontSize: t.fontSizes.legible
    }
  })
