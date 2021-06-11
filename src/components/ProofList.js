import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProofForm } from './ProofForm';
import { useTranslation } from 'react-i18next';

export const ProofList = ({ timerId }) => {
  const [proofs, setProofs] = useState([]);
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const { t } = useTranslation()

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
    timerProofs();
  };

  return (
    <>
      <ProofForm timerId={timerId} updateList={updateList} />
      <Box
        overflowY={'scroll'}
        h={'5.7em'}
        mt={'3em'}
      >
        {
          proofs.map((x, k) => {
            return (
              <Box key={k} bg={'#2F855A'} color={'#F7FAFC'} mb={'0.5em'} borderRadius={'5px'}>
                <Grid
                  templateRows='repeat(2, 1fr)'
                  templateColumns='repeat(1, 1fr)'
                >
                  <GridItem rowSpan={1} colSpan={1}>
                    {t('proof.time')}: {new Date(x.time).toDateString()} {new Date(x.time).toLocaleTimeString()}
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={1}>
                    {t('proof.percentage')}: {x.percentage}  {t('proof.confirmed')}: {String(x.confirmed)}
                  </GridItem>
                </Grid>
              </Box>
            );
          })
        }
      </Box>
    </>
  )
    ;
};