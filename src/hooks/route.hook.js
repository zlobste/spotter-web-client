import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import {Auth} from '../pages/Auth'
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
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth">
                <Auth/>
            </Route>
            <Redirect to="/auth"/>
        </Switch>
    )
}