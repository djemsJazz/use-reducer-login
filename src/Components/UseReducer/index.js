import React, { useReducer } from 'react'
import { login } from './utils'
import { Input, Button } from 'semantic-ui-react'
import { loginReducer, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, FIELD_CHANGE, LOGOUT } from './Reducer'

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: false,
    isLoggedIn: false,
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState)

    const { username,
        password,
        isLoading,
        error,
        isLoggedIn } = state

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
            {isLoggedIn ?
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
export default UseReducer