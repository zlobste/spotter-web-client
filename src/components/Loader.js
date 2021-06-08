import React from 'react';
import { Spinner, Stack } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Stack direction='row'>
      <Spinner size='xl' />
    </Stack>
  );
};