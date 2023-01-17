import ReportEntity from './ReportEntity'
import GhostGallery from './GhostGallery'

import {Segment, Header} from 'semantic-ui-react'

const Entities = ({user, entities, setEntities}) => {

    const handleClick = (entity) => {
        console.log(entity)
    }

    return (
        <Segment>
            <Header>Register of Paranormal Entities</Header>
            <p>Search our catalog of spooks, specters, and ghosts. 
                If there's something strange in your neighborhood,
                but it isn't listed below, please report it to us.</p>
            <ReportEntity user={user} entities={entities} setEntities={setEntities} />
            <GhostGallery entities={entities} handleClick={handleClick} />
        </Segment>
    )
}

export default Entities