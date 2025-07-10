import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function AnaSayfa() {
    const [ariza, setAriza] = useState('');
    const [telefon, setTelefon] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ariza || !telefon) {
            toast.warning("Lütfen tüm alanları doldurun.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/ariza-bildirim", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ariza, telefon }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                setAriza('');
                setTelefon('');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Sunucuya bağlanılamadı.");
            console.error(error);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Arıza Bildir</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block mb-1">Arıza Açıklaması</label>
                    <textarea
                        className="w-full border p-2"
                        value={ariza}
                        onChange={(e) => setAriza(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Telefon</label>
                    <input
                        type="text"
                        className="w-full border p-2"
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Gönder
                </button>
            </form>
        </div>
    );
}
