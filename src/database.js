const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'webapp'
});

connection.connect((err)=> {
    if (err) {
        console.error('Error al conectar la base de datos: ', err);
        return;
    }
    console.log('Base de datos conectada');
});