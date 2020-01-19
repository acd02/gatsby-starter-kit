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
      {({ css, cx, theme }) => (
        <GatsbyLink
          className={cx(css(styles.root(theme)), css(props.styles))}
          activeClassName={css(styles.isActive)}
          to={props.to}
        >
          {props.label}
        </GatsbyLink>
      )}
    </ClassNames>
  )
}
