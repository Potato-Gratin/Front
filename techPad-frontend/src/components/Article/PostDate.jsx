import { Typography } from "@mui/material";

export default function PostDate({ size, color, date }) {
    return (
        <Typography variant="body2" sx={{ color: color, fontSize: size }}>
            {date}
        </Typography>
    );
}
