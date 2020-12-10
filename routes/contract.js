module.exports = (express) => {
  
    express.post('/contract/consumerUnit/:idConsumerUnit/dealership/:idDealership/category/:idCategory', (req, res) => {
        express.controller.contract.add(req, res);
    });

    express.post('/contract/consumerUnit/:idConsumerUnit/dealership/:idDealership/category/:idCategory/status/:status', (req, res) => {
        express.controller.contract.addAndChangeStatus(req, res);
    });

    express.post('/contract/consumerUnit/:idConsumerUnit/dealership/:idDealership/category/:idCategory/status/:status/infrastructure', (req, res) => {
        express.controller.contract.addAndChangeStatusAndInfra(req, res);
    });

    express.get('/contracts', (req, res) => {
        express.controller.contract.getAll(req, res);
    });

    express.get('/contract/consumerUnit/:idConsumerUnit', (req, res) => {
        express.controller.contract.getByConsumerUnit(req, res);
    });

    express.get('/contract/consumerUnit/:idConsumerUnit/analyzes', (req, res) => {
        express.controller.contract.getAnalyzes(req, res);
    });

    express.get('/contract/consumerUnit/:idConsumerUnit/bills', (req, res) => {
        express.controller.contract.getByConsumerUnitAndBills(req, res);
    });

    // express.get('/category/user/:idUser/latest', (req, res) => {
    //     express.controller.categoryUser.getLatestOfUser(req, res);
    // });
}