module.exports = (express) => {
  
    express.post('/consumerUnit/:idUser', (req, res) => {
        express.controller.consumerUnit.add(req, res);
    });

    express.get('/consumerUnits', (req, res) => {
        express.controller.consumerUnit.getAll(req, res);
    });
    
    express.get('/consumerUnits/user', (req, res) => {
        express.controller.consumerUnit.getAllAndJoinConsumerWithUser(req, res);
    });

    express.get('/consumerUnit/:idConsumerUnit/user', (req, res) => {
        express.controller.consumerUnit.JoinConsumerAndUser(req, res);
    });

    // express.get('/category/user/:idUser/latest', (req, res) => {
    //     express.controller.categoryUser.getLatestOfUser(req, res);
    // });
}