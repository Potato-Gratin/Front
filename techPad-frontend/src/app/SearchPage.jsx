import { Box, Typography } from "@mui/material";
import barcode from "../asset/images/barcode.png";
import Search from "../components/Search";
import { useTheme } from "@mui/material";

export default function SearchPage() {
    const theme = useTheme();

    return (
        <>
            {/* PC */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                    height: '68.2vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: '3rem',
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
            {/* PC */}

            {/* モバイル */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    background: 'linear-gradient(#043c78, #afc8ff)',
                    height: '73.4vh',
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
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                        textTransform: 'none',
                        width: 'fit-content',
                        margin: '0 auto',
                        marginBottom: '.3rem'
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
                        width="50%"
                        height="auto"
                    />
                </Box>
                <Search width={{ xs: '60vw', md: '40vw' }} height={{ xs: '4vh', md: 'inherit' }} />
            </Box>
            {/* モバイル */}
        </>
    );
}
