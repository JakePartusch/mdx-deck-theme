import React from 'react'

import { Logo } from './logo'
import { Boxes } from './boxes'

export function LogoBoxes({ inverted }) {
  return (
    <div>
      <Boxes inverted={inverted} />
      <Logo inverted={inverted} />
    </div>
  )
}

LogoBoxes.defaultProps = {
  inverted: false
}
