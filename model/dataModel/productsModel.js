const database = require("../index");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        name: {
            type: Sequelize.STRING,
        },
        brand: {
            type: Sequelize.STRING,
        },
        years: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        modal:{
            type: Sequelize.STRING
        },
        images:{
            type: Sequelize.STRING
        },
        // shortDecription:{
        //     type: Sequelize.STRING
        // }

    })

    return Product;
}