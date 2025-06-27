import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AnaSayfa() {
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

            {/* Menü */}


            {/* Arka Plan Slider (Sabit resim arka plan) */}
            <div className="relative h-[400px] overflow-hidden mt-6">
                <div
                    className="absolute inset-0 bg-cover bg-center animate-pulse transition-all duration-700"
                    style={{ backgroundImage: "url('/images/slider1.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h2 className="text-white text-4xl font-bold">
                        Nur Otomotiv'e Hoş Geldiniz
                    </h2>
                </div>
            </div>

            {/* Arıza Bildirimi */}
            <section className="text-center mt-12 px-4">
                {/* Başlık */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Arıza Bildirimi</h2>

                {/* Form: Dikey yerleşim, ortalanmış, max genişlik ve aralıklarla */}
                <form className="flex flex-col items-center gap-5 max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

                    {/* Arıza nedir? input alanı */}
                    <input
                        type="text"
                        placeholder="Arıza nedir?"
                        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    // Kenar ve iç boşluk, tam genişlik, odaklandığında mavi halka efekti
                    />

                    {/* Telefon numarası input alanı */}
                    <input
                        type="text"
                        placeholder="Telefon Numaranız"
                        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    // Aynı stil inputlar için, focus efektiyle kullanıcı dostu
                    />

                    {/* Gönder butonu */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-md"
                    // Buton rengi, yazı stili, yumuşak renk değişimi ve gölge efekti
                    >
                        Gönder
                    </button>
                </form>
            </section>


            {/* Markalar */}
            <section className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">Çalıştığımız Markalar</h3>
                <div className="flex justify-center gap-6">

                    {/* BMW Logosu */}
                    <img
                        src="/images/bmw.png"
                        alt="BMW"
                        style={{ width: "100px", height: "100px" }}
                    ></img>
                    <img
                        src="/images/mercedes.png"
                        alt="Mercedes"
                        style={{ width: "100px", height: "100px" }}
                    ></img>
                    <img
                        src="/images/toyota.png"
                        alt="Toyota"
                        style={{ width: "100px", height: "100px" }}
                    ></img>



                </div>
            </section>


        </>
    );
}
