module.exports = (express) => {
  
    express.post('/analyze/:idContract/', (req, res) => {
        express.controller.analyze.add(req, res);
    });
    express.post('/analyze/contract/:idContract/category/:idCategory/dealership/:idDealership/status/:status', (req, res) => {
        express.controller.analyze.addAndIncrementStatus(req, res);
    });

    express.get('/analyze/:idContract', (req, res) => {
        express.controller.analyze.getByContract(req, res);
    });
    
    express.get('/analyze/:idAnalyze/scenarios', (req, res) => {
        express.controller.analyze.getIncludeScenarios(req, res);
    });

    express.get('/analyze/:idConsumerUnit/all', (req, res) => {
        express.controller.analyze.getAllOfConsumerUnit(req, res);
    });

    express.put('/analyze/:idAnalyzes', (req, res) => {
        express.controller.analyze.update(req, res);
    });

    express.delete('/analyze/:analyze_id', (req, res) => {
        express.controller.analyze.delete(req, res);
    });
}