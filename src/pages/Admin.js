import React from 'react'
import {Container} from "@chakra-ui/react";
import { DriverList } from '../components/DriverList';

export const Admin = () => {
    return (
        <Container  maxW='xl' centerContent>
           <DriverList/>
        </Container>
    );
}