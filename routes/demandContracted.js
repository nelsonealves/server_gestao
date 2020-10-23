module.exports = (express) => {
  
    express.post('/demandContracted/:idScenario/:type', (req, res) => {
        express.controller.dealership.add(req, res);
    });
    
    express.get('/demandContracted/:idScenario/all', (req, res) => {
        express.controller.dealership.getAll(req, res);
    });

}