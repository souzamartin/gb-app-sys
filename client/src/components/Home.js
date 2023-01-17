import {Segment, Header, Embed} from 'semantic-ui-react'

const Home = ({user}) => {
    return (
        <Segment>
            <Header size='large'>Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</Header>
            <Header size='huge' color='red'>We're ready to believe you!</Header>
            <Embed autoplay={true} id='sRee26pfVzU' source='youtube'/>
        </Segment>
    )
}

export default Home