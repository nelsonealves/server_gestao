module.exports = (express) => {
  
    express.post('/scenario/:idAnalyze/category/:idCategory/dealership/:idDealership', (req, res) => {
        express.controller.scenario.add(req, res);
    });

    // express.get('/scenario/:idContract', (req, res) => {
    //     express.controller.scenario.getByContract(req, res);
    // });
    
    express.get('/scenario/:idAnalyze/scenarios', (req, res) => {
        express.controller.scenario.getIncludeScenarios(req, res);
    });

    express.put('/scenario/:idScenario/analyze/:idAnalyze', (req, res) => {
        express.controller.scenario.update(req, res);
    });

    express.delete('/scenario/:scenario_id', (req, res) => {
        express.controller.scenario.delete(req, res);
    });
}