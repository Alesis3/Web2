const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calc.html'));
});

app.get('/generadorQR', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'qr.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});