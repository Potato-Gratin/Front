import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CopyrightIcon from '@mui/icons-material/Copyright';

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function Footer() {
    return (
        <AppBar position="absolute" sx={{ height: 32, backgroundColor: '#ffffff', color: '#043c78', bottom: 0, top: 'auto' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant='dense'>
                    <CopyrightIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: .1, fontSize: '.7rem' }} />
                    <Typography
                        variant="caption"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 600,
                            letterSpacing: '.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'none'
                        }}
                    >
                        Potato Gratin
                    </Typography>
                    <Typography variant="caption"
                        noWrap
                        onClick={returnTop}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 600,
                            letterSpacing: '.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent: 'flex-end',
                            cursor: 'pointer'
                        }}>
                        Back to Top
                    </Typography>
                    <CopyrightIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: .1, fontSize: '.7rem' }} />
                    <Typography
                        variant="caption"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 600,
                            letterSpacing: '.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Potato Gratin
                    </Typography>
                    <Typography variant="caption"
                        noWrap
                        onClick={returnTop}
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 600,
                            letterSpacing: '.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent: 'flex-end',
                            cursor: 'pointer'
                        }}>
                        Back to Top
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Footer;
