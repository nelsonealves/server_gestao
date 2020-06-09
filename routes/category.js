module.exports = (express) => {
    // let qry = express.controller.query.execQuery;
    
    express.get('/enquadramento/:enquadramento_id', (req, res) => {
        express.controller.enquadramento.get_enquadramento(express, req, res);
    });

    express.get('/all_enquadramento', (req, res) => {
        express.controller.enquadramento.get_all_enquadramento(express,req, res);
    });
}