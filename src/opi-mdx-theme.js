import { fonts } from './fonts'
import colors from './colors'

export * from './layouts'

export default {
  font: fonts.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: 'white',
    heading: colors.opi,
    text: colors.gray
  },
  heading: {
    fontWeight: 400
  },
  h1: {
    color: colors.opi
  },
  h2: {
    color: colors.opi
  },
  blockquote: {
    maxWidth: '800px',
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.opi}`,
    fontStyle: 'italic'
  },
  paragraph: {
    color: colors.opi
  },
  li: {
    color: colors.gray
  }
}
