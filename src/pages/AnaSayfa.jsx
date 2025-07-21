import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AnaSayfa() {
    const [ariza, setAriza] = useState("");
    const [telefon, setTelefon] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ariza || !telefon) {
            toast.warning("Lütfen tüm alanları doldurun.");
            return;
        }

        try {
            await addDoc(collection(db, "arizalar"), {
                ariza,
                telefon,
                tarih: new Date()
            });

            toast.success("Arıza başarıyla bildirildi!");
            setAriza("");
            setTelefon("");
        } catch (error) {
            toast.error("Hata oluştu: " + error.message);
            console.error("Firestore Hatası:", error);
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
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Gönder
                </button>
            </form>
        </div>
    );
}
