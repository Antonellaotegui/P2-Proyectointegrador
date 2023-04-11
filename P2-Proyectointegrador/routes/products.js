const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/productadd", productscontroller.productsadd)
router.get("/detalle/:id", productscontroller.detalle)
router.get ("/products", productscontroller.products)
router.get("/searchresults", productscontroller.searchresults)

module.exports = router;