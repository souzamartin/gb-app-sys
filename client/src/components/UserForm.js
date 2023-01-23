import {useState, useEffect} from 'react'

import {Segment, Form, Button, Icon} from 'semantic-ui-react'

const UserForm = ({onSubmit, user}) => {
    const initialFormState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: undefined,
        address: ''
      }
      
    const [formData, setFormData] = useState(initialFormState)

    useEffect(() => {
        if (user) {setFormData(user)}
    }, [])

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Field required>
                    <label>First Name</label>
                    <input
                        name='firstname'
                        value={formData.firstname}
                        onChange={handleInput}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>Last Name</label>
                    <input
                        name='lastname'
                        value={formData.lastname}
                        onChange={handleInput}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>E-Mail Address</label>
                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleInput}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>{user ? 'Change or Confirm Password' : 'Password'}</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleInput}
                    />
                </Form.Field>

                {user ? null :
                <Form.Field required>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='password_confirmation'
                        value={formData.password_confirmation}
                        onChange={handleInput}
                        />
                </Form.Field>
                }

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
                
                <div align='center'>
                    <Button positive animated type='submit'>
                        <Button.Content visible>Submit</Button.Content>
                        <Button.Content hidden>
                            <Icon name='signup'/>
                        </Button.Content>
                    </Button>
                </div>
            </Form>
        </Segment>
    )
}

export default UserForm