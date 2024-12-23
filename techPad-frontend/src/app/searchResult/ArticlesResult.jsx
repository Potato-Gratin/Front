import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/Article/Card";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

export default function ArticlesResult() {
    const theme = useTheme();

    const [articles, setArticles] = useState([
        { id: 1, title: 'タイトル', user: 'ユーザー', date: '2024-01-01', content: '本文', favorite: 1, comment: 1 },
        { id: 2, title: 'タイトル', user: 'ユーザー', date: '2024-01-02', content: '本文', favorite: 2, comment: 2 },
        { id: 3, title: 'タイトル', user: 'ユーザー', date: '2024-01-03', content: '本文', favorite: 3, comment: 3 }
    ]);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get('q');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_ORIGIN + '/articles/search?q=' + keyword)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setArticles(data)
            })
            .catch((error) => console.error(error));
    }, [keyword])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: theme.palette.navy.main,
                        margin: '1.5rem 0'
                    }}
                >
                    Search Result
                </Typography>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        user={article.user}
                        date={article.date}
                        text={article.content}
                        favorite={article.favorite}
                        comment={article.comment}
                    />
                ))}
            </Box>
        </>
    );
}
