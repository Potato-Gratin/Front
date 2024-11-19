'use client';

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Search({ width, height }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    // 検索ボタンを押したときの処理
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/result?q=${search}`);
    }

    return (
        <>
            {/* PC */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, margin: '0 auto', width: 'fit-content' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="filled-basic"
                        type="search"
                        size="small"
                        placeholder="検索"
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            width: width,
                            height: height,
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            mr: 2,
                            '& fieldset': {
                                border: 'none',
                            },
                            justifyContent: 'center',
                        }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        type="submit"
                        sx={{
                            textTransform: 'none',
                            fontSize: '.8rem',
                            color: `${theme.palette.navy.main}`,
                            backgroundColor: 'white',
                            height: '100%',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: `${theme.palette.navy.main}`,
                            },
                        }}
                    >
                        Search
                    </Button>
                </form>
            </Box>
            {/* PC */}

            {/* モバイル */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, margin: '0 auto', width: 'fit-content' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="filled-basic"
                        type="search"
                        size="small"
                        placeholder="検索"
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            width: width,
                            height: height,
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            mr: 2,
                            '& fieldset': {
                                border: 'none',
                            },
                            '& .MuiOutlinedInput-input': {
                                height: height,
                                fontSize: '.8rem',
                                padding: '0 .8rem',
                            },
                        }}
                    />
                    <Button
                        variant="outlined"
                        type="submit"
                        sx={{
                            textTransform: 'none',
                            fontSize: '1rem',
                            backgroundColor: 'blue.main',
                            color: '#043c78',
                            borderColor: '#afc8ff',
                            height: height,
                            verticalAlign: 'unset',
                        }}
                    >
                        <SearchIcon sx={{ display: { fontSize: '1.2rem' } }} />
                    </Button>
                </form>
            </Box>
            {/* モバイル */}
        </>
    );
}