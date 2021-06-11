import {
  ChakraProvider,
  Box,
  Grid,
  theme, Container, Button, IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './hooks/route.hook';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { useTranslation } from 'react-i18next';
import { Icon } from '@chakra-ui/icons';
import { RiZhihuFill } from 'react-icons/ri';


function App() {
  const { token, login, logout, userId, role, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, role);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    console.log(i18n.language)
    if (i18n.language === 'uk') {
      i18n.changeLanguage('ua');
      return
    }
    i18n.changeLanguage('uk');
  };


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
            <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={'1em'}>
              <Box w='100%' h='10'>
                <ColorModeSwitcher justifySelf='flex-end' />
              </Box>
              <Box w='100%' h='10' >
                <IconButton
                  mr={'0.5em'}
                  bg={'#E2E8F0'}
                  onClick={changeLanguage}
                  icon={<Icon as={RiZhihuFill} />}
                />
                {isAuthenticated && <Button onClick={logout}>{t('auth.logOut')}</Button>}
              </Box>
            </Grid>
            <Router>
              <Container maxW='xl' centerContent>
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
