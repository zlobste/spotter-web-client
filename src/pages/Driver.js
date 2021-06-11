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
    <Grid templateColumns='repeat(2, 5fr)' gap={6} mb={'15em'}>
      <Box w='25em' h='10'>
        <Timer updateState={updateState}/>
      </Box>
      <Box w='20em'  h='10'>
        <TimerList state={state}/>
      </Box>
    </Grid>
  );
};
