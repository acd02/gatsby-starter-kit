import 'styles/reset'
import { styles } from './styles/home'

import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

import { fromNullable } from 'fp-ts/lib/Option'

import Layout from 'layouts/main'
import { Header } from 'components/atoms/header'
import { Link } from 'components/atoms/link'

import { MarkdownRemarkConnection, MarkdownRemarkFrontmatter } from 'typings/graphqlTypes'

type Query = {
  allMarkdownRemark: MarkdownRemarkConnection
}

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

  type PostContent = {
    id: string
    date?: string
    title?: string
    slug: string
  }

  const posts: PostContent[] = postsQuery.allMarkdownRemark.edges.map(e => {
    const { frontmatter: _frontmatter, id, fields } = e.node
    const frontmatter = _frontmatter as MarkdownRemarkFrontmatter
    const slug = fromNullable(fields)
      .mapNullable(f => f.slug)
      .getOrElse('')

    const title = fromNullable(frontmatter.title)
      .filter(t => t.length > 0)
      .toUndefined()

    const date: string | undefined = fromNullable(frontmatter.date).toUndefined()

    return {
      id,
      date,
      title,
      slug
    }
  })

  function renderPostLink(post: PostContent) {
    const { title, slug, id, date } = post

    const dateLabel = date ? `published ${date}` : 'unknown date publication'

    return (
      <li className={styles.post} key={id}>
        <Link to={`/${slug}`} label={title || 'no title'} />
        <span>{dateLabel}</span>
      </li>
    )
  }

  return (
    <Layout>
      <Header header="h1" label="Home" />
      <Header header="h3" label="Posts:" />
      <ul className={styles.posts}>{posts.map(renderPostLink)}</ul>
    </Layout>
  )
}
