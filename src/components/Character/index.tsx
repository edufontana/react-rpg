import React from 'react'
import { Container } from './styles'

interface CharacterProps {
  x: number
  y: number
}

export function Character({ x, y }: CharacterProps) {
  const size = 30

  return <Container size={size} left={x * size} top={y * size}></Container>
}
