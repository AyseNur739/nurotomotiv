import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnaSayfa from './pages/AnaSayfa';
import Hakkimizda from './pages/Hakkimizda';
import Kampanyalar from './pages/Kampanyalar';
import SSS from './pages/SSS';
import Iletisim from './pages/Iletisim';
import Memnuniyet from './pages/Memnuniyet';

function App() {
  //jsx={}kullanarak yazıyoruz
  //javascript kodlarını buraya yazıyoruz
  return (
    //html kodlarını da buraya yazıyoruz
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/Memnuniyet" element={<Memnuniyet />} />
      </Routes>
      <Footer />
    </> //fragment kapsayıccı div etkili
  );
}

export default App;// burada export demek dışarıya açıyorum demek 
