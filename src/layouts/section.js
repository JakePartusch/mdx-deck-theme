import React from 'react'
import styled, { css } from 'styled-components'

import { Center, LogoBoxes } from '../components'
import colors from '../colors'

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;

  position: relative;
  background-color: ${props => (props.inverted ? colors.opi : 'white')};

  h1 {
    text-align: left;
    color: ${colors.opi};
  }

  h2 {
    color: ${colors.gray};
    font-weight: 400;
    text-align: left;
  }

  blockquote {
    max-width: 800px;
    text-align: left;
  }

  ${props =>
    props.inverted &&
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      li,
      p {
        color: white;
      }
    `};
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
