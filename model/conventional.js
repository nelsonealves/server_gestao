'use strict';

let mongoose = require('../database');

let Conventional = new mongoose.Schema ({
    te: {
        type: Number,
        required: true
        },
    tusd: {
        type: Number,
        required: true
      },
    idCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    idTariff: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tariff',
        required: true
    },
    },{collection: 'Conventional'}
);

module.exports = Conventional;