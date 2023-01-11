import {useState} from 'react'
import {Container} from 'semantic-ui-react'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Container textAlign='center'>
      <h1>Who you gonna call?</h1>
    </Container>
  )
}

export default App