import { Box } from "@mui/material";
import Editor from "../components/Article/Editor";
import { useTheme } from "@emotion/react";

export default function CreateArticles() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})` }}>
                <Editor />
            </Box>
        </>
    );
}