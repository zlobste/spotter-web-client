import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Grid } from '@chakra-ui/react';
import { DriverCard } from './DriverCard';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const DriverList = ( ) => {
  const [drivers, setDrivers] = useState([]);
  const { token } = useContext(AuthContext);
  const { request } = useHttp();

  const getDrivers = useCallback(async () => {
    try {
      const data = await request(`users/drivers`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        setDrivers(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  }, [token, request]);

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);


  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
      {
        drivers.map((driver, k) => {
          return (
            <DriverCard driver={driver} key={k} />
          );
        })
      }
    </Grid>
  );
};

