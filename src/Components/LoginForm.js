import React, {useContext} from 'react'
import { login } from './utils'
import { Input, Button } from 'semantic-ui-react'
import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, FIELD_CHANGE, LOGOUT } from './Reducers/LoginReducer'
import {LoginContext} from './Contexts/LoginContext'

const LoginForm = () => {
    const { state, dispatch } = useContext(LoginContext)
    const {isAuthenticated, error, username, password, isLoading} = state
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: LOGIN })
        try {
            await login(username, password)
            dispatch({ type: LOGIN_SUCCESS })
        } catch (error) {
            dispatch({ type: LOGIN_ERROR })
        }
    }
    const logout = () => {
        dispatch({ type: LOGOUT })
    }
    return (
        <div>
            {isAuthenticated ?
                <>
                    <h2>Hello {username}</h2>
                    <Button onClick={logout}>Logout</Button>
                </> :
                <div>
                    {error && <h2 style={{ color: 'red' }} >Incoorrect username or passoword</h2>}
                    <form onSubmit={handleFormSubmit}>
                        <Input type='text' value={username} onChange={(e) => dispatch({ type: FIELD_CHANGE, field: 'username', value: e.target.value })} />
                        <Input type='password' value={password} onChange={(e) => dispatch({ type: FIELD_CHANGE, field: 'password', value: e.target.value })} />
                        <Button disabled={isLoading} loading={isLoading} >Login</Button>
                    </form>
                </div>
            }
        </div>
    )
}
export default LoginForm