const Sequelize = require("sequelize");
const sequelize = require("../config/DataBase")

const Cart = require("./cart.model")(sequelize, Sequelize);
const CartItem = require("./cartItem.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const TicketStatus = require("./ticketStatus.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const SeatType = require("./seatType.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);
const Delivery = require("./delivery.model")(sequelize, Sequelize);
const EventType = require("./eventType.model")(sequelize, Sequelize);
const HumanCategory = require("./humanCategory.model")(sequelize, Sequelize);
const Lang = require("./lang.model")(sequelize, Sequelize);
const VenuePhoto = require("./venuePhoto.model")(sequelize, Sequelize);
const VenueType = require("./venueType.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const CustomerCard = require("./customerCard.model")(sequelize, Sequelize);
const CustomerAddres = require("./customerAddres.model")(sequelize, Sequelize);
const Admin = require("./admin.model")(sequelize, Sequelize);
const VenueVenueType = require("./venue_venueType.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);

const models = {
    Booking, Lang, Region, HumanCategory, Payment, EventType, Delivery,
    TicketStatus, Customer, Event, Venue, District, VenuePhoto, CustomerAddres,
    CustomerCard, Admin, SeatType, Cart, CartItem, Seat, Discount, VenueType, Ticket, Gender, Sector, Status, Country, VenueVenueType
};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(sequelize.models);
    }
});

module.exports = {
    sequelize,
    Cart,
    CartItem,
    Ticket,
    Event,
    TicketStatus,
    Seat,
    SeatType,
    Booking,
    Payment,
    Delivery,
    EventType,
    HumanCategory,
    Lang,
    VenuePhoto,
    VenueType,
    Region,
    District,
    Venue,
    Customer,
    CustomerCard,
    CustomerAddres,
    Admin,
    VenueVenueType,
    Country,
    Discount,
    Gender,
    Sector,
    Status
}