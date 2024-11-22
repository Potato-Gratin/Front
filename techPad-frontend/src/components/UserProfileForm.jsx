import { useTheme } from "@emotion/react";
import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

export default function UserProfileForm() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [displayId, setDisplayId] = useState('');
    const [image, setImage] = useState(null);
    const [imageKey, setImageKey] = useState(0);
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleImageRemove = () => {
        setImage(null);
        setImageKey(prevKey => prevKey + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = {
            image: image,
            name: name,
            displayId: displayId,
            description: description,
        }
        console.log(profile);
        navigate('#');
    }

    return (
        <>
            {/* PC */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, margin: '0 auto', width: 'fit-content' }}>
                <form onSubmit={handleSubmit} style={{ display: 'block', alignItems: 'center' }}>
                    {/* アイコン */}
                    <Box sx={{ display: 'flex', width: '35vw', justifyContent: 'center' }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            id="userProfileForm-icon"
                            key={imageKey}
                        />
                        <label htmlFor="userProfileForm-icon">
                            <Box sx={{ position: 'relative' }}>
                                <Avatar
                                    sx={{
                                        bgcolor: theme.palette.navy.main,
                                        width: '8rem',
                                        height: '8rem',
                                        cursor: 'pointer'
                                    }}
                                    src={image}
                                >
                                    {!image && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Icon
                                        </Typography>
                                    )}
                                </Avatar>
                                <IconButton
                                    onClick={handleImageRemove}
                                    sx={{
                                        position: 'absolute',
                                        top: '-1px',
                                        right: '-1px',
                                        bgcolor: 'white',
                                        color: theme.palette.navy.main,
                                        '&:hover': {
                                            color: 'white'
                                        }
                                    }}
                                >
                                    <RestoreOutlinedIcon />
                                </IconButton>
                            </Box>
                        </label>

                        {/* ユーザーネーム */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
                            <TextField
                                id="username"
                                label="Name"
                                variant="standard"
                                size="small"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{
                                    width: '18rem',
                                    '& .MuiInputBase-root': {
                                        borderBottom: '1px solid white',
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    '& .MuiFormLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': {
                                            color: 'white',
                                        },
                                    },
                                    '& .Mui-focused .MuiInputBase-root': {
                                        borderBottom: '1px solid white',
                                    },
                                    '& .MuiInputBase-input:focus': {
                                        color: 'white',
                                    },
                                }}
                            />

                            {/* 表示ID */}
                            <TextField
                                id="displayId"
                                label="Display ID"
                                variant="standard"
                                size="small"
                                value={displayId}
                                onChange={(e) => setDisplayId(e.target.value)}
                                sx={{
                                    width: '18rem',
                                    mt: 1,
                                    '& .MuiInputBase-root': {
                                        borderBottom: '1px solid white',
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    '& .MuiFormLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': {
                                            color: 'white',
                                        },
                                    },
                                    '& .Mui-focused .MuiInputBase-root': {
                                        borderBottom: '1px solid white',
                                    },
                                    '& .MuiInputBase-input:focus': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* 説明 */}
                    <TextField
                        id="description"
                        label="Description"
                        variant="standard"
                        size="small"
                        multiline
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{
                            width: "100%",
                            mt: 4,
                            backgroundColor: 'rgba(4, 60, 120, 10%)',
                            boxShadow: '0 0 10px rgba(4, 60, 120, 10%)',
                            '& .MuiInputBase-root': {
                                borderBottom: '1px solid white',
                                color: 'white',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                            '& .MuiFormLabel-root': {
                                color: 'white',
                                '&.Mui-focused': {
                                    color: 'white',
                                },
                            },
                            '& .Mui-focused .MuiInputBase-root': {
                                borderBottom: '1px solid white',
                            },
                            '& .MuiInputBase-input:focus': {
                                color: 'white',
                            },
                        }}
                    />

                    {/* 登録ボタン */}
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            textTransform: 'none',
                            fontSize: '.8rem',
                            color: 'white',
                            backgroundColor: theme.palette.navy.main,
                            width: '100%',
                            borderRadius: '10px',
                            mt: '2rem'
                        }}
                    >
                        登録
                    </Button>
                </form>
            </Box>
            {/* PC */}
        </>
    );
}