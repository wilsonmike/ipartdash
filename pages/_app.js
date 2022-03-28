import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../comps/Layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>InkPressions Quicklinks</title>
        <link rel="shortcut icon" href="/ipicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />   
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
