// admin sayfalarını koruyan güvenlik bileşeni

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AdminProtectedRoute() {
    // sessionStorage içinde admin girişi yapıldı mı kontrol edilir
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

    // Eğer admin girişi varsa, alt sayfaları göster (Outlet)
    // Yoksa giriş sayfasına yönlendir
    return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default AdminProtectedRoute;
