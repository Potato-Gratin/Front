

import React, { useState } from "react";
import { TextField, Button, Box, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Search({ width, height }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [radio, setRadioValue] = useState('articles');

    const handleChange = (e) => {
        setRadioValue(e.target.value);
    }

    // 検索ボタンを押したときの処理
    const handleSubmit = (e) => {
        e.preventDefault();
        if (radio === 'articles') {
            navigate(`/article/result?q=${search}`);
        } else if (radio === 'users') {
            navigate(`/user/result?q=${search}`);
        } else {
            navigate(`#`);
        }
    }

    return (
        <>
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
                            height: '2.5rem',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: `${theme.palette.navy.main}`,
                            },
                        }}
                    >
                        Search
                    </Button>
                    <RadioGroup
                        row
                        value={radio}
                        onChange={handleChange}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                            gap: 5,
                            mt: 2
                        }}
                    >
                        <FormControlLabel
                            value="articles"
                            control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' }, flex: 1 }} />}
                            label="記事検索"
                        />
                        <FormControlLabel
                            value="users"
                            control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' }, flex: 1 }} />}
                            label="ユーザー検索"
                        />
                    </RadioGroup>
                </form>
            </Box>
        </>
    );
}
