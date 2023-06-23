import { Button, Paper, Typography,Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import Divider from '@mui/material/Divider';
import { IoSearchCircleSharp } from 'react-icons/io5';

const LocationSearch = () => {
    const choices = [
        { id: 1, text: 'Anywhere' },
        { id: 2, text: 'Any week' },
        { id: 3, text: 'Add guest', withIcon: true },
    ];
    return (
        <Paper elevation={3} sx={{
            borderRadius:20,
            ml: 15,
            fontFamily: 'Poppins',
            fontFamily:'Poppins-sans-serif',
        }}>
        <Stack sx={{
            borderRadius: 20,
            p: 1,
            pl:2,
        }}
        divider={<Divider orientation="vertical" flexItem/>}
        >
            {choices.map((cho, id)=>{
                return (
                    <Button key={id}>
                        <Typography sx={{
                            color:'#222',
                            fontWeight: 'bold',
                        }}>{cho.text}</Typography>
                        {cho.withIcon && (
                            <Box sx={{
                                display:'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pl:1,
                            }}>
                                <IoSearchCircleSharp color='#FF385C' size={32} />
                            </Box>
                        )}
                    </Button>
                )
            })}

        </Stack>
        </Paper>
    )
}

export default LocationSearch
