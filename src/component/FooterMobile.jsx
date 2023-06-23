import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

const footerMenu = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
  { id: 2, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
  { id: 3, text: 'Login', icon: <FaRegUserCircle size={18} /> },
];

const FooterMenu = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, borderTop: '1px solid #ddd', mt:2 }}>
      <Stack>
        {footerMenu.map((item) => {
          return (
            <IconButton color="primary" key={item.id}>
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                direction="column"
                spacing={1}
              >
                {item.icon}
                <Typography> {item.text}</Typography>
              </Stack>
            </IconButton>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FooterMenu;