import {useState, useEffect} from 'react'

import ReviewCard from './ReviewCard'

import {Segment, Header, Card, Divider} from 'semantic-ui-react'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews')
        .then(r => r.json())
        .then(setReviews)
    }, [])

    const renderedReviews = reviews.map(review => <ReviewCard review={review} />)

    return (
        <Segment>
            <Header>Customer Testimonials</Header>
            <Divider />
            <Card.Group itemsPerRow={1}>
                {renderedReviews}
            </Card.Group>
        </Segment>
    )
}

export default Testimonials