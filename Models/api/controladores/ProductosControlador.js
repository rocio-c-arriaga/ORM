//definimos un nuevo modulo en controlador 
module.exports = (app, userModel) => {
    //Lista todos los productos
    app.get('/usuarios', (req,res) => {
        console.log('listando....')
//endpoint para filtrar datos 
        let whereObject = {

        }
        if (req.query.nombre) {
            console.log (req.query.nombre)
            whereObject.nombre = req.query.nombre;
        }
        if (req.query.nickname) {
            console.log (req.query.nickname)
            whereObject.nickname = req.query.nickname;
        }
        if (req.query.email) {
            console.log (req.query.email)
            whereObject.email = req.query.email;
        }
        userModel.findAll({
            where: whereObject
        }).then((resp) => {
            res.send(resp)
        })
    });
    //vamos a definir todos los endpoints que vamos a utilizar
    //crear
    app.post('/usuarios',(req,res) => {
        console.log ('creando....')

        userModel.create(req.body).then(resp => {
            console.log("auto-generated ID:", resp.id);
            res.send(resp);
        });
    });
    //actualizar
    app.put('/usuarios/:id',(req, res) => {
        console.log('listando....')

        userModel.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            console.log('Actualizado')

            res.send(null);
        })
    });
     //eliminar
     app.delete('/usuarios/:id',(req, res) => {
        console.log('eliminado....')

        userModel.destroy({
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            console.log('eliminando ....')
            res.send(null);
        });
    });
     //obtener producto por id
     app.get('/usuarios/:id',(req, res) => {
        console.log('listando....')

        userModel.findOne({
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            console.log('encontrado: ' + resp.id)
            res.send(resp);
        })
    });

}