import React from 'react'
import styled from 'styled-components'

import colors from '../colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Layers = styled.div`
  height: 25vh;
  width: 25vw;
  position: relative;
  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }
`

const Layer = styled.div`
  background-color: #f5f3f7;
  height: 100%;
  width: 25vw;

  position: absolute;
  top: 0;
  left: 0;

  clip-path: polygon(0 0, 100% 0, 100% 0, 0% 100%);
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateX(-25%) translateY(-75%);

  @media only screen and (min-width: 1024px) {
    transform: translateX(-75%) translateY(-100%); // hack
  }
`

export function Boxes({ children, inverted }) {
  let layers = [colors.tan, colors.gray, colors.opi]

  if (inverted) {
    layers = layers.reverse()
  }

  return (
    <Container>
      <Layers>
        {layers.map((color, index) => (
          <Layer
            key={color}
            style={{
              top: `${(index === 1 ? -3 : -2.5) * index}vw`,
              left: `${(index === 1 ? -3 : -2.5) * index}vw`,
              backgroundColor: color
            }}
          />
        ))}
      </Layers>
      <Center>{children}</Center>
    </Container>
  )
}
