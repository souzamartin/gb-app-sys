import {Card, Image, Header, Button, Icon} from "semantic-ui-react"

const EntityCard = ({entity}) => {
    return (
        <Card>
            <Image size='medium' src={entity.image} alt={entity.name} centered wrapped/>
            <Card.Content>
                <Header>{entity.name.toUpperCase()}</Header>

                <Header sub>Classification</Header>
                <span>{entity.classification}</span>
                
                <Header sub>Description</Header>
                <p>{entity.description}</p>

                <Header sub>Notes</Header>
                <p>{entity.notes}</p>
            </Card.Content>
            <Card.Content extra>
            <Button color="red" animated>
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