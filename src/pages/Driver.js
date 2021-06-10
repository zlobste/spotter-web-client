import React, { useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Timer } from '../components/Timer';
import { TimerList } from '../components/TimerList';


export const Driver = () => {
  const [state, setState] = useState(true)

  const updateState = () => {
    setState(!state)
  }

  return (
    <Grid templateColumns='repeat(2, 5fr)' gap={6}>
      <Box w='100%' h='10' bg='blue.500'>
        <Timer updateState={updateState}/>
      </Box>
      <Box w='100%' h='10' bg='blue.500'>
        <TimerList state={state}/>
      </Box>
    </Grid>
  );
};
