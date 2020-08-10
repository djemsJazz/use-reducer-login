import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import NavBar from '../Components/NavBar'

const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/profile' exact component={Profile} />
                </Switch>
            </>
        </Router>
    )
}
export default AppRouter
