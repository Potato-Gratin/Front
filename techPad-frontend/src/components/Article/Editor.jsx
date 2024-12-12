import 'easymde/src/css/easymde.css';
import 'codemirror/lib/codemirror.css';
import MarkdownEditor from 'react-markdown-editor-smde';
import { useRef, useState } from 'react';
import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';

const markdownValue = '';
const titleValue = '';
const radioValue = 'false';

export default function Editor() {
    const theme = useTheme();
    const navigate = useNavigate({ mdValue: markdownValue });
    const el = useRef();
    const [radio, setRadioValue] = useState(radioValue);
    const [title, setTitleValue] = useState(titleValue);

    const handleChange = (e) => {
        setRadioValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let articleId;
        const md = el.current.mdValue;

        supabase.auth.getSession().then((res) => {
            const session = res.data.session;
            const userId = session?.user?.id;
            if (!userId) {
                navigate('/auth');
                return;
            }

            const data = {
                title: title,
                content: md,
                is_public: Boolean(radio),
                user_id: userId,
            }
            fetch(process.env.REACT_APP_API_ORIGIN + '/articles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    articleId = data.id
                    navigate("/articles/" + articleId);
                })
        })
    }

    const toolbar = [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "preview",
        "guide",
        {
            name: 'reset',
            action: doReset,
            className: 'fa-solid fa-clock-rotate-left',
            title: 'Reset'
        },
    ];

    function doReset() {
        if (el.current) {
            el.current.mdValue = '';
        }
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 120px)'
                }}
            >
                <form onSubmit={handleSubmit} style={{ display: 'block', alignItems: 'center' }}>
                    <Box sx={{ width: '60vw' }}>
                        <Typography
                            variant='h2'
                            sx={{
                                fontWeight: 600,
                                textAlign: 'center',
                                color: 'white',
                                letterSpacing: '.3rem',
                                py: 4,
                            }}
                        >
                            Article Editor
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, width: '100%' }}>
                            <TextField
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitleValue(e.target.value)}
                                sx={{
                                    background: 'white',
                                    width: '70%',
                                    borderRadius: '5px',
                                    '& .MuiOutlinedInput-root': {
                                        fontFamily: 'Source Code Pro, monospace',
                                    },
                                }}
                            />
                            <RadioGroup
                                row
                                value={radio}
                                onChange={handleChange}
                                sx={{
                                    width: '25%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 2,
                                    ml: '2.5%',
                                    color: 'white'
                                }}
                            >
                                <FormControlLabel
                                    value="false"
                                    control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                                    label="下書き"
                                    sx={{ flex: 1, margin: 0 }}
                                />
                                <FormControlLabel
                                    value="true"
                                    control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                                    label="公開"
                                    sx={{ flex: 1, margin: 0 }}
                                />
                            </RadioGroup>
                        </Box>
                        <MarkdownEditor ref={el} toolbar={toolbar} />
                        <Box sx={{ width: 'fit-content', margin: '0 auto' }}>
                            <Button
                                variant='contained'
                                type='submit'
                                sx={{
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    background: theme.palette.navy.main,
                                    color: 'white',
                                    width: '25vw',
                                    borderRadius: '1rem',
                                    my: 4
                                }}
                            >
                                投稿
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </>
    )
}
