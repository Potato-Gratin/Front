import { useTheme, Box, Button } from "@mui/material";
import ArticleCard from "../../../../components/Article/card/Card";

const articles = [
    { id: 1, title: 'タイトル', user: 'ユーザー', date: '2024-01-01', text: '本文', favorite: 1, comment: 1 },
    { id: 2, title: 'タイトル', user: 'ユーザー', date: '2024-01-02', text: '本文', favorite: 2, comment: 2 },
    { id: 3, title: 'タイトル', user: 'ユーザー', date: '2024-01-03', text: '本文', favorite: 3, comment: 3 }
];

export default function Articles() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                px: '2.5rem'
            }}>
                <Button
                    variant="contained"
                    type="a"
                    href="/article/create"
                    sx={{
                        my: '1rem',
                        backgroundColor: `${theme.palette.navy.main}`,
                        color: 'white',
                        width: '40vw',
                        height: '8vh',
                        borderRadius: '2rem',
                        '&:hover': {
                            backgroundColor: `${theme.palette.navy.main}`,
                        },
                        textTransform: 'none',
                        fontSize: '1.5rem'
                    }}>
                    + New Article
                </Button>
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