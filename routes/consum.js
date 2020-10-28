module.exports = (express) => {
  
    express.post('/consum/:idScenario', (req, res) => {
        express.controller.consum.add(req, res);
    });

    express.post('/consum/:idScenario/all', (req, res) => {
        express.controller.consum.addMany(req, res);
    });

    express.get('/consum/:idScenario', (req, res) => {
        express.controller.consum.getByScenario(req, res);
    });

    express.get('/consum/:idScenario/all', (req, res) => {
        express.controller.consum.getAllByScenario(req, res);
    });

}