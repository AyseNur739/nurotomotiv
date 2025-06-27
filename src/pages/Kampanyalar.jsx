function Kampanyalar() {
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
                <h1>Kampanyalar</h1>
                <ul>
                    <li>Haziran Ayı: Yağ değişimi ücretsiz kontrolle birlikte</li>
                    <li>Temmuz Ayı: 4 lastik alana 1 rot balans hediye</li>
                    <li>Ağustos Ayı: Klima bakımında %20 indirim</li>
                </ul>
            </div>

        </>
    );
}

export default Kampanyalar;
