module.exports = (express) => {
  
    express.post('/consumerUnit/:idUser', (req, res) => {
        express.controller.consumerUnit.add(req, res);
    });

    express.get('/consumerUnit/:idConsumerUnit', (req, res) => {
        express.controller.consumerUnit.getById(req, res);
    });

    express.get('/consumerUnit/:idConsumerUnit/infrastructure/contract', (req, res) => {
        express.controller.consumerUnit.getByIdWithInfraContract(req, res);
    });

    express.get('/consumerUnits', (req, res) => {
        express.controller.consumerUnit.getAll(req, res);
    });

    express.put('/consumerUnit/:idConsumerUnit/status/:status', (req, res) => {
        express.controller.consumerUnit.changeStatus(req, res);
    });
    
    express.get('/consumerUnits/user', (req, res) => {
        express.controller.consumerUnit.getAllAndJoinConsumerWithUser(req, res);
    });

    express.get('/consumerUnit/:idConsumerUnit/status', (req, res) => {
        express.controller.consumerUnit.getByStatus(req, res);
    });

    express.get('/consumerUnit/:idConsumerUnit/user', (req, res) => {
        express.controller.consumerUnit.JoinConsumerAndUser(req, res);
    });

    // express.get('/category/user/:idUser/latest', (req, res) => {
    //     express.controller.categoryUser.getLatestOfUser(req, res);
    // });
}