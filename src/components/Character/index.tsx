import React from 'react'
import { Container } from './styles'

interface CharacterProps {
  x: number
  y: number
  charPosition: number
}

export function Character({ x, y, charPosition }: CharacterProps) {
  const size = 30

  return (
    <Container
      charPosition={charPosition}
      size={size}
      left={x * size}
      top={y * size}
    ></Container>
  )
}
