import {useState} from 'react'

import {Segment, Header, Form, Button, Icon} from 'semantic-ui-react'

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('OINK')
    }

    return (
        <Segment raised>
            <Header size='medium'>Please log in</Header>
            <Form id='login-form' onSubmit={handleLogin}>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        name='email'
                        value={login.email}
                        placeholder='Enter email address'
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        name='password'
                        value={login.password}
                        placeholder='Enter password'
                        onChange={handleInput}    
                    />
                </Form.Field>
                <Button primary animated type='submit'>
                    <Button.Content visible>Log In</Button.Content>
                    <Button.Content hidden>
                        <Icon name='long arrow alternate right' />
                    </Button.Content>
                </Button>
            </Form>
        </Segment>
    )
}

export default Login