var bodyParser = require ('body-parser');//importamos body parser
var Sequelize = require('sequelize'); //importar la libreria sequelize
var userModel =require('./api/modelos/usuarios')
var productoControlador = require ('./api/controladores/ProductosControlador')
//Configuramos express en nuestro caso correra en el puerto 3000        
 var express = require('express'),   
    app = express(),
    port = process.env.PORT || 3000;

    app.use(bodyParser.json()) // a frameword de exppress nos ayuda a leer o escribir el requiered value para poder sacar el json y el response body ayuda para servirlo
//Configuramos Sequelize
var dbName = 'practicaorm';
var userName = 'root';
var password= '5678';

const sequelize = new Sequelize(dbName, userName, password , {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
    console.error('Unable to connect to the database', err);
    });
// Agregamos el controlador de productos a nuestra app de express
productoControlador(app, userModel(sequelize))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
//node server.js