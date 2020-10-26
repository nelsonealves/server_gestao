const { Model, DataTypes } = require('sequelize');

class DemandContracted extends Model {
  static init(sequelize) {
    super.init({
      measured: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'DemandContracted',
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {foreignKey: 'idScenario', targetKey: 'idScenario'});
    this.belongsTo(models.Period, {foreignKey: 'idPeriod', targetKey: 'idPeriod'});
  }
}

module.exports = DemandContracted;