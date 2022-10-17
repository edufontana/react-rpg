import styled from 'styled-components'

interface Props {
  left: number
  top: number
  size: number
  charPosition: number
}

export const Container = styled.div<Props>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  background-image: url('/assets/char.png');
  background-position: 0px ${({ charPosition }) => charPosition}px;
`
