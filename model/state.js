'use strict';

let mongoose = require('../database');

let State = new mongoose.Schema ({
    uf: String,
    },{collection: 'State'}
);

module.exports = State;