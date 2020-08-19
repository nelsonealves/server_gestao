let Sequelize = require('sequelize');
let dbConfig = require('./config/database.js');

/*       Models       */
const State = require('./model/State.js');
const Dealership = require('./model/Dealership.js');
const Category = require('./model/Category.js');
const ConsumerUnit = require('./model/ConsumerUnit.js');
const Tribute = require('./model/Tribute.js');
const CategoryDealership = require('./model/CategoryDealership')

const User = require('./model/User.js');



const connection = new Sequelize(dbConfig);

State.init(connection);
Tribute.init(connection);
Dealership.init(connection);
User.init(connection);
ConsumerUnit.init(connection);
Category.init(connection);

State.associate(connection.models);
Tribute.associate(connection.models);
Dealership.associate(connection.models);
User.associate(connection.models);
Category.associate(connection.models);
ConsumerUnit.associate(connection.models);


module.exports = connection;
