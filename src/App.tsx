import { Container, Map } from './App.styles'
import { GlobalStyle } from './styles/global'
import { Character } from './components/Character'

export function App() {
  return (
    <>
      <Container>
        <Map>
          <Character x={5} y={5} />
        </Map>
      </Container>
      <GlobalStyle />
    </>
  )
}
