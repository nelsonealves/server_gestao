'use strict';

let mongoose = require('../database');

let Category = new mongoose.Schema ({
    group: {
        type: String,
        required: true
        },
    modality: {
        type: String,
        required: true
      },
    subgroup: {
        type: String,
        required: true
      },
    },{collection: 'Category'}
);

module.exports = Category;