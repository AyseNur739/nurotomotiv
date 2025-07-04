// // Gerekli modüller
// import mysql from 'mysql2';
// import express from 'express';
// import cors from 'cors';

// const app = express();

// // Middleware ayarları
// app.use(cors()); // Farklı portlardaki frontend'ten gelen isteklere izin verir
// app.use(express.json()); // JSON veri okuyabilmek için

// // MySQL veritabanı bağlantısı
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1315', // Şifren varsa buraya yaz
//     database: 'ariza_sistemi',
// });

// // Bağlantı testi
// db.connect(err => {
//     if (err) {
//         console.error('❌ MySQL bağlantı hatası:', err);
//     } else {
//         console.log('✅ MySQL bağlantısı başarılı');
//     }
// });

// // Arıza bildirimi için POST API endpoint
// app.post('/ariza-bildirim', (req, res) => {
//     const { ariza, telefon } = req.body;

//     // Verilerin boş olup olmadığını kontrol et
//     if (!ariza || !telefon) {
//         return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
//     }

//     // SQL sorgusu ile veritabanına kayıt
//     const sql = 'INSERT INTO ariza_kayit (ariza, telefon) VALUES (?, ?)';
//     db.query(sql, [ariza, telefon], (err, result) => {
//         if (err) {
//             console.error('❌ Veritabanı hatası:', err);
//             return res.status(500).json({ message: 'Kayıt sırasında hata oluştu.' });
//         }
//         res.status(200).json({ message: '✅ Kayıt başarıyla eklendi.' });
//     });
// });

// // Sunucuyu başlat
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
// });
