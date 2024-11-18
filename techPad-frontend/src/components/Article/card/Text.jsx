import { Typography } from "@mui/material";

export default function Text({ sx, text }) {
    return (
        <Typography variant="body1" sx={{ ...sx }}>
            {text}
        </Typography>
    );
}
