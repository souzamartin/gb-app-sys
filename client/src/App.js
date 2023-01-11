import {useState} from 'react'

import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div id='main'>
      <Login />
    </div>
  )
}

export default App