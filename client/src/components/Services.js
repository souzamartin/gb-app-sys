import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import JobCard from "./JobCard"

import {Segment, Header, Button, Icon, Divider, Card} from "semantic-ui-react"

const Services = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("/myjobs")
        .then(r => r.json())
        .then(setJobs)
    }, []
    )

    const renderedJobs = jobs.map(job => <JobCard key={job.id} job={job} />)

    return (
        <Segment>
            <Header>Your Service Requests</Header>
                <Button positive animated as={Link} to="/">
                    <Button.Content visible>New Service Request</Button.Content>
                    <Button.Content hidden>
                        <Icon name='add' />
                    </Button.Content>
                </Button>
                
            <Divider />

            <Card.Group itemsPerRow={2}>
                {renderedJobs}
            </Card.Group>
        </Segment>
    )
}

export default Services