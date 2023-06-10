const express = require ("express")
const productscontroller = require("../controllers/productscontroller")
const router= express.Router()

router.get("/productadd", productscontroller.productsadd)
router.post("/productadd/crear", productscontroller.crear)
router.get("/detalle/:id", productscontroller.detalle)
router.get("/searchResults", productscontroller.searchresults)
router.get ("/edit.product", productscontroller.editproduct)

module.exports = router;
