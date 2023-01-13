import {useState} from "react"

import {Modal, Button, Icon, Header, Segment, Dropdown, Divider} from "semantic-ui-react"

const SelectEntity = () => {
    const [open, setOpen] = useState(false)

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
                        <Dropdown fluid clearable selection/>
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