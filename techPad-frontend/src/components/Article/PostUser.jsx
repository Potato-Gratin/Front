import { Typography } from "@mui/material";

export default function PostUser({ sx, user }) {
    return (
        <Typography variant="body2" sx={{ ...sx }}>
            {user}
        </Typography>
    );
}
