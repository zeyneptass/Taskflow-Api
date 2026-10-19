
# Taskflow-Api
Software Persona Backend Bitirme Projesi  (Görev ve Proje Yönetim Sistemi API Geliştirme Projesi)#

=======
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

👉 **[Postman Workspace & Koleksiyonu Görüntüle](https://www.postman.com/zeyneptass-3618409/workspace/taskflow-public-workspace/collection/58924504-4580be99-be39-4c57-b970-ead6795672e7?action=share&creator=58924504)**

<<<<<<< HEAD
### 📋 Görev Endpoint'leri

| Metot  | Endpoint         | Açıklama                   |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/tasks`     | Tüm görevleri listeler     |
| GET    | `/api/tasks/:id` | Belirli bir görevi getirir |
| POST   | `/api/tasks`     | Yeni görev oluşturur       |
| PUT    | `/api/tasks/:id` | Mevcut görevi günceller    |
| DELETE | `/api/tasks/:id` | Görevi siler               |

### 🔍 Query Parametreleri (`GET /api/tasks`)

| Özellik    | Parametre                              | Örnek                                |
| ---------- | -------------------------------------- | ------------------------------------ |
| Durum      | `status=completed` / `status=pending`  | `/api/tasks?status=completed`        |
| Öncelik    | `priority=high` / `medium` / `low`     | `/api/tasks?priority=high`           |
| Kullanıcı  | `assignee=<isim>`                      | `/api/tasks?assignee=Zeynep`         |
| Sıralama   | `sort=title` / `sort=createdAt`        | `/api/tasks?sort=createdAt`          |
| Sayfalama  | `page=<sayı>&limit=<sayı>`             | `/api/tasks?page=1&limit=5`          |

Parametreler birlikte kullanılabilir:

```http
GET /api/tasks?status=pending&priority=high&sort=createdAt&page=1&limit=5
```

### 📈 Raporlama Endpoint'leri (`/api/reports`)

| Metot | Endpoint                 | Açıklama                                                     |
| ----- | ------------------------ | ------------------------------------------------------------ |
| GET   | `/api/reports/completed` | Tamamlanan görevlerin sayısını ve detay listesini döner      |
| GET   | `/api/reports/pending`   | Bekleyen görevlerin sayısını ve detay listesini döner        |
| GET   | `/api/reports/summary`   | Toplam, tamamlanan ve bekleyen görev sayılarını özetler      |

=======
### Endpoint Listesi

| Metot  | Endpoint     | Açıklama                    |
| ------ | ------------ | --------------------------- |
| GET    | `/tasks`     | Tüm görevleri listeler      |
| GET    | `/tasks/:id` | Belirli bir görevi getirir  |
| POST   | `/tasks`     | Yeni görev oluşturur        |
| PUT    | `/tasks/:id` | Mevcut görevi günceller     |
| DELETE | `/tasks/:id` | Görevi siler                |
>>>>>>> e6c6e46d05e33b0353fe2ede85bd2a3bf9f12f01
