import { useEffect } from 'react'

import { Container, Map } from './App.styles'
import { GlobalStyle } from './styles/global'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

export function App() {
  const { moveDown, moveLeft, moveRight, moveUp, x, y } = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        moveLeft()
        break
      case 'KeyW':
      case 'ArrowUp':
        moveUp()
        break
      case 'KeyD':
      case 'ArrowRight':
        moveRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        moveDown()
        break
    }
  }

  return (
    <>
      <Container>
        <Map>
          <Character x={x} y={y} />
        </Map>
      </Container>
      <GlobalStyle />
    </>
  )
}
