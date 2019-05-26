import { css } from 'emotion'

import { colors } from 'styles/colors'

const root = css({
  position: 'relative',
  color: colors.grey,
  '&::before': {
    content: "''", // eslint-disable-line quotes
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    right: '0',
    height: '2px',
    backgroundColor: colors.grey,
    transformOrigin: 'bottom right',
    transform: 'scaleX(0)',
    transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
  },
  '&:hover:before': {
    transformOrigin: 'bottom left',
    transform: 'scaleX(1)'
  }
})

const isActive = css({
  '&:before': {
    transformOrigin: 'bottom left',
    transform: 'scaleX(1)'
  }
})

export const styles = {
  root,
  isActive
}
