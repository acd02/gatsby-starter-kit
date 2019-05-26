import { css } from '@emotion/core'

import { toRem } from 'styles/utils'
import { spacings } from 'styles/spacings'
import { fontSizes } from 'styles/fonts'

const root = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const nav = css({
  flex: 'none',
  marginBottom: spacings.default,
  padding: `${spacings.md} ${spacings.sm}`,
  textAlign: 'center',
  '> header': {
    marginBottom: spacings.default,
    fontSize: fontSizes.lg
  }
})

const links = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '> a:not(:last-of-type)': {
    marginRight: spacings.default
  }
})

const footer = css({
  flex: 'none',
  padding: `${spacings.md} ${spacings.default}`,
  textAlign: 'center'
})

const main = css({
  flex: '1 0 auto',
  width: '100%',
  maxWidth: toRem(960),
  margin: '0 auto',
  padding: spacings.sm,
  h1: {
    fontSize: fontSizes.xl
  },
  h2: {
    fontSize: fontSizes.lg
  },
  h3: {
    marginBottom: spacings.default,
    fontSize: fontSizes.md
  },
  'h1, h2': {
    marginBottom: spacings.md
  }
})

export const styles = {
  root,
  main,
  links,
  nav,
  footer
}
