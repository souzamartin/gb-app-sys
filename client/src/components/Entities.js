import {useState} from "react"

import ReportEntity from "./ReportEntity"
import EntityCard from "./EntityCard"

import {Segment, Header, Divider, Input, Card} from "semantic-ui-react"

const Entities = ({user, entities, setEntities}) => {
    const [searchText, setSearchText] = useState("")

    const handleClick = (entity) => {
        console.log(entity)
    }

    const filteredEntities = entities.filter(entity =>
        entity.name.toLowerCase().includes(searchText.toLowerCase())
    )

    const renderedEntities = filteredEntities.map(entity => 
        <EntityCard
            key={entity.id}
            entity={entity}
            handleClick={handleClick}
        />
    )

    return (
        <Segment>
            <Header>Register of Paranormal Entities</Header>
            <p>Search our catalog of spooks, specters, and ghosts. 
                If there's something strange in your neighborhood,
                but it isn't listed below, please report it to us.</p>

            <ReportEntity user={user} entities={entities} setEntities={setEntities} />

            <Divider />

            <Input
                fluid
                focus
                placeholder='Search entities by name...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <Divider />
            
            <Card.Group itemsPerRow={2}>
                {renderedEntities}
            </Card.Group>
        </Segment>
    )
}

export default Entities