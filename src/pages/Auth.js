import React, {useContext, useEffect, useState} from 'react'
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
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

export const Auth = () => {
    const auth = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', name: '',
    })
    const [formType, setFormType] = useState({login: true})

    useEffect(() => {
        clearError()
    }, [error, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const switchForm = () => {
        setFormType({login: !formType.login})
    }

    const handleRequest = async () => {
        formType.login ? await loginHandler() : await registerHandler()
    }

    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', {...form})
        } catch (e) {
            console.error(e)
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>
                        {formType.login ? 'Sign in to your account' : 'Create your account'}
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
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
                                <FormControl id="name">
                                    <FormLabel>Full name</FormLabel>
                                    <Input
                                        type="name"
                                        onChange={changeHandler}
                                    />
                                </FormControl>
                        }
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                onChange={changeHandler}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                onChange={changeHandler}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{base: 'column', sm: 'row'}}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>{formType.login ? 'Remember me' : 'Sign in'}</Checkbox>
                                <Link fontSize={'md'} color={'blue.400'} onClick={switchForm}>
                                    {formType.login ? 'Do not have account?' : 'Already have an account?'}
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
                                {formType.login ? 'Sign in' : 'Sign up'}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}