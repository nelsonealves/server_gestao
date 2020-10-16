const { Model, DataTypes } = require('sequelize');

class Blue extends Model {
  static init(sequelize) {
    super.init({
        idBlue: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        tePonta: DataTypes.FLOAT,
        tusdPonta: DataTypes.FLOAT,
        demandaPonta: DataTypes.FLOAT,
        demandaForaPonta: DataTypes.FLOAT,
        tusdForaPonta: DataTypes.FLOAT,
        teForaPonta: DataTypes.FLOAT,
        date: DataTypes.DATE,

    }, {
      sequelize,
      tableName: 'Blue',
    });
  }

  static associate(models) {
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idCategory'});
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idDealership'});
  }
}

module.exports = Blue;

