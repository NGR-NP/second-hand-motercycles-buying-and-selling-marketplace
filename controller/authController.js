const database = require("./../model/index");
const jwt = require("jsonwebtoken");
require("dotenv").config({
    path: "./config.env"
})
const bcrypt = require('bcrypt');
const catchAsync = require("../utils/catchAsync");


// deconstruction
const user = database.users;

const statusFunc = (res, status, message) => {
    res.json({
        status,
        message: message
    })
}

const createCookies = (res, status, userSignin) => {
    const token = jwt_signin(userSignin.id);

    // cont 

    res.cookie('jwt', token, {
        maxAge: new Date(
            Date.now() + process.env.BROWSER_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: false
    });
    statusFunc(res, 200, token);
}

const jwt_signin = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.COOKIE_EXPIRES_IN
    })
}


// SIGNUP
exports.signup = async (req, res) => {
    const checkAlreadyLogin = await user.findOne({
        where: {
            email: req.body.email
        }
    })

    if (checkAlreadyLogin) {
        return statusFunc(res, 404, "user already signup with that email"); // checks if the user already logged in
    }
    const createUserAccount = await user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 12),
        role: req.body.role ? "admin" : "user",
        refreshToken: false
    })
    createCookies(res, 201, createUserAccount);
}


// LOGIN
exports.login = async (req, res) => {
    const userSignin = await user.findOne({
        where: {
            email: req.body.email
        }
    })

    if (userSignin === null) {
        statusFunc(res, 404, "user not found! PEASE CREATE AN ACCOUNT");
    }

    if (await bcrypt.compare(req.body.password, userSignin.password)) {
        // userSignin.refreshToken = jwt.sign(userSignin, );
        createCookies(res, 200, userSignin);
    }
}


// FORGET PASSWORD
exports.forgetPassword = async (req, res, next) => {
    const findingUser = await user.findOne({
        email: req.body.email
    })

    if (!findingUser) {
        statusFunc(res, 404, "can't find user! please check your email once");
    }
    let id = findingUser.id;

    const token = jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.FORGET_PASSWORD_EXPIRES_AT
    })
    statusFunc(res, 200, token);
}


// RESET PASSWORD   
exports.resetPassword = async (req, res, next) => {
    try { // error handeling
        console.log(req.params.token)
        const forgetPSWuserId = jwt.verify(req.params.token, process.env.JWT_SECRET).id;
        const resetUser = await user.findOne({
            id: forgetPSWuserId
        });
        resetUser.password = await bcrypt.hash(req.body.password, 12);
        resetUser.save();
        statusFunc(res, 200, "password updated successfully");

    } catch (err) {
        statusFunc(res, 200, `error: ${err.message}`);
    }
}


// update password
exports.updatePassword = catchAsync(async (req, res, next) => {
    const passportUpdateUser = await user.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!(await bcrypt.compare(req.body.password, passportUpdateUser.password))) {
        return statusFunc(res, 200, "password doesnot matched");
    }
    passportUpdateUser.password = await bcrypt.hash(req.body.passwordChange, 12);
    passportUpdateUser.save();
    statusFunc(res, 200, "password chagned successfully");
})


// check user is logged in or not
exports.isLoggedIn = catchAsync(async (req, res, next) => {
    if(!req.body.cookie){
        return statusFunc(res, 404, "please login")
    }
    const jwtDecode = jwt.verify(req.body.cookie, process.env.JWT_SECRET);
    if (jwtDecode.iat > jwtDecode.exp) {
        return statusFunc(res, 200, "expired cookie");
    }
    const findUser = await user.findOne({
        where: {
            id: jwtDecode.id
        },
        attributes: {
            exclude: ["password", "refreshToken"]
        }
    });
    console.log(findUser)
    res.locals.userData = findUser;
    next();
})

exports.checkuser = catchAsync(async (req, res, next) => {
    // console.log(res.locals.userData)
    // statusFunc(res, 200, "found");
    next();
})

exports.givePermissionTo = (...roles) => {
    console.log(roles);
    return (req, res, next) => {
        console.log(res.locals.userData.role)
        if(!roles.includes(res.locals.userData.role)){
            return statusFunc(res, 200, "you doesnot have permission to perform this action");
        }
        return next();
    }
}
