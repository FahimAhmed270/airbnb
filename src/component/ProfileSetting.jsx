import { Button, Link } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfileSetting = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
        }}>
            <Link href="#" style={{fontWeight:'600'}}>Airbnb your home</Link>
            <Stack>
                <Button>
                    <BsGlobe size={24}/>
                </Button>
                <Button sx={{
                    borderRadius:10,
                    border:'1px solid #ddd'
                }}>
                    <Stack>
                        <AiOutlineMenu size={24}/>
                        <FaRegUserCircle size={24}/>
                    </Stack>
                </Button>
            </Stack>
        </Box>
    )
}

export default ProfileSetting
