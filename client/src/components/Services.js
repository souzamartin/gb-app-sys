import {useState, useEffect} from "react"

import JobCard from "./JobCard"

import {Segment, Header, Divider, Card} from "semantic-ui-react"

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
            
            <Divider />

            <Card.Group itemsPerRow={2}>
                {renderedJobs}
            </Card.Group>
        </Segment>
    )
}

export default Services