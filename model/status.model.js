module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define("Status", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Status.associate = (models) => {
        Status.belongsTo(models.Booking, {
            foreignKey: "status_id",
            as: "booking"
        })
        Status.belongsTo(models.Cart, {
            foreignKey: "status_id",
            as: "cart"
        })
        Status.belongsTo(models.Ticket, {
            foreignKey: "status_id",
            as: "ticket"
        })
    }

    return Status
}