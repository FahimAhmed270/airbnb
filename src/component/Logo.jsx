import React from 'react'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { FaAirbnb } from 'react-icons/fa';
import { Typography } from '@mui/material';

const Logo = () => {
  const Logo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  }))
  return (
    <Logo>
      <FaAirbnb size={30} color='#ff385c' />
      <Typography sx={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ff385c',
      }}>airbnb</Typography>
    </Logo>
  )
}

export default Logo
