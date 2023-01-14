import {useState} from "react"

import EntityCard from "./EntityCard"

import {Modal, Button, Icon, Header, Segment, Dropdown, Divider, Message, Card} from "semantic-ui-react"

const SelectEntity = ({entities, onSelectEntity}) => {
    const [open, setOpen] = useState(false)

    const handleClick = (entity) => {
        onSelectEntity(entity)
        setOpen(false)
    }

    const renderedEntities = entities.map(entity => 
        <EntityCard
            key={entity.id}
            entity={entity}
            handleClick={handleClick}
        />)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={
                <Button animated onClick={() => setOpen(true)}>
                    <Button.Content visible>Add Entity</Button.Content>
                    <Button.Content hidden>
                        <Icon name='add' />
                    </Button.Content>
                </Button>
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header content='Specify Paranormal Entity' />
            <Modal.Content>
                    <Segment>
                        <Message warning>If you don't see your spook in this list, please report it to us!</Message>

                        <Card.Group itemsPerRow={2}>
                            {renderedEntities}
                        </Card.Group>
                    </Segment>
            </Modal.Content>
        </Modal>
    )
}

export default SelectEntity