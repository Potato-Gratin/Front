import { Box, Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UserProfileCard from "../../components/UserProfileCard";


export default function UserResult() {
    const theme = useTheme();

    const [users, setUsers] = useState([
        { id: 1, display_id: 'aaaaa', name: 'user1', description: 'profile1', articles: 10 },
        { id: 2, display_id: 'bbbbb', name: 'user2', description: 'profile2', articles: 20 },
        { id: 3, display_id: 'ccccc', name: 'user3', description: 'profile3', articles: 30 },
        { id: 4, display_id: 'ddddd', name: 'user4', description: 'profile4', articles: 40 },
        { id: 5, display_id: 'eeeee', name: 'user5', description: 'profile5', articles: 50 },
    ])

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get('q');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_ORIGIN + "/users/search?q=" + keyword)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
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
                }}>

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
                {users.map((users) => (
                    <UserProfileCard
                        key={users.id}
                        sx={{ width: '40vw', mt: 2, mb: 3, py: 4, px: 2 }}
                        userName={users.name}
                        userIcon={users.userIcon}
                        displayId={users.display_id}
                        userDescription={users.description}
                        userId={users.id}
                        articles={users.articles}
                    />
                ))}
            </Box>
        </>
    );
}
