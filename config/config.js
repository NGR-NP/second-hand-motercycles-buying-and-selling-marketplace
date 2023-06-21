module.exports = {
    HOST: "localhost",
    USER:"root",
    PASS:"",
    POST: 3360,

    // database identification
    db: "second_hand",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        accurate: 30000,
        idle: 10000
    }
}