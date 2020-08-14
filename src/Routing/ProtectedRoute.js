import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../Components/Contexts/LoginContext'

const ProtectedRoute = ({ component, path, ...rest }) => {
    const { state: {isAuthenticated} } = useContext(LoginContext)

    if (isAuthenticated) {
        return (<Route path={path} component={component} {...rest} />);
    } else {
        return (<Redirect to={{ pathname: "/" }} />)
    }
}

export default ProtectedRoute;
