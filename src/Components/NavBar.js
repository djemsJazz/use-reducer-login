import React from 'react'
import './Css/navbar.css'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ProtectedLink from '../Routing/ProtectedLink'

const NavBar = () => {
    return (
        <div className='navbarWrapper'>
            <nav className='container'>
                <div>
                    <Link to="/">Home</Link>
                    <ProtectedLink to="/profile">Profile</ProtectedLink>
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar