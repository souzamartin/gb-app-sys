import {useState} from "react"
import {useHistory} from "react-router-dom"

import SelectEntity from "./SelectEntity"

import {Segment, Header, Form, TextArea, Button, Icon, Label, Image, Message, Modal, Dropdown, Divider} from "semantic-ui-react"

const NewJob = ({entities}) => {
    const history = useHistory()

    const [formData, setFormData] = useState({
        location: "",
        notes: undefined,
    })

    const [associatedEntities, setAssociatedEntities] = useState([])

    const onSelectEntity = (selectedEntity) => {
        setAssociatedEntities([...associatedEntities, selectedEntity])
    }

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (associatedEntities.length > 0) {
            fetch('/jobs', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            .then(r => {
                if (r.ok) {
                    history.push('/services')
                } else {
                    r.json().then(console.error)
                }
            })
        } else {
            console.warn('OINK')
        }
    }

    return (
        <Segment>
            <Header content='Request Paranormal Investigation and Elimination' />
            <Segment>
                <Header size='tiny'>Associated Entities</Header>

                <SelectEntity entities={entities} onSelectEntity={onSelectEntity} />

                {associatedEntities.length > 0 ?
                    <Segment>
                        {associatedEntities.map(entity => 
                        <Label key={entity.id}>
                            <Image avatar size="medium" src={entity.image} />
                            {entity}
                        </Label>)}
                    </Segment>
                :
                    <Message>Please select the entity or entities involved</Message>
                }

                <Divider />
                
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