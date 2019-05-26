import * as theme from './markdown.module.scss'
import { styles } from './styles'

import * as React from 'react'
import { graphql } from 'gatsby'
import { fromNullable } from 'fp-ts/lib/Option'

import Layout from 'layouts/main'
import { MarkdownRemark, MarkdownRemarkFrontmatter } from 'typings/graphqlTypes'

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

  const content = fromNullable(html).getOrElse('')
  const title = fromNullable(frontmatter.title)
    .filter(t => t.length > 0)
    .getOrElse('no title')

  const date: React.ReactElement | undefined = fromNullable(frontmatter.date)
    .map(d => <span className={styles.date}>{`published on ${d}`}</span>)
    .toUndefined()

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
