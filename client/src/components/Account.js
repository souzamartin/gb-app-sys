import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import Login from './Login'
import UserForm from './UserForm'

import {Header, Segment, Button, Icon, List, Divider, Modal, Message, Accordion} from 'semantic-ui-react'

const Account = ({user, setUser}) => {
    const history = useHistory()

    const [errors, setErrors] = useState(null)

    const [open, setOpen] = useState(false)

    const [activeIndex, setActiveIndex] = useState(-1)

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
                r.json().then(setErrors)
            }
        })
    }

    const handleEdit = (formData) => {
        fetch(`/users/${user.id}`, {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setUser)
                setOpen(false)
            } else {
                r.json().then(setErrors)
            }
        })
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
          fetch(`/users/${user.id}`, {method: 'DELETE'})
          .then((r) => {
            if (r.ok) {
              setUser(null)
              history.push('/')
            }
          })
        }
    }

    const handleClick = (e) => {
        console.log(e.target)
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
                                    <List.Header>E-Mail Address</List.Header>
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

                    <Modal
                        closeIcon
                        open={open}
                        trigger={
                            <div align='center'>
                                <Button animated onClick={() => setOpen(true)}>
                                    <Button.Content visible>Edit Account</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='edit' />
                                    </Button.Content>
                                </Button>
                            </div>
                        }
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                    >
                        <Header content='Edit Account Information'/>
                        <Modal.Content>
                            {errors ?
                            <Message negative>
                                {errors.errors.map((error, index) => <li key={index}>{error}</li>)}
                            </Message>
                            : null}
                            <UserForm user={user} onSubmit={handleEdit} />
                        </Modal.Content>
                    </Modal>

                    <Divider />

                    <div align='center'>
                        <Button negative animated onClick={handleDelete}>
                            <Button.Content visible>Delete Account</Button.Content>
                            <Button.Content hidden>
                                <Icon name='user delete'/>
                            </Button.Content>
                        </Button>
                    </div>
                </>
            :
                <>
                    <Header size='medium'>Please log in or create an account</Header>
                    <Accordion exclusive={false}>
                        <Accordion.Title
                            index={0}
                            active={activeIndex === 0}
                            onClick={() => setActiveIndex(0)}
                        >
                            <Icon name='dropdown'/>
                            Returning Customers
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Login setUser={setUser} />
                        </Accordion.Content>

                        <Accordion.Title
                            index={1}
                            active={activeIndex === 1}
                            onClick={() => setActiveIndex(1)}
                        >
                            <Icon name='dropdown'/>
                            New Customers
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            {errors ?
                                <Message negative>
                                    {errors.errors.map((error, index) => <li key={index}>{error}</li>)}
                                </Message>
                            : null}
                            <UserForm onSubmit={onSignup} />
                        </Accordion.Content>
                    </Accordion>
                </>
            }
        </>
    )
}

export default Account