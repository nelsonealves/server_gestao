const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class Auth extends Model {
    static init(sequelize) {
        super.init({
            idAuth: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'Auth',
        });
    }

    static associate(models) {
        this.hasMany(models.User, {foreignKey: 'idAuth'});
    }
}

module.exports = Auth;