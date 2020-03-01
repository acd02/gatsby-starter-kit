import cx from 'classcat'
import { Link as GatsbyLink } from 'gatsby'
import * as React from 'react'

import { Routes } from '/routes'

import styles from './styles.module.css'

type Props = {
  to: Routes | string
  label: string
  className?: string
}

export function Link(props: Props) {
  return (
    <GatsbyLink
      className={cx(['relative text-gray-600', styles.link, props.className])}
      activeClassName={styles.isActive}
      to={props.to}
    >
      {props.label}
    </GatsbyLink>
  )
}
