import {useState} from "react"

import {Button, Icon, Modal, Header, Segment, Form, TextArea} from "semantic-ui-react"

const ReportEntity = ({user, entities, setEntities}) => {
    const [open, setOpen] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        classification: undefined,
        description: "",
        notes: "",
        image: ""
    })

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('/entities', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(newEntity =>
                    setEntities([...entities, newEntity])
                )
                setOpen(false)
            } else {
                r.json().then(console.error)
            }
        })
    }

    return (
        <div align="center">
            <Modal
                closeIcon
                open={open}
                trigger={
                    <Button color='purple' animated onClick={() => setOpen(true)}>
                        <Button.Content visible>Report New Entity</Button.Content>
                        <Button.Content hidden>
                            <Icon name='eye' />
                        </Button.Content>
                    </Button>
                }
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header content='Report New Paranormal Entity' />
                <Modal.Content>
                    {user ?
                        <Segment>
                            <Form onSubmit={handleSubmit}>
                                <Form.Field>
                                    <label>Name</label>
                                    <input
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Classification (if known)</label>
                                    <input
                                        name='classification'
                                        value={formData.classification}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Description</label>
                                    <TextArea
                                        name='description'
                                        value={formData.description}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Additional Notes</label>
                                    <TextArea
                                        name='notes'
                                        value={formData.notes}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Image</label>
                                    <input
                                        name='image'
                                        value={formData.image}
                                        onChange={handleInput}
                                    />
                                </Form.Field>
                    
                                <div align="center">
                                    <Button positive animated type='submit'>
                                        <Button.Content visible>Submit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow circle right' />
                                        </Button.Content>
                                    </Button>
                                </div>
                            </Form>
                        </Segment>
                    :
                        <p>Please log in or create an account.</p>
                    }
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ReportEntity