let Sequelize = require('sequelize');
let dbConfig = require('./config/database.js');

/*       Models       */
const State = require('./model/State.js'),
    Dealership = require('./model/Dealership.js'),
    Category = require('./model/Category.js'),
    ConsumerUnit = require('./model/ConsumerUnit.js'),
    Tribute = require('./model/Tribute.js'),
    CategoryDealership = require('./model/CategoryDealership'),
    Contract = require('./model/Contract'),
    User = require('./model/User.js'),
    Bill = require('./model/Bill.js'),
    Infrastructure = require('./model/Infrastructure');




const connection = new Sequelize(dbConfig);

State.init(connection);
Tribute.init(connection);
Dealership.init(connection);
User.init(connection);
ConsumerUnit.init(connection);
Category.init(connection);
Contract.init(connection);
CategoryDealership.init(connection);
Bill.init(connection);
Infrastructure.init(connection);

State.associate(connection.models);
Tribute.associate(connection.models);
Dealership.associate(connection.models);
User.associate(connection.models);
Category.associate(connection.models);
ConsumerUnit.associate(connection.models);
CategoryDealership.associate(connection.models);
Contract.associate(connection.models);
Bill.associate(connection.models);
Infrastructure.associate(connection.models);

module.exports = connection;
