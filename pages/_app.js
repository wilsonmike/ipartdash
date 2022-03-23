import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../comps/Footer'
import Layout from '../comps/Layout'
import Navbar from '../comps/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />   
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
