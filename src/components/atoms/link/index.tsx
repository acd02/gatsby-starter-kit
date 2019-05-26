/** @tsx tsx */
import { SerializedStyles } from '@emotion/core'
import { styles } from './styles'

import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { Routes } from 'routes'

type Props = {
  to: Routes | string
  label: string
  className?: SerializedStyles
}

export function Link(props: Props) {
  return (
    <GatsbyLink css={[styles.root, props.className]} to={props.to}>
      {props.label}
    </GatsbyLink>
  )
}
