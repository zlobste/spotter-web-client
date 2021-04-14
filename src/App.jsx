import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import {css, Global} from '@emotion/react';
import {Layout} from './components/common/Layout';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Routes} from './routes';
import {theme} from './theme';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset/>
            <Global styles={GlobalStyles}/>
            <Router>
                <Layout>
                    <Routes/>
                </Layout>
            </Router>
        </ChakraProvider>
    );
};
