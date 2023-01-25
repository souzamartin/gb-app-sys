import {Card, Header, Rating, Button, Icon, Label} from "semantic-ui-react"

const ReviewCard = ({review, user, handleDelete}) => {
    const timestamp = new Date(review.created_at)

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
                <Label attached='top right'>
                    {timestamp.toLocaleString()}
                </Label>
            </Card.Content>
            {user ?
                review.user.id === user.id || user.admin === true ?
                    <Card.Content extra>
                        <div align='center'>
                            <Button animated onClick={() => handleDelete(review.id)}>
                                <Button.Content visible>Delete Review</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='x'/>
                                </Button.Content>
                            </Button>
                        </div>
                    </Card.Content>
                : null
            : null}
        </Card>
    )
}

export default ReviewCard