import React, { useContext, useState } from 'react';
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useTranslation } from 'react-i18next';

export const DriverCard = ({ driver }) => {
  console.log(driver);
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const [blocked, setBlocked] = useState(!!driver.blocked);
  const [role, setRole] = useState(driver.role);
  const { t } = useTranslation()

  const blockUser = async (userId) => {
    if (blocked) {
      return;
    }
    try {
      const data = await request(`users/block/${userId}`, 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        setBlocked(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const unblockUser = async (userId) => {
    if (!blocked) {
      return;
    }
    try {
      const data = await request(`users/unblock/${userId}`, 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message != null) {
        setBlocked(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const setManager = async (userId) => {
    if (blocked) {
      return;
    }
    try {
      const data = await request(`users/set_manager/${userId}`, 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message) {
        setRole(1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {driver.name} {driver.surname}
            </Heading>
            <Text color={'gray.500'}>{driver.email}</Text>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>{role}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              {t('user.role')}
            </Text>
          </Stack>

          {
            driver.blocked ?
              <Button
                w={'full'}
                mt={8}
                bg={'#C53030'}
                color={'white'}
                rounded={'md'}
                onClick={() => unblockUser(driver.id)}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                {t('user.unblock')}
              </Button>
              :
              <>
                <Button
                  w={'full'}
                  mt={8}
                  bg={'#4A5568'}
                  color={'white'}
                  rounded={'md'}
                  onClick={() => blockUser(driver.id)}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  {t('user.block')}
                </Button>
                {
                  role !== 1 ?
                    <Button
                      w={'full'}
                      mt={2}
                      bg={'#38A169'}
                      color={'white'}
                      rounded={'md'}
                      onClick={() => setManager(driver.id)}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}>
                      {t('user.set_manager')}
                    </Button>
                    :
                    ''
                }
              </>
          }
        </Box>
      </Box>
    </Center>
  );
};