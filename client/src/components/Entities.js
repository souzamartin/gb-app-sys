import {useState, useEffect} from "react"

import ReportEntity from "./ReportEntity"
import EntityCard from "./EntityCard"

import {Segment, Header, Divider, Card} from "semantic-ui-react"

const Entities = ({user}) => {
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
            <p>Search our catalog of spooks, specters, and ghosts. 
                If there's something strange in your neighborhood,
                but it isn't listed below, please report it to us.</p>
            <ReportEntity user={user} entities={entities} setEntities={setEntities} />

            <Divider />
            
            <Card.Group itemsPerRow={2}>
                {renderedEntities}
            </Card.Group>
        </Segment>
    )
}

export default Entities