import { css } from '@emotion/core'
import {
  filter as filterOpt,
  fromNullable,
  getOrElse,
  mapNullable,
  toUndefined
} from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Link } from '/components/atoms/link'
import { MainLayout } from '/layouts/main'
import { fontSizes } from '/styles/fonts'
import { spacings } from '/styles/spacings'
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
    const slug = pipe(
      fromNullable(fields),
      mapNullable(f => f.slug),
      getOrElse(() => '')
    )

    const title = pipe(
      fromNullable(frontmatter.title),
      filterOpt(t => t.length > 0),
      toUndefined
    )

    const date: string | undefined = pipe(
      fromNullable(frontmatter.date),
      toUndefined
    )

    return {
      id,
      date,
      title,
      slug
    }
  })

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainLayout>
        <h1>Home</h1>
        <h3>Posts:</h3>
        <ul css={postsStyles}>{posts.map(renderPostLink)}</ul>
      </MainLayout>
    </>
  )
}

const postsStyles = css({
  '> li': {
    marginBottom: spacings.sm
  }
})

const postStyles = css({
  a: {
    marginRight: spacings.sm,
    fontSize: fontSizes.legible
  }
})
