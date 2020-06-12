let mongoose = require('../database.js');
let whiteSchema = require('../model/white');
let modelWhite = mongoose.model('White', whiteSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add_many = (req, res) => {
    modelWhite.insertMany(req.body, (err, resp) => {
        if (err) res.status(404).send(err);
        res.status(200).send(resp);
    })
}