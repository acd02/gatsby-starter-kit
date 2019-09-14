import {
  filter as filterOpt,
  fromNullable,
  getOrElse,
  map as mapOpt,
  toUndefined
} from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { graphql } from 'gatsby'
import * as React from 'react'

import Layout from '/layouts/main'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from '/typings/graphqlTypes'

import * as theme from './markdown.module.scss'
import { styles } from './styles'

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
      }
    }
  }
`
export default function BlogPost(props: Props) {
  const { frontmatter: _frontmatter, html } = props.data.markdownRemark

  const frontmatter = _frontmatter as MarkdownRemarkFrontmatter

  const content = pipe(
    fromNullable(html),
    getOrElse(() => '')
  )
  const title = pipe(
    fromNullable(frontmatter.title),
    filterOpt(t => t.length > 0),
    getOrElse(() => 'no title')
  )

  const date: React.ReactElement | undefined = pipe(
    fromNullable(frontmatter.date),
    mapOpt(d => <span css={styles.date}>{`published on ${d}`}</span>),
    toUndefined
  )

  return (
    <Layout>
      <div className={theme.markdown}>
        <h1>
          {title} {date}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}
