import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import Nav from './components/Nav'
import Account from './components/Account'
import Entities from './components/Entities'
import Services from './components/Services'

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
        <Route path='/account'>
          <Account user={user} setUser={setUser} />
        </Route>

        <Route path='/entities'>
          <Entities />
        </Route>
        
        <Route path='/services'>
          <Services />
        </Route>

        <Route exact path='/'>
          <h2>Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</h2>
        </Route>
      </Switch>
    </div>
  )
}

export default App