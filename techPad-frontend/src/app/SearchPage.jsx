

import { Box, Typography } from "@mui/material";
import barcode from "../asset/images/barcode.png";
import Search from "../components/Search";
import { useTheme } from "@mui/material";

export default function SearchPage() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'block' }, height: 'calc(100vh - 120px)' }}>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                        height: 'calc(100% - 60px)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        pt: 2,
                        pb: '4rem'
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
                            margin: '0 auto',
                            marginBottom: '.5rem'
                        }}
                    >
                        TechPad
                    </Typography>
                    <Typography
                        variant="body1"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 300,
                            fontSize: '1.3rem',
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
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', marginBottom: '.5rem' }}>
                        <img
                            src={barcode}
                            alt="And you will continue to enhance your curiosity."
                            width="70%"
                            height="auto"
                        />
                    </Box>
                    <Search width={{ xs: '60vw', md: '35vw' }} height={{ xs: '2rem', md: 'inherit' }} />
                </Box>
            </Box>
        </>
    );
}
