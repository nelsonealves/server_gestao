module.exports = (express) => {
  
    express.post('/contract/consumerUnit/:idConsumerUnit/dealership/:idDealership/category/:idCategory', (req, res) => {
        express.controller.contract.add(req, res);
    });

    express.get('/contracts', (req, res) => {
        express.controller.contract.getAll(req, res);
    });

    express.get('/contract/consumerUnit/:idConsumerUnit', (req, res) => {
        express.controller.contract.getByConsumerUnit(req, res);
    });

    // express.get('/category/user/:idUser/latest', (req, res) => {
    //     express.controller.categoryUser.getLatestOfUser(req, res);
    // });
}