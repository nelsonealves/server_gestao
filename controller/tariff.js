let mongoose = require('../database.js');
let tariffSchema = require('../model/tariff');
let modelTariff = mongoose.model('Tariff', tariffSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add = (req, res) => {
    let tariff = new modelTariff(req.body);
    tariff.save((err, resp) => {
        if (err) res.status(404).send(err);
        res.status(200).send(resp);
    })
}