import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSetting from './ProfileSetting';
import MobileSearch from './MobileSearch';

const Header = () => {
  return (
    <Box sx={{ borderBottom: '1px solid #ddd', width: '100%' }}>
      <Container maxWidth="xl">
        <Box sx={{ minHeight: 90, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <LocationSearch />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <ProfileSetting />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
