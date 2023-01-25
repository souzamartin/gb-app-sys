import {Card, Header, Rating} from "semantic-ui-react"

const ReviewCard = ({review}) => {
    return (
        <Card>
            <Card.Content>
                <Header>{review.user.full_name}</Header>
            </Card.Content>
            <Card.Content>
                <Rating disabled icon='star' size='huge' rating={review.rating} maxRating={5}/>
            </Card.Content>
            <Card.Content>
                {review.content}
            </Card.Content>
        </Card>
    )
}

export default ReviewCard