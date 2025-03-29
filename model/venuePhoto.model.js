module.exports = (sequelize, DataTypes) => {
    const VenuePhoto = sequelize.define("VenuePhoto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venueid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    VenuePhoto.associate = (models) => {
        VenuePhoto.belongsTo(models.Venue, {
            foreignKey: "venueid",
            as: "venue"
        })
    }

    return VenuePhoto
}