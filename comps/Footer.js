import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
    return ( 
        <Box
      bg={useColorModeValue('gray.50', 'gray.900')} 
      position={'sticky'}
      bottom={'0'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
        <Text>© 2020 InkPressions. All rights reserved</Text>
      </Container>
    </Box>
     );
}
 
export default Footer;