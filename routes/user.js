module.exports = (express) => {
    
    express.post('/users/:idDealership', (req, res) => {
        express.controller.user.add(req, res);
    });

    express.get('/users/:user_id', (req, res) => {
        express.controller.user.get_by_id(req, res);
    });

    express.get('/users/:cnpj_id/cnpj', (req, res) => {
        express.controller.user.get_by_cnpj(req, res);
    });

    express.get('/users', (req, res) => {
        express.controller.user.get_all(req, res);
    });
    
    express.put('/users/:user_id', (req, res) => {
        express.controller.user.update(req, res);
    });

    express.delete('/users/:user_id', (req, res) => {
        express.controller.user.delete(req, res);
    });
}
