import React from 'react'
import styled from 'styled-components'

import { Center, LogoBoxes } from '../components'

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;

  position: relative;
  background-color: white;

  h1 {
    text-align: left;
  }

  h2 {
    text-align: left;
  }

  blockquote {
    text-align: left;
  }
`

const LogoContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100vw;
`

export default function Section({ children, inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>
      <LogoContainer>
        <LogoBoxes inverted={inverted} />
      </LogoContainer>
      <div>{children}</div>
    </Container>
  )
}
