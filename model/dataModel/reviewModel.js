const database = require("../index");
module.exports = (sequelize, Sequelize) => {
    const review = sequelize.define("reviews", {
        review:{
            type: Sequelize.STRING
        },
        rating:{
            type: Sequelize.STRING
        },
        productId: {
            type: Sequelize.STRING
        }
    })
    return review;
}