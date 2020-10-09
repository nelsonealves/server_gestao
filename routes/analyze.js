module.exports = (express) => {
  
    express.post('/analyze/:idConsumerUnit', (req, res) => {
        express.controller.analyze.add(req, res);
    });
    express.post('/analyze/:idConsumerUnit/status/:status', (req, res) => {
        express.controller.analyze.addAndIncrementStatus(req, res);
    });

    express.get('/analyze/:idConsumerUnit', (req, res) => {
        express.controller.analyze.getByConsumerUnit(req, res);
    });
    
    express.get('/analyze/:idAnalyze/scenarios', (req, res) => {
        express.controller.analyze.getIncludeScenarios(req, res);
    });

    express.get('/analyze/:idConsumerUnit/all', (req, res) => {
        express.controller.analyze.getAllOfConsumerUnit(req, res);
    });

    express.put('/analyze/:analyze_id', (req, res) => {
        express.controller.analyze.update(req, res);
    });

    express.delete('/analyze/:analyze_id', (req, res) => {
        express.controller.analyze.delete(req, res);
    });
}