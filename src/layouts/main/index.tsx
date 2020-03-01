import cx from 'classcat'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Link } from '/components/atoms/link'
import { Routes } from '/routes'

import styles from './styles.module.css'

function Nav() {
  return (
    <nav className="flex-none mb-4 py-6 px-2 text-center">
      <header className="mb-4 text-4xl">nav</header>
      <ul className="flex flex-wrap justify-center">
        <Link className="mr-4" to={Routes.index} label="Home" />
        <Link to={Routes.otherPage} label="Other Page" />
      </ul>
    </nav>
  )
}

function Footer() {
  return <footer className="flex-none text-center py-6 px-4">footer</footer>
}

export function MainLayout(props: { title: string } & React.Props<{}>) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <div className="flex h-full flex-col">
        <Nav />
        <main
          className={cx(['w-full p-2 max-w-screen-lg mx-auto flex-grow', styles.main])}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}
