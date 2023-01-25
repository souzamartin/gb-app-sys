import {useState, useEffect} from 'react'

import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'

import {Segment, Header, Card, Divider, Modal, Button, Icon, Message} from 'semantic-ui-react'

const Testimonials = ({user}) => {
    const [reviews, setReviews] = useState([])

    const [errors, setErrors] = useState(null)

    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch('/reviews')
        .then(r => r.json())
        .then(setReviews)
    }, [])

    const submitReview = (reviewData) => {
        fetch('/reviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(newReview => setReviews([...reviews, newReview]))
                setOpen(false)
            } else {
                r.json().then(setErrors)
            }
        })
    }

    const handleDelete = (id) => {
        fetch(`/reviews/${id}`, {method: 'DELETE'})
        .then(r => {
            if (r.ok) {
                const updatedReviews = reviews.filter(review => review.id !== id)
                setReviews(updatedReviews)
            } else {
                r.json().then(console.error)
            }
        })
    }

    const renderedReviews = reviews.map(review =>
        <ReviewCard
            key={review.id}
            review={review}
            user={user}
            handleDelete={handleDelete}
        />
    )

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
                    <Header content='Write a Review'/>
                    <Modal.Content>
                        {errors ?
                            <Message negative>
                                {errors.errors.map((error, index) => <li key={index}>{error}</li>)}
                            </Message>
                        : null}
                        <ReviewForm user={user} submitReview={submitReview} />
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