

import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import { useNavigate } from "react-router-dom";
import UserProfileCard from "../../components/UserProfileCard";


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
