let mongoose = require('../database.js');
let dealershipSchema = require('../model/dealership');
let modelDealership = mongoose.model('Dealership', dealershipSchema);
let stateSchema = require('../model/state');
let modelState = mongoose.model('State', stateSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add = (req, res) => {
    modelState.aggregate(
        [{
            $match: {
                uf: req.body.uf
            }
        }],
        (err, resp1) => {
            if (err) res.status(404);
            req.body.idState = resp1[0]._id;
            let Dealership = new modelDealership(req.body);
            Dealership.save((err, resp2) => {
                if (err) res.status(404);
                res.status(200).send(resp2);
            });
        }
    );
    
    
}

module.exports.get_by_id = (req, res) => {
   
}

module.exports.get_all = (req, res) => {
    
}

module.exports.get_all_state = (req, res) => {
    modelDealership.find({})
    .exec((err, resp) => {
        if(err) res.send(err);
        modelDealership.populate(resp, {path: 'idState', model: 'State'}, (err, resp1) => {
            if(err) res.status(404).send(err);
            res.status(200).send(resp1);
        })
    })
}

module.exports.update = (req, res) => {
    
}

module.exports.delete = (req, res) => {
    
}