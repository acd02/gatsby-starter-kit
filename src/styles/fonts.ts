import { toRem } from './utils'

const defaultValue = 16

export const fontSizes = {
  default: toRem(16),
  legible: toRem(defaultValue * 1.5),
  sm: toRem(defaultValue / 2),
  md: toRem(defaultValue * 2),
  lg: toRem(defaultValue * 3),
  xl: toRem(defaultValue * 4)
}
