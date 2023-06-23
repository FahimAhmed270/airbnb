import { Button } from '@mui/base';
import { Box, Link, Paper } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import { flexBetweenCenter, justifyCenter } from '../theme/CommonStyle';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoChevronUpOutline } from 'react-icons/io5';

const footerLinks = [
    { id: 1, text: 'Terms', url: '#' },
    { id: 2, text: 'Sitemap', url: '#' },
    { id: 3, text: 'Privacy', url: '#' },
    { id: 4, text: 'Destination', url: '#' },
];

const Footer = () => {
    return (
        <Box sx={{
            borderTop: '1px solid #ddd',
            display: 'flex',
            width: '100%',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontWeight: '300',
            
        }}>
            <Container maxWidth='xl'>
                <Box sx={{py:1, display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, width: '100%' }}>
                    <Stack>
                        <Paper>
                            <Link href="#">2023 Airbnb Inc.</Link>
                        </Paper>
                        {footerLinks.map((link) => {
                            return (
                                <Paper key={link.id}>
                                    <Link href={link.url}>{link.text}</Link>
                                </Paper>
                            )
                        })}
                    </Stack>
                    <Stack sx={{
                        fontFamily: 'Poppins',
                        fontSize: '15px',
                        fontWeight: '500',
                    }}>
                        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BsGlobe size={18} />
                                English (US)
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <BsCurrencyDollar size={16} />
                                USD
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                support & Resources
                                <IoChevronUpOutline size={16} />
                            </Box>
                        </Paper>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
