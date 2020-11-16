const { Model, DataTypes } = require('sequelize');

class Demand extends Model {
  static init(sequelize) {
    super.init({
      idDemand: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      measured: DataTypes.JSON,
      contracted: DataTypes.JSON,
      optimized: DataTypes.JSON,
      valueTotal: DataTypes.FLOAT,
      //datasets: DataTypes.JSON,
      status: DataTypes.INTEGER
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