const { Model, DataTypes } = require('sequelize');

class Analyze extends Model {
    static init(sequelize) {
        super.init({
            idAnalyzes: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },

        }, {
            sequelize,
            tableName: 'Analyzes',
        });
    }

    static associate(models) {
        this.belongsTo(models.Contract, { foreignKey: 'idContract' });
        this.hasMany(models.Scenario, {as: 'scenarios', foreignKey: 'idAnalyzes' });
        this.belongsTo(models.Scenario, { foreignKey: 'idScenario' });
    }
}

module.exports = Analyze;