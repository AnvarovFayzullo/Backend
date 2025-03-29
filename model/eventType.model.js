module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_event_type_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })


    EventType.associate = (models) => {
        EventType.hasMany(models.Event, {
            foreignKey: "event_type_id",
            as: "event"
        })
    }

    return EventType
}