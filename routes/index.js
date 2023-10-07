const exp = require("constants")
const express = require("express")
const router = express.Router()
const homeController = require("../controller/homeController")



router.get("/", homeController.showHome);
router.get("/register", homeController.register);
router.get("/login", homeController.login);


module.exports = router;