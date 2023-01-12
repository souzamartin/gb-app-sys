import {Segment, Header} from "semantic-ui-react"

const Home = ({user}) => {
    return (
        <Segment>
            <Header size="large">Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</Header>
            <Header size="huge" color="red">We're ready to believe you!</Header>
        </Segment>
    )
}

export default Home