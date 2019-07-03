module.exports = (app, userModel) => {

    app.get('/student', (req, res) => {
        userModel.findAll().then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
            res.send(users);
        });
    });

    app.get('/student/:studentId', (req, res) => {
        console.log('get all worwing')

        res.send({ test: "hello" });
    });

    app.post('/student', (req, res) => {
        console.log(req.body)

        /* var some =  {
             name: "testName2",
             password: "asdasd",
             nicknamne: "test 2"
         }*/

        userModel.create(req.body).then(resp => {
            console.log("Jane's auto-generated ID:", resp.id);
            res.send(resp);
        });

    });

    app.put('/student/:studentId', (req, res) => {
        // console.log('caca');

        /*var some =  {
            name: "name edited",
            password: "edited",
            nicknamne: "test edited"
        }
*/
        userModel.update(req.body, {
            where: {
                id: req.params.studentId
            }
        }).then((resp) => {
            res.send(null);
        });
    });

    app.delete('/student/:studentId', (req, res) => {
        //
        userModel.destroy({
            where: {
                id: req.params.studentId
            }
        }).then(() => {
            res.send(null);
        });
    });
}