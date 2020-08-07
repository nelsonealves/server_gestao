module.exports = (express) => {
    
    express.post('/users/:idDealership', (req, res) => {
        express.controller.user.add(req, res);
    });

    express.get('/users/:user_id', (req, res) => {
        express.controller.user.getById(req, res);
    });

    express.get('/users/:userId/dealership', (req, res) => {
        express.controller.user.getDealershipInclude(req, res);
    });

    express.get('/users/:cnpj_id/cnpj', (req, res) => {
        express.controller.user.get_by_cnpj(req, res);
    });

    express.get('/users', (req, res) => {
        express.controller.user.getAll(req, res);
    });
    
    express.put('/users/:user_id', (req, res) => {
        express.controller.user.update(req, res);
    });

    express.delete('/users/:user_id', (req, res) => {
        express.controller.user.delete(req, res);
    });
}
