import React, { useContext, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next'

export const Auth = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState({
    email: '', password: '', name: '', surname: '',
  });
  const [formType, setFormType] = useState({ login: true })
  const { t } = useTranslation()

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const switchForm = () => {
    setFormType({ login: !formType.login });
  };

  const handleRequest = async () => {
    formType.login ? await loginHandler() : await registerHandler();
  };

  const registerHandler = async () => {
    try {
      await request('auth/register', 'POST', {
        data: {
          name: form.name,
          surname: form.surname,
          email: form.email,
          password: form.password,
        },
      });
    } catch (e) {
      console.error(e);
    }
    switchForm();
  };

  const loginHandler = async () => {
    try {
      const data = await request('auth/login', 'POST', {
        data: {
          email: form.email,
          password: form.password,
        },
      });
      auth.login(data.message.token, data.message.user_id, data.message.role);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>
            {formType.login ? t('auth.signIn.info') : t('auth.signUp.info')}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('info.enjoy')} ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {
              formType.login ? '' :
                <>
                  <FormControl id='name'>
                    <FormLabel> {t('user.name')}</FormLabel>
                    <Input
                      name='name'
                      type='name'
                      onChange={changeHandler}
                    />
                  </FormControl>
                  <FormControl id='surname'>
                    <FormLabel>{t('user.surname')}</FormLabel>
                    <Input
                      name='surname'
                      type='surname'
                      onChange={changeHandler}
                    />
                  </FormControl>
                </>
            }
            <FormControl id='email'>
              <FormLabel>{t('user.email')}</FormLabel>
              <Input
                name='email'
                type='email'
                onChange={changeHandler}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>{t('user.password')}</FormLabel>
              <Input
                name='password'
                type='password'
                onChange={changeHandler}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>{formType.login ? t('auth.signIn.remember') :  t('auth.signIn.label')}</Checkbox>
                <Link fontSize={'md'} color={'blue.400'} onClick={switchForm}>
                  {formType.login ? t('auth.doNot') : t('auth.already')}
                </Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleRequest}
              >
                {formType.login ? t('auth.signIn.label') :  t('auth.signUp.label') }
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};