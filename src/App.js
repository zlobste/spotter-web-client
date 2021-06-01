import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './router'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Loader} from './components/Loader'

function App() {
    return (
        <Router>
            <ThemeProvider>
                <CSSReset/>
                <Main/>
            </ThemeProvider>
        </Router>
    );
}

export default App;

function Main() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader/>
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                userId,
                isAuthenticated,
            }}
        >
            <Router>{routes}</Router>
        </AuthContext.Provider>
    )
}

