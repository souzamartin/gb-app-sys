import {useState, useEffect} from "react"

import EntityCard from "./EntityCard"

import {Segment, Header, Divider, Card} from "semantic-ui-react"

const Entities = () => {
    const [entities, setEntities] = useState([])

    useEffect(() => {
        fetch('/entities')
        .then(r => r.json())
        .then(setEntities)
    }, [])

    const renderedEntities = entities.map(entity => <EntityCard entity={entity} />)

    return (
        <Segment>
            <Header>Register of Paranormal Entities</Header>
            <p>Search our catalog of spooks, specters, and ghosts.</p>

            <Divider />
            
            <Card.Group centered itemsPerRow={2}>
                {renderedEntities}
            </Card.Group>
        </Segment>
    )
}

export default Entities