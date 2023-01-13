import {useState} from "react"

import {Modal, Button, Icon, Header, Segment, Dropdown, Divider, Message} from "semantic-ui-react"

const SelectEntity = ({entities}) => {
    const [open, setOpen] = useState(false)

    const options = entities.map(entity => Object({
        key: entity.name,
        text: entity.name,
        value: entity.name,
        image: {avatar: true, src: entity.image}
        })
    )

    const handleAddEntity = () => {
        console.log('OINK')
        setOpen(false)
    }

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
                        <Dropdown fluid clearable selection options={options} />
                        <Message warning>If you don't see your spook in this list, please report it to us!</Message>
                        <Divider />
                        <div align="center">
                            <Button animated onClick={handleAddEntity}>
                                <Button.Content visible>Confirm Entity</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='check' />
                                </Button.Content>
                            </Button>
                        </div>
                    </Segment>
            </Modal.Content>
        </Modal>
    )
}

export default SelectEntity