import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function AdminArizalar() {
    const [arizalar, setArizalar] = useState([]);

    useEffect(() => {
        // createdAt alanına göre azalan sırayla dinle
        const q = query(collection(db, "arizalar"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const arizaList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setArizalar(arizaList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
            <h2>Arıza Bildirimleri</h2>
            {arizalar.length === 0 && <p>Henüz arıza bildirimi yok.</p>}
            {arizalar.map(ariza => (
                <div key={ariza.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10, borderRadius: 6 }}>
                    <p><b>Telefon:</b> {ariza.telefon}</p>
                    <p><b>Arıza:</b> {ariza.ariza}</p>
                    <p><small>
                        {ariza.createdAt && ariza.createdAt.toDate
                            ? ariza.createdAt.toDate().toLocaleString()
                            : "Tarih bilgisi yok"}
                    </small></p>

                </div>
            ))}
        </div>
    );
}

export default AdminArizalar;
