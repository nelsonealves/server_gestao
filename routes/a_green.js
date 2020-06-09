module.exports = (express) => {
  
    express.post('/a_green', (req, res) => {
        express.controller.a_green.add(express, req, res);
    });

    express.get('/a_green/:a_green_id', (req, res) => {
        express.controller.a_green.get_by_id(express, req, res);
    });

    express.get('/all_a_green', (req, res) => {
        express.controller.a_green.get_all(express, req, res);
    });

    express.put('/a_green/:a_green_id', (req, res) => {
        express.controller.a_green.update(express, req, res);
    });

    express.delete('/a_green/:a_green_id', (req, res) => {
        express.controller.a_green.delete(express, req, res);
    });
}