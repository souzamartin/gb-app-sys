import {Link} from 'react-router-dom'
import {Menu, Button, Icon} from 'semantic-ui-react'

const Nav = () => {
    const handleLogout = () => {
        console.log('OINK')
    }

    return (
        <div id='navmenu'>
            <Menu pointing >
                <Menu.Item
                    as={Link} to='/signin' 
                    name='Account'    
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