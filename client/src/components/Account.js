import Login from './Login'
import UserForm from './UserForm'

import {Header} from 'semantic-ui-react'

const Account = ({user, setUser}) => {
    return (
        <>
            {user ? <p>User is logged in</p>
                :
                <>
                    <Header size='medium'>Please log in or create an account</Header>
                    <Login setUser={setUser} />
                    <UserForm />
                </>
            }
        </>
    )
}

export default Account