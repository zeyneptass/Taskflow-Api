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

const getAllTasks = () => {
  return readData();
};

// id ile task bul
const getTaskById = (id) => {
  const tasks = readData();
  return tasks.find((task) => task.id === id);
};

// Yeni task oluştur
const createTask = (taskData) => {
  const tasks = readData();
  const newTask = {
    id: Date.now().toString(),
    title: taskData.title,
    description: taskData.description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeData(tasks);
  return newTask;
};

// task güncelle
const updateTask = (id, updatedData) => {
  const tasks = readData();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null; // not found
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: updatedData.title !== undefined ? updatedData.title : tasks[taskIndex].title,
    description: updatedData.description !== undefined ? updatedData.description : tasks[taskIndex].description,
    completed: updatedData.completed !== undefined ? updatedData.completed : tasks[taskIndex].completed,
    updatedAt: new Date().toISOString(),
  };

  writeData(tasks);
  return tasks[taskIndex];
};

// task sil
const deleteTask = (id) => {
  const tasks = readData();
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) return false;

  tasks.splice(index, 1);
  writeData(tasks);
  return true;
};


module.exports = { readData, writeData, getAllTasks, getTaskById, createTask, updateTask, deleteTask };
