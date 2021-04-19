import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header1, Main, Wrapper} from "../styles";
import {Dashboard} from "./Dashboard";
import Login from "./Login";
import Register from "./Register";

export const Home = () => {
    return (
        <Router>
            <Wrapper>
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
                </Switch>
            </Wrapper>
        </Router>
    );
}
