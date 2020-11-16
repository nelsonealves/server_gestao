const { Model, DataTypes } = require('sequelize');

class Green extends Model {
  static init(sequelize) {
    super.init({
        
        tePonta: DataTypes.FLOAT,
        tusdPonta: DataTypes.FLOAT,
        demandaUnica: DataTypes.FLOAT,
        teForaPonta: DataTypes.FLOAT,
        tusdForaPonta: DataTypes.FLOAT,
        

    }, {
      sequelize,
      tableName: 'Green',
    });
  }

  static associate(models) {
    this.belongsTo(models.Tariff, {foreignKey: 'idTariff', targetKey: 'idTariff'});
  }
}

module.exports = Green;

