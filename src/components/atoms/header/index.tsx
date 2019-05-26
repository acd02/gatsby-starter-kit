import { styles } from './style'

import * as React from 'react'
import { cx } from 'emotion'

type Props = {
  header: 'h1' | 'h2' | 'h3' | 'h4'
  label: string
  className?: string
}
export function Header(props: Props) {
  return React.createElement(
    props.header,
    { className: cx(styles.root(props.header), props.className) },
    props.label
  )
}
