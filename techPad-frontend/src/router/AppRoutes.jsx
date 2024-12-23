

import { Routes, Route } from 'react-router-dom';
import Home from '../app/home/Page';
import SearchPage from '../app/SearchPage';
import Auth from '../app/users/auth/Auth';
import SettingProfile from '../app/users/SettingProfile';
import AuthRedirect from '../app/users/auth/AuthRedirect';
import Profile from '../app/users/profile/Page';
import CreateArticles from '../app/CreateArticles';
import ArticleDetail from '../app/ArticleDetail';
import ArticlesResult from '../app/searchResult/ArticlesResult';
import UserResult from '../app/searchResult/UserResult';

const routes = [
    { path: '/', element: <Home /> },   // ホーム画面
    { path: '/search', element: <SearchPage /> },   // 検索画面
    { path: '/article/result', element: <ArticlesResult /> },   // 検索結果画面
    { path: '/user/result', element: <UserResult /> },   // 検索結果画面
    { path: '/auth', element: <Auth /> },   // ログイン画面
    { path: '/auth/redirect', element: <AuthRedirect /> },  // ログイン後のリダイレクト先ページ
    { path: '/userSetting', element: <SettingProfile /> },   // 新規ユーザーの情報登録画面
    { path: '/profile', element: <Profile /> },   // ユーザープロフィール
    { path: '/article/create', element: <CreateArticles /> },   // 記事作成画面
    { path: '/article/detail', element: <ArticleDetail /> } // 記事詳細画面
];

export default function AppRoutes() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}

