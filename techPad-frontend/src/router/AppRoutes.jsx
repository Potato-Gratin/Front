import { Routes, Route } from 'react-router-dom';
import Home from '../app/home/Page';
import SearchPage from '../app/SearchPage';
import Result from '../app/result/Page';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/result', element: <Result /> },
    { path: '/user', element: <Home /> },
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

