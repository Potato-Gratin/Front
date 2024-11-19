

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Articles from './tab/Articles';
import Review from './tab/Review';
import SendBadge from './tab/SendBadge';
import ReceiveBadge from './tab/ReceiveBadge';

function ProfileTabPanel(props) {
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

ProfileTabPanel.propTypes = {
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

export default function ProfileTab() {
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
                    TabIndicatorProps={{ sx: { backgroundColor: theme.palette.navy.main, height: '1.5px' } }}
                    sx={{ width: '100%', mx: '5rem', gap: 4 }}
                >
                    <Tab
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: theme.palette.navy.main,
                            '&.Mui-selected': {
                                color: theme.palette.navy.main,
                            },
                            mx: 4,
                        }}
                        label="投稿記事"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: theme.palette.navy.main,
                            '&.Mui-selected': {
                                color: theme.palette.navy.main,
                            },
                            mx: 4,
                        }}
                        label="投稿レビュー"
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: theme.palette.navy.main,
                            '&.Mui-selected': {
                                color: theme.palette.navy.main,
                            },
                            mx: 4,
                        }}
                        label="受信バッジ"
                        {...a11yProps(2)}
                    />
                    <Tab
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: theme.palette.navy.main,
                            '&.Mui-selected': {
                                color: theme.palette.navy.main,
                            },
                            mx: 4,
                        }}
                        label="送信バッジ"
                        {...a11yProps(3)}
                    />
                </Tabs>
            </Box>
            <ProfileTabPanel value={value} index={0}>
                <Articles />
            </ProfileTabPanel>
            <ProfileTabPanel value={value} index={1}>
                <Review />
            </ProfileTabPanel>
            <ProfileTabPanel value={value} index={2}>
                <ReceiveBadge />
            </ProfileTabPanel>
            <ProfileTabPanel value={value} index={3}>
                <SendBadge />
            </ProfileTabPanel>
        </Box>
    );
}
