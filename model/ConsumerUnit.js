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
      
    }, {
      sequelize,
      tableName: 'ConsumerUnit',
    });
  }

  static associate (models) {
    this.belongsTo(models.User, {foreignKey: 'idUser'});
    this.hasOne(models.Infrastructure, {as: 'Infrastructure', foreignKey: 'idConsumerUnit'});
    //this.hasMany(models.User, {foreignKey: 'idDealership'});
  }
}

module.exports = ConsumerUnit;