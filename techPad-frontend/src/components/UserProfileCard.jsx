import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserProfileCard({ sx, userName, userIcon, displayId, userDescription }) {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    background: 'white',
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.navy.main}`, ...sx
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 4, mb: 1 }}>
                    <Avatar sx={{
                        bgcolor: 'white',
                        width: '3.5rem',
                        height: '3.5rem',
                    }}>
                        {!userIcon ? (
                            <AccountCircleIcon sx={{ fontSize: '5rem', color: theme.palette.navy.main }} />
                        ) : (
                            <img src={userIcon} alt="Profile" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        )}
                    </Avatar>
                    <Box
                        sx={{
                            ml: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            color: theme.palette.navy.main
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                {userName}
                            </Typography>
                            <Typography
                                fontStyle='italic'
                                color="gray"
                                sx={{ alignSelf: 'end', ml: 1.5, mb: .3, fontSize: '.8rem' }}
                            >
                                {displayId}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: theme.palette.navy.main,
                                fontSize: '.9rem',
                                mt: 2,
                                ml: 1
                            }}
                        >
                            {userDescription.length > 100 ? `${userDescription.substring(0, 100)}...` : userDescription}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}