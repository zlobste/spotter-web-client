import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import {Login} from '../pages/Login'
import {Registration} from '../pages/Registration'
import {Admin} from '../pages/Admin'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/">
                    <Dashboard/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <Dashboard/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/registration">
                <Registration/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}