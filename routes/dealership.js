module.exports = (express) => {
  
    express.post('/dealership/:uf', (req, res) => {
        express.controller.dealership.add(req, res);
    });

    express.get('/dealership/:dealership_id', (req, res) => {
        express.controller.dealership.get_by_id(req, res);
    });

    express.get('/dealerships', (req, res) => {
        express.controller.dealership.get_all(req, res);
    });

    express.get('/dealerships/state', (req, res) => {
        express.controller.dealership.get_all_state(req, res);
    });

    express.put('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.update(req, res);
    });

    express.delete('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.delete(req, res);
    });
}
