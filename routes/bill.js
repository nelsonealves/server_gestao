module.exports = (express) => {
  
    express.post('/bill/:idContract', (req, res) => {
        express.controller.bill.add(req, res);
    });

    express.get('/bill/:idContract', (req, res) => {
        express.controller.bill.getByContract(req, res);
    });

    express.get('/bill/:idConsumerUnit/consumerUnit', (req, res) => {
        express.controller.bill.getByConsumerUnit(req, res);
    });

    express.get('/bills', (req, res) => {
        express.controller.bill.getAll(req, res);
    });

    express.put('/bill/:bill_id', (req, res) => {
        express.controller.bill.update(req, res);
    });

    express.delete('/bill/:idBill', (req, res) => {
        express.controller.bill.deleteByIdBill(req, res);
    });
}