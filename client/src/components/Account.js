import {useHistory} from 'react-router-dom'

import Login from './Login'
import UserForm from './UserForm'

import {Header, Segment, Button, Icon, List, Divider} from 'semantic-ui-react'

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

    const handleEdit = () => {
        console.log('OINK')
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
          fetch(`/users/${user.id}`, {method: "DELETE"})
          .then((r) => {
            if (r.ok) {
              setUser(null)
              history.push("/")
            }
          })
        }
      }

    return (
        <>
            {user ?
                <>
                    <Header size='medium'>Account Details</Header>
                    <Segment>
                        <List size='large'>
                            <List.Item>
                                <Icon name='user' />
                                <List.Content>
                                    <List.Header>Name</List.Header>
                                    {`${user.firstname} ${user.lastname}`}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name='mail' />
                                <List.Content>
                                    <List.Header>Email Address</List.Header>
                                    {user.email}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name='phone' />
                                <List.Content>
                                    <List.Header>Telephone</List.Header>
                                    {user.phone}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name='home' />
                                <List.Content>
                                    <List.Header>Address</List.Header>
                                    {user.address}
                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                    <Button animated onClick={handleEdit}>
                        <Button.Content visible>Edit Account</Button.Content>
                        <Button.Content hidden>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                    <Divider />
                    <Button negative animated onClick={handleDelete}>
                        <Button.Content visible>Delete Account</Button.Content>
                        <Button.Content hidden>
                            <Icon name='user delete' />
                        </Button.Content>
                    </Button>
                </>
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