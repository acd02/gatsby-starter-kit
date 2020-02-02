import { Colors, colors } from './colors'
import { FontSizes, fontSizes } from './fonts'
import { Spacing, spacings } from './spacings'

export type Theme = {
  colors: Record<Colors, string>
  fontSizes: Record<FontSizes, string>
  spacings: Record<Spacing, string>
}

export const theme: Theme = {
  colors,
  fontSizes,
  spacings
}
