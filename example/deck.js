import { slides as intro } from './topics/intro.mdx'
import { slides as overview } from './topics/overview.mdx'
import { slides as details } from './topics/details.mdx'
import { slides as demo } from './topics/demo.mdx'
import { slides as conclusion } from './topics/conclusion.mdx'

import opiTheme from '@jakepartusch/opi-mdx-theme'
import { syntaxHighlighter } from 'mdx-deck/themes'

export const themes = [syntaxHighlighter, opiTheme]

export const slides = [
  ...intro,
  ...overview,
  ...details,
  ...demo,
  ...conclusion
]
