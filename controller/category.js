//let execQuery = express.controller.query.execQuery;

module.exports.get_enquadramento = (express, req, res) => {
    express.controller.query.execQuery("SELECT * FROM Enquadramento WHERE idEnquadramento="+req.params.enquadramento_id, res);
}

module.exports.get_all_enquadramento = (express, req, res) => {
    express.controller.query.execQuery("SELECT * FROM Enquadramento", res);
}

