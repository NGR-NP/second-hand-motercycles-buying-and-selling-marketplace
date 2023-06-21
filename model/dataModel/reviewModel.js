const database = require("../index");
module.exports = (sequelize, Sequelize) => {
    const review = sequelize.define("reviews", {
        id: {
            type: Sequelize.STRING
        },
        review:{
            type: Sequelize.STRING
        },
        rating:{
            type:Sequelize.STRING
        }
    })
    return review;
}