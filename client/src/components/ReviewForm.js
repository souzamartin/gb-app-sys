import {useState} from 'react'

import {Form, Rating, TextArea, Button, Icon} from 'semantic-ui-react'

const ReviewForm = ({user}) => {
    const [formData, setFormData] = useState({
        user_id: user.id,
        rating: 0,
        content: ''
    })

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleRating = (e, rating) => {
        setFormData({
            ...formData,
            rating: rating.rating
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field required>
                <label>Rating</label>
                <Rating
                    name='rating'
                    icon='star'
                    size='massive'
                    maxRating={5}
                    rating={formData.rating}
                    onRate={handleRating}
                />
            </Form.Field>

            <Form.Field required>
                <label>Comments</label>
                <TextArea
                    name='content'
                    placeholder='Describe your experience with our service'
                    value={formData.content}
                    onChange={handleInput}
                />
            </Form.Field>

            <div align='center'>
                <Button positive animated type='submit'>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='write'/>
                    </Button.Content>
                </Button>
            </div>
        </Form>
    )
}

export default ReviewForm