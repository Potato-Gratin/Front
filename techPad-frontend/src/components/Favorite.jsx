import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Box, Typography } from '@mui/material';

export default function Favorite({ sx, num, fontSize, iconSize }) {
    const handleClick = () => {
        console.log('クリック');
    }

    return (
        <>
            <Box component='div' onClick={handleClick} sx={{ display: 'flex', cursor: 'pointer' }}>
                <ThumbUpAltOutlinedIcon fontSize={iconSize} sx={{...sx, alignSelf: 'center' }} />
                <Typography variant="body1" fontSize={fontSize} sx={{...sx, marginLeft: '.3rem', alignSelf: 'center' }}>
                {num}
                </Typography>
            </Box>
        </>
    );
}