import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Nav from './components/Nav'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if (r.ok) {
        r.json().then(setUser)
      }
    })
  }, [])

  return (
    <div id='main'>
      <Nav setUser={setUser} />
      <Switch>
        <Route path='/signin'>
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path='/'>
          <h2>Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</h2>
        </Route>
      </Switch>
    </div>
  )
}

export default App