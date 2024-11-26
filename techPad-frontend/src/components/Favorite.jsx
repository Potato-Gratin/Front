import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function Favorite({ sx, num, fontSize, iconSize }) {
    const [favorite, setFavorite] = useState(true);
    const [count, setCount] = useState(num);

    const handleClick = () => {
        setFavorite(!favorite);
        favorite ? setCount(count + 1) : setCount(count - 1);
    }

    return (
        <>
            <Box component='div' onClick={handleClick} sx={{ display: 'flex', cursor: 'pointer' }}>
                {favorite ? (
                    <ThumbUpAltOutlinedIcon sx={{...sx, alignSelf: 'center', width: iconSize, height: 'auto' }} />
                ) : (
                    <ThumbUpAltIcon sx={{...sx, alignSelf: 'center', width: iconSize, height: 'auto' }} />
                )}
                <Typography variant="body1" fontSize={fontSize} sx={{...sx, marginLeft: '.3rem', alignSelf: 'center' }}>
                {count}
                </Typography>
            </Box>
        </>
    );
}