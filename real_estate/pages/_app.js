import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import NProgress from 'nprogress'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
