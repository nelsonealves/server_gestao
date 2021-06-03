const { Model, DataTypes } = require('sequelize');

class Scenario extends Model {
    static init(sequelize) {
        super.init({
            idScenario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              valueTotal: DataTypes.FLOAT,
              diesel: DataTypes.BOOLEAN,
              substation: DataTypes.BOOLEAN,
              optimization: DataTypes.BOOLEAN,
              reactive: DataTypes.BOOLEAN
        }, {
            sequelize,
            tableName: 'Scenario',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyze, { foreignKey: 'idAnalyzes' });
        this.belongsTo(models.Tariff, { foreignKey: 'idTariff' });
        this.hasOne(models.Simulation, { foreignKey: 'idScenario' });
        // this.hasMany(models.Consum, { foreignKey: 'idScenario' });
        // this.hasMany(models.Demand, { foreignKey: 'idScenario' });
        // this.hasMany(models.Reactive, { foreignKey: 'idScenario' });
    }
}

module.exports = Scenario;