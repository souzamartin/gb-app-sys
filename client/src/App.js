import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Nav from './components/Nav'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div id='main'>
      <Nav />
      <Switch>
        <Route path='/signin'>
          <Login setUser={setUser} />
        </Route>
        <Route exact path='/'>
          <h2>Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</h2>
        </Route>
      </Switch>
    </div>
  )
}

export default App