const bcript = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Customer.beforeSave(async (cust, option) => {
        if (cust.changed("hashed_password")) {
            cust.hashed_password = await bcript.hash(cust.hashed_password, 10)
        }
    })

    Customer.associate = (models) => {
        Customer.hasMany(models.CustomerCard, {
            foreignKey: "customer_id",
            as: "customer_card"
        })
        Customer.hasMany(models.CustomerAddres, {
            foreignKey: "customer_id",
            as: "customer_addres"
        })
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "cart"
        })

        Customer.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "lang"
        })
    }

    return Customer
}