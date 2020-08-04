const { Model, DataTypes } = require('sequelize');

class Tribute extends Model {
  static init(sequelize) {
    super.init({
      idTributes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      icms1: DataTypes.FLOAT,
      icms2: DataTypes.FLOAT,
      pis: DataTypes.FLOAT,
      date: DataTypes.DATE
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.State, { foreignKey: 'uf', as: 'state' });
  }
}

module.exports = Tribute;
