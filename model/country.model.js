module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Country.associate = (models) => {
        Country.hasMany(models.CustomerAddres, {
            foreignKey: "customer_id",
            as: "customer_addres"
        })
    }

    return Country
}