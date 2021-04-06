module.exports = (express) => {
  
    express.post('/conventional/:idTariff', (req, res) => {
        express.controller.conventional.add(req, res);
    });

    express.post('/conventional/many', (req, res) => {
        express.controller.conventional.add_many(req, res);
    });

    express.get('/conventional/dealership/:idDealership/category/:idCategory', (req, res) => {
        express.controller.conventional.getDealershipCategory(req, res);
    });

    express.get('/conventional/:idTariff', (req, res) => {
        express.controller.conventional.getByIdTariff(req, res);
    });

    express.get('/conventional/all', (req, res) => {
        express.controller.conventional.get_all(req, res);
    });

    express.put('/conventional/:idConventional', (req, res) => {
        express.controller.conventional.update(req, res);
    });

    express.delete('/conventional/:idConventional', (req, res) => {
        express.controller.conventional.delete(req, res);
    });
}