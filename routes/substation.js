module.exports = () => {

    express.post('/substation/:idAnalyzes', (req, res) => {
      express.controller.substation.add(req, res);
    });

    express.get('/substation/:idSubstation', (req, res) => {
        express.controller.substation.get_by_id(req, res);
    });

    express.get('/substations', (req, res) => {
        express.controller.substation.getAll(req, res);
    });

    express.put('/substation/:idSubstation', (req, res) => {
        express.controller.substation.update(req, res);
    });

    express.delete('/substation/:idSubstation', (req, res) => {
        express.controller.substation.delete(req, res);
    });
}
