const bcript = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Admin.beforeSave(async (admin, option) => {
        if (admin.changed("hashed_password")) {
            admin.hashed_password = await bcript.hash(admin.hashed_password, 10)
        }
    })

    return Admin
}