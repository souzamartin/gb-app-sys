import {Card, Rating} from "semantic-ui-react"

const ReviewCard = ({review}) => {
    return (
        <Card>
            <Card.Content header={review.user.full_name}/>
            <Card.Content>
                <Rating disabled icon='star' size='huge' rating={review.rating} maxRating={5}/>
                <p>{review.content}</p>
            </Card.Content>
        </Card>
    )
}

export default ReviewCard