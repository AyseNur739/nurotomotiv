function SSS() {
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
                <h1>Sıkça Sorulan Sorular</h1>
                <ul>
                    <li>Arabamı kaç ayda bir bakıma götürmeliyim?</li>
                    <li>Muayene neden önemlidir?</li>
                    <li>Kış ve yaz lastiği arasındaki fark nedir?</li>
                    <li>Lastik değişimi için en uygun aylar hangileridir?</li>
                </ul>
            </div>

        </>
    );
}

export default SSS;
