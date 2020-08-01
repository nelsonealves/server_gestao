'use strict';

let mongoose = require('../database');

let Category_User = new mongoose.Schema ({
    start_date: Date,
    id_User: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    id_Category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
    }
    },{collection: 'Category_User'}
);

module.exports = Category_User;