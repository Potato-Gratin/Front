import { Box, Typography } from "@mui/material";
import ArticleCard from "../../components/Article/Card";
import { useTheme } from "@mui/material";

const articles = [
    {id: 1, title: 'タイトル', user: 'ユーザー', date: '2024-01-01', text: '本文', favorite: 1, comment: 1},
    {id: 2, title: 'タイトル', user: 'ユーザー', date: '2024-01-02', text: '本文', favorite: 2, comment: 2},
    {id: 3, title: 'タイトル', user: 'ユーザー', date: '2024-01-03', text: '本文', favorite: 3, comment: 3}
];

export default function NewArticles() {
    const theme = useTheme();

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
                    date={article.date}
                    text={article.text}
                    favorite={article.favorite}
                    comment={article.comment}
                />
            ))}
        </Box>
    );
}
