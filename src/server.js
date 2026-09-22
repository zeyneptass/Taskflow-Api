const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
      `Taskflow API ${PORT} portunda çalışıyor : http://localhost:${PORT}`,
    );
})