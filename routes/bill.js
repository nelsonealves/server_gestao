module.exports = (express) => {
  
    express.post('/bill', (req, res) => {
        express.controller.bill.add(express, req, res);
    });

    express.get('/bill/:bill_id', (req, res) => {
        express.controller.bill.get_by_id(express, req, res);
    });

    express.get('/all_bill', (req, res) => {
        express.controller.bill.get_all(express, req, res);
    });

    express.put('/bill/:bill_id', (req, res) => {
        express.controller.bill.update(express, req, res);
    });

    express.delete('/bill/:bill_id', (req, res) => {
        express.controller.bill.delete(express, req, res);
    });
}