module.exports = (express) => {
  
    express.post('/a_blue', (req, res) => {
        express.controller.a_blue.add(express, req, res);
    });

    express.get('/a_blue/:a_blue_id', (req, res) => {
        express.controller.a_blue.get_by_id(express, req, res);
    });

    express.get('/all_a_blue', (req, res) => {
        express.controller.a_blue.get_all(express, req, res);
    });

    express.put('/a_blue/:a_blue_id', (req, res) => {
        express.controller.a_blue.update(express, req, res);
    });

    express.delete('/a_blue/:a_blue_id', (req, res) => {
        express.controller.a_blue.delete(express, req, res);
    });
}