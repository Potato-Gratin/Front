import React from "react";
import { Box, Typography } from "@mui/material";
import barcode from "../asset/images/barcode.png";
import Search from "../components/Search";

export default function Home() {
    return (
        <>
            {/* ヒーローセクション */}

            {/* PC */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    background: 'linear-gradient(#043c78, #afc8ff)',
                    padding: '3rem 0',
                    height: '45vh'
                }}
            >
                <Typography
                    variant="h2"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.5rem',
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'none',
                        width: 'fit-content',
                        margin: '0 auto',
                    }}
                >
                    TechPad
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 300,
                        letterSpacing: '0.05rem',
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'none',
                        width: 'fit-content',
                        margin: '0 auto'
                    }}
                >
                    Deeper knowledge to you...
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={barcode}
                        alt="And you will continue to enhance your curiosity."
                        width="30%"
                        height="auto"
                    />
                </Box>
                <Search width={{ xs: '60vw', md: '40vw' }} height={{ xs: '2rem', md: 'inherit' }} />
            </Box>
            {/* PC */}

            {/* モバイル */}
            <Box
                sx={{
                    display: { xs: 'block', md: 'none' },
                    background: 'linear-gradient(#043c78, #afc8ff)',
                    padding: '1.5rem 0',
                    height: '25vh'
                }}
            >
                <Typography
                    variant="h4"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontWeight: 700,
                        letterSpacing: '.5rem',
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'none',
                        width: 'fit-content',
                        margin: '0 auto',
                    }}
                >
                    TechPad
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontWeight: 300,
                        fontSize: '.8rem',
                        letterSpacing: '0.05rem',
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'none',
                        width: 'fit-content',
                        margin: '0 auto'
                    }}
                >
                    Deeper knowledge to you...
                </Typography>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={barcode}
                        alt="And you will continue to enhance your curiosity."
                        width="60%"
                        height="auto"
                    />
                </Box>
                <Search width={{ xs: '60vw', md: '40vw' }} height={{ xs: '4vh', md: 'inherit' }} />
            </Box>
            {/* モバイル */}

            {/* ヒーローセクション */}
        </>
    );
}
