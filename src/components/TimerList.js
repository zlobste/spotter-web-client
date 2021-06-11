import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Box, Grid, GridItem } from '@chakra-ui/react';

export const TimerList = ({ state }) => {
  const [timers, setTimers] = useState([]);
  const { userId, token } = useContext(AuthContext);
  const { request } = useHttp();

  const userTimers = useCallback(async () => {
    try {
      const data = await request(`timers/drivers/${userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        setTimers(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  }, [token, userId, request]);

  useEffect(() => {
    userTimers();
  }, [userTimers, state]);


  return (

    <Box
      overflowY={'scroll'}
      h={'18.2em'}
    >
      {
        timers.map((x, k) => {
          return (
            <Box key={k} bg={'#2C5282'} color={'#F7FAFC'} mb={'0.5em'} borderRadius={'5px'}>
              <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(1, 1fr)'
              >
                <GridItem rowSpan={1} colSpan={1}>
                  start time: {new Date(x.start_time).toDateString()} {new Date(x.start_time).toLocaleTimeString()}
                </GridItem>
                <GridItem colSpan={1}>
                  finish time: {new Date(x.end_time).toDateString()} {new Date(x.end_time).toLocaleTimeString()}
                </GridItem>
              </Grid>
            </Box>
          );
        })
      }
    </Box>
  );
};