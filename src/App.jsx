import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AnaSayfa from './pages/AnaSayfa';
import Hakkimizda from './pages/Hakkimizda';
import Kampanyalar from './pages/Kampanyalar';
import SSS from './pages/SSS';
import Iletisim from './pages/Iletisim';
import Memnuniyet from './pages/Memnuniyet';
import Toast from './pages/Toast';

import AdminLogin from './pages/AdminLogin';
import AdminArizalar from './pages/AdminArizalar';
import AdminProtectedRoute from './components/AdminProtectedRoute';

import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Her sayfada görünen Navbar */}
      <Navbar />

      {/* Sayfa Yönlendirmeleri */}
      <Routes>
        {/* Genel kullanıcı sayfaları */}
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/memnuniyet" element={<Memnuniyet />} />

        {/* İşveren Giriş Sayfası */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Korunan işveren sayfası: sadece şifre doğruysa girilebilir */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/arizalar" element={<AdminArizalar />} />
        </Route>
      </Routes>

      {/* Her sayfada görünen Footer */}
      <Footer />

      {/* Toast bildirim kutusu */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
