module.exports = (express) => {
  
    express.post('/tariff', (req, res) => {
        express.controller.tariff.add(req, res);
    });

    // express.get('/tariff/:tariff_id', (req, res) => {
    //     express.controller.tariff.get_by_id(req, res);
    // });

    // express.get('/all_tariff', (req, res) => {
    //     express.controller.tariff.get_all(req, res);
    // });

    // express.put('/tariff/:tariff_id', (req, res) => {
    //     express.controller.tariff.update(req, res);
    // });

    // express.delete('/tariff/:tariff_id', (req, res) => {
    //     express.controller.tariff.delete(req, res);
    // });
}