const { Model, DataTypes } = require('sequelize');

class White extends Model {
  static init(sequelize) {
    super.init({
        idWhite: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        tePonta: DataTypes.FLOAT,
        tusdPonta: DataTypes.FLOAT,
        teIntermed: DataTypes.FLOAT,
        tusdIntermed: DataTypes.FLOAT,
        teForaPonta: DataTypes.FLOAT,
        tusdForaPonta: DataTypes.FLOAT,
        date: DataTypes.DATE,

    }, {
      sequelize,
      tableName: 'White',
    });
  }

  static associate(models) {
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idCategory'});
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idDealership'});
  }
}

module.exports = White;

