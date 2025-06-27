function Iletisim() {
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

            <div style={{ padding: '2rem' }}>
                <h1>İletişim</h1>
                <p>📞 Telefon: 0555 555 55 55</p>
                <p>📧 Email: nur.otomotiv@gmail.com</p>
                <p>📍 Adres: Konya Merkez, Sanayi Sitesi</p>
                <p>📷 Instagram: @nur_otomotiv</p>
            </div>

        </>
    );
}

export default Iletisim;
