const DBconfig = require("./../config/config");

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(DBconfig.db, DBconfig.USER, DBconfig.PASS,{
    host: DBconfig.HOST,
    dialect: DBconfig.dialect,
    operatirAlias: false,
    loggin: false,
    pool:{
        max: DBconfig.max,
        min: DBconfig.min,
        accurate: DBconfig.accurate,
        idle: DBconfig.idle
    }
})

sequelize.authenticate().then(() => {
    console.log("connected to database")
}).catch(err => {
    console.log("error" + err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./dataModel/userModel")(sequelize, DataTypes);
db.products = require("./dataModel/productsModel")(sequelize, DataTypes);
db.reviews = require("./dataModel/reviewModel")(sequelize, DataTypes);

// relation
db.users.hasMany(db.reviews);
db.reviews.belongsTo(db.user)

db.sequelize.sync({
    force: false
}).then(() => {
    console.log("yes! sync done");
})


module.exports = db;   