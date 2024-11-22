import { Box, Typography } from "@mui/material";
import ArticleCard from "../../components/Article/Card";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function NewArticles() {
    const [articles, setArticles] = useState([]);

    const theme = useTheme();
    useEffect(() => {
        const origin = process.env.REACT_APP_API_ORIGIN
        fetch(origin + '/articles')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setArticles(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: { xs: '1rem', md: '1rem 2.5rem' } }}>
            <Typography
                sx={{
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: `${theme.palette.navy.main}`,
                    margin: { xs: '.5rem 0', md: '1.5rem 0'}
                }}
            >
                New topics
            </Typography>
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    title={article.title}
                    user={article.user}
                    date={article.created_at}
                    text={article.context}
                    favorite={article.favorite}
                    comment={article.comment}
                />
            ))}
        </Box>
    );
}
