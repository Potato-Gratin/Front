import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        navy: {
            main: '#043c78',
        },
        lightBlue: {
            main: '#afc8ff',
        },
        background: {
            default: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
            'Cormorant Garamond',
            'Noto Serif JP',
            'sans-serif'
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