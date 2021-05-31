const { Model, DataTypes } = require('sequelize');

class SimpleReport extends Model {
    static init(sequelize) {
        super.init({
            idSimpleReport: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            reportText: DataTypes.STRING,
            actions: DataTypes.JSON,
        }, {
            sequelize,
            tableName: 'SimpleReport',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyze, { foreignKey: 'idAnalyzes' });
    }
}

module.exports = SimpleReport;