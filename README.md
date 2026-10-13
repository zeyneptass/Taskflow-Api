# 🚀 Taskflow-API

Node.js ve Express.js ile geliştirilmiş; **Clean Code** ve **Katmanlı Mimari (Repository / Controller / Route)** prensiplerine uygun, dosya tabanlı (`JSON`) güvenli veri yönetimi sunan profesyonel bir RESTful Task Management API projesidir.

---

## 📊 Proje İlerleme ve Scrum Çizelgesi

Projenin sprint planlaması, görev dağılımı ve iş takibi (Scrum board) süreçleri şeffaf bir şekilde yönetilmektedir. Güncel sprint ve görev durumlarını aşağıdaki bağlantıdan canlı olarak takip edebilirsiniz:

👉 **[Canlı Scrum Çizelgesi & Proje Takibi (Netlify)](https://starlit-bunny-17b941.netlify.app/)**

---

## 📂 Proje Mimari Yapısı

Proje, sürdürülebilirlik ve modülerlik ön planda tutularak katmanlı mimari ile tasarlanmıştır:

```text
Taskflow-Api/
│
├── logs/
│   └── access.log             # İsteklerin zaman damgasıyla kaydedildiği log dosyası
├── src/
│   ├── data/
│   │   └── tasks.json         # JSON tabanlı kalıcı veri dosyası
│   ├── controllers/
│   │   └── taskController.js  # HTTP isteklerini karşılayan iş mantığı katmanı
│   ├── middlewares/
│   │   └── logger.js          # Gelen istekleri loglayan ara katman
│   ├── repositories/
│   │   └── taskRepository.js  # Dosya okuma/yazma ve veri işlemlerini yöneten katman
│   ├── routes/
│   │   └── taskRoutes.js      # Endpoint rotalarının tanımlandığı katman
│   └── app.js                 # Express uygulaması ve middleware konfigürasyonu
│
├── .env.example               # Çevresel değişken örnek dosyası
├── package.json               # Proje bağımlılıkları ve metadata
└── README.md                  # Proje dokümantasyonu
```

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

**1. Projeyi klonlayın:**

```bash
git clone https://github.com/zeyneptass/Taskflow-Api.git
cd Taskflow-Api
```

**2. Bağımlılıkları yükleyin:**

```bash
npm install
```

**3. Ortam değişkenlerini ayarlayın:**

```bash
cp .env.example .env
```

**4. Uygulamayı başlatın:**

```bash
npm start
```

Geliştirme sırasında otomatik yeniden başlatma için `nodemon` kullanabilirsiniz:

```bash
npm run dev
```

---

## 📌 Postman API Koleksiyonu ve Endpoints

API uçlarını test etmek ve kendi ortamınıza aktarmak için hazırlanan Postman koleksiyonuna aşağıdaki bağlantıdan ulaşabilirsiniz:

👉 **[Postman Workspace & Koleksiyonu Görüntüle](https://zeyneptass-3618409.postman.co/workspace/Zeynep-Ta%C5%9F's-Workspace~efdf2da3-cca1-46b5-8ebc-189f0d96754f/collection/58924504-4580be99-be39-4c57-b970-ead6795672e7?action=share&creator=58924504)**

### Endpoint Listesi

| Metot  | Endpoint     | Açıklama                    |
| ------ | ------------ | --------------------------- |
| GET    | `/tasks`     | Tüm görevleri listeler      |
| GET    | `/tasks/:id` | Belirli bir görevi getirir  |
| POST   | `/tasks`     | Yeni görev oluşturur        |
| PUT    | `/tasks/:id` | Mevcut görevi günceller     |
| DELETE | `/tasks/:id` | Görevi siler                |
