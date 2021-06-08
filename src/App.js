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
import {Loader} from "./components/Loader";
import {Footer} from "./components/Footer";


function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = true // !!token
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
                            <Container  maxW="xl" centerContent>
                                {routes}
                            </Container>
                            {isAuthenticated && <Footer/> }
                        </Router>
                    </AuthContext.Provider>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
