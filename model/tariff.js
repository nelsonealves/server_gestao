'use strict';

let mongoose = require('../database');

let Tariff = new mongoose.Schema ({
    date: Date,
    id_Caregory_Dealership: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category_Dealership',
        required: true
    },
    },{collection: 'Tariff'}
);

module.exports = Tariff;