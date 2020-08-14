import React, { useContext } from 'react'
import { LoginContext } from '../Components/Contexts/LoginContext'
import LoginForm from '../Components/LoginForm'
import { LOGOUT } from '../Components/Reducers/LoginReducer'
import { Button } from 'semantic-ui-react'

const Home = () => {
    const { state, dispatch } = useContext(LoginContext)
    const { isAuthenticated, username } = state
    const logout = () => {
        dispatch({ type: LOGOUT })
    }
    return (
        <div className="container">
            <h1>Home Page</h1>
            {isAuthenticated ?
                <>
                    <h2>Hello {username}</h2>
                    <Button color="red" onClick={logout}>Logout</Button>
                </> : <LoginForm />}

        </div>
    )
}
export default Home
