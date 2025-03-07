const express = require("express");
const router = express.Router();


//////////--------------------- LOGIN ----------------------------///////////////////////////////////
const login = require("./components/Login/LoginController");

router.post("/send-otp", login.NormalLogin);
router.post("/verify-otp", login.OTP_verfication);
router.post("/google-login", login.GoogleOAuthLogin);



//////////--------------------- PRODUCT ----------------------------///////////////////////////////////

const product = require("./components/products/productController");

router.route("/product")
    .get(product.getAllProducts)
    .post(product.createProduct)
router.route("/product/:id")
    .get(product.getView)
    .put(product.UpdateProduct)
    .delete(product.getDelect)


//////////--------------------- Category ----------------------------///////////////////////////////////

const Category = require("./components/Catageroy/CategoryController");

router.route("/Category")
    .get(Category.getAllCategorys)
    .post(Category.createCategory)
router.route("/Category/:id")
    .get(Category.getView)
    .put(Category.UpdateCategory)
    .delete(Category.getDelect)


module.exports = router; 
