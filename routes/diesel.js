module.exports = () => {

    express.post('/diesel/:idAnalyzes', (req, res) => {
      express.controller.diesel.add(req, res);
    });

    express.get('/diesel/:idDiesel', (req, res) => {
        express.controller.diesel.get_by_id(req, res);
    });

    express.get('/diesels', (req, res) => {
        express.controller.diesel.getAll(req, res);
    });

    express.put('/diesel/:idDiesel', (req, res) => {
        express.controller.diesel.update(req, res);
    });

    express.delete('/diesel/:idDiesel', (req, res) => {
        express.controller.diesel.delete(req, res);
    });
}
