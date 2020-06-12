let mongoose = require('../database.js');
let userSchema = require('../model/state');
let modelState = mongoose.model('State', userSchema);
let objectid = require('mongodb').ObjectID;

module.exports.get_by_id = (req, res) => {
    
};

module.exports.get_all = (req, res) => {
    modelState.find({})
    .exec(
        (err, msg) => {
            if(err) res.send(err);
            res.status(200).json(msg.sort((a,b) => {
                if (a.uf < b.uf) return -1;
                if (a.uf > b.uf) return 1;
                return 0;	
                })
            )
    });

};

module.exports.update = (req, res) => {

};

module.exports.delete = (req, res) => {

};

