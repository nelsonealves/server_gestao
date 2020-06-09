

module.exports.add = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`INSERT INTO Dealership (
        name, 
        birthday,
        cnpj,
        email,
        tel1,
        tel2,
        cep,
        num_cep,
        id_State) 
        VALUES (
            ${req.body.name},
            ${req.body.cnpj},
            ${req.body.email},
            ${req.body.tel1},
            ${req.body.tel2},
            ${req.body.cep},
            ${req.body.num_cep},
            ${req.body.id_State}, 
            STR_TO_DATE('${req.body.birthday}', '%d-%m-%Y'))`, res);
}

module.exports.get_by_id = (express, req, res) => {
    express
    .controller
    .query
    .execQuery(`SELECT * FROM Dealership \
        WHERE id_Dealership=${req.params.dealership_id}`, res);
}

module.exports.get_all = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM Dealership", res);
}

module.exports.update = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM Dealership", res);
}

module.exports.delete = (express, req, res) => {
    express
    .controller
    .query
    .execQuery("SELECT * FROM Dealership", res);
}