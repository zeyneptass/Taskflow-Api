// src/utils/fileHandler.js (veya src/data/taskStore.js)
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data");
const filePath = path.join(dataDir, "tasks.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
// recursive: true sayesinde üst klasörler de (örneğin src/ yoksa) otomatik oluşturulur.

const readData = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf8");
      return [];
    }

    const fileData = fs.readFileSync(filePath, "utf8").trim();

    // Boş dosya kontrolü : .trim() sonrası boş string → dosya boş demektir.
    if (!fileData) {
      return [];
    }

    // JSON parse hatası kontrolü : json.parse() başarısız olursa catch bloğuna düşer.
    const parsed = JSON.parse(fileData);

    // verilen dosya JSON formatında ama dizi değilse → güvenli varsayılan olarak boş dizi döndürülür.
    if (!Array.isArray(parsed)) {
      console.warn("[fileHandler] tasks.json dizi değil, varsayılan olarak boş dizi döndürülüyor.");
      return [];
    }

    return parsed;
  } catch (err) {
    // Bozuk JSON / izin hatası / disk hatası → uygulama çökmesin diye hata loglanır ve güvenli varsayılan olarak boş dizi döndürülür.
    console.error("[fileHandler] readData hatası:", err.message);
    return [];
    // SyntaxError, EACCES, ENOENT, EISDIR gibi hatala
  }
};

// JSON dosyasına görevleri yaz
const writeData = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8"); // 2: girintili JSON formatı için
    return true;
  } catch (err) {
    console.error("[fileHandler] writeData hatası:", err.message);
    return false;
  }
};

module.exports = { readData, writeData };
