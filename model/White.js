const { Model, DataTypes } = require('sequelize');

class White extends Model {
  static init(sequelize) {
    super.init({

        tePonta: DataTypes.FLOAT,
        tusdPonta: DataTypes.FLOAT,
        teIntermed: DataTypes.FLOAT,
        tusdIntermed: DataTypes.FLOAT,
        teForaPonta: DataTypes.FLOAT,
        tusdForaPonta: DataTypes.FLOAT,
    }, {
      sequelize,
      tableName: 'White',
    });
  }

  static associate(models) {
    this.belongsTo(models.Tariff, {foreignKey: 'idTariff', targetKey: 'idTariff'});
    
  }
}

module.exports = White;

