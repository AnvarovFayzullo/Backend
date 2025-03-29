module.exports = (sequelize, DataTypes) => {
    const CustomerAddres = sequelize.define("CustomerAddres", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_index: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    CustomerAddres.associate = (models) => {
        CustomerAddres.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer"
        })
        CustomerAddres.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "country"
        })
        CustomerAddres.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region"
        })
        CustomerAddres.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district"
        })
    }

    return CustomerAddres
}