module.exports = (express) => {

    express.post('/demand/:idScenario/:type', (req, res) => {
        express.controller.demand.add(req, res);
    });
    
    express.post('/demand/all', (req, res) => {
        express.controller.demand.addMany(req, res);
    });

    express.post('/demand/all/status/:status/consumerUnit/:idConsumerUnit', (req, res) => {
        express.controller.demand.addManyAndChangeStatus(req, res);
    });
    
    express.get('/demand/:idScenario/all', (req, res) => {
        express.controller.demand.getAllByScenario(req, res);
    });

}