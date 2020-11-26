module.exports = (express) => {
  
    express.post('/tribute/:idDealership', (req, res) => {
        express.controller.tributes.add(req, res);
    });

    express.get('/tribute/:idTributes', (req, res) => {
        express.controller.tributes.get_by_id(req, res);
    });

    express.get('/tributes', (req, res) => {
        express.controller.tributes.get_all(req, res);
    });

    express.put('/tribute/:tributes_id', (req, res) => {
        express.controller.tributes.update(req, res);
    });

    express.delete('/tribute/:tributes_id', (req, res) => {
        express.controller.tributes.delete(req, res);
    });
}