import { Text } from '@chakra-ui/react';
import React from 'react';

export const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
