import React from 'react';
import { Grid } from '@chakra-ui/react';
import { DriverCard } from './DriverCard';


export const DriverList = ({ drivers }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
      {
        drivers.map((driver, key) => {
          return (
            <DriverCard driver={driver} key={key} />
          );
        })
      }
    </Grid>
  );
};