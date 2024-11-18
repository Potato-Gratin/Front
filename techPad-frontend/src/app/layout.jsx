

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../asset/theme/theme';

export default function RootLayout({ children }) {
    return (
        <main>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </main>
    );
}
