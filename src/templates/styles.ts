import { css } from '@emotion/core'

import { Theme } from '/theme'

const date = (t: Theme) =>
  css({
    display: 'block',
    fontSize: t.fontSizes.default,
    color: t.colors.lightGrey
  })

export const styles = {
  date
}
