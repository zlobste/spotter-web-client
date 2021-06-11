import React from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { Logo } from './Logo';
import { SocialButton } from './SocialButton';
import { ListHeader } from './ListHeader';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'} fontSize={'lg'}>
            <ListHeader>{t('footer.company')}</ListHeader>
            <Link href={'#'} >{t('footer.about')}</Link>
            <Link href={'#'}>{t('footer.blog')}</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={'lg'}>
            <ListHeader fontWeight={'bold'}>{t('footer.support')}</ListHeader>
            <Link href={'#'}>{t('footer.help')}</Link>
            <Link href={'#'}>{t('footer.terms')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.stay')}</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label='Subscribe'
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};