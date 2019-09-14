import { ClassNames, SerializedStyles } from '@emotion/core'
import { Link as GatsbyLink } from 'gatsby'
import * as React from 'react'

import { Routes } from '/routes'

import { styles } from './styles'

type Props = {
  to: Routes | string
  label: string
  styles?: SerializedStyles
}

export function Link(props: Props) {
  return (
    <ClassNames>
      {({ css }) => (
        <GatsbyLink
          activeClassName={css(styles.isActive)}
          css={[styles.root, props.styles]}
          to={props.to}
        >
          {props.label}
        </GatsbyLink>
      )}
    </ClassNames>
  )
}
