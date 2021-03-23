module.exports = () => {

    express.post('/substation/:idAnalyzes', (req, res) => {
      express.controller.substation.add(req, res);
    });

    express.get('/substation/:idSubstation', (req, res) => {
        express.controller.substation.getById(req, res);
    });

    express.get('/substation/:idAnalyzes/analyzes', (req, res) => {
        express.controller.substation.getByIdAnalyzes(req, res);
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
