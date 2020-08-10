import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../Components/Contexts/LoginContext'

const ProtectedLink = ({ to, children }) => {
    const { state: {isAuthenticated} } = useContext(LoginContext)
    if (isAuthenticated) return <Link to={to}>{children}</Link>
    return null
}
export default ProtectedLink