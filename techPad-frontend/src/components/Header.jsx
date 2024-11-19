'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Link } from 'react-router-dom';

const pages = [
    { id: 1, name: 'Search', path: '/search' },
    { id: 2, name: 'Login/SignIn', path: '/auth' }
]

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{ height: 60, backgroundColor: '#ffffff', color: '#043c78', zIndex: 1000 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant='dense'>
                    {/* PC */}
                    <ElectricBoltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '1.2rem' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            letterSpacing: '0.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'none'
                        }}
                    >
                        TechPad
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                component={Link}
                                to={page.path}
                                sx={{ my: 2, color: '#043c78', display: 'block', textTransform: 'none', fontSize: '.8rem', textAlign: 'center' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {/* PC */}

                    {/* モバイル */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                                    <Typography sx={{ textAlign: 'center', textTransform: 'none', color: '#043c78' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <ElectricBoltIcon sx={{ display: { xs: 'flex', md: 'none', fontSize: '1.2rem' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TechPad
                    </Typography>
                    {/* モバイル */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
