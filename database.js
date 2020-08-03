let Sequelize = require('sequelize');
let dbConfig = require('./config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;
