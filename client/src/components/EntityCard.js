import {Card, Image, Header, Button, Icon} from "semantic-ui-react"

const EntityCard = ({entity}) => {
    return (
        <Card>
            <Image className='ghost-pic' src={entity.image} alt={entity.name} />
            <Card.Content>
                <Header>{entity.name.toUpperCase()}</Header>
                
                <Header sub>Classification</Header>
                <span>{entity.classification}</span>
                
                <Header sub>Description</Header>
                <p>{entity.description}</p>

                <Header sub>Notes</Header>
                <p>{entity.notes}</p>
            </Card.Content>
            <Card.Content extra textAlign="center">
            <Button color='red' animated>
                    <Button.Content visible>Schedule Job</Button.Content>
                    <Button.Content hidden>
                        <Icon name='ban' />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default EntityCard