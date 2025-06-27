function Memnuniyet() {
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
                <h1>Memnuniyet</h1>
                <p>Lütfen memnuniyetinizi ya da önerinizi bizimle paylaşın:</p>
                <form>
                    <textarea placeholder="Yorumunuzu buraya yazın..." rows="5" cols="40"></textarea><br />
                    <button type="submit">Gönder</button>
                </form>
            </div>

        </>
    );
}

export default Memnuniyet;
