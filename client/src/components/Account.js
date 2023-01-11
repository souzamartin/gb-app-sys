import {useHistory} from 'react-router-dom'

import Login from './Login'
import UserForm from './UserForm'

import {Header} from 'semantic-ui-react'

const Account = ({user, setUser}) => {
    const history = useHistory()

    const onSignup = (formData) => {
        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setUser)
                history.push('/')
            } else {
                r.json().then(console.error)
            }
        })
    }

    return (
        <>
            {user ? <p>User is logged in</p>
                :
                <>
                    <Header size='medium'>Please log in or create an account</Header>
                    <Login setUser={setUser} />
                    <UserForm onSubmit={onSignup} />
                </>
            }
        </>
    )
}

export default Account