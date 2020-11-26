module.exports = (express) => {
  
    express.post('/dealership/:uf', (req, res) => {
        express.controller.dealership.add(req, res);
    });

    express.get('/dealership/:idDealership', (req, res) => {
        express.controller.dealership.getById(req, res);
    });
    
    express.get('/dealership/:idDealership/categories', (req, res) => {
        express.controller.dealership.getCategories(req, res);
    });

    express.get('/dealership/:idDealership/tributes', (req, res) => {
        express.controller.dealership.getTributes(req, res);
    });
    express.get('/dealership/:idDealership/tributes/tariff', (req, res) => {
        express.controller.dealership.getTributesAndTariff(req, res);
    });

    express.get('/dealerships', (req, res) => {
        express.controller.dealership.getAll(req, res);
    });

    express.get('/dealerships/state', (req, res) => {
        express.controller.dealership.get_all_state(req, res);
    });

    express.put('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.update(req, res);
    });

    express.delete('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.delete(req, res);
    });
}
