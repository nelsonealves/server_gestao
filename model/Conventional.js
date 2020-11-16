const { Model, DataTypes } = require('sequelize');

class Conventional extends Model {
  static init(sequelize) {
    super.init({
        te: DataTypes.FLOAT,
        tusd: DataTypes.FLOAT,
    }, {
      freezeTableName: true,
      sequelize,
      tableName: 'Conventional',
    });
  }

  static associate(models) {
    this.belongsTo(models.Tariff, {foreignKey: 'idTariff', targetKey: 'idTariff'});
  }
}

module.exports = Conventional;