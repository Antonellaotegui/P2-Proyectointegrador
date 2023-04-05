const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()



router.get ("/products", userscontrollers.products)
module.exports = router;