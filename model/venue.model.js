module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        regionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        districkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    Venue.associate = (models) => {
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "event"
        })
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seat"
        })
        Venue.hasMany(models.VenuePhoto, {
            foreignKey: "venueid",
            as: "venue_photo"
        })
        Venue.hasMany(models.VenueVenueType, {
            foreignKey: "venueId",
            as: "venue"
        })
        Venue.belongsTo(models.Region, {
            foreignKey: "regionId",
            as: "region"
        })
        Venue.belongsTo(models.District, {
            foreignKey: "districkId",
            as: "district"
        })
    }


    return Venue
}