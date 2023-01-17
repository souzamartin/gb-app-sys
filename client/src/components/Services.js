import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import JobCard from "./JobCard"

import {Segment, Header, Button, Icon, Divider, Card, Message} from "semantic-ui-react"

const Services = ({user, entities}) => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        if (user) {
            fetch("/myjobs")
            .then(r => {
                if (r.ok) {
                    r.json().then(setJobs)
                } else {
                    r.json().then(console.error)
                }
            })
        }
    }, [])

    const getAllJobs = () => {
        fetch('/jobs')
        .then(r => r.json())
        .then(setJobs)
    }

    const onUpdate = (updatedJob) => {
        const updatedJobs = jobs.filter(job => job.id !== updatedJob.id)
        setJobs([...updatedJobs, updatedJob])
    }

    const onDelete = (id) => {
        const updatedJobs = jobs.filter(job => job.id !== id)
        setJobs(updatedJobs)
    }

    const renderedJobs = jobs.map(job =>
        <JobCard
            key={job.id}
            job={job}
            user={user}
            entities={entities}
            onUpdate={onUpdate}
            onDelete={onDelete} 
        />
    )

    return (
        <Segment>
            <Header>Your Service Requests</Header>

            {user ?
                <div align="center">
                    <Button positive animated as={Link} to="/newjob">
                        <Button.Content visible>New Service Request</Button.Content>
                        <Button.Content hidden>
                            <Icon name='add' />
                        </Button.Content>
                    </Button>

                    {user.admin ?
                        <Button primary animated onClick={getAllJobs}>
                            <Button.Content visible>Show All Jobs</Button.Content>
                            <Button.Content hidden>
                                <Icon name='book' />
                            </Button.Content>
                        </Button>
                    : null}
                </div>
            : null}
            

            <Divider />

            {user ?
                <Card.Group itemsPerRow={2}>
                    {renderedJobs}
                </Card.Group>
            :
                <Message warning>
                    Please {<Link to='/account'>log in or create an account</Link>} to view and request services.
                </Message>
            }
        </Segment>
    )
}

export default Services