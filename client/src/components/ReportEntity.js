import {Container, Button, Icon} from "semantic-ui-react"

const ReportEntity = ({user}) => {
    const handleReport = () => {
        if (user) {
            console.log("OINK")
        } else {
            window.alert("Please log in or create an account.")
        }
    }

    return (
        <Container textAlign="center">
            <Button color='purple' animated onClick={handleReport}>
                <Button.Content visible>Report New Entity</Button.Content>
                <Button.Content hidden>
                    <Icon name='eye' />
                </Button.Content>
            </Button>
        </Container>
    )
}

export default ReportEntity