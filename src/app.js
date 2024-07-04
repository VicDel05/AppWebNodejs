const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const database = require('./config/database');

require('dotenv').config();

// Session
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Endpoints
app.get('/', (req, res) =>{
    res.render('index', {
        title: 'Home'
    })
});

// Data Base
database.connect((err)=> {
    if (err) {
        console.error('Error al conectar la base de datos: ', err);
        return;
    }
    console.log('Base de datos conectada');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});