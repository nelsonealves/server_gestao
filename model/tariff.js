'use strict';

let mongoose = require('../database');

let Tariff = new mongoose.Schema ({
    date: Date,
    idDealership: {
        type: mongoose.Schema.ObjectId,
        ref: 'Dealership',
        required: true
    },
    },{collection: 'Tariff'}
);

module.exports = Tariff;