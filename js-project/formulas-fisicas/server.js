const express = require('express');
// const path = require('path');// esta linea es para usar rutas absolutas
const app = express();
const PORT = process.env.PORT || 3000;  

//Servir pastas  estaticas de pasta public
app.use(express.static('public'));//ruta relativa
// app.use(express.static(path.join(__dirname, 'public')));//ruta absoluta
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});