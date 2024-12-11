import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from './app/layout';
import AppRoutes from './router/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './asset/css/index.css';
import { supabase } from './utils/supabaseClient';

// 認証時にユーザデータをDBに作成するためのイベントリスナ
supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN') {
        fetch(process.env.REACT_APP_API_ORIGIN + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: session.user.id,
                name: session.user.email.split('@')[0].substring(0, 15),
                display_id: Math.random().toString(36).substring(2, 17)
            })
        })
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <RootLayout>
            <Header />
            <div style={{ marginBottom: '60px' }}>
                <AppRoutes />
            </div>
            <Footer />
        </RootLayout>
    </BrowserRouter>
);
