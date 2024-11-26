

import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserResult() {
    const theme = useTheme();
    const navigate = useNavigate();

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
    }, [])

    const handleClick = (id) => {
        navigate(`/user?id=${id}`);
    }

    return (
        <>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: { xs: '0 1rem', md: '0 2.5rem' }
                }}>
                {users.map((user) => (
                    <div key={user.display_id}>
                        <Card
                            onClick={() => { handleClick(user.display_id); }}
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                width: '50vw',
                                height: '100%',
                                border: `1px solid ${theme.palette.navy.main}`,
                                marginBottom: '1rem',
                                borderRadius: '2rem',
                                cursor: 'pointer'
                            }}>
                            <CardContent>
                                <div style={{ padding: '0 1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                                        <Typography sx={{ color: `${theme.palette.navy.main}`, fontSize: '1.5rem', fontWeight: 'bold' }}>{user.name}</Typography>
                                        <Typography sx={{ color: 'gray', fontSize: '.8rem', alignSelf: 'end', padding: '.2rem 0' }}>{user.display_id}</Typography>
                                    </div>
                                    <hr />
                                    <div style={{ margin: '0 1rem' }}>
                                        <Typography sx={{ color: `${theme.palette.navy.main}`, fontSize: '1rem' }}>{user.description}</Typography>
                                        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '.3rem', justifyContent: 'end' }}>
                                            <InsertDriveFileOutlinedIcon sx={{ color: `${theme.palette.navy.main}`, fontSize: '1rem' }} />
                                            <Typography sx={{ color: `${theme.palette.navy.main}`, fontSize: '.9rem' }}>{user.articles}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Box>
        </>
    );
}
