module.exports = (express) => {
  
    express.post('/infrastructure/:idConsumerUnit', (req, res) => {
        express.controller.infrastructure.add(req, res);
    });

    express.get('/infrastructure/:idConsumerUnit', (req, res) => {
        express.controller.infrastructure.getByConsumerUnit(req, res);
    });

    express.put('/infrastructure/:idConsumerUnit', (req, res) => {
        express.controller.infrastructure.update(req, res);
    });

    express.delete('/infrastructure/:idConsumerUnit', (req, res) => {
        express.controller.infrastructure.delete(req, res);
    });
}