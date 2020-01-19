import { css } from '@emotion/core'

import { toRem } from '/styles/utils'
import { Theme } from '/theme'

const root = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const nav = (t: Theme) =>
  css({
    flex: 'none',
    marginBottom: t.spacings.default,
    padding: `${t.spacings.md} ${t.spacings.sm}`,
    textAlign: 'center',
    '> header': {
      marginBottom: t.spacings.default,
      fontSize: t.fontSizes.lg
    }
  })

const links = (t: Theme) =>
  css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '> a:not(:last-of-type)': {
      marginRight: t.spacings.default
    }
  })

const footer = (t: Theme) =>
  css({
    flex: 'none',
    padding: `${t.spacings.md} ${t.spacings.default}`,
    textAlign: 'center'
  })

const main = (t: Theme) =>
  css({
    flex: '1 0 auto',
    width: '100%',
    maxWidth: toRem(960),
    margin: '0 auto',
    padding: t.spacings.sm,
    h1: {
      fontSize: t.fontSizes.xl
    },
    h2: {
      fontSize: t.fontSizes.lg
    },
    h3: {
      marginBottom: t.spacings.default,
      fontSize: t.fontSizes.md
    },
    'h1, h2': {
      marginBottom: t.spacings.md
    }
  })

export const styles = {
  root,
  main,
  links,
  nav,
  footer
}
