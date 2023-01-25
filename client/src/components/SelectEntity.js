import {useState} from 'react'
import {Link} from 'react-router-dom'

import GhostGallery from './GhostGallery'

import {Modal, Button, Icon, Header, Segment, Message} from 'semantic-ui-react'

const SelectEntity = ({entities, onSelectEntity}) => {
    const [open, setOpen] = useState(false)

    const handleClick = (entity) => {
        onSelectEntity(entity)
        setOpen(false)
    }

    return (
        <Modal
            closeIcon
            open={open}
            trigger={
                <Button color='violet' animated onClick={() => setOpen(true)}>
                    <Button.Content visible>Add Entity</Button.Content>
                    <Button.Content hidden>
                        <Icon name='add'/>
                    </Button.Content>
                </Button>
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header content='Specify Paranormal Entity'/>
            <Modal.Content>
                    <Segment>
                        <Message warning>
                            If you don't see your spook in this list, {<Link to='/entities'>please report it to us!</Link>}
                        </Message>
                        <GhostGallery entities={entities} handleClick={handleClick}/>
                    </Segment>
            </Modal.Content>
        </Modal>
    )
}

export default SelectEntity