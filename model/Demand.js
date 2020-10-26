const { Model, DataTypes } = require('sequelize');

class Demand extends Model {
  static init(sequelize) {
    super.init({
      measured: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'Demand',
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {foreignKey: 'idScenario', targetKey: 'idScenario'});
    this.belongsTo(models.Period, {foreignKey: 'idPeriod', targetKey: 'idPeriod'});
  }
}

module.exports = Demand;