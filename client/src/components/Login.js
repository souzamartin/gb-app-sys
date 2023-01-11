import {Segment, Header, Form, Button, Icon} from 'semantic-ui-react'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('OINK')
    }

    return (
        <Segment raised>
            <Header size='medium'>Please log in</Header>
            <Form id='login-form' onSubmit={handleLogin}>
                <Form.Field name='email'>
                    <label>Email Address</label>
                    <input placeholder='Enter email address' />
                </Form.Field>
                <Form.Field name='password'>
                    <label>Password</label>
                    <input placeholder='Enter password' />
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