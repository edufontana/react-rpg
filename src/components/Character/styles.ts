import styled from 'styled-components'

interface Props {
  left: number
  top: number
  size: number
}

export const Container = styled.div<Props>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  background-color: red;
`
