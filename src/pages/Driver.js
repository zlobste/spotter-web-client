import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Timer } from '../components/Timer';
import { TimerList } from '../components/TimerList';

export const Driver = () => {
  return (
    <Grid templateColumns='repeat(2, 5fr)' gap={6}>
      <Box w='100%' h='10' bg='blue.500'>
        <Timer />
      </Box>
      <Box w='100%' h='10' bg='blue.500'>
        <TimerList />
      </Box>
    </Grid>
  );
};
