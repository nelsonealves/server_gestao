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
    Infrastructure = require('./model/Infrastructure'),
    Analyze = require('./model/Analyze'),
    Scenario = require('./model/Scenario'),
    Conventional = require('./model/Conventional'),
    White = require('./model/White'),
    Green = require('./model/Green'),
    Blue = require('./model/Blue');




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
Analyze.init(connection);
Scenario.init(connection);
Conventional.init(connection);
White.init(connection);
Green.init(connection);
Blue.init(connection);



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
Analyze.associate(connection.models);
Scenario.associate(connection.models);
Analyze.hasMany(connection.models.Scenario, {as: 'Scenario', foreignKey: 'idScenario'});
Conventional.associate(connection.models);
White.associate(connection.models);
Green.associate(connection.models);
Blue.associate(connection.models);

module.exports = connection;
