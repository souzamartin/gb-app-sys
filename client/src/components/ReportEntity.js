import {Container, Button, Icon} from "semantic-ui-react"

const handleReport = () => {
    console.log("OINK")
}

const ReportEntity = () => {
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