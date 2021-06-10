import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Grid, GridItem } from '@chakra-ui/react';

export const TimerList = ({state}) => {
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
    <Grid
      templateRows={`repeat(${timers.length}, 1fr)`}
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      {
        timers.map((x, k) => {
          return (
            <GridItem rowSpan={1} colSpan={5} bg='tomato' key={k}>
              {x.start_time}
              {x.end_time}
            </GridItem>
          );
        })
      }
    </Grid>
  );
};