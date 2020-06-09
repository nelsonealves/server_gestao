module.exports = (express) => {
  
    express.post('/b_white', (req, res) => {
        express.controller.b_white.add(express, req, res);
    });

    express.get('/b_white/:b_white_id', (req, res) => {
        express.controller.b_white.get_by_id(express, req, res);
    });

    express.get('/all_b_white', (req, res) => {
        express.controller.b_white.get_all(express, req, res);
    });

    express.put('/b_white/:b_white_id', (req, res) => {
        express.controller.b_white.update(express, req, res);
    });

    express.delete('/b_white/:b_white_id', (req, res) => {
        express.controller.b_white.delete(express, req, res);
    });
}