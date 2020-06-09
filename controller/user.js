//let execQuery = express.controller.query.execQuery;

module.exports.add = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`INSERT INTO User (
        idDealership, 
        name, 
        cnpj_cpf,
        email,
        tel1,
        tel2,
        cep,
        num_cep)
        VALUES (
            ${req.body.idDealership},
            ${req.body.name},
            ${req.body.cnpj_cpf},
            ${req.body.email}, 
            ${req.body.tel1},
            ${req.body.tel2},
            ${req.body.cep},
            ${req.body.num_cep}
            )`, res);
}

module.exports.get_by_id = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM User WHERE idUser="+req.params.user_id, res)
}

module.exports.get_by_cnpj = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM User WHERE CNPJ="+req.params.cnpj_id, res)
}

module.exports.get_all = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM User", res);
}

module.exports.update = (express, req, res) => {
    // express
    // .controller
    // .query
    // .execQuery("SELECT * FROM User", res);
}

module.exports.delete = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM User", res);
}