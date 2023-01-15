import {useState} from "react"

import {Card, Header, Label, Modal, Button, Icon} from "semantic-ui-react"

const JobCard = ({job, user, onDelete}) => {
    const [open, setOpen] = useState(false)

    const handleDelete = () => {
        fetch(`/jobs/${job.id}`, {method: 'DELETE'})
        .then(r => {
            if (r.ok) {
                onDelete(job.id)
                setOpen(false)
            } else {
                r.json().then(console.error)
            }
        })
    }

    return (
        <Card>
            <Card.Content>
                <Header size='small'>Order No. {job.id}</Header>
                {user.admin ?
                    <>
                        <Header sub>Customer</Header>
                        <p>{job.user.full_name}</p>
                    </>
                : null}
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

            <Card.Content extra>
                <div align="center">
                    <Modal
                        closeIcon
                        open={open}
                        trigger={
                            <Button animated onClick={() => setOpen(true)}>
                                <Button.Content visible>Cancel Service</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='cancel' />
                                </Button.Content>
                            </Button>
                        }
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        >
                        <Header content='Cancel Service Request' />
                        <Modal.Content>
                                <p>Are you sure you want to cancel this service request?</p>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button negative animated onClick={handleDelete}>
                                <Button.Content visible>Cancel Service</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='cancel' />
                                </Button.Content>
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </Card.Content>
        </Card>
    )
}

export default JobCard