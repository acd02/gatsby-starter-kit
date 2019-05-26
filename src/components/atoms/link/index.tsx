import { SerializedStyles, ClassNames } from '@emotion/core'
import { styles } from './styles'

import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { Routes } from 'routes'

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
