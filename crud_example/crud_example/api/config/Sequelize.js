/*
module.exports = () => {

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

    return sequelize;
}

////////////////////////////////////////////////////*/
