'use strict';

let mongoose = require('../database');

let Dealership = new mongoose.Schema ({
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
    idState: {
        type: mongoose.Schema.ObjectId,
        ref: 'State',
        required: true
    }
    },{collection: 'Dealership'}
);

module.exports = Dealership;