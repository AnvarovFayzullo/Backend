module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("CartItem", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart"
        })
        CartItem.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket"
        })
    }

    return CartItem
}