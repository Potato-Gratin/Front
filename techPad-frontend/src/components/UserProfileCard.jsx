import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router-dom";

export default function UserProfileCard({ sx, userName, userIcon, displayId, userDescription, userId, articles }) {
    const theme = useTheme();
    const navigate = useNavigate();

    // ダミーID
    const id = userId;

    const handleClick = () => {
        navigate(`/profile?id=${id}`)
    }

    return (
        <>
            <Box
                sx={{
                    background: 'white',
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.navy.main}`,
                    position: 'relative',
                    ...sx
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', mx: 4, mb: 1 }}>
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
                            <Typography
                                onClick={handleClick}
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underLine',
                                        textUnderlineOffset: '2px'
                                    }
                                }}
                            >
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
                <Box
                    sx={{
                        color: theme.palette.navy.main,
                        position: 'absolute',
                        right: '4rem',
                        bottom: '1.3rem',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <DescriptionOutlinedIcon />
                    <Typography sx={{ ml: 1 }}>{articles}</Typography>
                </Box>
            </Box>
        </>
    );
}