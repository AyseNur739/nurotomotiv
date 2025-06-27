import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Hakkimizda() {
    return (
        <>
            {/* En Üstteki Görsel ve Sağ Üstte "Nur Otomotiv" Yazısı */}
            <div
                className="relative mx-auto "
                style={{ width: "1200px", height: "300px" }}
            >
                <img
                    src="/images/banner.webp"
                    alt="Üst Görsel"
                    style={{ width: "1200px", height: "300px", objectFit: "cover" }}
                />
                <div className="absolute top-6 right-10 text-white text-4xl font-bold drop-shadow-lg">

                </div>
            </div>



            <div className="max-w-3xl mx-auto py-10">
                <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
                <p className="text-gray-700">Nur Otomotiv olarak 1998'den bu yana araç bakım, onarım ve müşteri memnuniyeti alanında hizmet vermekteyiz...</p>
            </div>

        </>
    );
}
