import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./index"
import { useAuth } from "../Components/Auth/AuthProvider"
export const AppRouter = () => {
    const { status } = useAuth();
    if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        <BrowserRouter>
            <Routes>
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/*" element={<PublicRoutes />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}