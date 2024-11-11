'use client';

import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';
import { useTheme } from '@emotion/react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Auth() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgree = () => {
        handleClose();
    };

    const handleGoogleSignIn = async () => {
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/auth/redirect',
            }
        });

        if (error) {
            console.error('Google Login Error:', error.message);
        } else {
            console.log('Logged in with Google:', user);
        }
    };

    const handleGithubSignIn = async () => {
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/redirect',
            }
        });

        if (error) {
            console.error('GitHub Login Error:', error.message);
        } else {
            console.log('Logged in with GitHub:', user);
        }
    };

    const theme = useTheme();

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cookieの使用について</DialogTitle>
                <DialogContent>
                    <Typography sx={{color: theme.palette.navy.main}}>
                        当サイトでは、Cookieを使用してユーザー体験を向上させています。Cookieの使用に同意しますか？
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAgree} color='black'>
                        Yes
                    </Button>
                    <Button onClick={handleClose} color='black'>
                        No
                    </Button>
                </DialogActions>
            </Dialog>

            {/* PC */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, height: 'calc(100vh - 120px)' }}>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                        height: 'calc(100% - 60px)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: '1.5rem',
                        paddingBottom: '4rem'
                    }}
                >
                    <Typography
                        variant="h2"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            fontSize: '5rem',
                            letterSpacing: '.5rem',
                            color: 'white',
                            textDecoration: 'none',
                            textTransform: 'none',
                            width: 'fit-content',
                            height: 'fit-content',
                            margin: '0 auto',
                            paddingBottom: '1.3rem',
                            marginBottom: '3rem'
                        }}
                    >
                        SignUp/SignIn
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<GoogleIcon />}
                        onClick={handleGoogleSignIn}
                        sx={{
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: `${theme.palette.navy.main}`,
                            borderColor: `${theme.palette.navy.main}`,
                            backgroundColor: 'white',
                            marginBottom: '1rem',
                            width: '20%',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: `${theme.palette.navy.main}`,
                            },
                        }}
                    >
                        with Google
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        onClick={handleGithubSignIn}
                        sx={{
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            color: `${theme.palette.navy.main}`,
                            borderColor: `${theme.palette.navy.main}`,
                            backgroundColor: 'white',
                            width: '20%',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: `${theme.palette.navy.main}`,
                            },
                        }}
                    >
                        with GitHub
                    </Button>
                </Box>
            </Box>
            {/* PC */}

            {/* モバイル */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, height: 'calc(100vh - 120px)' }}>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        background: 'linear-gradient(#043c78, #afc8ff)',
                        height: 'calc(100% - 60px)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: '1.5rem',
                        paddingBottom: '2rem'
                    }}
                >
                    <Typography
                        variant="h4"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            textTransform: 'none',
                            width: 'fit-content',
                            margin: '0 auto',
                            paddingBottom: '0.8rem'
                        }}
                    >
                        SignUp/SignIn
                    </Typography>
                </Box>
            </Box>
            {/* モバイル */}
        </>
    );
};
