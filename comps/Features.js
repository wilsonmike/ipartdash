import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoShirtOutline,
  IoStorefront,
  IoPricetagOutline,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const FeatureBlock = () => {
  return (
    <Container maxW={'100%'} py={12} mx={'0, auto'} verticalAlign={'center'} backgroundColor={'#F6FBFC'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14} >
      <Stack spacing={4} alignSelf={'center'}> 
        <Heading fontSize={'50px'}>InkPressions Quicklinks</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
         High quality custom apparel - use quicklinks to help with production, picking garments, pricing, and reports. 
        </Text> 
        <Stack spacing={4} direction='row' align='center'>
          <Button size='md'>
           HotCards 
          </Button> 
          <Button size='md'>
            Loyaltee 
          </Button> 
          <Button size='md'>
            The Baldridge Group 
          </Button>  
        </Stack>
      </Stack>
      <Flex>
        <Image
            maxH={'400px'} 
          alt={'feature image'}
          src={'tshirt.png'}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  </Container>
 )
}

export default FeatureBlock;