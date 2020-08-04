module.exports = () => {

    express.post('/state', (req, res) => {
      express.controller.state.add(req, res);
    });

    express.get('/state/:state_id', (req, res) => {
        express.controller.state.get_by_id(req, res);
    });

    express.get('/all_state', (req, res) => {
        express.controller.state.get_all(req, res);
    });

    express.put('/state/:state_id', (req, res) => {
        express.controller.state.update(req, res);
    });

    express.delete('/state/:state_id', (req, res) => {
        express.controller.state.delete(req, res);
    });
}
