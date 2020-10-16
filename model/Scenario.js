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
        this.belongsTo(models.CategoryDealership, { foreignKey: 'idCategory' });
        this.belongsTo(models.CategoryDealership, { foreignKey: 'idDealership' });
    }
}

module.exports = Scenario;