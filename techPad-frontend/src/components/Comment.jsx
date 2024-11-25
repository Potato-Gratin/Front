import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Box, Typography } from '@mui/material';

export default function Comment({ sx, num, iconSize, fontSize }) {
    return (
        <>
            <Box component='a' href='#' sx={{ display: 'flex', textDecoration: 'none', marginLeft: '2rem' }}>
                <ChatBubbleOutlineOutlinedIcon sx={{...sx, alignSelf: 'center', width: iconSize, height: 'auto' }} />
                <Typography variant="body1" fontSize={fontSize} sx={{...sx, marginLeft: '.3rem', alignSelf: 'center' }}>
                {num}
                </Typography>
            </Box>
        </>
    );
}