module.exports = (express) => {
  
    express.post('/white', (req, res) => {
        express.controller.white.add(req, res);
    });

    express.post('/white/many', (req, res) => {
        express.controller.white.add_many(req, res);
    });

    express.get('/white/dealership/:idDealership/category/:idCategory', (req, res) => {
        express.controller.white.getDealershipCategory(req, res);
    });

    express.get('/white/all', (req, res) => {
        express.controller.white.get_all(req, res);
    });

    express.put('/white/:idWhite', (req, res) => {
        express.controller.white.update(req, res);
    });

    express.delete('/white/:idWhite', (req, res) => {
        express.controller.white.delete(req, res);
    });
}