const { Model, DataTypes } = require('sequelize');

class Scenario extends Model {
    static init(sequelize) {
        super.init({
            idScenario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              investiment: DataTypes.FLOAT,
              valueTotal: DataTypes.FLOAT,
              payback: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'Scenario',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyze, { foreignKey: 'idAnalyzes' });
        this.belongsTo(models.Tariff, { foreignKey: 'idTariff' });
        this.hasMany(models.Consum, { foreignKey: 'idScenario' });
        this.hasMany(models.Demand, { foreignKey: 'idScenario' });
    }
}

module.exports = Scenario;