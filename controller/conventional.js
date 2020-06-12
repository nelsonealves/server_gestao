let mongoose = require('../database.js');
let conventionalSchema = require('../model/conventional');
let modelConventional = mongoose.model('Conventional', conventionalSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add_many = (req, res) => {
    modelConventional.insertMany(req.body, (err, resp) => {
        if (err) res.status(404).send(err);
        res.status(200).send(resp);
    })
}