import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import Title from './components/Title'
import Nav from './components/Nav'
import Home from './components/Home'
import Account from './components/Account'
import Entities from './components/Entities'
import Services from './components/Services'
import NewJob from './components/NewJob'

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
      <Title />
      <Nav user={user} setUser={setUser} />
      <Switch>
        <Route path='/account'>
          <Account user={user} setUser={setUser} />
        </Route>

        <Route path='/entities'>
          <Entities user={user} />
        </Route>
        
        <Route path='/services'>
          <Services user={user} />
        </Route>

        <Route path='/newjob'>
          <NewJob />
        </Route>

        <Route exact path='/'>
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default App