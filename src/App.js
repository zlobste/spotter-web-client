import React from 'react';
import {
    ChakraProvider,
    Box,
    Grid,
    theme, Container,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./hooks/route.hook";
import {AuthContext} from './context/AuthContext'
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";


function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader/>
    }

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end"/>
                    <AuthContext.Provider value={{
                        token, login, logout, userId, isAuthenticated
                    }}>
                        <Router>
                            {isAuthenticated && <Navbar/>}
                            <Container className="container">
                                {routes}
                            </Container>
                        </Router>
                    </AuthContext.Provider>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
