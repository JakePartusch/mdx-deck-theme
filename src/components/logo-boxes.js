import React from 'react'

import { Logo } from './logo'
import { Boxes } from './boxes'

export function LogoBoxes({ inverted }) {
  return (
    <React.Fragment>
      <Boxes inverted={inverted} />
      <Logo inverted={inverted} />
    </React.Fragment>
  )
}

LogoBoxes.defaultProps = {
  inverted: false
}
