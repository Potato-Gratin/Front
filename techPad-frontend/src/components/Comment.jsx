import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Typography } from '@mui/material';

export default function Comment({ sx, num, iconSize, fontSize }) {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <ChatBubbleOutlineOutlinedIcon fontSize={iconSize} sx={{...sx, alignSelf: 'center' }} />
                <Typography variant="body1" fontSize={fontSize} sx={{...sx, marginLeft: '.3rem', alignSelf: 'center' }}>
                {num}
                </Typography>
            </div>
        </>
    );
}