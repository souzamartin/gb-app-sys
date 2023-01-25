import {Segment, Header, Divider, Label, Embed} from 'semantic-ui-react'

const Home = ({user}) => {
    return (
        <Segment>
            <Header size='large'>Welcome{user ? `, ${user.firstname} ${user.lastname}` : null}</Header>
            <Header size='huge' color='red'>We're ready to believe you!</Header>
            <Divider/>
            <Label ribbon color='blue' size='large'>As Seen on TV!</Label>
            <Embed
                placeholder='https://img.youtube.com/vi/sRee26pfVzU/maxresdefault.jpg'
                id='sRee26pfVzU'
                source='youtube'/>
        </Segment>
    )
}

export default Home