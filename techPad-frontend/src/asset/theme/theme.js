import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        navy: {
            main: '#043c78',
        },
        blue: {
            main: '#afc8ff',
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
            'Noto Serif JP',
            'serif'
        ].join(','),
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 60,
                    minHeight: 60,
                }
            }
        },
    },
});

export default theme;