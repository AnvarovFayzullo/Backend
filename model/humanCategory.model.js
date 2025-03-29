module.exports = (sequelize, DataTypes) => {
    const HumanCategory = sequelize.define("HumanCategory", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stage_age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        finish_age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

    HumanCategory.associate = (models) => {
        HumanCategory.hasMany(models.Event, {
            foreignKey: "human_category_id",
            as: "event"
        })
        HumanCategory.belongsTo(models.Gender, {
            foreignKey: "gender",
            as: "humanGender"
        })
    }

    return HumanCategory
}