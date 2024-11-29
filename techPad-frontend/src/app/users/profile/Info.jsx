import { useTheme, Box, Typography, Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Info() {
    const theme = useTheme();
    const navigate = useNavigate();
    const name = '山田花子';
    const displayId = '@display_test_ID';
    const image = null;
    let description = 'プロフィール説明';

    useEffect(() => {
        const handleNavigationSetting = () => {
            navigate('/userSetting');
        };
        const handleNavigationLogout = () => {
            navigate('#');
        }

        const settingsIcon = document.getElementById('settings-icon');
        settingsIcon.addEventListener('click', handleNavigationSetting);

        const logoutIcon = document.getElementById('logout-icon');
        logoutIcon.addEventListener('click', handleNavigationLogout);

        return () => {
            settingsIcon.removeEventListener('click', handleNavigationSetting);
            logoutIcon.removeEventListener('click', handleNavigationLogout);
        };
    }, [navigate]);

    // ダミー説明
    for (let i = 0; i < 500; i++) {
        description += '-';
    }

    return (
        <>
            <Box sx={{
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '1.5rem',
                paddingBottom: '3rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    width: 'calc(60vw + 4rem)',
                    position: 'relative',
                }}>
                    <Avatar sx={{
                        bgcolor: 'white',
                        width: '5.2rem',
                        height: '5.2rem',
                    }}>
                        {!image ? (
                            <AccountCircleIcon sx={{ fontSize: '6rem', color: theme.palette.navy.main }} />
                        ) : (
                            <img src={image} alt="Profile" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        )}
                    </Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                fontSize: '3rem',
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'none',
                            }}>
                            {name}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                fontSize: '1rem',
                                fontStyle: 'italic',
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'none',
                                ml: 1,
                                mt: 1
                            }}>
                            {displayId}
                        </Typography>
                    </Box>
                    <SettingsIcon
                        id="settings-icon"
                        sx={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            color: 'white',
                            cursor: 'pointer'
                        }} />
                    <LogoutIcon
                        id="logout-icon"
                        sx={{
                            position: 'absolute',
                            top: '1rem',
                            right: '3rem',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    />
                </Box>
                <Typography
                    variant="caption"
                    sx={{
                        width: '60vw',
                        mt: 4,
                        backgroundColor: 'rgba(4, 60, 120, 10%)',
                        boxShadow: '0 0 10px rgba(4, 60, 120, 10%)',
                        color: 'white',
                        py: '1rem',
                        px: '2rem'
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </>
    );
}