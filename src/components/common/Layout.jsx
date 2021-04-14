import {Flex} from '@chakra-ui/react';
import {Footer} from './Footer';

export const Layout = () => {
    return (
        <Flex
            p={0}
            m={0}
            overflowX="hidden"
            fontFamily="body"
            w="100%"
            minH="100vh"
            align="center"
            direction="column"
            background="background"
            position="relative"
        >
            <Flex
                flex={1}
                align="center"
                justify="flex-start"
                direction="column"
                w="100%"
                h="100%"
                position="relative"
            >
                layout
            </Flex>
            <Footer/>
        </Flex>
    );
};
