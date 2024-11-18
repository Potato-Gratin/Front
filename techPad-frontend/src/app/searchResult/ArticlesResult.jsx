import ArticleCard from "../../components/Article/card/Card";
import { Box } from "@mui/material";

const articles = [
    { id: 1, title: 'タイトル', user: 'ユーザー', date: '2024-01-01', text: '本文', favorite: 1, comment: 1 },
    { id: 2, title: 'タイトル', user: 'ユーザー', date: '2024-01-02', text: '本文', favorite: 2, comment: 2 },
    { id: 3, title: 'タイトル', user: 'ユーザー', date: '2024-01-03', text: '本文', favorite: 3, comment: 3 }
];

export default function ArticlesResult() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: { xs: '0 1rem', md: '0 2.5rem' } }}>
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
        </>
    );
}
