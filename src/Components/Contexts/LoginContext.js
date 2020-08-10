import React, { createContext, useReducer } from 'react'
import { loginReducer } from '../Reducers/LoginReducer'

export const LoginContext = createContext()

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: false,
    isAuthenticated: false,
}

const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const contextValues = { state, dispatch }
    return (
        <LoginContext.Provider value={contextValues}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginProvider