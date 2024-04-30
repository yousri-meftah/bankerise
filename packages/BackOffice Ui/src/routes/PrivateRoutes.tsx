import { Navigate, Route, Routes } from 'react-router-dom';
import Layout  from '../Global/Layout';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/*' element={<Layout />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};