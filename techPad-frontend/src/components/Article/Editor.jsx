import 'easymde/src/css/easymde.css';
import 'codemirror/lib/codemirror.css';
import MarkdownEditor from 'react-markdown-editor-smde';
import { useRef } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Editor = () => {
    const el = useRef();
    const toolbar = ["bold",
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
    ];

    function onSubmit() {
        if (el.current) {
            const md = el.current.mdValue;
            console.log(md);
        }
    }

    function doReset() {
        if (el.current) {
            el.current.mdValue = '';
        }
    }

    return (
        <>
            <Box sx={{ width: 'fit-content', margin: '0 auto' }}>
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
                    <TextField
                        placeholder='Title'
                        sx={{
                            background: 'white',
                            width: '100%',
                            mb: 2,
                            borderRadius: '5px',
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Source Code Pro, monospace',
                            },
                        }}
                    />
                    <MarkdownEditor ref={el} toolbar={toolbar} />
                    <Button onClick={onSubmit}>Submit</Button>
                    <Button onClick={doReset}>Reset</Button>
                </Box>
            </Box>
        </>
    )
}

export default Editor;
