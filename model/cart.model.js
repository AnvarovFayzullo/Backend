module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        finishedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    Cart.associate = (models) => {
        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer"
        })
        Cart.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status"
        })
        Cart.hasMany(models.CartItem, {
            foreignKey: "cart_id",
            as: "cartItem"
        })
        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "booking"
        })
    }
    return Cart
}