import { css } from 'emotion'

import { spacings } from 'styles/spacings'
import { fontSizes } from 'styles/fonts'

const posts = css({
  '> li': {
    marginBottom: spacings.sm
  }
})

const post = css({
  a: {
    marginRight: spacings.sm,
    fontSize: fontSizes.legible
  }
})

export const styles = {
  posts,
  post
}
