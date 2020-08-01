'use strict';

let mongoose = require('../database');

let Category_Dealership = new mongoose.Schema ({
    id_Dealership: {
        type: mongoose.Schema.ObjectId,
        ref: 'Dealership',
    },
    id_Category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
    }
    },{collection: 'Category_Dealership'}
);

module.exports = Category_Dealership;