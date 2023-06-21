const express = require("express");
const router = express.Router();
const userController = require("../controller/authController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post('/forgetPassword', userController.forgetPassword);
router.post("/resetPassword/:token", userController.resetPassword);
router.patch("/update_password/:id", userController.updatePassword);
router.post("/check_is_loggedin", 
    userController.isLoggedIn, userController.checkuser, userController.givePermissionTo("admin"), userController.sayTest
);

module.exports = router;