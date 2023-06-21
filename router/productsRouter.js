const router = require("express").Router();
const productController = require("./../controller/productController");
const multer = require("../servces/multer");
const authController = require('./../controller/authController')

router.post("/create_products", productController.create_product)
router.get("/show_products", productController.show_products);
router.get("/show_one_product/:id", productController.showone);

router.patch("/update_product/:id", authController.isLoggedIn, 
    authController.checkuser, 
    authController.givePermissionTo("seller"),
    productController.update_products );

router.delete("/delete_product/:id", authController.isLoggedIn, authController.checkuser, authController.givePermissionTo("seller"), productController.delete_products);

module.exports = router;