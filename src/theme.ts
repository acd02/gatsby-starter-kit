import { Colors, colors } from '/styles/colors'
import { FontSizes, fontSizes } from '/styles/fonts'
import { Spacing, spacings } from '/styles/spacings'

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
