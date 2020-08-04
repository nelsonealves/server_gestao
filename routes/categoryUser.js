module.exports = (express) => {
  
    express.post('/category/:idCategory/user/:idUser', (req, res) => {
        express.controller.categoryUser.add(req, res);
    });

    express.get('/category/user/:idUser', (req, res) => {
        express.controller.categoryUser.getByUser(req, res);
    });

    express.get('/category/:idCategory/user/:idUser', (req, res) => {
        express.controller.categoryUser.getByCategoryAndUser(req, res);
    });

    // express.get('/tributes/:tributes_id', (req, res) => {
    //     express.controller.tributes.get_by_id(req, res);
    // });

    // express.get('/all_tributes', (req, res) => {
    //     express.controller.tributes.get_all(req, res);
    // });

    // express.put('/tributes/:tributes_id', (req, res) => {
    //     express.controller.tributes.update(req, res);
    // });

    // express.delete('/tributes/:tributes_id', (req, res) => {
    //     express.controller.tributes.delete(req, res);
    // });
}