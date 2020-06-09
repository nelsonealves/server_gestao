module.exports = (express) => {
  
    express.post('/state', (req, res) => {
        express.controller.state.add(express, req, res);
    });

    express.get('/state/:state_id', (req, res) => {
        express.controller.state.get_by_id(express, req, res);
    });

    express.get('/all_state', (req, res) => {
        express.controller.state.get_all(express, req, res);
    });

    express.put('/state/:state_id', (req, res) => {
        express.controller.state.update(express, req, res);
    });

    express.delete('/state/:state_id', (req, res) => {
        express.controller.state.delete(express, req, res);
    });
}