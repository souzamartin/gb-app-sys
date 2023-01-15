import {Card, Header, Label} from "semantic-ui-react"

const JobCard = ({job}) => {
    return (
        <Card>
            <Card.Content>
                <Header size='small'>Order No. {job.id}</Header>
                <Header sub>Location</Header>
                <p>{job.location}</p>

                <Header sub>Notes</Header>
                <p>{job.notes}</p>
            </Card.Content>
            <Card.Content extra>
                <Header size='tiny'>Associated Entities</Header>
                <Label.Group size="large">
                    {job.entities.map(entity => 
                        <Label key={entity.id}>
                            <img className="ghost-avatar" src={entity.image} alt={entity.name} />
                            {entity.name.toUpperCase()}
                        </Label>)}
                </Label.Group>
            </Card.Content>
        </Card>
    )
}

export default JobCard