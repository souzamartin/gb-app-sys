import {useState} from "react"
import {useHistory} from "react-router-dom"

import {Segment, Header, Form, TextArea, Button, Icon} from "semantic-ui-react"

const NewJob = () => {
    const history = useHistory()

    const [formData, setFormData] = useState({
        location: "",
        notes: undefined,
    })

    const [associatedEntities, setAssociatedEntities] = useState([])

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <Segment>
            <Header content='Request Paranormal Investigation and Elimination' />
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Location</label>
                        <input
                            name='location'
                            placeholder='Where is the haunting or disturbance taking place?'
                            value={formData.location}
                            onChange={handleInput}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Notes</label>
                        <TextArea
                            name='notes'
                            placeholder='Please describe the nature of the haunting or disturbance'
                            value={formData.notes}
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
        </Segment>
    )
}

export default NewJob