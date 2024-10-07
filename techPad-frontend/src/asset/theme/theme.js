import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        neutral: {
            main: '#FFFFFF',
            contrastText: '#043c78',
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
            'Cormorant Garamond',
            'Noto Serif Japanese',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 32,
                    minHeight: 32,
                }
            }
        }
    },
});

export default theme;