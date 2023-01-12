import {useHistory, NavLink} from 'react-router-dom'

import {Menu, Button, Icon} from 'semantic-ui-react'

const Nav = ({user, setUser}) => {
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

    return (
        <div id='navmenu'>
            <Menu tabular>
                <Menu.Item
                    as={NavLink} to='/account' 
                    name='Account'
                />

                <Menu.Item
                    as={NavLink} to='/entities'
                    name='Paranormal Entities'
                />
                
                <Menu.Item
                    as={NavLink} to='/services'
                    name='Services'
                />

                <Menu.Item>
                    <Button animated onClick={handleLogout}>
                        <Button.Content visible >
                            <Icon name='log out' />
                        </Button.Content>
                        <Button.Content hidden>
                            Log Out
                        </Button.Content>
                    </Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav