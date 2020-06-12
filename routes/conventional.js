module.exports = (express) => {
  
    express.post('/conventional', (req, res) => {
        express.controller.conventional.add(req, res);
    });

    express.post('/conventional/many', (req, res) => {
        express.controller.conventional.add_many(req, res);
    });

    express.get('/conventional/:idConventional', (req, res) => {
        express.controller.conventional.get_by_id(req, res);
    });

    express.get('/conventional/all', (req, res) => {
        express.controller.conventional.get_all(req, res);
    });

    express.put('/conventional/:idConventional', (req, res) => {
        express.controller.conventional.update(req, res);
    });

    express.delete('/conventional/:idConventional', (req, res) => {
        express.controller.conventional.delete(req, res);
    });
}