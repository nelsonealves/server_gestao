let mongoose = require('../database.js');
let blueSchema = require('../model/blue');
let modelBlue = mongoose.model('Blue', blueSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add_many = (req, res) => {
    modelBlue.insertMany(req.body, (err, resp) => {
        if (err) res.status(404).send(err);
        res.status(200).send(resp);
    })
}