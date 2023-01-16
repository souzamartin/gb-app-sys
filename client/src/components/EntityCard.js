import {useLocation} from "react-router-dom"

import {Card, Image, Header, Button, Icon} from "semantic-ui-react"

const EntityCard = ({entity, handleClick}) => {
    const location = useLocation()

    return (
        <Card>
            <Image className='ghost-pic' src={entity.image} alt={entity.name} />
            <Card.Content>
                <Header>{entity.name.toUpperCase()}</Header>
                
                <Header sub>Classification</Header>
                <p>{entity.classification}</p>
                
                <Header sub>Description</Header>
                <p>{entity.description}</p>

                <Header sub>Notes</Header>
                <p>{entity.notes}</p>
            </Card.Content>
            {location.pathname === '/entities' ? 
                null
                    // <Button color='red' animated onClick={() => handleClick(entity)}>
                    //     <Button.Content visible>Schedule Job</Button.Content>
                    //     <Button.Content hidden>
                    //         <Icon name='ban' />
                    //     </Button.Content>
                    // </Button>
            : 
                <Card.Content extra textAlign="center">
                    <Button color='violet' animated onClick={() => handleClick(entity)}>
                        <Button.Content visible>Select Entity</Button.Content>
                        <Button.Content hidden>
                            <Icon name='check' />
                        </Button.Content>
                    </Button>
                </Card.Content>
            }
        </Card>
    )
}

export default EntityCard