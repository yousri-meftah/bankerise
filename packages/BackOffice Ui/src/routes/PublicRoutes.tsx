
import { Navigate, Route, Routes } from 'react-router-dom';
import  Login  from '../Global/Login';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};