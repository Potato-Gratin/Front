import { Typography } from "@mui/material";

export default function Title({ sx, title }) {
    return (
        <Typography variant="h4" sx={{ ...sx }}>
            {title}
        </Typography>
    );
}
