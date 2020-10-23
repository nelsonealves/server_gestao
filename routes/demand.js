module.exports = (express) => {
  
    express.post('/demand/:idScenario/:type', (req, res) => {
        express.controller.dealership.add(req, res);
    });
    
    express.get('/demand/:idScenario/all', (req, res) => {
        express.controller.dealership.getAll(req, res);
    });

}