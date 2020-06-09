module.exports = (express) => {
  
    express.post('/tributes', (req, res) => {
        express.controller.tributes.add(express, req, res);
    });

    express.get('/tributes/:tributes_id', (req, res) => {
        express.controller.tributes.get_by_id(express, req, res);
    });

    express.get('/all_tributes', (req, res) => {
        express.controller.tributes.get_all(express, req, res);
    });

    express.put('/tributes/:tributes_id', (req, res) => {
        express.controller.tributes.update(express, req, res);
    });

    express.delete('/tributes/:tributes_id', (req, res) => {
        express.controller.tributes.delete(express, req, res);
    });
}