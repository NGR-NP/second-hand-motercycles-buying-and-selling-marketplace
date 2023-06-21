const database = require("../index");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstName: {
            type: Sequelize.STRING,
        },
        lastName:{
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        },
        refreshToken: {  // jwt
            type: Sequelize.STRING,
        }
    })

    return User;
}