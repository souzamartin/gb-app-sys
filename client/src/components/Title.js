import gb from '../images/gb.png'

import {Container, Header, Image} from "semantic-ui-react"

const Title = () => {
    return (
        <Container id='title'>
            <Image size='small' verticalAlign='middle' src={gb} />
            <Container>
                <Header id='title-header'>GHOSTBUSTERS™</Header>
                <Header size='medium'>Professional Paranormal Investigation & Elimination</Header>
                <Header sub>Serving the Five Boroughs & Greater Tri-State Area Since 1984</Header>
            </Container>
            {/* <Container textAlign='center'>
                <Header size='large' color='red'>"WE BELIEVE YOU"</Header>
                <Header size='medium'>CALL 212-555-2368</Header>
            </Container> */}
        </Container>
    )
}

export default Title