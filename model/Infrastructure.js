const { Model, DataTypes } = require('sequelize');

class Infrastructure extends Model {
  static init(sequelize) {
    super.init({
        idInfrastructure: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        capDisju: DataTypes.INTEGER,
        phases: DataTypes.INTEGER,
        capTransf: DataTypes.INTEGER,
        voltage: DataTypes.INTEGER
    }, {
      sequelize,
      tableName: 'Infrastructure',
      modelName: 'Infrastructure',
      freezeTableName: true
    });
  }

  static associate(models) {
    
    this.belongsTo(models.ConsumerUnit, {foreignKey: 'idConsumerUnit'});
    
  }
}

module.exports = Infrastructure;
