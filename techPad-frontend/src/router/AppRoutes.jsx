import { Routes, Route } from 'react-router-dom';
import Home from '../app/home/Page';
import SearchPage from '../app/SearchPage';
const routes = [
    { path: '/', element: <Home /> },
    { path: '/search', element: <SearchPage /> },
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

