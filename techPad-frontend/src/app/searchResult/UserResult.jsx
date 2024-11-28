

import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useNavigate } from "react-router-dom";
import UserProfileCard from "../../components/UserProfileCard";


export default function UserResult() {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/profile?id=${id}`);
    }

    // ダミー説明
    let demoDescription = 'description';
    for (let i = 0; i < 100; i++) {
        demoDescription += '-';
    }

    const user = [{
        userName: '山田花子',
        userIcon: null,
        displayId: '@aaaaaaaa',
        userDescription: demoDescription
    }];

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
