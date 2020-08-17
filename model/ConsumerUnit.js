const { Model, DataTypes } = require('sequelize');

class ConsumerUnit extends Model {
  static init(sequelize) {
    super.init({
      idConsumerUnit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      status: DataTypes.INTEGER,
      identification: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'ConsumerUnit',
    });
  }

  static associate (models) {
    this.belongsTo(models.User, {foreignKey: 'idUser'});
    this.belongsTo(models.Dealership, {foreignKey: 'idDealership'});
    //this.hasMany(models.User, {foreignKey: 'idDealership'});
  }
}

module.exports = ConsumerUnit;