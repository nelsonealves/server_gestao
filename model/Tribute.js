const { Model, DataTypes } = require('sequelize');

class Tribute extends Model {
  static init(sequelize) {
    super.init({
      idTributes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cofins: DataTypes.FLOAT,
      pis: DataTypes.FLOAT,
      date: DataTypes.DATE
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Dealership, { foreignKey: 'idDealership'});
  }
}

module.exports = Tribute;
