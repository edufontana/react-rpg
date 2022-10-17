import { useState } from 'react'

export const useCharacter = () => {
  const [pos, setPos] = useState({ x: 3, y: 5 })
  const [charPosition, setCharPosition] = useState(30)

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }))

    setCharPosition(-30)
  }

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }))
    setCharPosition(-60)
  }

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
    }))

    setCharPosition(0)
  }

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
    }))

    setCharPosition(-90)
  }

  return {
    x: pos.x,
    y: pos.y,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    charPosition,
  }
}
