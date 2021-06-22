module.exports = (express) => {
  
    express.post('/simulation/:idScenario', (req, res) => {
        express.controller.simulation.add(req, res);
    });
   
    // express.post('/simulations/:idAnalyzes/category/:idCategory/dealership/:idDealership/all', (req, res) => {
    //     express.controller.simulation.addMany(req, res);
    // });

    express.get('/simulation/:idScenario', (req, res) => {
        express.controller.simulation.getByIdScenario(req, res);
    });

    express.put('/simulation/:idScenario', (req, res) => {
        express.controller.simulation.update(req, res);
    });

    express.delete('/simulation/:idScenario', (req, res) => {
        express.controller.simulation.delete(req, res);
    });
}