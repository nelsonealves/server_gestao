const { Model, DataTypes } = require('sequelize');

class Green extends Model {
  static init(sequelize) {
    super.init({
        idGreen: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        tePonta: DataTypes.FLOAT,
        tusdPonta: DataTypes.FLOAT,
        demandaUnica: DataTypes.FLOAT,
        teForaPonta: DataTypes.FLOAT,
        tusdForaPonta: DataTypes.FLOAT,
        date: DataTypes.DATE,

    }, {
      sequelize,
      tableName: 'Green',
    });
  }

  static associate(models) {
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idCategory'});
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idDealership'});
  }
}

module.exports = Green;

