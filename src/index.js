"use strict"

const express = require('express');
const morgan = require('morgan');

const app = express();

require('./db');

// SETTINGS
app.set('port', 3010);

// ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());


// RUTAS
app.use('/list', require('./routes/list'));

// SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`express escuchando`, app.get('port'));
});

