import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Link } from '/components/atoms/link'
import { Routes } from '/routes'
import { theme } from '/theme'

import { styles } from './styles'

function Nav() {
  return (
    <nav css={styles.nav}>
      <header>nav</header>
      <ul css={styles.links}>
        <Link to={Routes.index} label="Home" />
        <Link to={Routes.otherPage} label="Other Page" />
      </ul>
    </nav>
  )
}

function Footer() {
  return <footer css={styles.footer}>footer</footer>
}

export function MainLayout(props: { title: string } & React.Props<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{props.title} </title>
      </Helmet>
      <div css={styles.root}>
        <Nav />
        <main css={styles.main}>{props.children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
