const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "../../logs");
const logFile = path.join(logDir, "access.log");

// Klasörr oluşturulur
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl || req.url;

  // Log mesajı oluşturulur
  const logMessage = `[${timestamp}] ${method} - ${url}\n`;

  console.log(logMessage.trim());

  // Asenkron olarak log dosyasına yazılır
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) console.error("Log yazılamadı:", err.message);
  });

  next();
};

module.exports = logger;
