import {NavLink} from 'react-router-dom'

import Logout from './Logout'

import {Menu} from 'semantic-ui-react'

const Nav = ({user, setUser}) => {

    return (
        <div id='navmenu'>
            <Menu borderless>
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

                <Menu.Item
                    as={NavLink} to='/testimonials'
                    name='Testimonials'
                />

                <Menu.Item className='to-right'>
                   <Logout user={user} setUser={setUser}/>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav