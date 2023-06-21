const router = require("express").Router();
const productController = require("./../controller/productController");
const multer = require("../servces/multer");

const authController = require('./../controller/authController')
const reviewController = require("./../controller/reviewController")

router.post("/create_products", 
    authController.isLoggedIn,
    authController.checkuser,
    authController.givePermissionTo("seller"), 
    productController.create_product
);

router.get("/show_products", productController.show_products);
router.get("/show_one_product/:id", productController.showone);

router.patch("/update_product/:id",
    authController.isLoggedIn,
    authController.checkuser,
    authController.givePermissionTo("seller"),
    productController.update_products);

router.delete("/delete_product/:id", authController.isLoggedIn, authController.checkuser, authController.givePermissionTo("seller"), productController.delete_products);
router.get("/:id/review", authController.isLoggedIn, authController.checkuser, reviewController.review_upload)

module.exports = router;