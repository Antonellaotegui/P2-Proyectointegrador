const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/products/productadd", productscontroller.productsadd)
router.get("/products/detalle", productscontroller.detalle)
router.get ("/products", productscontroller.products)

module.exports = router;