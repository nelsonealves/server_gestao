module.exports = (express) => {
  
    express.post('/dealership', (req, res) => {
        express.controller.dealership.add(express, req, res);
    });

    express.get('/dealership/:dealership_id', (req, res) => {
        express.controller.dealership.get_by_id(express, req, res);
    });

    express.get('/dealerships', (req, res) => {
        express.controller.dealership.get_all(express, req, res);
    });

    express.get('/dealerships/state', (req, res) => {
        express.controller.dealership.get_all_state(req, res);
    });

    express.put('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.update(express, req, res);
    });

    express.delete('/dealerships/:dealership_id', (req, res) => {
        express.controller.dealership.delete(express, req, res);
    });
}
