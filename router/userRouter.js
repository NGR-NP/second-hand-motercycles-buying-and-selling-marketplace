const express = require("express");
const router = express.Router();
const userController = require("../controller/authController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post('/forgetPassword', userController.forgetPassword);
router.post("/resetPassword/:token", userController.resetPassword);
router.patch("/update_password/:id", userController.updatePassword);


module.exports = router;