const express = require("express");
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const app = express();
const port = 3000;


// Configurando a pasta 'public' para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configurando o EJS como motor de templates
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Configurando o uso de layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Rotas
app.use('/', require('./routes/index'));

// Middleware para capturar rotas 404
app.use((req, res, next) => {
    res.status(404).render('errors/404', { title: 'Error 404' });
});


// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
