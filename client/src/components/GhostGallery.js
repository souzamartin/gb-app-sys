import {useState} from 'react'

import EntityCard from './EntityCard'

import {Divider, Input, Card} from 'semantic-ui-react'

const GhostGallery = ({entities, handleClick}) => {
    const [searchText, setSearchText] = useState('')

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
        <>
            <Divider/>

            <Input
                fluid
                focus
                placeholder='Search entities by name...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />

            <Divider/>

            <Card.Group itemsPerRow={2}>
                {renderedEntities}
            </Card.Group>
        </>
    )
}

export default GhostGallery