import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Redirect to="/dashboard" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Redirect to="/login" />
        </Switch>
    )
}
