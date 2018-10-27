import intro from './topics/intro.mdx'
import overview from './topics/overview.mdx'
import details from './topics/details.mdx'
import demo from './topics/demo.mdx'
import conclusion from './topics/conclusion.mdx'

export { default as theme } from '@jakepartusch/opi-mdx-theme'
export default [...intro, ...overview, ...details, ...demo, ...conclusion]
