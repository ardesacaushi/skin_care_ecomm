const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();

// Lejon komunikimin me React dhe leximin e të dhënave JSON
app.use(cors());
app.use(express.json());

// Një rrugë testuese për të parë nëse serveri punon
app.get('/', (req, res) => {
  res.send('Mirë se vini në API-në e Ardesa Beauty & Skincare!');
});

// Rruga për të marrë të gjitha produktet nga MySQL
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gabim gjatë marrjes së produkteve' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveri i Ardesa-s po punon në portën http://localhost:${PORT}`);
cd });