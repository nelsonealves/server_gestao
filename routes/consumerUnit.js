module.exports = (express) => {
  
    express.post('/consumerUnit/user/:idUser/dealership/:idDealership', (req, res) => {
        console.log('ops');
        express.controller.consumerUnit.add(req, res);
    });

    express.get('/consumerUnits', (req, res) => {
        express.controller.consumerUnit.getAll(req, res);
    });

    // express.get('/category/user/:idUser/latest', (req, res) => {
    //     express.controller.categoryUser.getLatestOfUser(req, res);
    // });
}