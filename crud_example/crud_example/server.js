// executed using npm run start

var studentsController = require('./api/controllers/StudentController')
var StudentModel = require('./api/models/User')
var bodyParser = require('body-parser')


var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.json())

console.log('sequelize loaded')

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('test_crud', 'root', 'example', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

studentsController(app, StudentModel(sequelize))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);