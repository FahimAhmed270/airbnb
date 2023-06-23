import { Container, Box } from '@mui/material'
import React from 'react'
import Footer from './component/Footer'
import FooterMobile from './component/FooterMobile'
import Header from './component/Header'
import LocationCard from './component/LocationCard'
import OptionTab from './component/OptionTab'

const App = () => {
  return (
    <>
      <Header />
      <OptionTab />
      <Box>
        <Container maxWidth="xl">
          <LocationCard />
        </Container>
      </Box>

      <Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Footer />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMobile />
        </Box>
      </Box>
    </>
  )
}

export default App
