import { useState } from 'react'
import { mapSpots } from '../data/mapSpots'

export const useCharacter = () => {
  const [pos, setPos] = useState({ x: 3, y: 5 })
  const [charPosition, setCharPosition] = useState(30)

  const moveLeft = () => {
    setPos((pos) => ({
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y,
    }))

    setCharPosition(-30)
  }

  const moveRight = () => {
    setPos((pos) => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y,
    }))
    setCharPosition(-60)
  }

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
    }))

    setCharPosition(0)
  }

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
    }))

    setCharPosition(-90)
  }

  const canMove = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true
      }
    }

    return false
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
