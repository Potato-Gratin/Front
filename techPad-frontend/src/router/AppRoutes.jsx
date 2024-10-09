import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../app/Home';

const routes = [
    { path: '/', element: <Home /> },
];

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

