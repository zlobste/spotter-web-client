import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Container } from '@chakra-ui/react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useStopwatch } from 'react-timer-hook';
import { ProofList } from './ProofList';


export const Timer = ({ updateState }) => {
  const { userId, token } = useContext(AuthContext);
  const { request } = useHttp();
  const [timerId, setTimerId] = useState(0);
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({});

  const startTimer = async () => {
    try {
      const data = await request(`timers/start/${userId}`, 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message) {
        reset();
        start();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const stopTimer = async () => {
    try {
      const data = await request(`timers/stop/${userId}`, 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message) {
        pause();
        updateState();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const pendingTimer = useCallback(async () => {
    try {
      const data = await request(`timers/pending/${userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        const startDate = new Date(data.message.start_time);
        const offset = new Date();
        console.log(offset);
        console.log(startDate);
        reset(offset.setMilliseconds(Math.abs(offset - startDate)));
        start();
        setTimerId(data.message.id);
      }
    } catch (e) {
      console.error(e);
    }
  }, [token, userId, request, timerId]);

  useEffect(() => {
    pendingTimer();
  }, [pendingTimer]);

  console.log(timerId);
  return (
    <Container>
      <Button onClick={startTimer}>Start timer</Button>
      <Button onClick={stopTimer}>Stop timer</Button>
      {hours}:{minutes}:{seconds}
      <ProofList timerId={timerId} />
    </Container>
  );
};