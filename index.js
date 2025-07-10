import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/ariza_sistemi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB bağlantısı başarılı'))
    .catch((err) => console.error('❌ MongoDB bağlantı hatası:', err));

// Arıza Şeması ve Modeli
const arizaSchema = new mongoose.Schema({
    ariza: String,
    telefon: String,
    tarih: {
        type: Date,
        default: Date.now
    }
});

const Ariza = mongoose.model('Ariza', arizaSchema);

// POST endpoint – Arıza Kaydetme
app.post('/ariza-bildirim', async (req, res) => {
    const { ariza, telefon } = req.body;

    if (!ariza || !telefon) {
        return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
    }

    try {
        const yeniAriza = new Ariza({ ariza, telefon });
        await yeniAriza.save();
        res.status(200).json({ message: '✅ Kayıt başarıyla MongoDB’ye eklendi.' });
    } catch (err) {
        console.error('❌ Kayıt hatası:', err);
        res.status(500).json({ message: 'Kayıt sırasında hata oluştu.' });
    }
});

// Sunucuyu başlat
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
