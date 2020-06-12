let mongoose = require('../database.js');
let greenSchema = require('../model/green');
let modelGreen = mongoose.model('Green', greenSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add_many = (req, res) => {
    modelGreen.insertMany(req.body, (err, resp) => {
        if (err) res.status(404).send(err);
        res.status(200).send(resp);
    })
}