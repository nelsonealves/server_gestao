'use strict';

let mongoose = require('../database');

let User = new mongoose.Schema ({
    name: {
        type: String,
        required: true
        },
    cnpj: {
        type: String,
    },
    email: {
        type: String,
    },
    tel1: {
        type: String,
    },
    tel2: {
        type: String,
    },
    cep: {
        type: String,
    },
    numCep: {
        type: String,
    },
    idDealership: {
        type: mongoose.Schema.ObjectId,
        ref: 'Dealership',
        required: true
    }
    },{collection: 'User'}
);

module.exports = User;