import React from 'react'
import { Container, Box, Tabs, tabsClasses, Tab, Button } from '@mui/material';
import { locationsTab } from '../data/mock-data';
import { FaFilter } from 'react-icons/fa';

const OptionTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newVlaue) => {
        setValue(newVlaue)
    }
    return (
        <Container maxWidth='xl'>
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                px: { xs: 0, md: 2 },
                my: 2
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 }
                        }
                    }}
                >
                    {locationsTab.map((tab) => {
                        return <Tab key={tab.id} icon={tab.icon} label={tab.label} />
                    })}
                </Tabs>
                <Button
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        border: '1px solid #ddd',
                        minWidth: 80,
                        borderRadius: 2,
                        textTransform: 'capitalize',
                        color: '#000',
                    }}
                >
                    <FaFilter /> Filters
                </Button>
            </Box>
        </Container>
    )
}

export default OptionTab

