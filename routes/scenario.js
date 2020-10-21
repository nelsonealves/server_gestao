module.exports = (express) => {
  
    express.post('/scenario/:idAnalyzes/category/:idCategory/dealership/:idDealership', (req, res) => {
        express.controller.scenario.add(req, res);
    });

    // express.post('/scenarios/:idAnalyzes/category/:idCategory/dealership/:idDealership', (req, res) => {
    //     express.controller.scenario.addMany(req, res);
    // });

    express.get('/scenario/:idAnalyzes', (req, res) => {
        express.controller.scenario.getByAnalyzes(req, res);
    });

    express.put('/scenario/:idScenario/analyze/:idAnalyze', (req, res) => {
        express.controller.scenario.update(req, res);
    });

    express.delete('/scenario/:scenario_id', (req, res) => {
        express.controller.scenario.delete(req, res);
    });
}