import React from 'react';
import { DriverList } from '../components/DriverList';
import { Container } from '@chakra-ui/react';

const DRIVERS = [
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
  {
    name: 'Nick',
    surname: 'Krainiuk',
    email: 'nkrainiuk@gmail.com',
    rating: 5,
    alcohol_rate: 0,
  },
];

export const Dashboard = () => {
  return (
    <Container maxW='xl' centerContent>
      <DriverList drivers={DRIVERS} />
    </Container>
  );
};