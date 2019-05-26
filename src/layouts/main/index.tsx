import { styles } from './styles'

import * as React from 'react'

import { Link } from 'components/atoms/link'
import { Routes } from 'routes'

function Nav() {
  return (
    <nav className={styles.nav}>
      <header>nav</header>
      <ul className={styles.links}>
        <Link to={Routes.index} label="Home" />
        <Link to={Routes.otherPage} label="Other Page" />
      </ul>
    </nav>
  )
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>
}
export default function MainLayout(props: React.Props<{}>) {
  return (
    <div className={styles.root}>
      <Nav />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}
