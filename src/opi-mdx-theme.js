import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './opi-code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: 'white',
    heading: colors.opi
  },
  blockquote: {
    color: colors.opi,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.opi}`
  },
  paragraph: {
    color: colors.opi
  },
  li: {
    color: colors.opi
  },
  prism: {
    style: codeTheme
  }
}
