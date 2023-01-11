import {useState} from "react"

import {Segment, Form, Button, Icon} from "semantic-ui-react"

const UserForm = () => {
    const initialFormState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: null,
        address: ''
      }
      
    const [formData, setFormData] = useState(initialFormState)

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('OINK')
    }

    return (
        <Segment>
            <Form id='user-form' onSubmit={handleSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        name='firstname'
                        value={formData.firstname}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name='lastname'
                        value={formData.lastname}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='firstname'
                        value={formData.password_confirmation}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number (Optional)</label>
                    <input
                        type='number'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Address (Optional)</label>
                    <input
                        name='address'
                        value={formData.address}
                        onChange={handleInput}
                    />
                </Form.Field>
                <Button primary animated type='submit'>
                    <Button.Content visible>Create Account</Button.Content>
                    <Button.Content hidden>
                        <Icon name='signup' />
                    </Button.Content>
                </Button>
            </Form>
        </Segment>
    )
}

export default UserForm