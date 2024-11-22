import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DOMPurify from "dompurify";
import mdParse from "../utils/markdownParser";
import Comment from "../components/Comment";
import Favorite from "../components/Favorite";

export default function ArticleDetail() {
    const theme = useTheme();
    const mdValue = '内容';

    // ダミー説明
    let demoDescription = '----------description';
    for (let i = 0; i < 500; i++) {
        demoDescription += '-';
    }

    // サニタイズ
    const htmlValue = mdParse(mdValue);
    const sanitize = DOMPurify.sanitize(htmlValue);

    const article = [{
        id: 1,
        title: 'タイトル',
        user: '山田花子',
        userIcon: null,
        displayId: '@aaaaaaaa',
        userDescription: demoDescription,
        date: '2024-01-01',
        text: sanitize,
        favorite: 100,
        comment: 12
    }];

    return (
        <>
            <style>
                {`
                    code{ background-color: rgb(240, 240, 240); }
                `}
            </style>
            <Box
                sx={{
                    background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 120px)'
                }}
            >
                <Typography variant="h2" sx={{ color: 'white', fontWeight: 600, letterSpacing: '.3px', mt: 4 }}>
                    {article[0].title}
                </Typography>
                <Box sx={{ background: 'white', width: '60vw', my: 4, px: 4 }}>
                    <Typography dangerouslySetInnerHTML={{ __html: article[0].text }} sx={{ color: theme.palette.navy.main }} />
                    <hr />
                    <Box sx={{ display: 'flex', justifyContent: 'start', mb: 1 }}>
                        <Favorite
                            num={article[0].favorite}
                            iconSize={'1rem'}
                            fontSize={'.8rem'}
                            sx={{ color: theme.palette.navy.main }}
                        />
                        <Comment
                            num={article[0].comment}
                            iconSize={'1rem'}
                            fontSize={'.8rem'}
                            sx={{ color: theme.palette.navy.main }}
                        />
                    </Box>
                </Box>
                <Box sx={{ background: 'white', width: '60vw', my: 4, padding: 4 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.navy.main,
                            mb: 2
                        }}
                    >
                        Writer
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <Avatar sx={{
                            bgcolor: 'white',
                            width: '3.5rem',
                            height: '3.5rem',
                        }}>
                            {!article[0].userIcon ? (
                                <AccountCircleIcon sx={{ fontSize: '5rem', color: theme.palette.navy.main }} />
                            ) : (
                                <img src={article[0].userIcon} alt="Profile" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                            )}
                        </Avatar>
                        <Box
                            sx={{
                                ml: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: theme.palette.navy.main
                            }}
                        >
                            <Typography sx={{ fontWeight: 600 }}>
                                {article[0].user}
                            </Typography>
                            <Typography variant="caption" fontStyle='italic' color="gray" >
                                {article[0].displayId}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ color: theme.palette.navy.main, mt: 2, mx: 4 }}>
                        {article[0].userDescription.length > 100 ? `${article[0].userDescription.substring(0, 100)}...` : article[0].userDescription}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}