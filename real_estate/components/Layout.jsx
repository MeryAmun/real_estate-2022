import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth='1280px' m='auto'>
      <header>Navbar</header>
      {children}
      <main>
        <footer>Footer</footer>
      </main>
    </Box>
  </>
)
export default Layout
