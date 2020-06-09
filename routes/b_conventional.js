module.exports = (express) => {
  
    express.post('/b_conventional', (req, res) => {
        express.controller.b_conventional.add(express, req, res);
    });

    express.get('/b_conventional/:b_conventional_id', (req, res) => {
        express.controller.b_conventional.get_by_id(express, req, res);
    });

    express.get('/all_b_conventional', (req, res) => {
        express.controller.b_conventional.get_all(express, req, res);
    });

    express.put('/b_conventional/:b_conventional_id', (req, res) => {
        express.controller.b_conventional.update(express, req, res);
    });

    express.delete('/b_conventional/:b_conventional_id', (req, res) => {
        express.controller.b_conventional.delete(express, req, res);
    });
}