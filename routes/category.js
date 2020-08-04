module.exports = (express) => {
    
    express.get('/category/:idCategory', (req, res) => {
        express.controller.category.get(req, res);
    });

    express.get('/category/', (req, res) => {
        express.controller.category.getAll(req, res);
    });
}