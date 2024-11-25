import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import DOMPurify from "dompurify";
import mdParse from "../utils/markdownParser";
import Comment from "../components/Comment";
import Favorite from "../components/Favorite";
import UserProfileCard from "../components/UserProfileCard";

export default function ArticleDetail() {
    const theme = useTheme();
    const mdValue = '内容';

    // ダミー説明
    let demoDescription = 'description';
    for (let i = 0; i < 100; i++) {
        demoDescription += '-';
    }

    // サニタイズ
    const htmlValue = mdParse(mdValue);
    const sanitize = DOMPurify.sanitize(htmlValue);

    // 記事情報
    const article = [{
        id: 1,
        title: 'タイトル',
        date: '2024-01-01',
        text: sanitize,
        favorite: 100,
        comment: 12
    }];

    // ユーザー情報
    const user = [{
        userName: '山田花子',
        userIcon: null,
        displayId: '@aaaaaaaa',
        userDescription: demoDescription
    }];

    return (
        <>
            {/* コードブロックの色変更 */}
            <style>
                {`code{ background-color: rgb(240, 240, 240); }`}
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
                {/* 記事タイトル */}
                <Typography variant="h3" sx={{ color: 'white', fontWeight: 600, letterSpacing: '.3px', mt: 4 }}>
                    {article[0].title}
                </Typography>

                {/* 記事内容 */}
                <Box
                    sx={{
                        background: 'white',
                        width: '60vw',
                        my: 4,
                        padding: 4,
                        borderRadius: '10px',
                        border: `1px solid ${theme.palette.navy.main}`
                    }}
                >
                    <Typography
                        dangerouslySetInnerHTML={{ __html: article[0].text }}
                        sx={{ color: theme.palette.navy.main }}
                    />
                    <hr />
                    <Box sx={{ display: 'flex', justifyContent: 'start', mt: 3 }}>
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

                {/* 投稿ユーザー */}
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, letterSpacing: '1.5px', mt: 4 }}>
                    Writer
                </Typography>
                <UserProfileCard
                    sx={{ width: '40vw', mt: 2, mb: 10, py: 4, px: 2 }}
                    userName={user[0].userName}
                    userIcon={user[0].userIcon}
                    displayId={user[0].displayId}
                    userDescription={user[0].userDescription}
                />
            </Box>
        </>
    );
}