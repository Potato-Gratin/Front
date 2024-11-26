import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/Article/Card";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function ArticlesResult() {
    const [articles, setArticles] = useState([
        { id: 1, title: 'タイトル', user: 'ユーザー', date: '2024-01-01', text: '本文', favorite: 1, comment: 1 },
        { id: 2, title: 'タイトル', user: 'ユーザー', date: '2024-01-02', text: '本文', favorite: 2, comment: 2 },
        { id: 3, title: 'タイトル', user: 'ユーザー', date: '2024-01-03', text: '本文', favorite: 3, comment: 3 }
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
    }, [])

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
