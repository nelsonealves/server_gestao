'use strict';

let mongoose = require('../database');

let Bill = new mongoose.Schema ({
    idCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    idUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    date: Date,
    pis: {
        type: Number,
        required: true
    },
    cofins: {
        type: Number,
        required: true
    },
    measures: String
    },{collection: 'Bill'}
);

module.exports = Bill;