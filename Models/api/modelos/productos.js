//vamos a definir nuestro modelo
const Sequelize = requiere('Sequelize'); //usar una sola instancia en sequeelize y reducir el uso de memoria y hacer mas rapido el servicio

module.exports = (sequelize) => {
    const Productos = sequelize.define('productos', {
        nombre: {
            type:Sequelize.STRING,
            primaryKey:true
        },
        precio: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        categoria: {
            type: Sequelize.STRING,
            allowNull: false
        },
        existencia: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: Sequelize. STRING,
            allowNull: false
        }
    }, {timestamps:false});   
    
    return Productos;
}