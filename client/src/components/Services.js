import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import JobCard from "./JobCard"

import {Segment, Container, Header, Button, Icon, Divider, Card} from "semantic-ui-react"

const Services = ({user}) => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("/myjobs")
        .then(r => {
            if (r.ok) {
                r.json().then(setJobs)
            } else {
                r.json().then(console.error)
            }
        })
    }, [])

    const renderedJobs = jobs.map(job => <JobCard key={job.id} job={job} />)

    return (
        <Segment>
            <Header>Your Service Requests</Header>
                <Container textAlign="center">
                    <Button positive animated as={Link} to="/newjob">
                        <Button.Content visible>New Service Request</Button.Content>
                        <Button.Content hidden>
                            <Icon name='add' />
                        </Button.Content>
                    </Button>
                </Container>

            <Divider />

            {user ?
                <Card.Group itemsPerRow={2}>
                    {renderedJobs}
                </Card.Group>
            :
                <p>Please log in or create an account to view and request services.</p>
            }
        </Segment>
    )
}

export default Services