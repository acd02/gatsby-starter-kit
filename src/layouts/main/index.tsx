import { styles } from './styles'
import * as React from 'react'

import { Link } from 'components/atoms/link'
import { Routes } from 'routes'

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
export default function MainLayout(props: React.Props<{}>) {
  return (
    <div css={styles.root}>
      <Nav />
      <main css={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}
