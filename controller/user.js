//let execQuery = express.controller.query.execQuery;
let mongoose = require('../database.js');
let userSchema = require('../model/user');
let modelUser = mongoose.model('User', userSchema);
let objectid = require('mongodb').ObjectID;

module.exports.add = (req, res) => {
    console.log("OI");
    console.log(req.body)
    let newUser = new modelUser(req.body);
    
    newUser.save((err, ans) => {
        if (err) res.send(err);
        res.send(ans);
    });
}

module.exports.get_by_id = (req, res) => {
   
}

module.exports.get_by_cnpj = (req, res) => {
   
}

module.exports.get_all = (req, res) => {
   modelUser.find({})
   .exec((err, ans) => {
       if (err) res.send(err);
       res.send(ans);
   });
}

module.exports.update = (req, res) => {
   
}

module.exports.delete = (req, res) => {
   
}