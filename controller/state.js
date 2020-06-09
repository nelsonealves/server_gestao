
module.exports.add = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`INSERT INTO Dealership (uf) 
        VALUES (${req.body.uf})`, res);
};

module.exports.get_by_id = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`SELECT * FROM State 
        WHERE=${req.params.state_id}`, res);
};

module.exports.get_all = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`SELECT * FROM State`, res);
};

module.exports.update = (express, req, res) => {

};

module.exports.delete = (express, req, res) => {

};

