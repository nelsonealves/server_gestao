const { Model, DataTypes } = require('sequelize');

class Diesel extends Model {
    static init(sequelize) {
        super.init({
            idDiesel: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              potGer: DataTypes.FLOAT,
              consGer: DataTypes.FLOAT,
              timeUtilization: DataTypes.FLOAT,
              priceOeM: DataTypes.FLOAT,
              priceDiesel: DataTypes.FLOAT,
              priceImplement: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'Diesel',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyze, { foreignKey: 'idAnalyzes' });
    }
}

module.exports = Diesel;