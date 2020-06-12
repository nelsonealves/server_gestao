'use strict';

let mongoose = require('../database');

let Tributes = new mongoose.Schema ({
    icms1: {
        type: Number,
    },
    icms2: {
        type: Number,
    },
    date: Date,
    idState: {
        type: mongoose.Schema.ObjectId,
        ref: 'State',
        required: true
    },
    },{collection: 'Tributes'}
);

module.exports = Tributes;