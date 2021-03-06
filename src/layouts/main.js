import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Center } from '../components'
import { Logo } from '../components/logo'
import colors from '../colors'

const Container = styled.div`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: white;

  align-items: flex-start;

  h1 {
    text-align: left;
  }

  h2 {
    text-align: left;
  }
`

const CenteredHalf = styled(Center)`
  flex-direction: column;
  height: 75vh;

  padding-left: 10vw;
`

const RedBg = styled.div`
  width: 100vw;
  height: 75vh;
  position: absolute;
  top: 25vh;
  background-color: ${colors.opi};
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  @media (max-width: 600px) {
    height: 40vh;
    top: 60vh;
    clip-path: none;
  }
`

export default function Main({ children }) {
  return (
    <Container>
      <CenteredHalf>
        <div>{children}</div>
      </CenteredHalf>
      <Logo />
      <RedBg />
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
