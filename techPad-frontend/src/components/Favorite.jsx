import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Typography } from '@mui/material';

export default function Favorite({ sx, num, fontSize, iconSize }) {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <ThumbUpAltOutlinedIcon fontSize={iconSize} sx={{...sx, alignSelf: 'center' }} />
                <Typography variant="body1" fontSize={fontSize} sx={{...sx, marginLeft: '.3rem', alignSelf: 'center' }}>
                {num}
                </Typography>
            </div>
        </>
    );
}