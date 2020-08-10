import React from 'react'
import './Css/navbar.css'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <div className='navbarWrapper'>
            <nav className='container'>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar