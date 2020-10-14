const { Model, DataTypes } = require('sequelize');

class Scenario extends Model {
    static init(sequelize) {
        super.init({
           
            
        }, {
            sequelize,
            tableName: 'Scenario',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyzes, { foreignKey: 'idContract' });
        this.belongsTo(models.CategoryDealership, { foreignKey: 'idCategory' });
        this.belongsTo(models.CategoryDealership, { foreignKey: 'idDealership' });
    }
}

module.exports = Analyze;