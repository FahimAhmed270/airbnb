import { useTheme } from '@emotion/react';
import { IconButton, InputBase } from '@mui/material'
import { styled, Box } from '@mui/system';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileSearch = () => {
    const theme = useTheme()
    const MobileSearch = styled(Box)(()=>({
        p:'2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius:20,
        [theme.breakpoints.down('sm')]:{
            marginLeft:'10px',
        }
    }))
   
    return (
        <MobileSearch>
            <IconButton sx={{ p: '10px' }}>
                <FaSearch />
            </IconButton>
            <InputBase sx={{flex: 1, xs:{ml:0}, sm:{ml:2}, md:{ml:2}}} placeholder='Where to?' />
            <IconButton type='submit'>
                <VscSettings />
            </IconButton>
        </MobileSearch>
    )
}

export default MobileSearch
