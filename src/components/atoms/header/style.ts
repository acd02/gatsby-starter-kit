import { css } from 'emotion'
import { fontSizes } from 'styles/fonts'

const fontMapping = {
  h1: fontSizes.xl,
  h2: fontSizes.lg,
  h3: fontSizes.md,
  h4: fontSizes.default
}

const root = (header: keyof typeof fontMapping) =>
  css({
    fontSize: fontMapping[header]
  })

export const styles = {
  root
}
