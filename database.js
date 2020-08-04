let Sequelize = require('sequelize');
let dbConfig = require('./config/database.js');

/*       Models       */
const State = require('./model/State.js');
const Tribute = require('./model/Tribute.js');
const Dealership = require('./model/Dealership.js');
const User = require('./model/User.js');
const Category = require('./model/Category.js');
const CategoryUser = require('./model/CategoryUser.js');

const connection = new Sequelize(dbConfig);

console.log('teste');
State.init(connection);
Tribute.init(connection);
Dealership.init(connection);
User.init(connection);
Category.init(connection);
CategoryUser.init(connection);



Tribute.associate(connection.models);
State.associate(connection.models);
Dealership.associate(connection.models);
User.associate(connection.models);
Category.associate(connection.models);

module.exports = connection;
