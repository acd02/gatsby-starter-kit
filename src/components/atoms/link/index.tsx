import { styles } from './styles'

import * as React from 'react'
import { cx } from 'emotion'
import { Link as GatsbyLink } from 'gatsby'

import { Routes } from 'routes'

type Props = {
  to: Routes | string
  label: string
  className?: string
}

export function Link(props: Props) {
  return (
    <GatsbyLink
      activeClassName={styles.isActive}
      className={cx(styles.root, props.className)}
      to={props.to}
    >
      {props.label}
    </GatsbyLink>
  )
}
