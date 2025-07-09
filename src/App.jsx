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

import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/Memnuniyet" element={<Memnuniyet />} />
      </Routes>
      <Footer />

      {/* Toast mesajlarını uygulamanın her yerinde göstermek için */}
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
