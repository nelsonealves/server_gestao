module.exports = (express) => {

    express.post('/user', (req, res) => {
        express.controller.user.add(req, res);
    });

    // express.get('/user/:user_id', (req, res) => {
    //     express.controller.user.getById(req, res);
    // });

    express.get('/user/:idUser/consumerUnits', (req, res) => {
        express.controller.user.getConsumer(req, res);
    });

    express.get('/auth/:idAuth/users', (req, res) => {
        express.controller.user.getAuthClients(req, res);
    });

    express.get('/user/identification/:identification', (req, res) => {
        express.controller.user.getByIdentification(req, res);
    });

    express.get('/users', (req, res) => {
        express.controller.user.getAll(req, res);
    });

    express.get('/user/consumerUnits', (req, res) => {
        express.controller.user.getAllWithUnits(req, res);
    });

    express.put('/user/:idUser', (req, res) => {
        express.controller.user.update(req, res);
    });
    
    express.put('/user/:idUser/idAuth', (req, res) => {
        express.controller.user.updateIdAuth(req, res);
    });

    express.delete('/user/:user_id', (req, res) => {
        express.controller.user.delete(req, res);
    });
}
