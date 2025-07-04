
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from 'react';

export default function ArizaBildirimi() {
    const [ariza, setAriza] = useState('');
    const [telefon, setTelefon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engeller

        // Kontrol: Telefon 11 haneli sayı mı?
        if (!/^\d{11}$/.test(telefon)) {
            alert('Lütfen geçerli bir 11 haneli telefon numarası girin.');
            return;
        }

        // Alert mesajı göster
        alert(`Arızanızı ve bilginizi aldık. Kısa zamanda dönüş yapacağız.\n\n📞 Telefon: ${telefon}\n🔧 Arıza: ${ariza}`);

        // Formu sıfırla (isteğe bağlı)
        setAriza('');
        setTelefon('');
    };

    return (
        <section className="text-center mt-12 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Arıza Bildirimi</h2>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

                {/* Arıza nedir? */}
                <input
                    type="text"
                    placeholder="Arıza nedir?"
                    value={ariza}
                    onChange={(e) => setAriza(e.target.value)}
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />

                {/* Telefon numarası */}
                <input
                    type="tel"
                    placeholder="Telefon Numaranız (11 haneli)"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    maxLength="11"
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />

                {/* Gönder butonu */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-md"
                >
                    Gönder
                </button>
            </form>
        </section>
    );
}
