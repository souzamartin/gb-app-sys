import {useHistory} from 'react-router-dom'

import {Button, Icon} from 'semantic-ui-react'

const Logout = ({user, setUser}) => {
    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        .then(r => {
            if (r.ok) {
                setUser(null)
                history.push('/')
            }
        })
    }

    if (!user) return null

    return (
        <Button animated onClick={handleLogout}>
            <Button.Content visible >
                <Icon name='log out'/>
            </Button.Content>
            <Button.Content hidden>
                Log Out
            </Button.Content>
        </Button>
    )
}

export default Logout