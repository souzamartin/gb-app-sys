import {useState} from 'react'
import {Link} from 'react-router-dom'

import {Button, Icon, Modal, Header, Segment, Form, TextArea, Message} from 'semantic-ui-react'

const ReportEntity = ({user, entities, setEntities}) => {
    const [open, setOpen] = useState(false)

    const [errors, setErrors] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        classification: 'Unknown',
        description: '',
        notes: 'None',
        image: null
    })

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const entityData = new FormData()
        // Credit to Ignas Butautas for this handy loop
        for (const property in formData) {
            entityData.append(
              property, formData[property]
            )
        }
        
        fetch('/entities', {
            method: 'POST',
            body: entityData
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(newEntity =>
                    setEntities([...entities, newEntity])
                )
                setOpen(false)
            } else {
                r.json().then(setErrors)
            }
        })
    }

    return (
        <div align='center'>
            <Modal
                closeIcon
                open={open}
                trigger={
                    <Button color='violet' animated onClick={() => setOpen(true)}>
                        <Button.Content visible>Report New Entity</Button.Content>
                        <Button.Content hidden>
                            <Icon name='eye'/>
                        </Button.Content>
                    </Button>
                }
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header content='Report New Paranormal Entity'/>
                <Modal.Content>
                    {errors ?
                        <Message negative>
                            {errors.errors.map((error, index) => <li key={index}>{error}</li>)}
                        </Message>
                    : null}

                    {user ?
                        <Segment>
                            <Form onSubmit={handleSubmit}>
                                <Form.Field required>
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

                                <Form.Field required>
                                    <label>Description</label>
                                    <TextArea
                                        name='description'
                                        value={formData.description}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Additional Notes (optional)</label>
                                    <TextArea
                                        name='notes'
                                        value={formData.notes}
                                        onChange={handleInput}
                                    />
                                </Form.Field>

                                <Form.Field required>
                                    <label>Image</label>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        multiple={false}
                                        onChange={handleImage}
                                    />
                                </Form.Field>
                    
                                <div align='center'>
                                    <Button positive animated type='submit'>
                                        <Button.Content visible>Submit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow circle right'/>
                                        </Button.Content>
                                    </Button>
                                </div>
                            </Form>
                        </Segment>
                    :
                        <p>Please {<Link to='/account'>log in or create an account.</Link>}</p>
                    }
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ReportEntity