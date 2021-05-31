module.exports = (express) => {
  
   
    express.post('/report/:idAnalyzes', (req, res) => {
        express.controller.report.addReport(req, res);
    });

    express.get('/report/:idConsumerUnit/consumerUnit', (req, res) => {
        express.controller.report.getReportByConsumerUnit(req, res);
    });

    // express.put('/scenario/:idScenario/analyze/:idAnalyze', (req, res) => {
    //     express.controller.scenario.update(req, res);
    // });

    // express.delete('/scenario/:idScenario', (req, res) => {
    //     express.controller.scenario.delete(req, res);
    // });
}