module.exports = (express) => {
  
    express.post('/consum/:idScenario/:type', (req, res) => {
        express.controller.dealership.add(req, res);
    });
    
    express.get('/consum/:idScenario/all', (req, res) => {
        express.controller.dealership.getAll(req, res);
    });

}