import {Segment, Header, Input} from 'semantic-ui-react'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('OINK')
    }

    return (
        <Segment raised>
            <Header size='medium'>Please log in</Header>
            <form id='login-form' onSubmit={handleLogin}>
                <Input
                    name='email'
                    placeholder='Email address'
                />
                <Input
                    name='password'
                    placeholder='Password'
                />
                <input type='submit' value='Log In' />
            </form>
        </Segment>
    )
}

export default Login