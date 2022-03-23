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
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoStorefront,
  IoPricetagOutline,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Link from 'next/link';
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
    <Container maxW={'100%'} py={12}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={4}>
        <Text
          textTransform={'uppercase'}
          color={'green.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('green.50', 'green.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          Snapshot
        </Text>
        <Heading>High quality <strong>custom apparel</strong></Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
              <Link href='/artboard/loyaltee' passHref>
                  <a>
          <Feature 
            icon={
              <Icon as={IoAnalyticsSharp} color={'green.400'} w={5} h={5} />
            }
            iconBg={useColorModeValue('green.50', 'green.900')}
            text={'Active Stores'}
          />

                  </a> 
              </Link>
          <Feature
            icon={<Icon as={IoPricetagOutline} color={'green.400'} w={5} h={5} />}
            iconBg={useColorModeValue('green.50', 'green.900')}
            text={'Pricing'}
          />
          <Feature
            icon={
              <Icon as={IoSearchSharp} color={'green.400'} w={5} h={5} />
            }
            iconBg={useColorModeValue('green.50', 'green.900')}
            text={'Market Analysis'}
          />
        </Stack>
      </Stack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={
            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  </Container>
 )
}

export default FeatureBlock;