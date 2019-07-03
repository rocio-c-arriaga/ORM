const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('usuarios', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nickname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pais: {
            type: Sequelize.STRING,
            allowNull: true
        },

    }, {timestamps: false});

    return Users;
}


/*


id	int(11) Auto Increment
nombre	varchar(100)
nickname	varchar(100) NULL
email	varchar(100)
pais

* */