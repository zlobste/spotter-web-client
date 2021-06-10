import {
  ChakraProvider,
  Box,
  Grid,
  theme, Container, Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './hooks/route.hook';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';


function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated,
    }}>
      <ChakraProvider theme={theme}>
        <Box textAlign='center' fontSize='xl'>
          <Grid minH='100vh' p={3}>
            <ColorModeSwitcher justifySelf='flex-end' />
            <Router>
              <Container maxW='xl' centerContent>
                <Button onClick={logout}>Log out</Button>
                {routes}
              </Container>
              {isAuthenticated && <Footer />}
            </Router>

          </Grid>
        </Box>
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default App;
