import {useState, useEffect} from "react"
import {useHistory, useLocation} from "react-router-dom"

import SelectEntity from "./SelectEntity"

import {Segment, Header, Form, TextArea, Button, Icon, Label, Message, Divider} from "semantic-ui-react"

const NewJob = ({entities, job, setOpenEdit, onUpdate}) => {
    const history = useHistory()
    const location = useLocation()

    const [formData, setFormData] = useState({
        location: "",
        notes: undefined
    })

    const [associatedEntities, setAssociatedEntities] = useState([])

    const [errors, setErrors] = useState(null)
    const [selectError, setSelectError] = useState(null)

    useEffect(() => {
        if (job) {
            setFormData(job)
            setAssociatedEntities(job.entities)
        }
    }, [])

    const onSelectEntity = (selectedEntity) => {
        if (!associatedEntities.includes(selectedEntity)) {
            setAssociatedEntities([...associatedEntities, selectedEntity])
            setSelectError(null)
        } else {
            setSelectError("That entity is already selected")
        }
    }

    const handleClear = () => {
        setAssociatedEntities([])
        setSelectError("")
    }

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (id) => {
        fetch(`/jobs/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({formData, associatedEntities})
        })
        .then(r => {
            if (r.ok) {
                r.json().then(onUpdate)
                setOpenEdit(false)
            } else {
                r.json().then(setErrors)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (associatedEntities.length > 0) {
            if (location.pathname === '/services') {
                handleUpdate(job.id)
            } else {
                fetch('/jobs', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({formData, associatedEntities})
                })
                .then(r => {
                    if (r.ok) {
                        history.push('/services')
                    } else {
                        r.json().then(setErrors)
                    }
                })
            }} else {
            setSelectError("You must select one or more entities")
        }
    }
    

    return (
        <Segment>
            <Header content='Service Request' />
            <Segment>
                <Header size='tiny'>Associated Entities</Header>

                {associatedEntities.length > 0 ?
                    <Label.Group size="large">
                        {associatedEntities.map(entity => 
                        <Label key={entity.id}>
                            <img className="ghost-avatar" src={entity.image} alt={entity.name} />
                            {entity.name.toUpperCase()}
                        </Label>)}
                    </Label.Group>
                :
                    <Message>Please select the entity or entities involved</Message>
                }

                {selectError ? <Message warning>{selectError}</Message> : null}
                
                <SelectEntity entities={entities} onSelectEntity={onSelectEntity} />

                <Button animated onClick={handleClear} >
                        <Button.Content visible>Clear Entities</Button.Content>
                        <Button.Content hidden>
                            <Icon name='undo' />
                        </Button.Content>
                </Button>

                <Divider />

                {errors ?
                    <Message negative>
                        {errors.errors.map((error, index) => <li key={index}>{error}</li>)}
                    </Message>
                : null}
                
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
                    {location.pathname === '/newjob' ?
                            <Button positive animated type='submit'>
                                <Button.Content visible>Submit</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow circle right' />
                                </Button.Content>
                            </Button>
                    : 
                        <Button primary animated type='submit'>
                            <Button.Content visible>Update</Button.Content>
                            <Button.Content hidden>
                                <Icon name='edit' />
                            </Button.Content>
                        </Button>
                    }
                    </div>
                </Form>
            </Segment>
        </Segment>
    )
}

export default NewJob