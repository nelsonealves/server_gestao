module.exports = (express) => {
  
    express.post('/green', (req, res) => {
        express.controller.green.add(req, res);
    });

    express.post('/green/many', (req, res) => {
        express.controller.green.add_many(req, res);
    });

    express.get('/green/:idGreen', (req, res) => {
        express.controller.green.get_by_id(req, res);
    });

    express.get('/green/all', (req, res) => {
        express.controller.green.get_all(req, res);
    });

    express.put('/green/:idGreen', (req, res) => {
        express.controller.green.update(req, res);
    });

    express.delete('/green/:idGreen', (req, res) => {
        express.controller.green.delete(req, res);
    });
}