const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//importing routes
const usuarios = require('./routes/usuarios');
const { urlencoded } = require('express');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'usuarios'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', usuarios);
app.get('/usuarios', (req, res) => {
    res.render("usuarios")
})
app.get('/consulta', (req, res) => {
    res.render("consulta");
})
app.get('/index', (req, res) => {
    res.render("index");
})
app.get('/sobre-nosotros', (req, res) => {

    res.render("sobre-nosotros");
})

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});