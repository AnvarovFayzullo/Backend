module.exports = (sequelize, DataTypes) => {
    const VenueVenueType = sequelize.define("VenueVenueType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venuetypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

    VenueVenueType.associate = (models) => {
        VenueVenueType.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue"
        })
        VenueVenueType.belongsTo(models.VenueType, {
            foreignKey: "venuetypeId",
            as: "venue_type"
        })
    }


    return VenueVenueType
}