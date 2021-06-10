import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Grid, GridItem } from '@chakra-ui/react';
import { ProofForm } from './ProofForm';

export const ProofList = ({ timerId }) => {
  const [proofs, setProofs] = useState([]);
  const { token } = useContext(AuthContext);
  const { request } = useHttp();

  const timerProofs = useCallback(async () => {
    try {
      const data = await request(`proofs/${timerId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        setProofs(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  }, [token, request, timerId]);

  useEffect(() => {
    timerProofs();
  }, [timerProofs]);

  const updateList = () => {
    timerProofs()
  }

  return (
    <>
      <ProofForm timerId={timerId} updateList={updateList}/>
      <Grid
        templateRows={`repeat(${proofs.length}, 1fr)`}
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        {
          proofs.map((x, k) => {
            return (
              <GridItem rowSpan={1} colSpan={5} bg='tomato' key={k}>
                {x.time}
                {x.percentage}
                {x.confirmed}
              </GridItem>
            );
          })
        }
      </Grid>
    </>
  );
};