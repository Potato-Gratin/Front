// import { supabase } from '../../utils/supabaseClient';
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import UserProfileForm from "../../components/UserProfileForm";

export default function SettingProfile() {
    const theme = useTheme();

    return (
        <>
            {/* PC */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, height: 'calc(100vh - 120px)' }}>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        background: `linear-gradient(${theme.palette.navy.main}, ${theme.palette.blue.main})`,
                        height: 'calc(100% - 60px)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: '1.5rem',
                        paddingBottom: '4rem'
                    }}
                >
                    <UserProfileForm />
                </Box>
            </Box>
            {/* PC */}
        </>
    );

}