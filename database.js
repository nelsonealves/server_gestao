let Sequelize = require('sequelize');
let dbConfig = require('./config/database.js');

/*       Models       */
const State = require('./model/State.js'),
    Dealership = require('./model/Dealership.js'),
    Category = require('./model/Category.js'),
    ConsumerUnit = require('./model/ConsumerUnit.js'),
    Tribute = require('./model/Tribute.js'),
    Contract = require('./model/Contract'),
    User = require('./model/User.js'),
    Bill = require('./model/Bill.js'),
    Infrastructure = require('./model/Infrastructure'),
    Analyze = require('./model/Analyze'),
    Scenario = require('./model/Scenario'),
    Conventional = require('./model/Conventional'),
    White = require('./model/White'),
    Green = require('./model/Green'),
    Blue = require('./model/Blue'),
    Tariff = require('./model/Tariff'),
    // Period = require('./model/Period'),
    // Consum = require('./model/Consum'),
    // Demand = require('./model/Demand'),
    Diesel = require('./model/Diesel'),
    Substation = require('./model/Substation'),
    Auth = require('./model/Auth'),
    // Reactive = require('./model/Reactive'),
    StatusAuth = require('./model/StatusAuth'),
    Fatura = require('./model/Fatura'),
    SimpleReport = require('./model/SimpleReport'),
    Simulation = require('./model/Simulation');

const connection = new Sequelize(dbConfig);

State.init(connection);
Dealership.init(connection);
Tribute.init(connection);
StatusAuth.init(connection);
Auth.init(connection);
User.init(connection);
ConsumerUnit.init(connection);
Category.init(connection);
Contract.init(connection);
Bill.init(connection);
Tariff.init(connection);
Infrastructure.init(connection);
Analyze.init(connection);
Scenario.init(connection);
Conventional.init(connection);
White.init(connection);
Green.init(connection);
Blue.init(connection);
// Period.init(connection);
// Consum.init(connection);
// Demand.init(connection);
// Reactive.init(connection);
Diesel.init(connection);
Substation.init(connection);
Fatura.init(connection);
SimpleReport.init(connection);
Simulation.init(connection)

// Consum.removeAttribute('id')
// Demand.removeAttribute('id')
Simulation.removeAttribute('id')
Conventional.removeAttribute('id')
White.removeAttribute('id')
Green.removeAttribute('id')
Blue.removeAttribute('id')

StatusAuth.associate(connection.models);
Auth.associate(connection.models);
State.associate(connection.models);
Dealership.associate(connection.models);
Tribute.associate(connection.models);
User.associate(connection.models);
Category.associate(connection.models);
ConsumerUnit.associate(connection.models);
Contract.associate(connection.models);
Bill.associate(connection.models);
Tariff.associate(connection.models);
Infrastructure.associate(connection.models);
Analyze.associate(connection.models);
Scenario.associate(connection.models);
//Analyze.hasMany(connection.models.Scenario, {as: 'Scenario', foreignKey: 'idScenario'});
Conventional.associate(connection.models);
White.associate(connection.models);
Green.associate(connection.models);
Blue.associate(connection.models);
// Period.associate(connection.models);
// Consum.associate(connection.models);
// Demand.associate(connection.models);
// Reactive.associate(connection.models);
Substation.associate(connection.models);
Diesel.associate(connection.models);
Fatura.associate(connection.models);
SimpleReport.associate(connection.models);
Simulation.associate(connection.models);

module.exports = connection;
