const validateTaskData = (req, res, next) => {
    const { title } = req.body;

    // title alanının doğrulaması yapılır
    if (req.method === 'POST' || req.method === 'PUT') {
        // post isteğinde title alanı boş veya eksikse hata dön
        if (req.method === 'POST' && (!title || title.trim() === '')) {
            return res.status(400).json({
                success: false,
                message: 'Doğrulama Hatası: Görev başlığı (title) alanı zorunludur.'
            });
        }

        // put isteğinde title alanı boşsa hata dön
        if (title !== undefined && title.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Doğrulama Hatası: Görev başlığı (title) boş olamaz.'
            });
        }
    }

    next(); // kontrol başarılı ise bir sonraki middleware veya route handler'a geçilir
};

module.exports = {
    validateTaskData
};