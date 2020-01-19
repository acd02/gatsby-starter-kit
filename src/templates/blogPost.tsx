import { graphql } from 'gatsby'
import * as React from 'react'

import { MainLayout } from '/layouts/main'
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

  const content = html ?? ''
  const title = frontmatter.title?.length ? frontmatter.title : 'no title'
  const date = frontmatter.date ? (
    <span css={styles.date}>{`published on ${frontmatter.date}`}</span>
  ) : (
    undefined
  )

  return (
    <MainLayout title={title}>
      <div className={theme.markdown}>
        <h1>
          {title} {date}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </MainLayout>
  )
}
