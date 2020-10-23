module.exports = (express) => {
  
    express.post('/consum/:idScenario', (req, res) => {
        express.controller.dealership.add(req, res);
    });

    express.post('/consum/:idScenario/all', (req, res) => {
        express.controller.dealership.addMany(req, res);
    });

    express.get('/consum/:idScenario/all', (req, res) => {
        express.controller.dealership.getAll(req, res);
    });

}