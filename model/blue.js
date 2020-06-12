'use strict';

let mongoose = require('../database');

let Blue = new mongoose.Schema ({
    demandaPonta: {
        type: Number,
        required: true
        },
    demandaForaPonta: {
        type: Number,
        required: true
      },
    tePonta: {
        type: Number,
        required: true
      },
    teForaPonta: {
        type: Number,
        required: true
      },
    tusdPonta: {
        type: Number,
        required: true
      },
    tusdForaPonta: {
        type: Number,
        required: true
      },
    idTariff: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tariff',
        required: true
    },
    idCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    },{collection: 'Blue'}
);

module.exports = Blue;