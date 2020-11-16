module.exports = (express) => {
  
    express.post('/blue', (req, res) => {
        express.controller.blue.add(req, res);
    });

    express.post('/blue/many', (req, res) => {
        express.controller.blue.add_many(req, res);
    });

    express.get('/blue/dealership/:idDealership/category/:idCategory', (req, res) => {
        express.controller.blue.getDealershipCategory(req, res);
    });

    express.get('/blue/:idTariff', (req, res) => {
        express.controller.blue.getByIdTariff(req, res);
    });

    express.get('/blue/all', (req, res) => {
        express.controller.blue.get_all(req, res);
    });

    express.put('/blue/:idBlue', (req, res) => {
        express.controller.blue.update(req, res);
    });

    express.delete('/blue/:idBlue', (req, res) => {
        express.controller.blue.delete(req, res);
    });
}