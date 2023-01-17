import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {Segment, Form, Button, Icon, Message} from 'semantic-ui-react'

const Login = ({setUser}) => {
    const history = useHistory()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState(null)

    const handleInput = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setUser)
                history.push('/')
            } else {
                r.json().then(setErrors)
            }
        })
    }

    return (
        <>
            {errors ?
                <Message negative>
                    <li>{errors.error}</li>
                </Message>
            : null}
            <Segment>
                <Form onSubmit={handleLogin}>
                    <Form.Field>
                        <label>E-Mail Address</label>
                        <input
                            name='email'
                            value={login.email}
                            placeholder='Enter e-mail address'
                            onChange={handleInput}
                            />
                    </Form.Field>

                    <Form.Field>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={login.password}
                            placeholder='Enter password'
                            onChange={handleInput}    
                            />

                    </Form.Field>
                        <div align='center'>
                            <Button primary animated type='submit'>
                                <Button.Content visible>Log In</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='sign-in'/>
                                </Button.Content>
                            </Button>
                        </div>
                </Form>
            </Segment>
        </>
    )
}

export default Login