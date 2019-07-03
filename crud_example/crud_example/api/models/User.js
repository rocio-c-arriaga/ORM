const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const User = sequelize.define('user', {
        // attributes
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        timestamps: false
    });


    return User;
}



