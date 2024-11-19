

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArticlesResult from './ArticlesResult';
import UserResult from './UserResult';
import { useTheme } from '@mui/material';

function ResultTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

ResultTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Result() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', position: 'sticky', top: 60, backgroundColor: 'white', zIndex: 100 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{sx: { backgroundColor: `${theme.palette.navy.main}` } }}
                >
                    <Tab
                        sx={{
                            textTransform: 'none',
                            mr: { xs: '5vw', md: '15vw' },
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            color: `${theme.palette.navy.main}`,
                            '&.Mui-selected': {
                                color: `${theme.palette.navy.main}`,
                            },
                        }}
                        label="Articles"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            textTransform: 'none',
                            ml: { xs: '5vw', md: '15vw' },
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            color: `${theme.palette.navy.main}`,
                            '&.Mui-selected': {
                                color: `${theme.palette.navy.main}`,
                            },
                        }}
                        label="Users"
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <ResultTabPanel value={value} index={0}>
                <ArticlesResult />
            </ResultTabPanel>
            <ResultTabPanel value={value} index={1}>
                <UserResult />
            </ResultTabPanel>
        </Box>
    );
}
