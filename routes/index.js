const exp = require("constants")
const express = require("express")
const router = express.Router()
const userRouter = require("./user")
const homeController = require("../controller/homeController")



router.get("/", homeController.showHome);
router.get("/register", homeController.register);
router.get("/login", homeController.login);
router.get("/logout", homeController.showHome);

router.use("/user",userRouter)


module.exports = router;