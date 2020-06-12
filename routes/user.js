module.exports = (express) => {
    
    express.post('/users', (req, res) => {
        express.controller.user.add(express, req, res);
    });

    express.get('/users/:user_id', (req, res) => {
        express.controller.user.get_by_id(express, req, res);
    });

    express.get('/users/:cnpj_id/cnpj', (req, res) => {
        express.controller.user.get_by_cnpj(express, req, res);
    });

    express.get('/users', (req, res) => {
        express.controller.user.get_all(express,req, res);
    });
    
    express.put('/users/:user_id', (req, res) => {
        express.controller.user.update(express, req, res);
    });

    express.delete('/users/:user_id', (req, res) => {
        express.controller.user.delete(express, req, res);
    });
}
