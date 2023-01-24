import {useState, useEffect} from 'react'

import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'

import {Segment, Header, Card, Divider, Modal, Button, Icon} from 'semantic-ui-react'

const Testimonials = ({user}) => {
    const [reviews, setReviews] = useState([])

    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch('/reviews')
        .then(r => r.json())
        .then(setReviews)
    }, [])

    const renderedReviews = reviews.map(review => <ReviewCard review={review} />)

    return (
        <Segment>
            <Header>Customer Testimonials</Header>
            {user ?
                <Modal
                    closeIcon
                    open={open}
                    trigger={
                        <div align='center'>
                            <Button primary animated onClick={() => setOpen(true)}>
                                <Button.Content visible>Write a Review</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='write'/>
                                </Button.Content>
                            </Button>
                        </div>
                    }
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    >
                    <Header content='Edit Account Information'/>
                    <Modal.Content>
                        <ReviewForm user={user} />
                    </Modal.Content>
                </Modal>
            : null}

            <Divider/>

            <Card.Group itemsPerRow={1}>
                {renderedReviews}
            </Card.Group>
        </Segment>
    )
}

export default Testimonials