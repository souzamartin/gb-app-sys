import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import Title from './components/Title'
import Nav from './components/Nav'
import Home from './components/Home'
import Account from './components/Account'
import Entities from './components/Entities'
import Services from './components/Services'
import NewJob from './components/NewJob'
import Testimonials from './components/Testimonials'

function App() {
  const [user, setUser] = useState(null)

  const [entities, setEntities] = useState([])

  useEffect(() => {
    fetch('/entities')
    .then(r => r.json())
    .then(setEntities)
  }, [])

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

      <div id='main-content'>
        <Switch>
          <Route path='/account'>
            <Account user={user} setUser={setUser} />
          </Route>

          <Route path='/entities'>
            <Entities user={user} entities={entities} setEntities={setEntities} />
          </Route>
          
          <Route path='/services'>
            <Services user={user} entities={entities} />
          </Route>

          <Route path='/newjob'>
            <NewJob entities={entities} />
          </Route>

          <Route path='/testimonials'>
            <Testimonials user={user} />
          </Route>

          <Route exact path='/'>
            <Home user={user} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App