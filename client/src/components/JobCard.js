import {Card, Header, Label, Image} from "semantic-ui-react"

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
                <Label.Group size="huge">
                    {job.entities.map(entity => 
                        <Label>
                            <Image avatar className="ghost-avatar" src={entity.image} />
                            <Header sub>{entity.name}</Header>
                        </Label>)}
                </Label.Group>
            </Card.Content>
        </Card>
    )
}

export default JobCard