const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");

// หน้าแรก
router.get("/", homeController.getHomePage);

// หน้าตะกร้าสินค้า
router.get("/cart", homeController.getCartPage);

// หน้าเกี่ยวกับเรา
router.get("/about", homeController.getAboutPage);

module.exports = router;