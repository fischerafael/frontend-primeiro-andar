import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NewRoom from './Pages/NewRoom/NewRoom'
import Register from './Pages/Register/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/newroom' component={NewRoom} />
            </Switch>
        </BrowserRouter>        
    )
}