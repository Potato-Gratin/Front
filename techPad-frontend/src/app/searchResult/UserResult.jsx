import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useNavigate } from "react-router-dom";

const users = [
    { uid: 1, id: '@aaaaa', name: 'user1', profile: 'profile1', articles: 10 },
    { uid: 2, id: '@bbbbb', name: 'user2', profile: 'profile2', articles: 20 },
    { uid: 3, id: '@ccccc', name: 'user3', profile: 'profile3', articles: 30 },
    { uid: 4, id: '@ddddd', name: 'user4', profile: 'profile4', articles: 40 },
    { uid: 5, id: '@eeeee', name: 'user5', profile: 'profile5', articles: 50 },
]

export default function UserResult() {
    const theme = useTheme();
    const navigate = useNavigate();

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
                    <div key={user.uid}>
                        <Card
                            onClick={() => { handleClick(user.uid); }}
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
                                        <Typography sx={{ color: 'gray', fontSize: '.8rem', alignSelf: 'end', padding: '.2rem 0' }}>{user.id}</Typography>
                                    </div>
                                    <hr />
                                    <div style={{ margin: '0 1rem' }}>
                                        <Typography sx={{ color: `${theme.palette.navy.main}`, fontSize: '1rem' }}>{user.profile}</Typography>
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
