'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './app/layout';
import AppRoutes from './router/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './asset/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RootLayout>
            <Header />
            <AppRoutes />
            <Footer />
        </RootLayout>
    </React.StrictMode>
);
