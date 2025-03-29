module.exports = (sequelize, DataTypes) => {
    const TicketStatus = sequelize.define("TicketStatus", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    TicketStatus.associate = (models) => {
        TicketStatus.hasMany(models.Ticket, {
            foreignKey: "status_id",
            as: "ticket"
        })
    }

    return TicketStatus
}